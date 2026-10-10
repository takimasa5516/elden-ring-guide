import React, { useState, useMemo } from 'react';
import {
  CharacterStats,
  StatKey,
  STAT_METAS,
  STAT_KEYS,
  calculateLevelFromStats,
  getRuneCostForNextLevel,
  getTotalRunesBetweenLevels,
  calculateMaxLevelWithRunes,
  calculateFarmingEstimates,
  calculateStatDiff,
} from '../utils/runeCalculator';
import { classesList } from '../data/classesData';
import { buildsList } from '../data/buildsData';
import {
  Calculator,
  Sparkles,
  Zap,
  ArrowRight,
  RotateCcw,
  TrendingUp,
  Clock,
  Coins,
  Shield,
  ChevronDown,
  ChevronUp,
  Info,
  Sliders,
  Copy,
  Check,
  Award,
} from 'lucide-react';

export const RuneCalculatorSection: React.FC = () => {
  // モード切替: 'stats' (ステ振りから計算), 'levels' (レベルから直接計算), 'reverse' (手持ちルーンから逆算)
  const [calcMode, setCalcMode] = useState<'stats' | 'levels' | 'reverse'>('stats');

  // 選択素性
  const [selectedClassId, setSelectedClassId] = useState<string>('vagabond');
  const selectedClass = useMemo(
    () => classesList.find((c) => c.id === selectedClassId) || classesList[0],
    [selectedClassId]
  );

  // 現在ステータス
  const [currentStats, setCurrentStats] = useState<CharacterStats>({
    ...selectedClass.stats,
  });

  // 目標ステータス
  const [targetStats, setTargetStats] = useState<CharacterStats>({
    vigor: 40,
    mind: 15,
    endurance: 25,
    strength: 40,
    dexterity: 15,
    intelligence: 9,
    faith: 9,
    arcane: 7,
  });

  // レベル直接指定モード用ステート
  const [directCurrentLevel, setDirectCurrentLevel] = useState<number>(9);
  const [directTargetLevel, setDirectTargetLevel] = useState<number>(100);

  // 手持ちルーン逆算モード用ステート
  const [currentHoldRunes, setCurrentHoldRunes] = useState<number>(100000);
  const [reverseBaseLevel, setReverseBaseLevel] = useState<number>(20);

  // バフ設定（稼ぎ計算用）
  const [hasScarab, setHasScarab] = useState<boolean>(true); // 金のスカラベ
  const [hasFowlFoot, setHasFowlFoot] = useState<boolean>(false); // 鳥脚の黄金漬け

  // アコーディオン開閉状態
  const [showCapsGuide, setShowCapsGuide] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // 素性を変更した時の処理
  const handleSelectClass = (classId: string) => {
    setSelectedClassId(classId);
    const cls = classesList.find((c) => c.id === classId);
    if (cls) {
      setCurrentStats({ ...cls.stats });
      // 目標ステータスが新しい素性の初期値を下回らないように調整
      setTargetStats((prev) => {
        const next = { ...prev };
        for (const key of STAT_KEYS) {
          if (next[key] < cls.stats[key]) {
            next[key] = cls.stats[key];
          }
        }
        return next;
      });
      setDirectCurrentLevel(cls.level);
    }
  };

  // ステータス増減ハンドラ（現在ステータス）
  const adjustCurrentStat = (key: StatKey, delta: number) => {
    const minVal = selectedClass.stats[key];
    setCurrentStats((prev) => {
      const newVal = Math.max(minVal, Math.min(99, prev[key] + delta));
      // 現在値が目標値を上回った場合、目標値も同値まで引き上げる
      if (newVal > targetStats[key]) {
        setTargetStats((tPrev) => ({ ...tPrev, [key]: newVal }));
      }
      return { ...prev, [key]: newVal };
    });
  };

  // ステータス増減ハンドラ（目標ステータス）
  const adjustTargetStat = (key: StatKey, delta: number) => {
    const minVal = currentStats[key];
    setTargetStats((prev) => ({
      ...prev,
      [key]: Math.max(minVal, Math.min(99, prev[key] + delta)),
    }));
  };

  // 現在値を素性初期値にリセット
  const resetToClassDefaults = () => {
    setCurrentStats({ ...selectedClass.stats });
  };

  // ビルドプリセットから目標ステータスを読み込む
  const applyBuildPreset = (buildId: string, levelKey: 'level50' | 'level100' | 'level150') => {
    const build = buildsList.find((b) => b.id === buildId);
    if (!build) return;
    const target = build.statsTarget[levelKey];
    setTargetStats({
      vigor: Math.max(selectedClass.stats.vigor, target.vigor),
      mind: Math.max(selectedClass.stats.mind, target.mind),
      endurance: Math.max(selectedClass.stats.endurance, target.endurance),
      strength: Math.max(selectedClass.stats.strength, target.strength),
      dexterity: Math.max(selectedClass.stats.dexterity, target.dexterity),
      intelligence: Math.max(selectedClass.stats.intelligence, target.int),
      faith: Math.max(selectedClass.stats.faith, target.faith),
      arcane: Math.max(selectedClass.stats.arcane, target.arcane),
    });
  };

  // 目標レベルプリセット（現在のステータス配分を維持しながら指定レベルまで均等配分）
  const setQuickTargetLevel = (lvl: number) => {
    if (calcMode === 'levels') {
      setDirectTargetLevel(Math.max(directCurrentLevel, lvl));
      return;
    }
    const curLevel = calculateLevelFromStats(currentStats);
    if (lvl <= curLevel) return;

    // 不足レベル分を生命力、主攻撃ステータス、持久力に重点配分
    let pointsToAdd = lvl - curLevel;
    const nextTarget = { ...targetStats };

    // 生命力がまだ40未満なら最優先
    if (nextTarget.vigor < 40 && pointsToAdd > 0) {
      const add = Math.min(40 - nextTarget.vigor, pointsToAdd);
      nextTarget.vigor += add;
      pointsToAdd -= add;
    }
    // 持久力が20未満なら
    if (nextTarget.endurance < 20 && pointsToAdd > 0) {
      const add = Math.min(20 - nextTarget.endurance, pointsToAdd);
      nextTarget.endurance += add;
      pointsToAdd -= add;
    }
    // 生命力を50または60へ
    if (nextTarget.vigor < 50 && pointsToAdd > 0) {
      const add = Math.min(50 - nextTarget.vigor, pointsToAdd);
      nextTarget.vigor += add;
      pointsToAdd -= add;
    }
    // 残りは最も高いステータスに配分
    if (pointsToAdd > 0) {
      const maxKey = (['strength', 'dexterity', 'intelligence', 'faith', 'arcane'] as StatKey[]).reduce(
        (prev, curr) => (nextTarget[curr] > nextTarget[prev] ? curr : prev),
        'strength'
      );
      nextTarget[maxKey] = Math.min(80, nextTarget[maxKey] + pointsToAdd);
    }
    setTargetStats(nextTarget);
  };

  // レベル計算
  const currentLevel = useMemo(() => {
    return calcMode === 'levels' ? directCurrentLevel : calculateLevelFromStats(currentStats);
  }, [calcMode, directCurrentLevel, currentStats]);

  const targetLevel = useMemo(() => {
    return calcMode === 'levels' ? directTargetLevel : calculateLevelFromStats(targetStats);
  }, [calcMode, directTargetLevel, targetStats]);

  const levelsGained = Math.max(0, targetLevel - currentLevel);

  // 総必要ルーン数
  const totalRunesNeeded = useMemo(() => {
    return getTotalRunesBetweenLevels(currentLevel, targetLevel);
  }, [currentLevel, targetLevel]);

  // 次の1レベルに必要なルーン
  const nextLevelCost = useMemo(() => {
    return getRuneCostForNextLevel(currentLevel);
  }, [currentLevel]);

  // ステータス差分
  const statDiff = useMemo(() => {
    return calculateStatDiff(currentStats, targetStats);
  }, [currentStats, targetStats]);

  // ルーン稼ぎ換算
  const farmingEstimates = useMemo(() => {
    return calculateFarmingEstimates(totalRunesNeeded, {
      hasScarab,
      hasFowlFoot,
    });
  }, [totalRunesNeeded, hasScarab, hasFowlFoot]);

  // 逆算シミュレーション結果
  const reverseResult = useMemo(() => {
    return calculateMaxLevelWithRunes(reverseBaseLevel, currentHoldRunes);
  }, [reverseBaseLevel, currentHoldRunes]);

  // クリップボードへコピー
  const handleCopySummary = () => {
    const text = `【エルデンリング育成計画】
素性: ${selectedClass.name}
レベル: Lv${currentLevel} ➔ Lv${targetLevel} (+${levelsGained} Lv)
総必要ルーン: ${totalRunesNeeded.toLocaleString()} ルーン
[ステータス目標]
生命力: ${targetStats.vigor} (+${statDiff.vigor})
精神力: ${targetStats.mind} (+${statDiff.mind})
持久力: ${targetStats.endurance} (+${statDiff.endurance})
筋力: ${targetStats.strength} (+${statDiff.strength})
技量: ${targetStats.dexterity} (+${statDiff.dexterity})
知力: ${targetStats.intelligence} (+${statDiff.intelligence})
信仰: ${targetStats.faith} (+${statDiff.faith})
神秘: ${targetStats.arcane} (+${statDiff.arcane})
巨鳥落とし換算: 約${farmingEstimates[0].runsNeeded}回 (${farmingEstimates[0].estimatedTimeText})`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-elden-panel to-elden-panel border border-elden-gold/40 rounded-2xl p-4 sm:p-6 relative overflow-hidden shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5">
            <div className="p-3 rounded-xl bg-elden-gold/20 border border-elden-gold/50 text-elden-gold shrink-0">
              <Calculator className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-elden-gold/20 text-elden-gold text-[11px] font-bold tracking-wider mb-1 border border-elden-gold/40">
                <Sparkles className="w-3 h-3" />
                <span>ビルド育成・経験値シミュレーター</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
                必要ルーン（経験値）計算機
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
                素性・現在ステータスと目標値から、<strong>レベルアップ総必要ルーン</strong>や<strong>各稼ぎ場の周回数・所要時間</strong>を即座に自動算出します。
              </p>
            </div>
          </div>

          <button
            onClick={handleCopySummary}
            className="self-start sm:self-center flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 hover:bg-black/90 text-elden-gold hover:text-white border border-elden-gold/40 transition-all text-xs font-bold shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">コピー完了！</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>計画をコピー</span>
              </>
            )}
          </button>
        </div>

        {/* 3つの計算モード切り替えタブ */}
        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-2">
          <button
            onClick={() => setCalcMode('stats')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              calcMode === 'stats'
                ? 'bg-elden-gold text-black shadow-md'
                : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 border border-white/5'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>ステータス詳細から計算</span>
          </button>
          <button
            onClick={() => setCalcMode('levels')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              calcMode === 'levels'
                ? 'bg-elden-gold text-black shadow-md'
                : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 border border-white/5'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>レベルからクイック計算</span>
          </button>
          <button
            onClick={() => setCalcMode('reverse')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              calcMode === 'reverse'
                ? 'bg-elden-gold text-black shadow-md'
                : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 border border-white/5'
            }`}
          >
            <Coins className="w-4 h-4" />
            <span>手持ちルーンから逆算</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          計算結果サマリーカード（全モード共通・画面上部で常に確認可能）
         ========================================================================= */}
      {calcMode !== 'reverse' ? (
        <div className="bg-gradient-to-br from-black/80 via-elden-panel to-black/80 border-2 border-elden-gold/50 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-elden-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* レベル推移 */}
            <div className="bg-black/50 p-4 rounded-xl border border-white/10 flex items-center justify-between sm:justify-start sm:gap-6">
              <div>
                <span className="text-[11px] text-gray-400 block font-serif">現在のレベル</span>
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  Lv <span className="text-elden-gold">{currentLevel}</span>
                </span>
              </div>
              <div className="flex flex-col items-center px-2">
                <ArrowRight className="w-6 h-6 text-elden-gold animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full mt-1 border border-emerald-500/30">
                  +{levelsGained} Lv
                </span>
              </div>
              <div className="text-right sm:text-left">
                <span className="text-[11px] text-gray-400 block font-serif">目標レベル</span>
                <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                  Lv <span className="text-amber-300">{targetLevel}</span>
                </span>
              </div>
            </div>

            {/* 総必要ルーン数 */}
            <div className="bg-gradient-to-r from-amber-950/60 to-black/60 p-4 rounded-xl border border-elden-gold/40 text-center md:text-left">
              <span className="text-[11px] text-elden-gold/90 font-serif flex items-center justify-center md:justify-start gap-1">
                <Coins className="w-3.5 h-3.5 text-elden-gold" />
                総必要ルーン数（合計経験値）
              </span>
              <div className="text-2xl sm:text-4xl font-black text-amber-300 font-mono tracking-tight mt-1">
                {totalRunesNeeded.toLocaleString()}
                <span className="text-xs sm:text-sm font-normal text-gray-300 ml-1.5 font-sans">
                  ルーン
                </span>
              </div>
              <div className="text-[11px] text-gray-400 mt-1">
                次の1Lv（Lv{currentLevel} ➔ {currentLevel + 1}）: 約{nextLevelCost.toLocaleString()} ルーン
              </div>
            </div>

            {/* 最速稼ぎ目安 */}
            <div className="bg-black/50 p-4 rounded-xl border border-white/10">
              <div className="flex items-center justify-between text-[11px] text-gray-400 font-serif mb-1">
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-elden-gold" />
                  最速マラソン目安
                </span>
                <span className="text-[10px] text-elden-gold">
                  {hasScarab && hasFowlFoot ? 'スカラベ+鳥脚(1.56倍)' : hasScarab ? 'スカラベ(1.2倍)' : '通常'}
                </span>
              </div>
              <div className="text-sm font-bold text-white">
                巨鳥落とし: <span className="text-amber-300 font-mono text-base">{farmingEstimates[0].runsNeeded}</span> 回
                <span className="text-gray-400 text-xs font-normal ml-1">
                  ({farmingEstimates[0].estimatedTimeText})
                </span>
              </div>
              <div className="text-xs text-gray-300 mt-1">
                しろがね坂道: <span className="text-amber-300 font-mono">{farmingEstimates[1].runsNeeded}</span> 周
                <span className="text-gray-400 text-[11px] ml-1">
                  ({farmingEstimates[1].estimatedTimeText})
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* 手持ちルーン逆算結果カード */
        <div className="bg-gradient-to-br from-black/80 via-emerald-950/30 to-black/80 border-2 border-emerald-500/40 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-black/50 p-4 rounded-xl border border-white/10">
              <span className="text-[11px] text-gray-400 block font-serif">到達可能レベル</span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-4xl font-black text-emerald-400 font-mono">
                  Lv {reverseResult.reachedLevel}
                </span>
                <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  +{reverseResult.levelsGained} Lv上昇可能！
                </span>
              </div>
              <span className="text-[11px] text-gray-400 block mt-1">
                起点: Lv {reverseBaseLevel}
              </span>
            </div>

            <div className="bg-black/50 p-4 rounded-xl border border-white/10">
              <span className="text-[11px] text-gray-400 block font-serif">消費ルーン内訳</span>
              <div className="text-lg font-bold text-white font-mono mt-1">
                使用: <span className="text-amber-300">{reverseResult.usedRunes.toLocaleString()}</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                余り: <span className="text-gray-200 font-mono">{reverseResult.remainingRunes.toLocaleString()}</span> ルーン
              </div>
            </div>

            <div className="bg-black/50 p-4 rounded-xl border border-white/10">
              <span className="text-[11px] text-gray-400 block font-serif">次のレベルまで</span>
              <div className="text-lg font-bold text-amber-300 font-mono mt-1">
                あと {reverseResult.runesNeededForNextLevel.toLocaleString()} ルーン
              </div>
              <div className="text-[11px] text-gray-400 mt-1">
                巨鳥落とし 約{Math.ceil(reverseResult.runesNeededForNextLevel / (farmingEstimates[0].effectiveRunesPerRun || 11038))}回分で到達
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          モード 1: ステータス詳細から計算
         ========================================================================= */}
      {calcMode === 'stats' && (
        <div className="space-y-6">
          {/* 素性セレクター */}
          <div className="bg-elden-panel/90 border border-elden-border rounded-2xl p-4 sm:p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white font-serif flex items-center gap-2">
                  <Shield className="w-4 h-4 text-elden-gold" />
                  <span>素性（生まれ）を選択</span>
                </h3>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  素性ごとに初期ステータスと最低値が決まります（各能力値は初期値未満には下げられません）。
                </p>
              </div>
              <button
                onClick={resetToClassDefaults}
                className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/70 text-gray-300 hover:text-white border border-white/10 text-xs transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5 text-elden-gold" />
                <span>素性の初期値に戻す</span>
              </button>
            </div>

            {/* 素性選択ボタン一覧 */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3">
              {classesList.map((cls) => {
                const isSelected = cls.id === selectedClassId;
                return (
                  <button
                    key={cls.id}
                    onClick={() => handleSelectClass(cls.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-elden-gold/20 border-elden-gold text-white shadow-md'
                        : 'bg-black/30 border-white/5 text-gray-400 hover:text-gray-200 hover:bg-black/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-white">{cls.name}</span>
                      <span className="text-[10px] font-mono text-elden-gold">Lv{cls.level}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 block truncate mt-0.5">
                      {cls.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 目標プリセット設定バー */}
          <div className="bg-elden-panel/90 border border-elden-border rounded-2xl p-4 sm:p-5">
            <h3 className="text-sm sm:text-base font-bold text-white font-serif flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-elden-gold" />
              <span>おすすめ目標プリセット（ワンタップ反映）</span>
            </h3>

            {/* ビルドプリセット */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mt-3">
              {buildsList.map((b) => (
                <div key={b.id} className="bg-black/40 p-3 rounded-xl border border-white/10">
                  <span className="text-xs font-bold text-white block truncate mb-1">
                    {b.name.split('（')[0]}
                  </span>
                  <div className="grid grid-cols-3 gap-1">
                    <button
                      onClick={() => applyBuildPreset(b.id, 'level50')}
                      className="px-2 py-1 rounded bg-black/60 hover:bg-elden-gold hover:text-black border border-white/10 text-[10px] font-bold text-gray-300 transition-all text-center"
                    >
                      Lv50
                    </button>
                    <button
                      onClick={() => applyBuildPreset(b.id, 'level100')}
                      className="px-2 py-1 rounded bg-black/60 hover:bg-elden-gold hover:text-black border border-white/10 text-[10px] font-bold text-gray-300 transition-all text-center"
                    >
                      Lv100
                    </button>
                    <button
                      onClick={() => applyBuildPreset(b.id, 'level150')}
                      className="px-2 py-1 rounded bg-black/60 hover:bg-elden-gold hover:text-black border border-white/10 text-[10px] font-bold text-gray-300 transition-all text-center"
                    >
                      Lv150
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 目標レベルクイックセット */}
            <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-white/10 text-xs">
              <span className="text-gray-400 font-serif">目標レベル目安:</span>
              {[
                { lvl: 50, label: 'Lv50 (序盤完成)' },
                { lvl: 100, label: 'Lv100 (中盤・王都)' },
                { lvl: 125, label: 'Lv125 (対人メタ)' },
                { lvl: 150, label: 'Lv150 (DLC・協力推奨)' },
                { lvl: 200, label: 'Lv200 (万能型)' },
              ].map((p) => (
                <button
                  key={p.lvl}
                  onClick={() => setQuickTargetLevel(p.lvl)}
                  className="px-2.5 py-1 rounded-lg bg-black/50 hover:bg-elden-gold/30 hover:border-elden-gold/50 border border-white/10 text-gray-300 text-xs font-mono transition-all"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* 8属性ステータス調整コントローラー */}
          <div className="bg-elden-panel/90 border border-elden-border rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white font-serif flex items-center gap-2">
                <Sliders className="w-4 h-4 text-elden-gold" />
                <span>ステータス詳細調整（現在値 ＆ 目標値）</span>
              </h3>
              <button
                onClick={() => setShowCapsGuide(!showCapsGuide)}
                className="text-xs text-elden-gold hover:underline flex items-center gap-1"
              >
                <Info className="w-3.5 h-3.5" />
                <span>ソフトキャップ解説</span>
                {showCapsGuide ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* ソフトキャップ解説アコーディオン */}
            {showCapsGuide && (
              <div className="my-3 p-3.5 rounded-xl bg-black/50 border border-elden-gold/30 text-xs text-gray-300 space-y-1.5 leading-relaxed">
                <div className="font-bold text-elden-gold">💡 ステータスのソフトキャップ（効率の境目）</div>
                <div>・<span className="text-red-400 font-bold">生命力</span>: 40（HP1450。最優先！）/ 60（HP1900。以降は伸びが極端に鈍化）</div>
                <div>・<span className="text-blue-400 font-bold">精神力</span>: 38（青雫の聖杯瓶1本で全快するFP220）/ 60（FP350）</div>
                <div>・<span className="text-emerald-400 font-bold">持久力</span>: 25（スタミナ重視）/ 50（スタミナ頭打ち、以降は装備重量のみ）</div>
                <div>・<span className="text-orange-400 font-bold">筋力・技量・知力・信仰</span>: 20（序盤装備要件）/ 50〜60（中盤主火力）/ 80（最終火力キャップ）</div>
                <div>・<span className="text-pink-400 font-bold">神秘</span>: 45（出血・毒蓄積値の第一キャップ）/ 80（神秘補正攻撃力）</div>
              </div>
            )}

            {/* 8属性グリッド */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              {STAT_KEYS.map((key) => {
                const meta = STAT_METAS[key];
                const curVal = currentStats[key];
                const tgtVal = targetStats[key];
                const minVal = selectedClass.stats[key];
                const diff = tgtVal - curVal;

                return (
                  <div
                    key={key}
                    className="bg-black/40 p-3 sm:p-3.5 rounded-xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    {/* ステータス名 & 差分 */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{ backgroundColor: meta.color }}
                        />
                        <span className="font-bold text-xs sm:text-sm text-white font-serif">
                          {meta.label}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          (初期: {minVal})
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {diff > 0 ? (
                          <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                            +{diff}
                          </span>
                        ) : (
                          <span className="text-[11px] text-gray-500 bg-black/40 px-2 py-0.5 rounded-full">
                            ±0
                          </span>
                        )}
                      </div>
                    </div>

                    {/* コントロール行（現在値 vs 目標値） */}
                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-white/5">
                      {/* 現在値コントローラー */}
                      <div className="bg-black/50 p-2 rounded-lg border border-white/5">
                        <span className="text-[10px] text-gray-400 block mb-1">現在値</span>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => adjustCurrentStat(key, -1)}
                              disabled={curVal <= minVal}
                              className="w-6 h-6 rounded bg-black/80 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-gray-300 border border-white/10 text-xs"
                            >
                              -
                            </button>
                            <button
                              onClick={() => adjustCurrentStat(key, -5)}
                              disabled={curVal <= minVal}
                              className="px-1 h-6 rounded bg-black/80 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-gray-400 border border-white/10 text-[10px]"
                            >
                              -5
                            </button>
                          </div>

                          <span className="text-base font-bold font-mono text-white px-1">
                            {curVal}
                          </span>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => adjustCurrentStat(key, 1)}
                              disabled={curVal >= 99}
                              className="w-6 h-6 rounded bg-black/80 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-gray-300 border border-white/10 text-xs"
                            >
                              +
                            </button>
                            <button
                              onClick={() => adjustCurrentStat(key, 5)}
                              disabled={curVal >= 99}
                              className="px-1 h-6 rounded bg-black/80 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-gray-400 border border-white/10 text-[10px]"
                            >
                              +5
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* 目標値コントローラー */}
                      <div className="bg-amber-950/20 p-2 rounded-lg border border-elden-gold/30">
                        <span className="text-[10px] text-elden-gold block mb-1">目標値</span>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => adjustTargetStat(key, -1)}
                              disabled={tgtVal <= curVal}
                              className="w-6 h-6 rounded bg-black/80 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-gray-300 border border-white/10 text-xs"
                            >
                              -
                            </button>
                            <button
                              onClick={() => adjustTargetStat(key, -5)}
                              disabled={tgtVal <= curVal}
                              className="px-1 h-6 rounded bg-black/80 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-gray-400 border border-white/10 text-[10px]"
                            >
                              -5
                            </button>
                          </div>

                          <span className="text-base font-bold font-mono text-amber-300 px-1">
                            {tgtVal}
                          </span>

                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => adjustTargetStat(key, 1)}
                              disabled={tgtVal >= 99}
                              className="w-6 h-6 rounded bg-black/80 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-gray-300 border border-white/10 text-xs"
                            >
                              +
                            </button>
                            <button
                              onClick={() => adjustTargetStat(key, 5)}
                              disabled={tgtVal >= 99}
                              className="px-1 h-6 rounded bg-black/80 hover:bg-white/10 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center text-gray-400 border border-white/10 text-[10px]"
                            >
                              +5
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          モード 2: レベルからクイック計算
         ========================================================================= */}
      {calcMode === 'levels' && (
        <div className="bg-elden-panel/90 border border-elden-border rounded-2xl p-4 sm:p-6 space-y-6">
          <div>
            <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-elden-gold" />
              <span>レベル範囲クイック指定</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              ステータスの内訳に関わらず、「現在レベル」から「目標レベル」までの総必要ルーン数を瞬時に計算します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* 現在レベルスライダー */}
            <div className="bg-black/50 p-4 rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 font-serif">現在のレベル</span>
                <span className="text-xl font-bold font-mono text-elden-gold">
                  Lv {directCurrentLevel}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="712"
                value={directCurrentLevel}
                onChange={(e) => {
                  const val = parseInt(e.target.value);
                  setDirectCurrentLevel(val);
                  if (val > directTargetLevel) {
                    setDirectTargetLevel(val);
                  }
                }}
                className="w-full accent-elden-gold h-2 bg-black/60 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between gap-1 text-[10px] text-gray-400">
                {[1, 20, 50, 100, 150].map((v) => (
                  <button
                    key={v}
                    onClick={() => {
                      setDirectCurrentLevel(v);
                      if (v > directTargetLevel) setDirectTargetLevel(v);
                    }}
                    className="px-2 py-0.5 rounded bg-black/80 hover:bg-white/10 border border-white/5"
                  >
                    Lv{v}
                  </button>
                ))}
              </div>
            </div>

            {/* 目標レベルスライダー */}
            <div className="bg-amber-950/20 p-4 rounded-xl border border-elden-gold/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-elden-gold font-serif">目標レベル</span>
                <span className="text-xl font-bold font-mono text-amber-300">
                  Lv {directTargetLevel}
                </span>
              </div>
              <input
                type="range"
                min={directCurrentLevel}
                max="713"
                value={directTargetLevel}
                onChange={(e) => setDirectTargetLevel(parseInt(e.target.value))}
                className="w-full accent-amber-400 h-2 bg-black/60 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between gap-1 text-[10px] text-gray-400">
                {[50, 100, 125, 150, 200].map((v) => (
                  <button
                    key={v}
                    onClick={() => setDirectTargetLevel(Math.max(directCurrentLevel, v))}
                    className="px-2 py-0.5 rounded bg-black/80 hover:bg-amber-900/40 border border-white/5 text-amber-200"
                  >
                    Lv{v}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          モード 3: 手持ちルーンから逆算
         ========================================================================= */}
      {calcMode === 'reverse' && (
        <div className="bg-elden-panel/90 border border-elden-border rounded-2xl p-4 sm:p-6 space-y-6">
          <div>
            <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
              <Coins className="w-5 h-5 text-elden-gold" />
              <span>手持ちルーンから最大レベル逆算シミュレーション</span>
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              「今持っているルーンや、インベントリの黄金のルーンを全使用したらいくつまでレベルを上げられるか？」を算出します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* 現在のベースレベル */}
            <div className="bg-black/50 p-4 rounded-xl border border-white/10 space-y-2">
              <label className="text-xs text-gray-400 font-serif block">
                現在のキャラクターレベル
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="712"
                  value={reverseBaseLevel}
                  onChange={(e) => setReverseBaseLevel(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full p-2.5 rounded-xl bg-black/80 border border-white/20 text-white font-mono text-base focus:border-elden-gold focus:outline-none"
                />
              </div>
              <div className="flex gap-1.5 pt-1">
                {[1, 9, 20, 50, 100].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setReverseBaseLevel(lvl)}
                    className="px-2 py-0.5 rounded bg-black/60 hover:bg-white/10 text-[10px] text-gray-300 border border-white/5"
                  >
                    Lv{lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* 手持ちルーン入力 */}
            <div className="bg-black/50 p-4 rounded-xl border border-white/10 space-y-2">
              <label className="text-xs text-amber-300 font-serif block">
                手持ちルーン総数
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min="0"
                  value={currentHoldRunes}
                  onChange={(e) => setCurrentHoldRunes(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full p-2.5 rounded-xl bg-black/80 border border-amber-500/40 text-amber-300 font-mono text-base focus:border-amber-400 focus:outline-none"
                />
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  { label: '+1万', val: 10000 },
                  { label: '+5万', val: 50000 },
                  { label: '+10万', val: 100000 },
                  { label: '+50万', val: 500000 },
                  { label: '+100万', val: 1000000 },
                  { label: 'クリア', val: -1 },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      if (item.val === -1) {
                        setCurrentHoldRunes(0);
                      } else {
                        setCurrentHoldRunes((prev) => prev + item.val);
                      }
                    }}
                    className="px-2 py-0.5 rounded bg-black/60 hover:bg-white/10 text-[10px] text-gray-300 border border-white/5"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          ルーン稼ぎスポット別 換算詳細表
         ========================================================================= */}
      <div className="bg-elden-panel/90 border border-elden-border rounded-2xl p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div>
            <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
              <Clock className="w-5 h-5 text-elden-gold" />
              <span>目標ルーンまでの稼ぎ場別・所要時間換算</span>
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              必要ルーン（{totalRunesNeeded.toLocaleString()}）を各スポットで集める場合の周回数・所要目安です。
            </p>
          </div>

          {/* バフ切り替えスイッチ */}
          <div className="flex items-center gap-2 bg-black/50 p-1.5 rounded-xl border border-white/10 shrink-0">
            <button
              onClick={() => setHasScarab(!hasScarab)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                hasScarab
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              金のスカラベ (+20%)
            </button>
            <button
              onClick={() => setHasFowlFoot(!hasFowlFoot)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                hasFowlFoot
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              鳥脚の黄金漬け (+30%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {farmingEstimates.map((spot) => (
            <div
              key={spot.id}
              className="bg-black/40 p-3.5 rounded-xl border border-white/10 hover:border-elden-gold/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-white block mb-0.5 font-serif">
                  {spot.name}
                </span>
                <span className="text-[10px] text-gray-400 block mb-2">
                  📍 {spot.area}
                </span>

                <div className="bg-black/60 p-2 rounded-lg border border-white/5 space-y-1 mb-2">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-gray-400">1周獲得:</span>
                    <span className="text-amber-300 font-mono font-bold">
                      約{spot.effectiveRunesPerRun.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-gray-400">必要周回数:</span>
                    <span className="text-white font-mono font-bold">
                      {spot.runsNeeded.toLocaleString()} 回
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs font-bold pt-2 border-t border-white/5">
                  <span className="text-gray-400">所要目安:</span>
                  <span className="text-emerald-400 font-mono text-sm">
                    {spot.estimatedTimeText}
                  </span>
                </div>
                <p className="text-[10px] text-gray-500 mt-1 leading-tight">
                  {spot.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

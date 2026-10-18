import React, { useState, useMemo } from 'react';
import {
  dlcMainFlow,
  scadutreeBlessingScaling,
  scadutreeQuickRoutes,
  dlcSecretAreas,
  dlcTopGears,
} from '../data/dlcGuideData';
import {
  Sparkles,
  Compass,
  ShieldAlert,
  Sword,
  MapPin,
  Flame,
  Search,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ArrowRight,
  Shield,
  Zap,
  Info,
} from 'lucide-react';

interface DlcGuideSectionProps {
  onNavigateToMap?: (regionId: string, pinId?: string, title?: string) => void;
}

export const DlcGuideSection: React.FC<DlcGuideSectionProps> = ({ onNavigateToMap }) => {
  // メインタブ: 'flow' (メイン攻略フロー), 'blessing' (影樹の加護&速攻ルート), 'secrets' (隠しエリア踏破), 'gears' (最強武器&収集物)
  const [activeTab, setActiveTab] = useState<'flow' | 'blessing' | 'secrets' | 'gears'>('flow');

  // メインフロー選択中のステップ
  const [selectedStep, setSelectedStep] = useState<string>(dlcMainFlow[0].step);

  // 検索クエリ
  const [searchQuery, setSearchQuery] = useState('');

  // 装備カテゴリフィルター
  const [gearFilter, setGearFilter] = useState<'all' | 'weapon' | 'talisman'>('all');

  const currentStepData = useMemo(() => {
    return dlcMainFlow.find((s) => s.step === selectedStep) || dlcMainFlow[0];
  }, [selectedStep]);

  // 検索フィルタリング（装備・収集物）
  const filteredGears = useMemo(() => {
    return dlcTopGears.filter((gear) => {
      const matchCat = gearFilter === 'all' || gear.category === gearFilter;
      const matchQuery =
        !searchQuery ||
        gear.name.includes(searchQuery) ||
        gear.whyStrong.includes(searchQuery) ||
        gear.location.includes(searchQuery) ||
        (gear.weaponType && gear.weaponType.includes(searchQuery));
      return matchCat && matchQuery;
    });
  }, [gearFilter, searchQuery]);

  return (
    <div className="space-y-6 pb-16">
      {/* DLC Header Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-elden-panel to-neutral-900 border border-elden-gold/50 rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-elden-gold/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-elden-gold/20 border border-elden-gold/40 text-elden-gold-light text-xs font-serif font-bold">
            <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
            SHADOW OF THE ERDTREE • 本編クリア後完全特化
          </span>
          <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-red-950/60 border border-red-700/50 text-red-300 font-bold">
            突入条件：ラダーン ＆ モーグ撃破
          </span>
        </div>

        <h2 className="text-xl sm:text-3xl font-bold text-white font-serif tracking-wide flex items-center gap-2.5">
          <Flame className="w-7 h-7 text-elden-gold shrink-0 animate-pulse" />
          <span>DLC「影の地」シナリオ攻略フロー ＆ 収集物完全ガイド</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
          本編を制覇した褪せ人のためのDLC攻略大全。最優先で知るべき<strong>「影樹の加護（被ダメ半減＆与ダメ2倍の仕組み）」</strong>、
          メインボスの踏破ルート、取り返しのつかない要注意時限フラグ、そして<strong>壊れ新武器・神タリスマンの入手場所</strong>を完全網羅。
        </p>

        {/* 突入方法の簡単ミニガイド */}
        <div className="mt-4 pt-3 border-t border-elden-gold/20 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-300">
          <div className="flex items-center gap-1.5 font-bold text-elden-gold-light">
            <Info className="w-4 h-4 text-elden-gold shrink-0" />
            <span>影の地への行き方:</span>
          </div>
          <span className="text-gray-200">
            モーグウィン王朝の祝福「神託の祭壇（モーグのボス部屋）」にある<strong>巨大な繭から垂れる『枯れ果てた腕』</strong>に触れるとワープ開始。
          </span>
        </div>
      </div>

      {/* 4 Mode Tabs Switcher */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <button
          onClick={() => setActiveTab('flow')}
          className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'flow'
              ? 'bg-elden-gold text-black border-elden-gold shadow-lg font-serif'
              : 'bg-elden-panel/80 text-gray-300 hover:text-white hover:bg-elden-panel border-white/5'
          }`}
        >
          <Compass className="w-4 h-4 shrink-0" />
          <span>メイン攻略フロー (Step1〜5)</span>
        </button>

        <button
          onClick={() => setActiveTab('blessing')}
          className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'blessing'
              ? 'bg-elden-gold text-black border-elden-gold shadow-lg font-serif'
              : 'bg-elden-panel/80 text-gray-300 hover:text-white hover:bg-elden-panel border-white/5'
          }`}
        >
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>影樹の加護 ＆ 序盤回収</span>
        </button>

        <button
          onClick={() => setActiveTab('secrets')}
          className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'secrets'
              ? 'bg-elden-gold text-black border-elden-gold shadow-lg font-serif'
              : 'bg-elden-panel/80 text-gray-300 hover:text-white hover:bg-elden-panel border-white/5'
          }`}
        >
          <Layers className="w-4 h-4 shrink-0" />
          <span>広大な裏エリア踏破</span>
        </button>

        <button
          onClick={() => setActiveTab('gears')}
          className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
            activeTab === 'gears'
              ? 'bg-elden-gold text-black border-elden-gold shadow-lg font-serif'
              : 'bg-elden-panel/80 text-gray-300 hover:text-white hover:bg-elden-panel border-white/5'
          }`}
        >
          <Sword className="w-4 h-4 shrink-0" />
          <span>DLC最強武器 ＆ タリスマン</span>
        </button>
      </div>

      {/* TAB 1: メイン攻略フロー */}
      {activeTab === 'flow' && (
        <div className="space-y-6">
          {/* Step Selector Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {dlcMainFlow.map((s) => {
              const isCurrent = s.step === selectedStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setSelectedStep(s.step)}
                  className={`p-2.5 sm:p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-elden-gold/20 border-elden-gold text-white shadow-md'
                      : 'bg-elden-panel/80 border-elden-border text-gray-400 hover:text-gray-200 hover:bg-elden-panel'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/50 text-elden-gold">
                      {s.step}
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">{s.recommendedBlessing.split(' ')[1]}</span>
                  </div>
                  <div className="text-xs font-bold text-white mt-1.5 line-clamp-1">{s.title.split(' ＆ ')[0]}</div>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Card */}
          <div className="bg-elden-panel border border-elden-gold/30 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xl">
            {/* Step Header */}
            <div className="border-b border-elden-border/80 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs px-3 py-1 rounded-full bg-elden-gold/20 text-elden-gold-light border border-elden-gold/40 font-bold font-mono">
                  推奨：{currentStepData.recommendedBlessing}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-md bg-black/60 border border-elden-border text-gray-300 font-serif">
                  対象地域: {currentStepData.area}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                {currentStepData.step} : {currentStepData.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-elden-border/70">
                {currentStepData.summary}
              </p>
            </div>

            {/* この段階でやるべき行動フロー */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-elden-gold" />
                <span>この段階の具体的攻略ステップ（やること一覧）</span>
              </h4>
              <div className="space-y-2">
                {currentStepData.keyActions.map((action, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-white/5 text-xs sm:text-sm text-gray-200"
                  >
                    <span className="w-5 h-5 rounded-full bg-elden-gold/20 text-elden-gold flex items-center justify-center shrink-0 text-xs font-bold font-mono mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{action}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 主要ボス ＆ 攻略Tips */}
            {currentStepData.bosses.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
                  <Flame className="w-4 h-4 text-red-400" />
                  <span>この段階の関門ボス ＆ 攻略の知恵</span>
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {currentStepData.bosses.map((boss, idx) => (
                    <div
                      key={idx}
                      className="bg-red-950/20 border border-red-900/40 rounded-xl p-4 space-y-2.5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                          <span className="text-base font-bold text-white font-serif">{boss.name}</span>
                          <span className="text-[11px] text-gray-400 font-mono">（{boss.location}）</span>
                        </div>
                        <span className="text-xs px-2.5 py-0.5 rounded bg-black/60 border border-red-500/30 text-red-200">
                          有効属性: {boss.weakness}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-black/40 p-3 rounded-lg border border-red-900/30 whitespace-pre-line">
                        {boss.tips}
                      </p>
                      <div className="text-xs text-elden-gold-light flex items-center gap-1.5 font-mono">
                        <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
                        <span>撃破報酬: {boss.drops}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* この段階で回収すべき神器・新装備 */}
            {currentStepData.criticalItems.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
                  <Sword className="w-4 h-4 text-elden-gold" />
                  <span>この段階で回収すべき神器 ＆ 新武器</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentStepData.criticalItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-black/40 border border-elden-border/80 rounded-xl p-3.5 space-y-2 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-elden-gold-light font-serif">{item.name}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-elden-gold/15 text-elden-gold border border-elden-gold/30">
                            {item.type}
                          </span>
                        </div>
                        <div className="text-[11px] text-gray-400 flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-elden-gold shrink-0" />
                          <span>{item.location}</span>
                        </div>
                        <p className="text-xs text-gray-300 mt-2 leading-relaxed">{item.whyNeeded}</p>
                      </div>

                      {onNavigateToMap && (
                        <button
                          onClick={() => onNavigateToMap('shadow_realm', currentStepData.mapPinId, item.name)}
                          className="mt-2 w-full py-1.5 px-3 rounded-lg bg-elden-gold/10 hover:bg-elden-gold/20 border border-elden-gold/30 text-elden-gold-light text-xs font-serif flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>影の地マップで場所を確認</span>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ハメ・初見殺し対策（注意点） */}
            {currentStepData.pitfalls.length > 0 && (
              <div className="bg-amber-950/20 border border-amber-900/40 rounded-xl p-4 space-y-2">
                <h4 className="text-xs font-bold text-amber-300 font-serif flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>初見殺し・取り返しのつかない要注意ポイント</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-300">
                  {currentStepData.pitfalls.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 地域マップへジャンプするフッターボタン */}
            {onNavigateToMap && (
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() =>
                    onNavigateToMap(
                      currentStepData.mapRegionId || 'shadow_realm',
                      currentStepData.mapPinId,
                      currentStepData.title
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-elden-gold hover:bg-elden-gold-light text-black font-bold text-xs font-serif flex items-center gap-2 shadow-md transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  <span>このエリアの地域マップを表示</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: 影樹の加護 ＆ 序盤回収ルート */}
      {activeTab === 'blessing' && (
        <div className="space-y-6">
          {/* 影樹の加護の仕組み解説カード */}
          <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-6 h-6 text-elden-gold" />
              <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                影の地の絶対原則：レベルより「影樹の加護」が全て
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              DLC「影の地」では、本編のキャラクターレベルに関係なく、エリア固有の成長要素<strong>「影樹の加護」</strong>によって
              <strong>【与ダメージ】と【被ダメージカット率】がパーセンテージで劇的に変化</strong>します。
              レベル200でも加護が0なら雑魚に即死させられますが、加護Lvを上げるだけで<strong>被ダメージは約半分、与ダメージは2倍以上</strong>に跳ね上がります！
            </p>

            {/* 加護倍率テーブル */}
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-elden-gold/30 text-elden-gold-light font-serif">
                    <th className="py-2 px-3">影樹の加護Lv</th>
                    <th className="py-2 px-3">与ダメージ倍率 (火力)</th>
                    <th className="py-2 px-3">被ダメージ倍率 (耐久力)</th>
                    <th className="py-2 px-3">ゲーム内体感</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-mono">
                  {scadutreeBlessingScaling.map((scale) => (
                    <tr
                      key={scale.level}
                      className={`hover:bg-white/5 transition-colors ${
                        scale.level === 20 ? 'bg-elden-gold/10 font-bold text-elden-gold-light' : 'text-gray-300'
                      }`}
                    >
                      <td className="py-2 px-3 font-bold">加護 Lv.{scale.level}</td>
                      <td className="py-2 px-3 text-green-400">{scale.attack}</td>
                      <td className="py-2 px-3 text-cyan-400">{scale.defense}</td>
                      <td className="py-2 px-3 font-serif text-[11px] text-gray-400">
                        {scale.level === 0 && '雑魚の攻撃でも即死・ボスに傷がつかない'}
                        {scale.level === 5 && '序盤ベルラート・エンシスが快適化'}
                        {scale.level === 10 && '被ダメ40%減！影の城を正面突破可能'}
                        {scale.level === 15 && 'ラウフ古遺跡やメスメル戦に必須'}
                        {scale.level === 20 && '最大値！ラスボス「約束の王」に挑む標準状態'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 霊灰の加護のミニ解説 */}
            <div className="bg-black/40 p-3.5 rounded-xl border border-white/5 text-xs text-gray-300 flex items-start gap-2.5">
              <Zap className="w-4 h-4 text-elden-gold shrink-0 mt-0.5" />
              <div>
                <strong className="text-white font-serif">「霊灰の加護（Revered Spirit Ash）」について:</strong>
                <p className="mt-1 leading-relaxed">
                  影樹の破片とは別に手に入る「霊灰」は、召喚する<strong>遺灰（写し身の雫など）と霊馬トレントの攻撃力・防御力</strong>を最大Lv10まで引き上げます。
                  ボス戦で遺灰が長持ちするかどうかは霊灰レベルで決定的に変わるため、こちらも忘れずに祝福で捧げましょう。
                </p>
              </div>
            </div>
          </div>

          {/* 戦闘不要！序盤に一気に加護Lv10まで上げる安全ルート */}
          <div className="bg-elden-panel border border-elden-border rounded-2xl p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-elden-border/80 pb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-serif flex items-center gap-2">
                  <Compass className="w-5 h-5 text-elden-gold" />
                  <span>戦闘不要！序盤に一気に加護Lv10まで上げる安全回収ルート12選</span>
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                  ボスを一切倒さずに、霊馬で駆け抜けるだけで手に入る破片を中心に厳選。探索開始1時間で加護Lv10を目指せます。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {scadutreeQuickRoutes.map((route) => (
                <div
                  key={route.number}
                  className="bg-black/40 border border-elden-border/70 hover:border-elden-gold/40 rounded-xl p-3.5 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-elden-gold text-black flex items-center justify-center text-xs font-mono font-bold">
                          {route.number}
                        </span>
                        <h4 className="text-sm font-bold text-white font-serif">{route.location}</h4>
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold font-mono">
                        +{route.count}個
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 mt-1 text-[11px] text-gray-400">
                      <MapPin className="w-3 h-3 text-elden-gold shrink-0" />
                      <span>{route.area}</span>
                      {route.isCombatRequired ? (
                        <span className="text-[10px] px-1.5 rounded bg-red-950 text-red-300 border border-red-800">
                          影人討伐
                        </span>
                      ) : (
                        <span className="text-[10px] px-1.5 rounded bg-green-950 text-green-300 border border-green-800">
                          戦闘不要
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-300 mt-2.5 leading-relaxed bg-black/30 p-2.5 rounded-lg border border-white/5">
                      {route.howToGet}
                    </p>
                  </div>

                  {onNavigateToMap && (
                    <button
                      onClick={() => onNavigateToMap('shadow_realm', route.mapPinId, route.location)}
                      className="mt-3 py-1.5 px-3 rounded-lg bg-elden-gold/10 hover:bg-elden-gold/20 border border-elden-gold/30 text-elden-gold-light text-xs font-serif flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>マップで場所を確認</span>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 広大な裏エリア踏破ガイド */}
      {activeTab === 'secrets' && (
        <div className="space-y-6">
          <div className="bg-elden-panel p-4 sm:p-5 rounded-2xl border border-elden-border text-xs sm:text-sm text-gray-300 leading-relaxed">
            影の地は上下の多層構造が極めて複雑で、マップ上では隣り合って見えても<strong>数十メートルの断崖絶壁や隠し石棺、地下通路</strong>で隔てられています。
            ストーリークリアには直接関係ないものの、<strong>暴竜ベールや狂い火の王ミドラーなどの超名ボスや、マリカの故郷</strong>が眠る4大裏エリアの到達手順を解説します。
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dlcSecretAreas.map((area) => (
              <div
                key={area.id}
                className="bg-elden-panel border border-elden-border hover:border-elden-gold/40 rounded-2xl p-5 space-y-4 shadow-xl flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-elden-border/70 pb-3">
                    <div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-elden-gold/15 text-elden-gold font-mono font-bold uppercase">
                        {area.category}
                      </span>
                      <h3 className="text-lg font-bold text-white font-serif mt-1">{area.name}</h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded bg-black/60 border border-elden-border text-gray-300 font-mono">
                      {area.routeTitle}
                    </span>
                  </div>

                  {/* 行き方ステップ */}
                  <div className="mt-3 space-y-1.5">
                    <h4 className="text-xs font-bold text-elden-gold-light font-serif">到達ルート・手順:</h4>
                    {area.howToReach.map((step, idx) => (
                      <p key={idx} className="text-xs text-gray-300 leading-relaxed pl-2 border-l border-elden-gold/30">
                        {step}
                      </p>
                    ))}
                  </div>

                  {/* エリアボス */}
                  <div className="mt-3 p-2.5 rounded-xl bg-red-950/20 border border-red-900/30 text-xs">
                    <span className="font-bold text-red-300 font-serif flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-red-400" />
                      エリアボス:
                    </span>
                    <span className="text-gray-300 mt-1 block leading-relaxed">{area.boss}</span>
                  </div>

                  {/* 取得重要アイテム */}
                  <div className="mt-3 space-y-1">
                    <span className="text-xs font-bold text-white font-serif">主な入手品:</span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {area.keyItems.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] px-2 py-0.5 rounded bg-black/50 border border-white/10 text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {onNavigateToMap && (
                  <button
                    onClick={() => onNavigateToMap(area.mapRegionId, area.mapPinId, area.name)}
                    className="mt-4 w-full py-2 px-4 rounded-xl bg-elden-gold/15 hover:bg-elden-gold/25 border border-elden-gold/40 text-elden-gold-light text-xs font-serif font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>ルート図マップで接続経路を確認</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: DLC最強武器 ＆ タリスマン */}
      {activeTab === 'gears' && (
        <div className="space-y-6">
          {/* 検索 ＆ フィルターバー */}
          <div className="bg-elden-panel p-4 rounded-2xl border border-elden-border space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Box */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="武器名、タリスマン、性能で検索（例: 逆手剣、血鬼、双頭亀、刺突盾）..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-black/50 border border-elden-border rounded-xl text-xs sm:text-sm text-white focus:outline-none focus:border-elden-gold placeholder-gray-500 font-sans"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setGearFilter('all')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    gearFilter === 'all'
                      ? 'bg-elden-gold text-black shadow-md'
                      : 'bg-black/40 text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  すべて ({dlcTopGears.length})
                </button>
                <button
                  onClick={() => setGearFilter('weapon')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    gearFilter === 'weapon'
                      ? 'bg-elden-gold text-black shadow-md'
                      : 'bg-black/40 text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  武器 ({dlcTopGears.filter((g) => g.category === 'weapon').length})
                </button>
                <button
                  onClick={() => setGearFilter('talisman')}
                  className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    gearFilter === 'talisman'
                      ? 'bg-elden-gold text-black shadow-md'
                      : 'bg-black/40 text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  タリスマン ({dlcTopGears.filter((g) => g.category === 'talisman').length})
                </button>
              </div>
            </div>
          </div>

          {/* Gears Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredGears.map((gear, idx) => (
              <div
                key={idx}
                className="bg-elden-panel border border-elden-border hover:border-elden-gold/40 rounded-2xl p-5 space-y-3.5 shadow-xl flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-elden-border/70 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-elden-gold text-black font-bold font-mono text-xs">
                        {gear.tier}ランク
                      </span>
                      <h4 className="text-base font-bold text-white font-serif">{gear.name}</h4>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-black/60 border border-elden-border text-elden-gold font-mono">
                      {gear.categoryLabel}
                    </span>
                  </div>

                  {/* 入手場所 */}
                  <div className="flex items-start gap-1.5 text-xs text-gray-400 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-elden-gold shrink-0 mt-0.5" />
                    <span>{gear.location}</span>
                  </div>

                  {/* なぜ壊れ性能なのか */}
                  <div className="bg-black/40 p-3 rounded-xl border border-white/5 space-y-1.5 mt-2">
                    <span className="text-xs font-bold text-elden-gold-light font-serif flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
                      なぜ壊れ性能なのか:
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed">{gear.whyStrong}</p>
                  </div>

                  {/* おすすめビルド */}
                  <div className="mt-2.5 text-xs text-gray-400 flex items-center gap-1.5 font-mono">
                    <Shield className="w-3.5 h-3.5 text-elden-gold shrink-0" />
                    <span>相性の良いビルド: <strong className="text-gray-200">{gear.recommendedBuild}</strong></span>
                  </div>
                </div>

                {onNavigateToMap && (
                  <button
                    onClick={() => onNavigateToMap(gear.mapRegionId, gear.mapPinId, gear.name)}
                    className="mt-3 w-full py-1.5 px-3 rounded-lg bg-elden-gold/10 hover:bg-elden-gold/20 border border-elden-gold/30 text-elden-gold-light text-xs font-serif flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>マップで入手場所を確認</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

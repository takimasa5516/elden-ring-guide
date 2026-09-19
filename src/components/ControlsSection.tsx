import React, { useState } from 'react';
import {
  controlsList,
  essentialTips,
  proTechniques,
  spellEquipSteps,
  classRecommendedSpells,
} from '../data/controlsData';
import { Platform } from '../types';
import {
  incantationEquipSteps,
  mustHaveIncantations,
  sacredSealsList,
} from '../data/incantationsData';
import {
  ShieldAlert,
  Info,
  CheckCircle,
  Zap,
  Gamepad2,
  Sparkles,
  BookOpen,
  Wand2,
  Lightbulb,
  AlertTriangle,
  Flame,
  Scroll,
  Shield,
} from 'lucide-react';

export const ControlsSection: React.FC = () => {
  const [platform, setPlatform] = useState<Platform>('ps');
  const [activeSubTab, setActiveSubTab] = useState<'buttons' | 'techniques' | 'magic-guide' | 'magic-spells' | 'incantations'>('buttons');
  const [spellClassFilter, setSpellClassFilter] = useState<string>('all');

  const filteredSpells = classRecommendedSpells.filter((s) => {
    if (spellClassFilter === 'all') return true;
    if (spellClassFilter === 'pure') return s.targetClass.includes('占星術師');
    if (spellClassFilter === 'blade') return s.targetClass.includes('囚人');
    if (spellClassFilter === 'melee') return s.targetClass.includes('侍');
    return true;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Platform Selector & Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-elden-panel p-4 sm:p-5 rounded-2xl border border-elden-border">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
            <Zap className="w-6 h-6 text-elden-gold" />
            <span>基本操作 ＆ プレイヤー極意・魔術完全ガイド</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            操作プラットフォームを切り替えてボタン表記を確認できます。必須テクニックや魔術の装備方法も完全網羅。
          </p>
        </div>

        {/* Platform Selector */}
        <div className="flex flex-wrap p-1 bg-elden-card rounded-xl border border-elden-border self-start sm:self-auto gap-1">
          <button
            onClick={() => setPlatform('ps')}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              platform === 'ps'
                ? 'bg-elden-gold text-black font-bold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            PlayStation (PS5/4)
          </button>
          <button
            onClick={() => setPlatform('xbox')}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              platform === 'xbox'
                ? 'bg-elden-gold text-black font-bold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Xbox
          </button>
          <button
            onClick={() => setPlatform('switch2')}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              platform === 'switch2'
                ? 'bg-red-600 text-white font-bold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
            Nintendo Switch 2
          </button>
          <button
            onClick={() => setPlatform('pc')}
            className={`px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              platform === 'pc'
                ? 'bg-elden-gold text-black font-bold shadow'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            PC (キーボード/マウス)
          </button>
        </div>
      </div>

      {/* Switch 2 Special Guidance Banner */}
      {platform === 'switch2' && (
        <div className="p-4 rounded-xl bg-red-950/30 border border-red-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs animate-fadeIn">
          <div className="flex items-start gap-2.5">
            <Info className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-200">
                Nintendo Switch 2 (Proコントローラー / Joy-Con 2) ボタン配置
              </p>
              <p className="text-gray-300 mt-1 leading-relaxed">
                任天堂コントローラーの右面ボタン配置：【A（右）】回避・ダッシュ / 【B（下）】ジャンプ / 【X（上）】アクション・調べる / 【Y（左）】アイテム使用。<br className="hidden sm:inline" />
                PlayStationの「○（右）・✕（下）・△（上）・□（左）」と物理位置が同一のため、指の配置はそのままで直感的にプレイ可能です。
              </p>
            </div>
          </div>
          <span className="text-[11px] px-2.5 py-1 rounded bg-red-900/60 text-red-200 border border-red-700/60 font-mono shrink-0 self-start sm:self-auto font-semibold">
            Switch 2 最適化
          </span>
        </div>
      )}

      {/* Section Navigation Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar border-b border-elden-border">
        <button
          onClick={() => setActiveSubTab('buttons')}
          className={`px-3.5 py-2 rounded-t-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border-t border-x ${
            activeSubTab === 'buttons'
              ? 'bg-elden-card text-elden-gold border-elden-gold/50 border-b-transparent font-bold'
              : 'text-gray-400 hover:text-white border-transparent'
          }`}
        >
          <Gamepad2 className="w-4 h-4" />
          <span>ボタン操作 ＆ 心得</span>
        </button>
        <button
          onClick={() => setActiveSubTab('techniques')}
          className={`px-3.5 py-2 rounded-t-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border-t border-x ${
            activeSubTab === 'techniques'
              ? 'bg-elden-card text-elden-gold border-elden-gold/50 border-b-transparent font-bold'
              : 'text-gray-400 hover:text-white border-transparent'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>必須プレイヤーテクニック (8選)</span>
        </button>
        <button
          onClick={() => setActiveSubTab('magic-guide')}
          className={`px-3.5 py-2 rounded-t-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border-t border-x ${
            activeSubTab === 'magic-guide'
              ? 'bg-elden-card text-elden-gold border-elden-gold/50 border-b-transparent font-bold'
              : 'text-gray-400 hover:text-white border-transparent'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>魔術の装備・使用方法</span>
        </button>
        <button
          onClick={() => setActiveSubTab('magic-spells')}
          className={`px-3.5 py-2 rounded-t-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border-t border-x ${
            activeSubTab === 'magic-spells'
              ? 'bg-elden-card text-elden-gold border-elden-gold/50 border-b-transparent font-bold'
              : 'text-gray-400 hover:text-white border-transparent'
          }`}
        >
          <Wand2 className="w-4 h-4" />
          <span>職業別おすすめ魔術</span>
        </button>
        <button
          onClick={() => setActiveSubTab('incantations')}
          className={`px-3.5 py-2 rounded-t-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 border-t border-x ${
            activeSubTab === 'incantations'
              ? 'bg-elden-card text-elden-gold border-elden-gold/50 border-b-transparent font-bold'
              : 'text-gray-400 hover:text-white border-transparent'
          }`}
        >
          <Flame className="w-4 h-4 text-amber-400" />
          <span>祈祷・聖印ガイド</span>
        </button>
      </div>

      {/* --- SUBTAB 1: BUTTONS & ESSENTIAL TIPS --- */}
      {activeSubTab === 'buttons' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Must-Read Essential Tips */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-elden-border/60 pb-2">
              <ShieldAlert className="w-5 h-5 text-elden-gold" />
              <h3 className="text-lg font-bold text-white font-serif">
                序盤で絶対にやっておくべき心得 ＆ 超重要システム
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {essentialTips.map((tip) => (
                <div
                  key={tip.id}
                  className={`p-4 sm:p-5 rounded-xl border relative transition-all ${
                    tip.alertLevel === 'warning'
                      ? 'bg-[#181111]/90 border-red-900/60 shadow-[0_0_15px_rgba(239,68,68,0.08)]'
                      : tip.alertLevel === 'tip'
                      ? 'bg-[#161712]/90 border-elden-gold/40 shadow-[0_0_15px_rgba(200,170,110,0.08)]'
                      : 'bg-elden-panel border-elden-border'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      {tip.alertLevel === 'warning' ? (
                        <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                      ) : tip.alertLevel === 'tip' ? (
                        <Lightbulb className="w-5 h-5 text-elden-gold shrink-0" />
                      ) : (
                        <Info className="w-5 h-5 text-cyan-400 shrink-0" />
                      )}
                      <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {tip.title}
                      </h4>
                    </div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium shrink-0 ${
                        tip.alertLevel === 'warning'
                          ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                          : 'bg-elden-gold/20 text-elden-gold-light border border-elden-gold/40'
                      }`}
                    >
                      {tip.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 mb-3 leading-relaxed">
                    {tip.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-white/5">
                    {tip.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-elden-gold mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Control Actions Table */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-elden-border/60 pb-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-elden-gold" />
                <h3 className="text-lg font-bold text-white font-serif">
                  戦闘 ＆ 移動のアクション対応表
                </h3>
              </div>
              <span className="text-xs text-elden-gold font-mono">
                ★印は特に強力なアクション
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {controlsList.map((ctrl) => {
                const keyCommand =
                  platform === 'ps'
                    ? ctrl.ps
                    : platform === 'xbox'
                    ? ctrl.xbox
                    : platform === 'switch2'
                    ? ctrl.switch2
                    : ctrl.pc;
                return (
                  <div
                    key={ctrl.id}
                    className={`p-3.5 rounded-xl border flex flex-col justify-between transition-all ${
                      ctrl.isCrucial
                        ? 'bg-elden-panel/90 border-elden-gold/40 shadow-sm'
                        : 'bg-elden-card/80 border-elden-border'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-1.5">
                          {ctrl.isCrucial && <span className="text-elden-gold text-sm">★</span>}
                          <h4 className="text-sm font-bold text-white">{ctrl.action}</h4>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 px-1.5 py-0.5 rounded bg-black/40 border border-gray-700">
                          {ctrl.category}
                        </span>
                      </div>

                      {/* Button Command Display */}
                      <div
                        className={`my-2 p-2 rounded-lg border text-center ${
                          platform === 'switch2'
                            ? 'bg-red-950/20 border-red-900/40 text-red-200'
                            : 'bg-black/60 border-elden-border'
                        }`}
                      >
                        <span
                          className={`text-xs font-mono font-bold tracking-wide ${
                            platform === 'switch2' ? 'text-red-300' : 'text-elden-gold-light'
                          }`}
                        >
                          {keyCommand}
                        </span>
                      </div>

                      {ctrl.note && (
                        <p className="text-[11px] text-gray-400 leading-relaxed mt-1">
                          {ctrl.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* --- SUBTAB 2: PRO TECHNIQUES --- */}
      {activeSubTab === 'techniques' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-[#17140f] to-elden-panel p-4 sm:p-5 rounded-xl border border-elden-gold/40">
            <h3 className="text-base sm:text-lg font-bold text-elden-gold font-serif flex items-center gap-2">
              <Zap className="w-5 h-5 text-elden-gold" />
              <span>初心者を脱出する！必須プレイヤーテクニック 8選</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
              ゲーム内のチュートリアルでは詳しく語られない、エルデンリングの隠れた神システムや戦闘メタテクニックを徹底解説。これを知るだけでボスの勝率が何倍にも跳ね上がります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proTechniques.map((tech, idx) => (
              <div
                key={tech.id}
                className="bg-elden-panel/90 p-4 sm:p-5 rounded-xl border border-elden-border space-y-3 hover:border-elden-gold/50 transition-all shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-elden-gold/20 text-elden-gold border border-elden-gold/40 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {tech.name}
                    </h4>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/50 border border-gray-700 text-elden-gold-light font-mono shrink-0">
                    {tech.tag}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-black/50 border border-elden-gold/30 text-center">
                  <span className="text-xs font-mono font-bold text-elden-gold tracking-wide">
                    {tech.command}
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {tech.description}
                </p>

                <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-900/40 text-xs space-y-1">
                  <span className="text-[11px] font-bold text-emerald-400 block">
                    ⚡ なぜ必須なのか:
                  </span>
                  <p className="text-gray-300 text-[11px] leading-relaxed">
                    {tech.whyCrucial}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 text-[11px] text-amber-300/90 font-mono">
                  💡 {tech.practiceTip}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- SUBTAB 3: MAGIC GUIDE (STEP BY STEP) --- */}
      {activeSubTab === 'magic-guide' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-[#0d151f] to-elden-panel p-4 sm:p-5 rounded-xl border border-cyan-800/50">
            <h3 className="text-base sm:text-lg font-bold text-cyan-300 font-serif flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>超初心者向け：魔術の装備・使用手順 完全ガイド</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
              「魔術を買ったのに使えない！」「杖ってどこに装備するの？」という初心者が必ずつまずく疑問をゼロにするステップバイステップ解説です。
            </p>
          </div>

          {/* Step by Step Timeline */}
          <div className="space-y-3">
            {spellEquipSteps.map((step) => (
              <div
                key={step.step}
                className="bg-elden-panel/90 p-4 sm:p-5 rounded-xl border border-elden-border flex items-start gap-3.5 shadow-sm"
              >
                <div className="w-8 h-8 rounded-xl bg-cyan-950/60 border border-cyan-700/60 text-cyan-300 font-bold font-mono text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {step.step}
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {step.title}
                    </h4>
                    <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-black/40 border border-cyan-900/50 self-start sm:self-auto">
                      操作: {step.command}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {step.detail}
                  </p>
                  {step.caution && (
                    <div className="p-2 rounded-lg bg-red-950/20 border border-red-900/40 text-[11px] text-red-300 font-medium">
                      {step.caution}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Magic vs Incantation Clarification */}
          <div className="p-4 sm:p-5 rounded-xl bg-elden-card border border-elden-border space-y-3">
            <h4 className="text-sm font-bold text-elden-gold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>知っておくべき知識：「魔術」と「祈祷」の違い</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-black/40 border border-cyan-900/40 space-y-1">
                <span className="font-bold text-cyan-300 text-sm block">🧙‍♂️ 魔術 (Sorceries)</span>
                <p className="text-gray-300">• 必要ステータス: <strong>知力 (INT)</strong></p>
                <p className="text-gray-300">• 触媒: <strong>杖 (Staff)</strong> を手にして詠唱</p>
                <p className="text-gray-300">• 特徴: 青い光弾、遠距離射撃、高DPS、連射性能</p>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-amber-900/40 space-y-1">
                <span className="font-bold text-amber-300 text-sm block">✨ 祈祷 (Incantations)</span>
                <p className="text-gray-300">• 必要ステータス: <strong>信仰 (FAI) / 神秘</strong></p>
                <p className="text-gray-300">• 触媒: <strong>聖印 (Seal)</strong> を手にして詠唱</p>
                <p className="text-gray-300">• 特徴: HP回復、状態異常解除、雷・炎・狂気ブレス</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- SUBTAB 4: RECOMMENDED SPELLS BY CLASS --- */}
      {activeSubTab === 'magic-spells' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-elden-panel p-4 sm:p-5 rounded-xl border border-elden-border">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
                <Wand2 className="w-5 h-5 text-elden-gold" />
                <span>職業・プレイスタイル別 おすすめ魔術カタログ</span>
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                純魔特化だけでなく、魔法剣士や近接戦士の探索用ユーティリティまで厳選。
              </p>
            </div>

            {/* Class Filter */}
            <div className="inline-flex p-0.5 bg-elden-card rounded-lg border border-elden-border self-start sm:self-auto shrink-0">
              <button
                onClick={() => setSpellClassFilter('all')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  spellClassFilter === 'all'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                全て
              </button>
              <button
                onClick={() => setSpellClassFilter('pure')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  spellClassFilter === 'pure'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                占星術師(純魔)
              </button>
              <button
                onClick={() => setSpellClassFilter('blade')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  spellClassFilter === 'blade'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                囚人(技魔)
              </button>
              <button
                onClick={() => setSpellClassFilter('melee')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all ${
                  spellClassFilter === 'melee'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                近接戦士向け
              </button>
            </div>
          </div>

          {/* Spell Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSpells.map((spell) => (
              <div
                key={spell.id}
                className="bg-elden-panel/90 p-4 sm:p-5 rounded-xl border border-elden-border flex flex-col justify-between hover:border-elden-gold/50 transition-all space-y-3"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] px-2 py-0.5 rounded font-mono font-bold bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 mr-2">
                        {spell.targetClass.split(' / ')[0]}
                      </span>
                      <h4 className="text-base font-bold text-white mt-1">{spell.name}</h4>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono font-bold text-elden-gold block">
                        {spell.reqStats}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400">
                        {spell.fpCost}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-black/40 border border-white/5 text-xs text-emerald-300 font-medium mb-2">
                    ✨ 特徴: {spell.feature}
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {spell.whyBest}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 text-xs text-gray-400 space-y-1">
                  <div className="flex items-start gap-1">
                    <span className="text-elden-gold font-bold shrink-0">📍 場所:</span>
                    <span>{spell.location}</span>
                  </div>
                  <div className="text-[11px] text-gray-500 pl-4">
                    {spell.howToGet}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- SUBTAB 5: INCANTATIONS & SACRED SEALS --- */}
      {activeSubTab === 'incantations' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Header Description */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-950/30 to-elden-card border border-amber-500/40 space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400" />
              <span>祈祷の装備・使用方法 ＆ 全褪せ人必携の神祈祷</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              祈祷は信仰・神秘に振ったキャラだけでなく、
              <strong className="text-white">【近接戦士でも信仰12〜15にするだけで、毒・朱い腐敗の即時解除や攻撃力20%アップ】</strong>
              などの破格の恩恵が得られる人権システムです。
            </p>
          </div>

          {/* 5-Step Equip Guide */}
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-elden-gold font-serif flex items-center gap-2">
              <Scroll className="w-4 h-4 text-elden-gold" />
              <span>初心者向け：祈祷の装備・使用 5 つのステップ</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {incantationEquipSteps.map((step) => (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-elden-card border border-elden-border hover:border-amber-500/50 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 font-bold font-mono text-xs flex items-center justify-center border border-amber-500/40">
                      {step.step}
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {step.title}
                    </h5>
                    <p className="text-[11px] font-mono text-amber-400/90 bg-black/40 px-2 py-1 rounded border border-gray-800">
                      {step.command}
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                  {step.caution && (
                    <div className="text-[10px] text-amber-300/90 bg-amber-950/40 p-2 rounded border border-amber-800/40 flex items-start gap-1">
                      <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0 mt-0.5" />
                      <span>{step.caution}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Must Have Incantations List */}
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-elden-gold font-serif flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-elden-gold" />
              <span>全褪せ人必携！低信仰でも使える人権祈祷カタログ</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mustHaveIncantations.map((inc) => (
                <div
                  key={inc.id}
                  className="p-5 rounded-2xl bg-elden-card border border-elden-border hover:border-amber-500/50 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <h5 className="text-base font-bold text-white font-serif flex items-center gap-2">
                        <Flame className="w-4 h-4 text-amber-400" />
                        <span>{inc.name}</span>
                      </h5>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-xs px-2 py-0.5 rounded bg-amber-950/40 text-amber-400 border border-amber-800/50 font-mono font-bold">
                          必要信仰 {inc.reqFaith}
                          {inc.reqArcane ? ` / 神秘 ${inc.reqArcane}` : ''}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded bg-blue-950/40 text-blue-300 border border-blue-800/40 font-mono">
                          {inc.fpCost}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-gray-300 bg-black/40 p-3 rounded-xl border border-gray-800 space-y-1">
                      <p>
                        <span className="font-bold text-gray-400">入手場所:</span>{' '}
                        <span className="text-amber-300">{inc.location}</span>
                      </p>
                      <p className="text-gray-400 text-[11px] leading-relaxed">
                        {inc.howToGet}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {inc.feature}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-800/80">
                    <div className="p-2.5 rounded-lg bg-amber-950/30 border border-amber-800/50 text-xs text-amber-200 leading-relaxed">
                      <span className="font-bold text-amber-400 block mb-0.5">なぜ必携なのか:</span>
                      {inc.whyMustHave}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sacred Seals Selection */}
          <div className="space-y-4">
            <h4 className="text-sm sm:text-base font-bold text-elden-gold font-serif flex items-center gap-2">
              <Shield className="w-4 h-4 text-elden-gold" />
              <span>触媒「聖印（せいしるし）」の入手場所 ＆ おすすめ</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {sacredSealsList.map((seal) => (
                <div
                  key={seal.id}
                  className="p-4 rounded-xl bg-elden-card border border-elden-border hover:border-amber-500/40 transition-all space-y-2 text-xs"
                >
                  <h5 className="font-bold text-white text-sm font-serif flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>{seal.name}</span>
                  </h5>
                  <p className="text-gray-400 font-mono">
                    <span className="font-bold">補正:</span> {seal.scaling}
                  </p>
                  <p className="text-amber-300">
                    <span className="font-bold text-gray-400">効果:</span> {seal.specialEffect}
                  </p>
                  <div className="bg-black/40 p-2 rounded border border-gray-800 text-[11px] text-gray-300">
                    <span className="font-bold text-gray-400">入手:</span> {seal.location} ({seal.howToGet})
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

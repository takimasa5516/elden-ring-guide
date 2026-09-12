import React, { useState } from 'react';
import { buildsList } from '../data/buildsData';
import { Target, Heart, Shield, Sparkles, Check, Flame } from 'lucide-react';

export const BuildsSection: React.FC = () => {
  const [selectedBuildId, setSelectedBuildId] = useState<string>(buildsList[0].id);

  const currentBuild = buildsList.find((b) => b.id === selectedBuildId) || buildsList[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Stat Allocation Core Rule Banner */}
      <div className="bg-gradient-to-r from-red-950/40 via-elden-panel to-elden-panel border border-red-900/50 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-red-900/40 border border-red-700/50 text-red-300 shrink-0">
            <Heart className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-red-400 uppercase tracking-wider mb-1">
              <span>初心者が絶対に知るべき黄金法則</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-white font-serif">
              ステ振りは「生命力」が最優先！攻撃ステは武器条件だけで十分
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              エルデンリングの序盤は、武器の補正値が低いため<strong>「筋力や技量を10上げても攻撃力は数％しか伸びない」</strong>のに対し、
              <strong>「生命力を10から40に上げるとHPは3倍以上（414 → 1450）」</strong>に爆増します。
              使いたい武器の【必要能力値】を満たしたら、まずは生命力35〜40を目指して全振りするのが最も死なず快適にクリアできる鉄則です。
            </p>
          </div>
        </div>
      </div>

      {/* Build Selector Tabs */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-elden-border/60 pb-2">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-elden-gold" />
            <h3 className="text-lg font-bold text-white font-serif">
              おすすめ最強ビルド一覧
            </h3>
          </div>
          <span className="text-xs text-gray-400">
            ビルドを選択してステ振りと装備を確認
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {buildsList.map((build) => {
            const isSelected = build.id === currentBuild.id;
            return (
              <button
                key={build.id}
                onClick={() => setSelectedBuildId(build.id)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-elden-gold/15 border-elden-gold text-white shadow-md'
                    : 'bg-elden-panel/80 border-elden-border text-gray-400 hover:text-gray-200 hover:bg-elden-panel'
                }`}
              >
                <div className="text-xs sm:text-sm font-bold truncate">
                  {build.name.split('（')[0]}
                </div>
                <div className="text-[10px] text-elden-gold-light mt-0.5 truncate">
                  {build.name.includes('（') ? build.name.split('（')[1].replace('）', '') : ''}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Build Details Card */}
      <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xl">
        {/* Header */}
        <div className="border-b border-elden-border/80 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
              <Flame className="w-6 h-6 text-elden-gold" />
              <span>{currentBuild.name}</span>
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="text-gray-500">推奨素性:</span>
              {currentBuild.recommendedStartingClass.map((cls) => (
                <span key={cls} className="px-2 py-0.5 rounded bg-black/60 border border-elden-border text-elden-gold-light font-medium">
                  {cls}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs sm:text-sm text-elden-gold font-medium">
            {currentBuild.tagline}
          </p>
          <div className="mt-2 text-xs text-gray-300">
            <strong className="text-gray-400">ステ振り優先度: </strong>
            <span className="text-amber-300 font-medium">{currentBuild.statPriority}</span>
          </div>
        </div>

        {/* Level Targets Table (Responsive) */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
            <Shield className="w-4 h-4 text-elden-gold" />
            <span>レベル別ステータス目標（目安）</span>
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {/* Level 50 */}
            <div className="bg-black/50 border border-elden-border rounded-xl p-3.5 space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <span className="text-xs font-bold text-elden-gold-light font-mono">Lv.50 (序盤の目標)</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-[11px] text-center font-mono">
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">生命</span><strong className="text-emerald-400">{currentBuild.statsTarget.level50.vigor}</strong></div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">精神</span>{currentBuild.statsTarget.level50.mind}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">持久</span>{currentBuild.statsTarget.level50.endurance}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">筋力</span>{currentBuild.statsTarget.level50.strength}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">技量</span>{currentBuild.statsTarget.level50.dexterity}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">知力</span>{currentBuild.statsTarget.level50.int}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">信仰</span>{currentBuild.statsTarget.level50.faith}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">神秘</span>{currentBuild.statsTarget.level50.arcane}</div>
              </div>
              <p className="text-[11px] text-gray-300 bg-white/5 p-2 rounded leading-relaxed">
                {currentBuild.statsTarget.level50.memo}
              </p>
            </div>

            {/* Level 100 */}
            <div className="bg-black/50 border border-elden-gold/40 rounded-xl p-3.5 space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <span className="text-xs font-bold text-elden-gold font-mono">Lv.100 (中盤〜終盤)</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-[11px] text-center font-mono">
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">生命</span><strong className="text-emerald-400">{currentBuild.statsTarget.level100.vigor}</strong></div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">精神</span>{currentBuild.statsTarget.level100.mind}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">持久</span>{currentBuild.statsTarget.level100.endurance}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">筋力</span>{currentBuild.statsTarget.level100.strength}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">技量</span>{currentBuild.statsTarget.level100.dexterity}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">知力</span>{currentBuild.statsTarget.level100.int}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">信仰</span>{currentBuild.statsTarget.level100.faith}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">神秘</span>{currentBuild.statsTarget.level100.arcane}</div>
              </div>
              <p className="text-[11px] text-gray-300 bg-white/5 p-2 rounded leading-relaxed">
                {currentBuild.statsTarget.level100.memo}
              </p>
            </div>

            {/* Level 150 */}
            <div className="bg-black/50 border border-elden-border rounded-xl p-3.5 space-y-2.5">
              <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                <span className="text-xs font-bold text-elden-gold-light font-mono">Lv.150 (最終完成形)</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 text-[11px] text-center font-mono">
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">生命</span><strong className="text-emerald-400">{currentBuild.statsTarget.level150.vigor}</strong></div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">精神</span>{currentBuild.statsTarget.level150.mind}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">持久</span>{currentBuild.statsTarget.level150.endurance}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">筋力</span>{currentBuild.statsTarget.level150.strength}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">技量</span>{currentBuild.statsTarget.level150.dexterity}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">知力</span>{currentBuild.statsTarget.level150.int}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">信仰</span>{currentBuild.statsTarget.level150.faith}</div>
                <div className="bg-elden-card p-1 rounded"><span className="text-gray-400 block text-[9px]">神秘</span>{currentBuild.statsTarget.level150.arcane}</div>
              </div>
              <p className="text-[11px] text-gray-300 bg-white/5 p-2 rounded leading-relaxed">
                {currentBuild.statsTarget.level150.memo}
              </p>
            </div>
          </div>
        </div>

        {/* Key Equipment & Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-elden-card/80 p-3.5 rounded-xl border border-elden-border">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
              <span>保有すべきキー武器</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {currentBuild.keyWeapons.map((weapon, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{weapon}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-elden-card/80 p-3.5 rounded-xl border border-elden-border">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
              <span>おすすめ戦技・スキル</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {currentBuild.keySkills.map((skill, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-elden-card/80 p-3.5 rounded-xl border border-elden-border">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
              <span>推奨タリスマン</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {currentBuild.keyTalismans.map((talisman, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{talisman}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Combat Style */}
        <div className="pt-2">
          <h5 className="text-sm font-bold text-white font-serif mb-2">
            実戦での立ち回り・戦闘のコツ
          </h5>
          <div className="space-y-2 bg-black/40 p-4 rounded-xl border border-elden-border">
            {currentBuild.combatStyle.map((style, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                <span className="text-elden-gold font-bold">{idx + 1}.</span>
                <p className="leading-relaxed">{style}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

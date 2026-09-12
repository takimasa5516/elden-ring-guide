import React, { useState } from 'react';
import { progressionStages } from '../data/progressionData';
import { Compass, CheckCircle, AlertTriangle, ShieldCheck, Sword, Sparkles } from 'lucide-react';

export const ProgressionSection: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<string>(progressionStages[0].id);

  const currentStage = progressionStages.find((s) => s.id === selectedStageId) || progressionStages[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Banner */}
      <div className="bg-elden-panel p-4 sm:p-6 rounded-2xl border border-elden-border space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-elden-gold/15 border border-elden-gold/30 text-elden-gold-light text-xs font-serif font-bold">
          <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
          <span>ROADMAP • 進行度別サバイバル指針</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
          <Compass className="w-6 h-6 text-elden-gold" />
          <span>序盤・中盤・終盤の立ち回り ＆ 回収すべき神器</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          ボスの攻略順ではなく、<strong>「どの段階で何を回収し、どうキャラクターを育成すれば詰まらず快適に進めるか」</strong>に特化した進行ロードマップです。
        </p>
      </div>

      {/* Stage Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {progressionStages.map((stage) => {
          const isSelected = stage.id === currentStage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStageId(stage.id)}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-elden-gold/20 border-elden-gold text-white shadow-lg'
                  : 'bg-elden-panel/80 border-elden-border text-gray-400 hover:text-gray-200 hover:bg-elden-panel'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-black/60 border border-elden-border text-elden-gold-light">
                  {stage.recommendedLevel}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white font-serif mt-2">
                  {stage.stageName.split('：')[0]}
                </h3>
              </div>
              <p className="text-xs text-elden-gold mt-1 line-clamp-1">
                {stage.stageName.split('：')[1]}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Stage Detail Container */}
      <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-5 sm:p-7 space-y-7 shadow-xl">
        {/* Stage Header */}
        <div className="border-b border-elden-border/80 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <span className="text-xs px-3 py-1 rounded-full bg-elden-gold/20 text-elden-gold-light border border-elden-gold/40 font-bold font-mono">
              推奨レベル: {currentStage.recommendedLevel}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mt-1">
            {currentStage.stageName}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed bg-black/40 p-3.5 rounded-xl border border-elden-border/70">
            {currentStage.summary}
          </p>
        </div>

        {/* Core Strategy Points */}
        <div className="space-y-2.5">
          <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-elden-gold" />
            <span>この段階で実践すべき【立ち回りの核】</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {currentStage.coreStrategy.map((strategy, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-black/30 border border-elden-border text-xs sm:text-sm text-gray-300">
                <span className="text-elden-gold font-bold">•</span>
                <p className="leading-relaxed">{strategy}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Must-Get Gears & Weapons */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
            <Sword className="w-4 h-4 text-elden-gold" />
            <span>絶対に回収しておくべき武器・防具・アイテム</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentStage.mustGetGears.map((gear, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-elden-card/90 border border-elden-border hover:border-elden-gold/40 flex flex-col justify-between transition-all">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono block">{gear.type}</span>
                      <h5 className="text-sm sm:text-base font-bold text-white font-serif">{gear.name}</h5>
                    </div>
                    {!gear.isBossRequired ? (
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shrink-0">
                        ボス不要
                      </span>
                    ) : (
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                        要ボス
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-elden-gold font-medium mb-1">
                    📍 {gear.location}
                  </div>
                  <p className="text-xs text-gray-300 bg-black/40 p-2 rounded leading-relaxed">
                    {gear.whyNeeded}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-Step Practical Flow */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-elden-gold" />
            <span>おすすめ進行ステップ（快適化手順）</span>
          </h4>
          <div className="space-y-2">
            {currentStage.stepByStepGoals.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-elden-border text-xs sm:text-sm text-gray-300">
                <span className="w-5 h-5 rounded-full bg-elden-gold/20 text-elden-gold-light border border-elden-gold/40 flex items-center justify-center font-bold font-mono text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="flex-1 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Common Pitfalls Warning */}
        <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/50 text-xs sm:text-sm text-red-200 space-y-2">
          <div className="flex items-center gap-2 font-bold text-red-300">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span>初心者が陥りがちな落とし穴 ＆ 回避法</span>
          </div>
          <ul className="space-y-1.5 pl-6 list-disc text-gray-300 text-xs">
            {currentStage.commonPitfalls.map((pitfall, idx) => (
              <li key={idx} className="leading-relaxed">{pitfall}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

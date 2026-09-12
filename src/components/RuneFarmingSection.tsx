import React, { useState } from 'react';
import { runeFarmSpots, runeBoostItems } from '../data/runeFarmingData';
import { Coins, Sparkles, ShieldAlert, ArrowRight, Zap, Target } from 'lucide-react';

export const RuneFarmingSection: React.FC = () => {
  const [selectedSpotId, setSelectedSpotId] = useState<string>(runeFarmSpots[0].id);

  const currentSpot = runeFarmSpots.find((s) => s.id === selectedSpotId) || runeFarmSpots[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Overview & Multiplier Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-elden-panel to-elden-panel border border-amber-800/50 rounded-2xl p-4 sm:p-6 space-y-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-serif font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            <span>RUNE MULTIPLIER • ルーン効率1.56倍の極意</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
            <Coins className="w-6 h-6 text-yellow-400" />
            <span>ルーン稼ぎ完全攻略（序盤〜最高効率）</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
            ルーン稼ぎを行う前に、獲得量を劇的に増やすタリスマンと消費アイテムを確保しましょう。
            <strong>「金のスカラベ(+20%)」と「鳥脚の黄金漬け(+30%)」は効果が乗算（1.2 × 1.3 ＝ 1.56倍）</strong>されます！
          </p>
        </div>

        {/* Boost Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {runeBoostItems.map((item, idx) => (
            <div key={idx} className="bg-black/60 border border-elden-border p-3.5 rounded-xl space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xs sm:text-sm font-bold text-white font-serif">{item.name}</h4>
                <span className="text-xs font-mono font-bold text-yellow-400 px-2 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/30">
                  {item.boost}
                </span>
              </div>
              <div className="text-[11px] text-gray-300">
                <span className="text-elden-gold font-medium">場所: </span>
                {item.location}
              </div>
              <p className="text-[11px] text-gray-400 leading-relaxed">
                {item.howToGet}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Spots Selector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-elden-border/60 pb-2">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-elden-gold" />
            <h3 className="text-lg font-bold text-white font-serif">
              稼ぎスポットを選択
            </h3>
          </div>
          <span className="text-xs text-gray-400">
            進行度に合わせて選択
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {runeFarmSpots.map((spot) => {
            const isSelected = spot.id === currentSpot.id;
            return (
              <button
                key={spot.id}
                onClick={() => setSelectedSpotId(spot.id)}
                className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-elden-gold/15 border-elden-gold shadow-md'
                    : 'bg-elden-panel/80 border-elden-border hover:bg-elden-panel hover:border-elden-gold/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-black/60 border border-elden-border text-elden-gold-light">
                      {spot.stage}
                    </span>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${
                      spot.risk === '極めて安全' ? 'text-emerald-400 bg-emerald-500/10' : 'text-amber-400 bg-amber-500/10'
                    }`}>
                      危険度: {spot.risk}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-serif leading-snug">
                    {spot.name}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 text-[11px] font-mono text-yellow-300 font-bold truncate">
                  {spot.runesPerRun.split('＋')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Spot Walkthrough Card */}
      <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-5 sm:p-7 space-y-6 shadow-xl">
        <div className="border-b border-elden-border/80 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs px-2.5 py-1 rounded-full bg-elden-gold/20 text-elden-gold-light border border-elden-gold/40 font-semibold font-serif">
              {currentSpot.stage}
            </span>
            <div className="text-xs text-gray-400">
              エリア: <span className="text-white font-medium">{currentSpot.area}</span>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mt-1">
            {currentSpot.name}
          </h3>

          <div className="mt-3 p-3 rounded-xl bg-black/60 border border-yellow-500/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider block">獲得ルーン目安</span>
              <span className="text-base sm:text-lg font-bold text-yellow-400 font-mono">
                {currentSpot.runesPerRun}
              </span>
            </div>
            <div className="text-xs text-elden-gold font-medium bg-elden-gold/10 px-3 py-1.5 rounded-lg border border-elden-gold/20 self-start sm:self-auto">
              {currentSpot.efficiency}
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div>
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
            <Zap className="w-4 h-4 text-elden-gold" />
            <span>事前準備・必要なアイテム</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {currentSpot.requirements.map((req, idx) => (
              <span key={idx} className="text-xs px-3 py-1.5 rounded-lg bg-elden-card border border-elden-border text-gray-200">
                • {req}
              </span>
            ))}
          </div>
        </div>

        {/* Step-by-step instructions */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-elden-gold" />
            <span>手順とルート解説</span>
          </h4>

          <div className="space-y-2.5">
            {currentSpot.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/40 border border-elden-border/70 text-xs sm:text-sm text-gray-300 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-elden-gold/20 text-elden-gold-light border border-elden-gold/40 flex items-center justify-center font-bold font-mono text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <p className="flex-1">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tip */}
        <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-700/40 text-xs sm:text-sm text-amber-200 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300 font-bold block mb-1">攻略快適化のポイント:</strong>
            <p className="text-gray-300 leading-relaxed">{currentSpot.tips}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

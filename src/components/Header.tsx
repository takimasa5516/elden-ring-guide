import React from 'react';
import { Sparkles, Shield, Compass, Coins, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  checkedCount: number;
  totalChecklistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  setActiveTab,
  checkedCount,
  totalChecklistCount,
}) => {
  const progressPercent = Math.round((checkedCount / totalChecklistCount) * 100) || 0;

  return (
    <header className="relative overflow-hidden border-b border-elden-gold/30 bg-[#0e1014]">
      {/* Background ambient golden aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#54431e]/25 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-elden-gold/40 bg-elden-gold/10 text-elden-gold-light text-xs font-serif tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
              <span>SPOILER-FREE COMFORT GUIDE</span>
              <span className="hidden sm:inline text-gray-500">|</span>
              <span className="hidden sm:inline text-gray-400">ストーリーネタバレなし・快適化特化</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-serif text-white flex items-center gap-3">
              <span className="gold-gradient-text">ELDEN RING</span>
              <span className="text-lg sm:text-2xl font-normal text-gray-300">快適攻略情報まとめ</span>
            </h1>
            
            <p className="mt-2 text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
              詰まりやすいボス攻略やストーリー進行ではなく、<strong className="text-elden-gold-light">「キャラを最速で強化し、死ににくく快適に探索を進めるための知識」</strong>（ステ振り、操作極意、聖杯瓶強化、地図、ルーン稼ぎ）を厳選収録。
            </p>
          </div>

          {/* Quick Progress Widget */}
          <div 
            onClick={() => setActiveTab('checklist')}
            className="cursor-pointer bg-elden-panel/80 hover:bg-elden-panel border border-elden-gold/30 hover:border-elden-gold/60 p-3 sm:p-4 rounded-xl shadow-lg transition-all flex items-center justify-between sm:justify-start gap-4 self-start md:self-auto w-full md:w-auto"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 sm:p-2.5 rounded-lg bg-elden-gold/15 border border-elden-gold/30 text-elden-gold">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-[11px] font-medium text-gray-400">強化アイテム回収進捗</div>
                <div className="text-sm sm:text-base font-bold text-white font-serif flex items-center gap-1.5">
                  <span className="text-elden-gold-light">{checkedCount}</span>
                  <span className="text-gray-500">/</span>
                  <span>{totalChecklistCount} 個</span>
                  <span className="text-xs text-elden-gold ml-1 font-mono">({progressPercent}%)</span>
                </div>
              </div>
            </div>
            <div className="text-right sm:text-left">
              <span className="text-xs bg-elden-gold/20 text-elden-gold-light px-2.5 py-1 rounded border border-elden-gold/40 hover:bg-elden-gold/30 transition-colors">
                確認する →
              </span>
            </div>
          </div>
        </div>

        {/* Highlight Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-elden-border/60">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-300 bg-elden-card/60 px-2.5 py-1.5 rounded-lg border border-elden-border">
            <Shield className="w-3.5 h-3.5 text-elden-gold shrink-0" />
            <span className="leading-tight">生命力最優先</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-300 bg-elden-card/60 px-2.5 py-1.5 rounded-lg border border-elden-border">
            <Coins className="w-3.5 h-3.5 text-yellow-400 shrink-0" />
            <span className="leading-tight">時給300万ルーン</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-300 bg-elden-card/60 px-2.5 py-1.5 rounded-lg border border-elden-border">
            <Compass className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="leading-tight">聖杯瓶・地図の場所</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-300 bg-elden-card/60 px-2.5 py-1.5 rounded-lg border border-elden-border">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="leading-tight">ボス不要の最強武器</span>
          </div>
        </div>
      </div>
    </header>
  );
};

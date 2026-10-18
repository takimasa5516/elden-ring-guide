import React, { useState, useEffect } from 'react';
import { LostGuideSection } from './LostGuideSection';
import { ProgressionSection } from './ProgressionSection';
import { DlcGuideSection } from './DlcGuideSection';
import { NpcSafetySection } from './NpcSafetySection';
import { RuneFarmingSection } from './RuneFarmingSection';
import { HelpCircle, Compass, Flame, ShieldAlert, Coins } from 'lucide-react';

interface ProgressionHubProps {
  initialSubTab?: string;
  onNavigateTab?: (tabId: string) => void;
  onNavigateToMap?: (regionId: string, pinId?: string, title?: string) => void;
}

export const ProgressionHub: React.FC<ProgressionHubProps> = ({
  initialSubTab,
  onNavigateTab,
  onNavigateToMap,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<string>(initialSubTab || 'lost-guide');

  useEffect(() => {
    if (initialSubTab) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  const subTabs = [
    { id: 'lost-guide', label: '迷った時の道標', shortLabel: '迷った時', icon: HelpCircle, badge: '大ピンチ解決' },
    { id: 'progression', label: '本編進行ルート', shortLabel: '本編ルート', icon: Compass, badge: '序・中・終盤' },
    { id: 'dlc-guide', label: 'DLC影の地 完全攻略', shortLabel: 'DLC影の地', icon: Flame, badge: 'クリア後特化', highlight: true },
    { id: 'npc-safety', label: '取返不能 ＆ NPC', shortLabel: 'NPC・注意', icon: ShieldAlert, badge: 'ネタバレなし' },
    { id: 'runes', label: 'ルーン稼ぎガイド', shortLabel: 'ルーン稼ぎ', icon: Coins, badge: '時給300万' },
  ];

  return (
    <div className="space-y-6">
      {/* Mobile-friendly Hub Subtabs Switcher */}
      <div className="bg-elden-panel/90 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-elden-gold/30 shadow-lg sticky top-14 sm:top-16 z-30">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 sm:gap-2">
          {subTabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            // 5番目のタブはスマホで中央全幅配置
            const isLastOnMobile = idx === subTabs.length - 1;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveSubTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all relative ${
                  isLastOnMobile ? 'col-span-2 sm:col-span-1' : ''
                } ${
                  isActive
                    ? 'bg-elden-gold text-black border-elden-gold shadow-md font-serif'
                    : tab.highlight
                    ? 'bg-amber-950/40 text-amber-300 hover:text-white hover:bg-amber-900/50 border-amber-500/40'
                    : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 border-white/5'
                }`}
              >
                <Icon
                  className={`w-4 h-4 shrink-0 ${
                    isActive ? 'text-black' : tab.highlight ? 'text-amber-400 animate-pulse' : 'text-elden-gold'
                  }`}
                />
                <span className="hidden sm:inline whitespace-nowrap">{tab.label}</span>
                <span className="sm:hidden whitespace-nowrap">{tab.shortLabel}</span>
                {tab.highlight && !isActive && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Subtab Section */}
      <div className="pt-2">
        {activeSubTab === 'lost-guide' && <LostGuideSection onNavigateTab={onNavigateTab} />}
        {activeSubTab === 'progression' && (
          <ProgressionSection onNavigateTab={onNavigateTab} />
        )}
        {activeSubTab === 'dlc-guide' && (
          <DlcGuideSection onNavigateToMap={onNavigateToMap} />
        )}
        {activeSubTab === 'npc-safety' && <NpcSafetySection onNavigateToMap={onNavigateToMap} />}
        {activeSubTab === 'runes' && <RuneFarmingSection />}
      </div>
    </div>
  );
};

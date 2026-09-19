import React, { useState, useEffect } from 'react';
import { LostGuideSection } from './LostGuideSection';
import { ProgressionSection } from './ProgressionSection';
import { NpcSafetySection } from './NpcSafetySection';
import { RuneFarmingSection } from './RuneFarmingSection';
import { HelpCircle, Compass, ShieldAlert, Coins } from 'lucide-react';

interface ProgressionHubProps {
  initialSubTab?: string;
  onNavigateTab?: (tabId: string) => void;
}

export const ProgressionHub: React.FC<ProgressionHubProps> = ({ initialSubTab, onNavigateTab }) => {
  const [activeSubTab, setActiveSubTab] = useState<string>(initialSubTab || 'lost-guide');

  useEffect(() => {
    if (initialSubTab) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  const subTabs = [
    { id: 'lost-guide', label: '迷った時の道標', shortLabel: '迷った時', icon: HelpCircle, badge: '大ピンチ解決' },
    { id: 'progression', label: '進行度別ルート', shortLabel: '進行ルート', icon: Compass, badge: '序・中・終盤' },
    { id: 'npc-safety', label: '取返不能 ＆ NPC', shortLabel: 'NPC・注意', icon: ShieldAlert, badge: 'ネタバレなし' },
    { id: 'runes', label: 'ルーン稼ぎガイド', shortLabel: 'ルーン稼ぎ', icon: Coins, badge: '時給300万' },
  ];

  return (
    <div className="space-y-6">
      {/* Mobile-friendly Hub Subtabs Switcher */}
      <div className="bg-elden-panel/90 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-elden-gold/30 shadow-lg sticky top-14 sm:top-16 z-30">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
          {subTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveSubTab(tab.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-elden-gold text-black border-elden-gold shadow-md font-serif'
                    : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 border-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-black' : 'text-elden-gold'}`} />
                <span className="hidden sm:inline whitespace-nowrap">{tab.label}</span>
                <span className="sm:hidden whitespace-nowrap">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Subtab Section */}
      <div className="pt-2">
        {activeSubTab === 'lost-guide' && <LostGuideSection onNavigateTab={onNavigateTab} />}
        {activeSubTab === 'progression' && <ProgressionSection />}
        {activeSubTab === 'npc-safety' && <NpcSafetySection />}
        {activeSubTab === 'runes' && <RuneFarmingSection />}
      </div>
    </div>
  );
};

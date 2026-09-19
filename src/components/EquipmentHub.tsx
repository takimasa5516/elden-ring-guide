import React, { useState, useEffect } from 'react';
import { AshesOfWarSection } from './AshesOfWarSection';
import { SmithingSection } from './SmithingSection';
import { UsefulTipsSection } from './UsefulTipsSection';
import { Swords, Hammer, Sparkles } from 'lucide-react';

interface EquipmentHubProps {
  initialSubTab?: string;
}

export const EquipmentHub: React.FC<EquipmentHubProps> = ({ initialSubTab }) => {
  const [activeSubTab, setActiveSubTab] = useState<string>(initialSubTab || 'ashes');

  useEffect(() => {
    if (initialSubTab) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  const subTabs = [
    { id: 'ashes', label: '戦技・戦灰 ＆ 砥石刃', shortLabel: '戦技・戦灰', icon: Swords },
    { id: 'smithing', label: '鍛石ルート (最速+9)', shortLabel: '鍛石ルート', icon: Hammer },
    { id: 'useful', label: '神遺灰・大ルーン・タリスマン', shortLabel: '遺灰・ルーン', icon: Sparkles },
  ];

  return (
    <div className="space-y-6">
      {/* Mobile-friendly Hub Subtabs Switcher */}
      <div className="bg-elden-panel/90 backdrop-blur-md p-1.5 sm:p-2 rounded-2xl border border-elden-gold/30 shadow-lg sticky top-14 sm:top-16 z-30">
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
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
        {activeSubTab === 'ashes' && <AshesOfWarSection />}
        {activeSubTab === 'smithing' && <SmithingSection />}
        {activeSubTab === 'useful' && <UsefulTipsSection />}
      </div>
    </div>
  );
};

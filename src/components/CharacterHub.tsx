import React, { useState, useEffect } from 'react';
import { ControlsSection } from './ControlsSection';
import { ClassesWeaponsSection } from './ClassesWeaponsSection';
import { BuildsSection } from './BuildsSection';
import { Gamepad2, Sword, Target } from 'lucide-react';

interface CharacterHubProps {
  initialSubTab?: string;
}

export const CharacterHub: React.FC<CharacterHubProps> = ({ initialSubTab }) => {
  const [activeSubTab, setActiveSubTab] = useState<string>(initialSubTab || 'controls');

  useEffect(() => {
    if (initialSubTab) {
      setActiveSubTab(initialSubTab);
    }
  }, [initialSubTab]);

  const subTabs = [
    { id: 'controls', label: '基本操作・心得・魔術・祈祷', shortLabel: '操作・魔法', icon: Gamepad2 },
    { id: 'classes', label: '素性 ＆ おすすめ装備', shortLabel: '素性・装備', icon: Sword },
    { id: 'builds', label: 'おすすめビルド・ステ振り', shortLabel: 'ビルド・育成', icon: Target },
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
        {activeSubTab === 'controls' && <ControlsSection />}
        {activeSubTab === 'classes' && <ClassesWeaponsSection />}
        {activeSubTab === 'builds' && <BuildsSection />}
      </div>
    </div>
  );
};

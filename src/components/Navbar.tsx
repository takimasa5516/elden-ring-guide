import React from 'react';
import {
  Compass,
  Map,
  Target,
  Swords,
  FlaskConical,
  MapPin,
  CheckSquare,
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  checkedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, checkedCount }) => {
  const navItems = [
    {
      id: 'progression-hub',
      label: '進行・道標',
      shortLabel: '進行・道標',
      icon: Compass,
      matchTabs: ['progression-hub', 'lost-guide', 'progression', 'npc-safety', 'runes'],
    },
    {
      id: 'regions',
      label: '地域マップ',
      shortLabel: '地域マップ',
      icon: Map,
      matchTabs: ['regions'],
    },
    {
      id: 'character-hub',
      label: 'キャラ・育成',
      shortLabel: 'キャラ育成',
      icon: Target,
      matchTabs: ['character-hub', 'controls', 'classes', 'builds'],
    },
    {
      id: 'equipment-hub',
      label: '戦技・強化',
      shortLabel: '戦技・強化',
      icon: Swords,
      matchTabs: ['equipment-hub', 'ashes', 'smithing', 'useful'],
    },
    // --- 状態保持が必要なツール（統合除外・独立維持） ---
    {
      id: 'physick',
      label: '霊薬シミュ',
      shortLabel: '霊薬配合',
      icon: FlaskConical,
      isStateful: true,
      matchTabs: ['physick'],
    },
    {
      id: 'upgrades',
      label: '強化・地図',
      shortLabel: '強化地図',
      icon: MapPin,
      isStateful: true,
      matchTabs: ['upgrades'],
    },
    {
      id: 'checklist',
      label: `回収チェック (${checkedCount})`,
      shortLabel: 'チェック',
      icon: CheckSquare,
      badge: checkedCount > 0 ? checkedCount : undefined,
      isStateful: true,
      matchTabs: ['checklist'],
    },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Navigation (Top Sticky) */}
      <nav className="hidden md:block sticky top-0 z-40 bg-[#0e1014]/95 backdrop-blur-md border-b border-elden-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2.5 space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.matchTabs.includes(activeTab);
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs lg:text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-elden-gold text-black font-bold font-serif shadow-md'
                      : item.isStateful
                      ? 'text-yellow-300/90 hover:text-white bg-yellow-950/20 hover:bg-yellow-950/40 border border-yellow-800/30'
                      : 'text-gray-300 hover:text-white hover:bg-elden-panel border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-black' : item.isStateful ? 'text-yellow-400' : 'text-elden-gold'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className={`ml-1 px-1.5 py-0.2 text-[10px] rounded-full font-mono font-bold ${
                      isActive ? 'bg-black text-elden-gold' : 'bg-elden-gold/30 text-elden-gold-light'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (Streamlined 7-column grid fitting all screens) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0d0f12]/95 backdrop-blur-lg border-t border-elden-gold/30 pb-safe">
        <div className="grid grid-cols-7 w-full h-14 px-1 py-1 items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.matchTabs.includes(activeTab);
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex flex-col items-center justify-center w-full h-full py-0.5 rounded-lg relative transition-all ${
                  isActive
                    ? 'bg-elden-gold/15 text-elden-gold-light font-bold'
                    : item.isStateful
                    ? 'text-yellow-300/80 active:text-yellow-200'
                    : 'text-gray-400 active:text-gray-200'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-1 right-1 h-0.5 bg-elden-gold shadow-[0_0_8px_#c8aa6e]" />
                )}
                <div className="relative">
                  <Icon className={`w-4 h-4 mb-0.5 ${
                    isActive ? 'text-elden-gold' : item.isStateful ? 'text-yellow-400' : 'text-gray-400'
                  }`} />
                  {item.badge !== undefined && (
                    <span className="absolute -top-1 -right-2 w-3.5 h-3.5 bg-elden-gold text-black rounded-full text-[8px] font-bold flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[9px] leading-tight font-serif whitespace-nowrap">
                  {item.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

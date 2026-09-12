import React from 'react';
import {
  Compass,
  Map,
  Sparkles,
  Gamepad2,
  Sword,
  Target,
  MapPin,
  Coins,
  CheckSquare,
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  checkedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, checkedCount }) => {
  const navItems = [
    { id: 'progression', label: '進行ガイド (序・中・終盤)', shortLabel: '進行ガイド', icon: Compass },
    { id: 'regions', label: '地域別マップ ＆ スポット', shortLabel: '地域マップ', icon: Map },
    { id: 'useful', label: '神遺灰・タリスマン・知識', shortLabel: '神遺灰・知識', icon: Sparkles },
    { id: 'controls', label: '基本操作・心得', shortLabel: '操作・心得', icon: Gamepad2 },
    { id: 'classes', label: '素性・おすすめ装備', shortLabel: '素性・装備', icon: Sword },
    { id: 'builds', label: 'おすすめビルド・ステ振り', shortLabel: 'ビルド', icon: Target },
    { id: 'upgrades', label: '強化アイテム・地図', shortLabel: '強化・地図', icon: MapPin },
    { id: 'runes', label: 'ルーン稼ぎ完全ガイド', shortLabel: 'ルーン稼ぎ', icon: Coins },
    {
      id: 'checklist',
      label: `回収チェック (${checkedCount})`,
      shortLabel: 'チェック',
      icon: CheckSquare,
      badge: checkedCount > 0 ? checkedCount : undefined,
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
          <div className="flex space-x-1 lg:space-x-1.5 py-2.5 overflow-x-auto no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-elden-gold/20 text-elden-gold-light border border-elden-gold/50 shadow-sm'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-elden-panel border border-transparent'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 lg:w-4 lg:h-4 ${isActive ? 'text-elden-gold' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="ml-1 px-1.5 py-0.2 text-[10px] rounded-full bg-elden-gold/30 text-elden-gold font-mono">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (Scrollable bottom bar with clean snap) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0d0f12]/95 backdrop-blur-lg border-t border-elden-gold/30 pb-safe">
        <div className="flex items-center overflow-x-auto no-scrollbar px-2 py-1 h-14 space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex flex-col items-center justify-center min-w-[70px] px-1 py-1 rounded-lg relative transition-all shrink-0 ${
                  isActive
                    ? 'bg-elden-gold/15 text-elden-gold-light'
                    : 'text-gray-400 active:text-gray-200'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-3 right-3 h-0.5 bg-elden-gold shadow-[0_0_8px_#c8aa6e]" />
                )}
                <div className="relative">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-elden-gold scale-110' : 'text-gray-400'}`} />
                  {item.badge !== undefined && (
                    <span className="absolute -top-1 -right-2 px-1 text-[8px] font-bold rounded-full bg-elden-gold text-black">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className={`text-[9px] tracking-tight mt-0.5 whitespace-nowrap ${isActive ? 'font-bold text-elden-gold-light' : 'text-gray-400'}`}>
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

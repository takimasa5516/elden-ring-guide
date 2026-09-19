import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { LostGuideSection } from './components/LostGuideSection';
import { ProgressionSection } from './components/ProgressionSection';
import { RegionMapSection } from './components/RegionMapSection';
import { AshesOfWarSection } from './components/AshesOfWarSection';
import { UsefulTipsSection } from './components/UsefulTipsSection';
import { NpcSafetySection } from './components/NpcSafetySection';
import { SmithingSection } from './components/SmithingSection';
import { PhysickSection } from './components/PhysickSection';
import { ControlsSection } from './components/ControlsSection';
import { ClassesWeaponsSection } from './components/ClassesWeaponsSection';
import { BuildsSection } from './components/BuildsSection';
import { UpgradesSection } from './components/UpgradesSection';
import { RuneFarmingSection } from './components/RuneFarmingSection';
import { ChecklistSection } from './components/ChecklistSection';
import { SearchModal } from './components/SearchModal';
import { upgradesList } from './data/upgradesData';
import { Github, Heart, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('lost-guide');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('elden_ring_guide_checklist');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('elden_ring_guide_checklist', JSON.stringify(checkedItems));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [checkedItems]);

  // Global search keyboard shortcuts (Cmd+K, Ctrl+K, or /)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      } else if (
        e.key === '/' &&
        (e.target as HTMLElement)?.tagName !== 'INPUT' &&
        (e.target as HTMLElement)?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const resetAll = () => {
    setCheckedItems({});
  };

  const navigateTab = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalChecklistCount = upgradesList.length;

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#d1d5db] flex flex-col selection:bg-elden-gold selection:text-black">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={navigateTab}
        checkedCount={checkedCount}
        totalChecklistCount={totalChecklistCount}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Navigation (Desktop Top Sticky / Mobile Bottom Stick) */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={navigateTab}
        checkedCount={checkedCount}
      />

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-24 md:pb-12">
        {activeTab === 'lost-guide' && <LostGuideSection onNavigateTab={navigateTab} />}
        {activeTab === 'progression' && <ProgressionSection />}
        {activeTab === 'regions' && <RegionMapSection />}
        {activeTab === 'ashes' && <AshesOfWarSection />}
        {activeTab === 'useful' && <UsefulTipsSection />}
        {activeTab === 'npc-safety' && <NpcSafetySection />}
        {activeTab === 'smithing' && <SmithingSection />}
        {activeTab === 'physick' && <PhysickSection />}
        {activeTab === 'controls' && <ControlsSection />}
        {activeTab === 'classes' && <ClassesWeaponsSection />}
        {activeTab === 'builds' && <BuildsSection />}
        {activeTab === 'upgrades' && (
          <UpgradesSection checkedItems={checkedItems} toggleItem={toggleItem} />
        )}
        {activeTab === 'runes' && <RuneFarmingSection />}
        {activeTab === 'checklist' && (
          <ChecklistSection
            checkedItems={checkedItems}
            toggleItem={toggleItem}
            resetAll={resetAll}
          />
        )}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectTab={navigateTab}
      />

      {/* Footer */}
      <footer className="border-t border-elden-border/60 bg-[#08090b] py-8 text-center text-xs text-gray-500 mb-14 md:mb-0">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center gap-2 text-elden-gold-light font-serif">
            <Sparkles className="w-4 h-4 text-elden-gold" />
            <span>ELDEN RING COMFORT SURVIVAL COMPENDIUM</span>
          </div>
          <p className="text-gray-400 max-w-lg mx-auto leading-relaxed text-[11px]">
            本サイトは『ELDEN RING』の攻略快適化・キャラ育成・アイテム探索をサポートする非公式ファンサイトです。
            ストーリー進行フローや結末に関する重大なネタバレを含まないよう配慮して編集されています。
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 text-gray-400">
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 inline" /> for Tarnished
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Github className="w-3.5 h-3.5" /> GitHub Pages Ready
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

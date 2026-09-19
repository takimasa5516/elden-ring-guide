import React, { useState } from 'react';
import {
  Sparkles,
  Swords,
  Hammer,
  Search,
  Filter,
  Info,
} from 'lucide-react';
import { ashesOfWarList, whetbladeList } from '../data/ashesOfWarData';
import { AshOfWarItem } from '../types';

export const AshesOfWarSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'ashes' | 'whetblades'>('ashes');
  const [selectedAffinity, setSelectedAffinity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const affinities = [
    { id: 'all', label: 'すべて' },
    { id: '重厚', label: '重厚 (筋力)' },
    { id: '鋭利', label: '鋭利 (技量)' },
    { id: '血', label: '血 (出血)' },
    { id: '冷気', label: '冷気 (凍結)' },
    { id: '炎', label: '炎 / 炎術' },
    { id: '神聖', label: '神聖 (祈祷)' },
  ];

  const filteredAshes: AshOfWarItem[] = ashesOfWarList.filter((item) => {
    const matchesAffinity =
      selectedAffinity === 'all' || item.affinity.includes(selectedAffinity);
    const matchesSearch =
      searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.feature.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.whyStrong.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAffinity && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-elden-card via-[#1c1815] to-elden-card border border-elden-gold/40 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elden-gold/10 border border-elden-gold/30 text-elden-gold text-xs font-bold font-mono tracking-wider mb-3">
            <Swords className="w-3.5 h-3.5 text-elden-gold animate-pulse" />
            ASHES OF WAR & WHETBLADES
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-serif tracking-wide">
            最強戦灰・戦技カタログ ＆ 砥石刃ガイド
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed">
            エルデンリングの難易度を劇的に引き下げる「人権戦技」と、あらゆる武器の属性派生を自由自在に変更できる「砥石刃（といしば）全5種」の入手場所と活用法を完全網羅。
          </p>
        </div>
        <div className="absolute -right-8 -bottom-8 w-56 h-56 bg-elden-gold/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Sub Tab Navigation */}
      <div className="flex border-b border-elden-border space-x-4">
        <button
          onClick={() => setActiveSubTab('ashes')}
          className={`pb-3 px-2 text-sm sm:text-base font-bold transition-all border-b-2 flex items-center gap-2 ${
            activeSubTab === 'ashes'
              ? 'border-elden-gold text-elden-gold'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>人権戦灰・戦技カタログ ({ashesOfWarList.length})</span>
        </button>
        <button
          onClick={() => setActiveSubTab('whetblades')}
          className={`pb-3 px-2 text-sm sm:text-base font-bold transition-all border-b-2 flex items-center gap-2 ${
            activeSubTab === 'whetblades'
              ? 'border-elden-gold text-elden-gold'
              : 'border-transparent text-gray-400 hover:text-white'
          }`}
        >
          <Hammer className="w-4 h-4" />
          <span>砥石刃（全5種）＆ 属性変質派生</span>
        </button>
      </div>

      {/* Ashes of War Tab Content */}
      {activeSubTab === 'ashes' && (
        <div className="space-y-6">
          {/* Filter and Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Affinity Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar w-full sm:w-auto pb-1 sm:pb-0">
              <Filter className="w-3.5 h-3.5 text-gray-400 shrink-0 mr-1" />
              {affinities.map((aff) => (
                <button
                  key={aff.id}
                  onClick={() => setSelectedAffinity(aff.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all border ${
                    selectedAffinity === aff.id
                      ? 'bg-elden-gold text-black border-elden-gold shadow'
                      : 'bg-elden-card text-gray-400 border-elden-border hover:text-white hover:border-gray-600'
                  }`}
                >
                  {aff.label}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="戦技名や効果で検索..."
                className="w-full bg-elden-card border border-elden-border rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-elden-gold"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredAshes.map((ash) => (
              <div
                key={ash.id}
                className="p-5 rounded-2xl bg-elden-card border border-elden-border hover:border-elden-gold/60 transition-all shadow-lg flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-black/60 border border-elden-gold/40 text-elden-gold font-mono font-bold">
                        派生: {ash.affinity}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-elden-gold transition-colors mt-1.5 font-serif">
                        {ash.name}
                      </h3>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-blue-950/40 text-blue-300 border border-blue-800/40 font-mono font-bold shrink-0">
                      {ash.fpCost}
                    </span>
                  </div>

                  <div className="text-xs text-gray-300 space-y-1 bg-black/40 p-3 rounded-xl border border-gray-800/80">
                    <p>
                      <span className="text-gray-400 font-bold">対応武器:</span>{' '}
                      <span className="text-gray-200">{ash.weaponTypes}</span>
                    </p>
                    <p>
                      <span className="text-gray-400 font-bold">入手場所:</span>{' '}
                      <span className="text-elden-gold-light">{ash.location}</span>
                    </p>
                    <p className="text-gray-400 text-[11px] mt-1 leading-relaxed">
                      {ash.howToGet}
                    </p>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {ash.feature}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-800/80 space-y-2">
                  <div className="p-2.5 rounded-lg bg-amber-950/20 border border-amber-800/40 text-xs text-amber-200 leading-relaxed">
                    <span className="font-bold text-amber-400 block mb-0.5">なぜ人権なのか:</span>
                    {ash.whyStrong}
                  </div>
                  <div className="text-[11px] text-gray-400 font-mono">
                    <span className="text-gray-400 font-bold">推奨ビルド:</span> {ash.recommendedFor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Whetblades Tab Content */}
      {activeSubTab === 'whetblades' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40 text-xs sm:text-sm text-gray-300 leading-relaxed flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-blue-400 mb-1">砥石刃（といしば）システムとは？</h4>
              <p>
                通常、戦灰を武器に装着すると、その戦灰が持つ固定の属性（重厚や鋭利など）にしか派生できません。しかし各地の「砥石刃」を拾うと、
                <strong className="text-white">【どんな物理系戦灰を装着しても、魔力・冷気・血・炎・神聖などを自由に選べる】</strong>
                ようになります。自分のステータスに合わせた属性派生を可能にする最重要アイテムです。
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {whetbladeList.map((wb) => (
              <div
                key={wb.id}
                className="p-5 rounded-2xl bg-elden-card border border-elden-border hover:border-elden-gold/50 transition-all space-y-3 shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-elden-gold/10 border border-elden-gold/40 flex items-center justify-center text-elden-gold font-bold shrink-0">
                      <Hammer className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white font-serif">
                        {wb.name}
                      </h4>
                      <p className="text-xs text-gray-400">場所: {wb.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs text-gray-400 mr-1">解放派生:</span>
                    {wb.affinities.map((aff) => (
                      <span
                        key={aff}
                        className="px-2.5 py-0.5 rounded-full bg-elden-gold/20 text-elden-gold border border-elden-gold/40 text-xs font-mono font-bold"
                      >
                        {aff}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-black/40 p-3 rounded-xl border border-gray-800 text-xs sm:text-sm text-gray-300 space-y-1.5">
                  <p>
                    <span className="font-bold text-gray-400">入手手順:</span> {wb.howToGet}
                  </p>
                  <p className="text-elden-gold-light leading-relaxed">
                    {wb.feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

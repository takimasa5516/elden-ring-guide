import React, { useState } from 'react';
import { upgradesList } from '../data/upgradesData';
import { UpgradeItem } from '../types';
import { MapPin, Check, Plus, Compass, Sparkles, Filter } from 'lucide-react';

interface UpgradesSectionProps {
  checkedItems: Record<string, boolean>;
  toggleItem: (id: string) => void;
}

export const UpgradesSection: React.FC<UpgradesSectionProps> = ({ checkedItems, toggleItem }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArea, setSelectedArea] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'すべて' },
    { id: 'tear', label: '聖杯の雫 (回復量UP)' },
    { id: 'seed', label: '黄金の種子 (回数UP)' },
    { id: 'map', label: '地図断片 (マップ解放)' },
    { id: 'physick', label: '霊薬・結晶雫' },
    { id: 'bell', label: '鍛石の鈴玉 (無限購入)' },
  ];

  const areas = [
    'all',
    'リムグレイブ・啜り泣き',
    '湖のリエーニエ',
    'ケイリッド・竜塚',
    'アルター高原・火山',
    '王都・山嶺・地下',
  ];

  const filteredItems = upgradesList.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesArea = selectedArea === 'all' || item.area === selectedArea;
    return matchesCat && matchesArea;
  });

  const getCategoryBadge = (category: UpgradeItem['category']) => {
    switch (category) {
      case 'tear':
        return <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">聖杯の雫</span>;
      case 'seed':
        return <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">黄金の種子</span>;
      case 'map':
        return <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">地図断片</span>;
      case 'physick':
        return <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">霊薬・雫</span>;
      case 'bell':
        return <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">鈴玉</span>;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Overview & Tips Card */}
      <div className="bg-elden-panel p-4 sm:p-6 rounded-2xl border border-elden-border space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
            <Compass className="w-6 h-6 text-elden-gold" />
            <span>重要強化アイテム ＆ 地図断片の確保場所</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
            ゲーム開始直後、ボスに挑む前にこれらを回収するだけで<strong>「HP回復回数が倍」「回復量が最大化」「マップ全体が視覚化」</strong>され、圧倒的に楽になります。チェックを入れると取得状況が自動保存されます。
          </p>
        </div>

        {/* Pro Tips Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="bg-black/50 border border-elden-gold/30 p-3.5 rounded-xl">
            <h4 className="text-xs font-bold text-elden-gold flex items-center gap-1.5 mb-1">
              <Sparkles className="w-4 h-4 text-elden-gold" />
              <span>地図断片を見つける超簡単なコツ</span>
            </h4>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              未踏破エリアの黒い地図をよく見ると、うっすらと<strong>「茶色い小さな石柱・石碑のマーク」</strong>が描かれています。そこへ光柱（マーカー）を立てて霊馬で駆け抜ければ、敵を倒さず地図断片を100%拾えます。
            </p>
          </div>

          <div className="bg-black/50 border border-elden-gold/30 p-3.5 rounded-xl">
            <h4 className="text-xs font-bold text-elden-gold flex items-center gap-1.5 mb-1">
              <Sparkles className="w-4 h-4 text-elden-gold" />
              <span>「聖杯の雫」は教会に必ずある</span>
            </h4>
            <p className="text-[11px] text-gray-300 leading-relaxed">
              聖杯の雫は各地の「〇〇教会」と名のつく廃墟のマリカ像の足元に必ず落ちています。特に「啜り泣きの半島」だけで雫が3つ手に入り、序盤の回復量が劇的にアップします。
            </p>
          </div>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="space-y-3 bg-elden-panel/60 p-4 rounded-xl border border-elden-border">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          <Filter className="w-4 h-4 text-gray-400 shrink-0" />
          <span className="text-xs text-gray-400 shrink-0">種別:</span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-elden-gold text-black font-bold shadow'
                  : 'bg-elden-card text-gray-400 hover:text-white border border-elden-border'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Area Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar pt-2 border-t border-elden-border/50">
          <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
          <span className="text-xs text-gray-400 shrink-0">地域:</span>
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setSelectedArea(area)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedArea === area
                  ? 'bg-elden-gold-dark text-white font-bold'
                  : 'bg-elden-card text-gray-400 hover:text-white border border-elden-border'
              }`}
            >
              {area === 'all' ? '全エリア' : area}
            </button>
          ))}
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-gray-400 px-1">
          <span>表示中: {filteredItems.length} 件</span>
          <span>チェックボックスをタップで回収状態を記録</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredItems.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                  isChecked
                    ? 'bg-black/40 border-elden-gold/30 opacity-70'
                    : 'bg-elden-panel border-elden-border hover:border-elden-gold/50'
                }`}
              >
                {/* Custom Checkbox */}
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all border ${
                    isChecked
                      ? 'bg-elden-gold border-elden-gold text-black shadow-[0_0_8px_rgba(200,170,110,0.6)]'
                      : 'border-gray-600 bg-elden-card hover:border-elden-gold'
                  }`}
                >
                  {isChecked ? <Check className="w-4 h-4 stroke-[3]" /> : <Plus className="w-3.5 h-3.5 text-transparent hover:text-gray-500" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className={`text-sm font-bold font-serif truncate ${isChecked ? 'line-through text-gray-400' : 'text-white'}`}>
                      {item.name}
                    </h4>
                    {getCategoryBadge(item.category)}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-elden-gold font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed mb-2">
                    {item.detail}
                  </p>

                  <div className="text-[11px] text-gray-400 bg-black/40 px-2.5 py-1.5 rounded border border-white/5">
                    <span className="text-elden-gold-light font-semibold">効果: </span>
                    <span>{item.effect}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

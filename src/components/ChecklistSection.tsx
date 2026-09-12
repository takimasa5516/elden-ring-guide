import React, { useState } from 'react';
import { upgradesList } from '../data/upgradesData';
import { RotateCcw, Check, MapPin, Trophy } from 'lucide-react';

interface ChecklistSectionProps {
  checkedItems: Record<string, boolean>;
  toggleItem: (id: string) => void;
  resetAll: () => void;
}

export const ChecklistSection: React.FC<ChecklistSectionProps> = ({
  checkedItems,
  toggleItem,
  resetAll,
}) => {
  const [filterArea, setFilterArea] = useState<string>('all');

  const totalItems = upgradesList.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const overallProgress = Math.round((checkedCount / totalItems) * 100) || 0;

  // Category specific progress
  const categories = [
    { key: 'tear', name: '聖杯の雫 (回復量UP)' },
    { key: 'seed', name: '黄金の種子 (回数UP)' },
    { key: 'map', name: '地図断片' },
    { key: 'physick', name: '霊薬・雫' },
    { key: 'bell', name: '鈴玉' },
  ];

  const categoryStats = categories.map((cat) => {
    const items = upgradesList.filter((i) => i.category === cat.key);
    const checked = items.filter((i) => !!checkedItems[i.id]).length;
    return {
      ...cat,
      total: items.length,
      checked,
      percent: Math.round((checked / items.length) * 100) || 0,
    };
  });

  const areas = [
    'all',
    'リムグレイブ・啜り泣き',
    '湖のリエーニエ',
    'ケイリッド・竜塚',
    'アルター高原・火山',
    '王都・山嶺・地下',
  ];

  const displayedItems = upgradesList.filter((item) => {
    return filterArea === 'all' || item.area === filterArea;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Progress Dashboard */}
      <div className="bg-elden-panel p-4 sm:p-6 rounded-2xl border border-elden-gold/40 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elden-gold/15 border border-elden-gold/30 text-elden-gold-light text-xs font-serif font-bold mb-2">
              <Trophy className="w-4 h-4 text-elden-gold" />
              <span>COLLECTION TRACKER</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              重要強化アイテム 回収トラッカー
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              ブラウザ（LocalStorage）に自動保存されます。再訪時も記録が維持されます。
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={() => {
                if (window.confirm('チェック状態をすべてリセットしますか？')) {
                  resetAll();
                }
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-elden-card border border-elden-border hover:border-red-500/50 text-xs text-gray-400 hover:text-red-300 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>リセット</span>
            </button>
          </div>
        </div>

        {/* Big Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-baseline text-xs sm:text-sm font-serif">
            <span className="text-gray-300 font-medium">全体回収率</span>
            <span className="font-mono text-base sm:text-lg font-bold text-elden-gold-light">
              {checkedCount} / {totalItems} 個 ({overallProgress}%)
            </span>
          </div>
          <div className="h-3 w-full bg-black/60 rounded-full overflow-hidden border border-elden-border">
            <div
              className="h-full bg-gradient-to-r from-elden-gold-dark via-elden-gold to-yellow-300 transition-all duration-300 shadow-[0_0_10px_#c8aa6e]"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>

        {/* Category breakdown cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-2">
          {categoryStats.map((stat) => (
            <div key={stat.key} className="p-2.5 rounded-xl bg-black/40 border border-elden-border text-center space-y-1">
              <span className="text-[11px] text-gray-400 font-medium block truncate">
                {stat.name}
              </span>
              <div className="font-mono text-sm font-bold text-white flex items-center justify-center gap-1">
                <span className={stat.percent === 100 ? 'text-emerald-400' : 'text-elden-gold-light'}>
                  {stat.checked}
                </span>
                <span className="text-gray-500 text-xs">/</span>
                <span className="text-xs text-gray-400">{stat.total}</span>
              </div>
              <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-elden-gold transition-all"
                  style={{ width: `${stat.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Area Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
        <span className="text-xs text-gray-400 shrink-0">エリア絞り込み:</span>
        {areas.map((area) => (
          <button
            key={area}
            onClick={() => setFilterArea(area)}
            className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              filterArea === area
                ? 'bg-elden-gold text-black font-bold shadow'
                : 'bg-elden-panel text-gray-400 hover:text-white border border-elden-border'
            }`}
          >
            {area === 'all' ? 'すべての地域' : area}
          </button>
        ))}
      </div>

      {/* Item Checklist Cards */}
      <div className="space-y-2.5">
        {displayedItems.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                isChecked
                  ? 'bg-black/30 border-elden-gold/20 opacity-60'
                  : 'bg-elden-panel/90 border-elden-border hover:border-elden-gold/40'
              }`}
            >
              {/* Checkbox */}
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all border ${
                  isChecked
                    ? 'bg-elden-gold border-elden-gold text-black shadow-[0_0_8px_rgba(200,170,110,0.5)]'
                    : 'border-gray-600 bg-elden-card hover:border-elden-gold'
                }`}
              >
                {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                  <h4 className={`text-sm font-bold font-serif ${isChecked ? 'line-through text-gray-500' : 'text-white'}`}>
                    {item.name}
                  </h4>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/50 border border-elden-border text-gray-400">
                    {item.area}
                  </span>
                </div>

                <div className="text-xs text-elden-gold font-medium mb-1 truncate">
                  📍 {item.location}
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

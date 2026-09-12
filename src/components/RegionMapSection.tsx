import React, { useState } from 'react';
import { regionsData, MapPin } from '../data/regionMapData';
import { Map, MapPin as PinIcon, AlertTriangle, Compass, Check, Sparkles, Church, Pickaxe, Landmark, TreePine } from 'lucide-react';

export const RegionMapSection: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(regionsData[0].id);
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(regionsData[0].pins[0]);

  const currentRegion = regionsData.find((r) => r.id === selectedRegionId) || regionsData[0];

  const handleRegionChange = (id: string) => {
    setSelectedRegionId(id);
    const newReg = regionsData.find((r) => r.id === id) || regionsData[0];
    setSelectedPin(newReg.pins[0] || null);
  };

  const getPinIcon = (type: MapPin['type']) => {
    switch (type) {
      case 'church':
        return <Church className="w-3.5 h-3.5 text-red-400" />;
      case 'mine':
        return <Pickaxe className="w-3.5 h-3.5 text-cyan-400" />;
      case 'tree':
        return <TreePine className="w-3.5 h-3.5 text-emerald-400" />;
      case 'ruins':
        return <Landmark className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-elden-gold" />;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Banner */}
      <div className="bg-elden-panel p-4 sm:p-6 rounded-2xl border border-elden-border space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-elden-gold/15 border border-elden-gold/30 text-elden-gold-light text-xs font-serif font-bold">
          <Map className="w-3.5 h-3.5 text-elden-gold" />
          <span>INTERACTIVE MAP GUIDE • 地域別マップ ＆ スポット</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
          <Compass className="w-6 h-6 text-elden-gold" />
          <span>地域ごとの探索マップ ＆ 重要スポット配置</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          各地域の主要ランドマーク（教会・坑道・廃墟・小黄金樹）の位置関係と、地図断片・神アイテムの入手場所を視覚的に確認できます。マップ上のピンまたはリストをタップして詳細を確認してください。
        </p>
      </div>

      {/* Region Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {regionsData.map((reg) => {
          const isSelected = reg.id === currentRegion.id;
          return (
            <button
              key={reg.id}
              onClick={() => handleRegionChange(reg.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-elden-gold text-black font-bold shadow-md'
                  : 'bg-elden-panel text-gray-400 hover:text-white border border-elden-border'
              }`}
            >
              <PinIcon className="w-3.5 h-3.5 shrink-0" />
              <span>{reg.name.split(' ＆ ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Region Map Container */}
      <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-4 sm:p-6 space-y-6 shadow-xl">
        {/* Region Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-elden-border/80 pb-4">
          <div>
            <span className="text-[10px] font-mono text-gray-400 uppercase block">
              {currentRegion.enName}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
              {currentRegion.name}
            </h3>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-elden-gold/20 text-elden-gold-light border border-elden-gold/40 font-mono font-bold self-start sm:self-auto">
            推奨: {currentRegion.recommendedLevel}
          </span>
        </div>

        {/* Visual Map Canvas Board */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
              <span>マップ上のピンをタップすると詳細が表示されます</span>
            </span>
            <div className="hidden sm:flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1 text-red-400"><Church className="w-3 h-3" /> 教会(雫)</span>
              <span className="flex items-center gap-1 text-cyan-400"><Pickaxe className="w-3 h-3" /> 坑道(鍛石)</span>
              <span className="flex items-center gap-1 text-emerald-400"><TreePine className="w-3 h-3" /> 黄金樹(霊薬)</span>
              <span className="flex items-center gap-1 text-amber-400"><Landmark className="w-3 h-3" /> 廃墟/拠点</span>
            </div>
          </div>

          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#07080a] rounded-2xl border-2 border-elden-gold/40 overflow-hidden shadow-inner flex items-center justify-center">
            {/* Ambient Map Texture / Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f242d_1px,transparent_1px),linear-gradient(to_bottom,#1f242d_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-elden-gold/5 via-transparent to-black/80 pointer-events-none" />

            {/* Compass Rose Watermark */}
            <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none font-serif text-6xl text-elden-gold select-none font-bold">
              ✦
            </div>

            {/* Region Label Watermark */}
            <div className="absolute left-4 top-4 text-xs sm:text-sm font-serif text-elden-gold/40 tracking-widest uppercase pointer-events-none">
              {currentRegion.name}
            </div>

            {/* Pins on the Map */}
            {currentRegion.pins.map((pin) => {
              const isSelected = selectedPin?.id === pin.id;
              return (
                <button
                  key={pin.id}
                  onClick={() => setSelectedPin(pin)}
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group z-20 transition-all ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                  }`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg border transition-all ${
                      isSelected
                        ? 'bg-elden-gold border-white text-black shadow-[0_0_15px_#c8aa6e]'
                        : 'bg-elden-panel/90 border-elden-gold/50 text-white group-hover:border-elden-gold'
                    }`}
                  >
                    {getPinIcon(pin.type)}
                  </div>
                  {/* Pin Name Label on Map */}
                  <span
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded text-[9px] font-sans font-bold whitespace-nowrap pointer-events-none transition-opacity ${
                      isSelected
                        ? 'bg-black/90 text-elden-gold-light border border-elden-gold/60 opacity-100'
                        : 'bg-black/70 text-gray-300 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {pin.name.split(' / ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Pin Details Box */}
        {selectedPin && (
          <div className="bg-black/60 border border-elden-gold/50 rounded-xl p-4 sm:p-5 space-y-2 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-elden-gold/20 text-elden-gold">
                  {getPinIcon(selectedPin.type)}
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-mono uppercase block">{selectedPin.typeLabel}</span>
                  <h4 className="text-base sm:text-lg font-bold text-white font-serif">{selectedPin.name}</h4>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-black border border-elden-gold/40 text-elden-gold font-mono">
                マップ座標: X {selectedPin.x}% / Y {selectedPin.y}%
              </span>
            </div>

            <div className="mt-2 text-xs sm:text-sm text-yellow-300 font-bold bg-yellow-950/30 p-2.5 rounded-lg border border-yellow-800/40">
              💎 主な入手アイテム: {selectedPin.keyItems}
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pt-1">
              {selectedPin.description}
            </p>
          </div>
        )}

        {/* Map Fragments in this Region */}
        <div className="bg-elden-card/80 p-4 rounded-xl border border-elden-border space-y-2">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span>この地域の地図断片の場所</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {currentRegion.mapFragments.map((mf, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-xs">
                <strong className="text-cyan-300 block">{mf.name}</strong>
                <span className="text-gray-400 text-[11px]">📍 {mf.location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Exploration Flow & Hazards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Flow */}
          <div className="bg-elden-card/80 p-4 rounded-xl border border-elden-border space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>快適おすすめ探索ルート</span>
            </h4>
            <div className="space-y-1.5 text-xs text-gray-300">
              {currentRegion.explorationFlow.map((flow, idx) => (
                <p key={idx} className="leading-relaxed bg-black/20 p-2 rounded">{flow}</p>
              ))}
            </div>
          </div>

          {/* Hazards */}
          <div className="bg-elden-card/80 p-4 rounded-xl border border-elden-border space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span>地域の危険 ＆ 即死エネミー注意報</span>
            </h4>
            <div className="space-y-1.5 text-xs text-gray-300">
              {currentRegion.hazards.map((hazard, idx) => (
                <p key={idx} className="leading-relaxed bg-red-950/20 border border-red-900/30 p-2 rounded text-red-200">{hazard}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

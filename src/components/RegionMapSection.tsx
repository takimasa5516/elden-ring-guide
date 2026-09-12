import React, { useState } from 'react';
import { regionsData, MapPin } from '../data/regionMapData';
import {
  Map,
  MapPin as PinIcon,
  AlertTriangle,
  Compass,
  Check,
  Sparkles,
  Church,
  Pickaxe,
  Landmark,
  TreePine,
  Eye,
  Maximize2,
  X,
} from 'lucide-react';

export const RegionMapSection: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(regionsData[0].id);
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(regionsData[0].pins[0]);
  const [showPins, setShowPins] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const currentRegion = regionsData.find((r) => r.id === selectedRegionId) || regionsData[0];

  const getMapImageUrl = (path: string) => {
    const base = import.meta.env.BASE_URL || './';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${cleanBase}${cleanPath}`;
  };

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
          <span>INTERACTIVE MAP GUIDE • 実物マップ画像 ＆ スポット配置</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
          <Compass className="w-6 h-6 text-elden-gold" />
          <span>地域ごとの探索マップ ＆ 重要スポット配置</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          各地域の実際の地図画像（地形・街道・祝福・星印）を表示しています。
          マップ上のピンをタップすると下部に詳細が表示され、<strong>「拡大表示」ボタン</strong>で地図全体を高精細に閲覧できます。
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
      <div className="bg-elden-panel border border-elden-gold/40 rounded-2xl p-4 sm:p-6 space-y-5 shadow-xl">
        {/* Region Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-elden-border/80 pb-4">
          <div>
            <span className="text-[10px] font-mono text-gray-400 uppercase block">
              {currentRegion.enName}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
              {currentRegion.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Toggle Pins Button */}
            <button
              onClick={() => setShowPins(!showPins)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors ${
                showPins
                  ? 'bg-elden-gold/20 text-elden-gold-light border-elden-gold/40'
                  : 'bg-elden-card text-gray-400 border-elden-border hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>ピン表示: {showPins ? 'ON' : 'OFF'}</span>
            </button>

            {/* Fullscreen Zoom Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 rounded-lg border border-elden-border bg-elden-card hover:border-elden-gold text-xs text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5 text-elden-gold" />
              <span>地図を拡大</span>
            </button>
          </div>
        </div>

        {/* Visual Map Canvas with Real Elden Ring Image Background */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
              <span>地図上のピンまたは地図画像をタップして詳細・拡大を確認</span>
            </span>
            <div className="hidden sm:flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1 text-red-400"><Church className="w-3 h-3" /> 教会(雫)</span>
              <span className="flex items-center gap-1 text-cyan-400"><Pickaxe className="w-3 h-3" /> 坑道(鍛石)</span>
              <span className="flex items-center gap-1 text-emerald-400"><TreePine className="w-3 h-3" /> 黄金樹(霊薬)</span>
              <span className="flex items-center gap-1 text-amber-400"><Landmark className="w-3 h-3" /> 拠点/廃墟</span>
            </div>
          </div>

          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#0c0d10] rounded-2xl border-2 border-elden-gold/50 overflow-hidden shadow-2xl flex items-center justify-center select-none group">
            {/* Real Map Graphic Background */}
            <img
              src={getMapImageUrl(currentRegion.mapImage)}
              alt={`${currentRegion.name} の地図`}
              className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center transition-all duration-300 pointer-events-none"
              loading="eager"
            />

            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

            {/* Watermark Label */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-elden-gold/40 text-xs font-serif text-elden-gold-light font-bold pointer-events-none z-10">
              📍 {currentRegion.name}
            </div>

            {/* Interactive Pins on the Map */}
            {showPins &&
              currentRegion.pins.map((pin) => {
                const isSelected = selectedPin?.id === pin.id;
                return (
                  <button
                    key={pin.id}
                    onClick={() => setSelectedPin(pin)}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 transition-all ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-2xl border-2 transition-all ${
                        isSelected
                          ? 'bg-elden-gold border-white text-black shadow-[0_0_20px_#c8aa6e]'
                          : 'bg-[#121418]/90 border-elden-gold/70 text-white hover:border-elden-gold'
                      }`}
                    >
                      {getPinIcon(pin.type)}
                    </div>

                    {/* Pin Label Tooltip */}
                    <span
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded text-[9px] font-sans font-bold whitespace-nowrap pointer-events-none transition-all ${
                        isSelected
                          ? 'bg-black/95 text-elden-gold-light border border-elden-gold shadow-lg opacity-100'
                          : 'bg-black/80 text-gray-300 opacity-0 group-hover:opacity-90'
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
          <div className="bg-black/70 border border-elden-gold/60 rounded-xl p-4 sm:p-5 space-y-2 animate-fadeIn">
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

            <div className="mt-2 text-xs sm:text-sm text-yellow-300 font-bold bg-yellow-950/40 p-2.5 rounded-lg border border-yellow-800/40">
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

      {/* Fullscreen Map Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex flex-col items-center justify-center animate-fadeIn">
          <div className="w-full max-w-5xl flex items-center justify-between pb-3 text-white">
            <h3 className="text-lg font-bold font-serif text-elden-gold-light flex items-center gap-2">
              <Map className="w-5 h-5 text-elden-gold" />
              <span>{currentRegion.name} 高精細マップ</span>
            </h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 rounded-lg bg-elden-panel border border-elden-border hover:border-elden-gold text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="w-full max-w-5xl max-h-[80vh] overflow-auto rounded-xl border-2 border-elden-gold/50 bg-[#0a0b0d] p-2 flex items-center justify-center">
            <img
              src={getMapImageUrl(currentRegion.mapImage)}
              alt={currentRegion.name}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          <p className="text-xs text-gray-400 mt-2 text-center">
            Escキーまたは右上の ✕ ボタンで閉じます
          </p>
        </div>
      )}
    </div>
  );
};

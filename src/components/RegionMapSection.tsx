import React, { useState } from 'react';
import { regionsData, MapPin } from '../data/regionMapData';
import {
  Map,
  MapPin as PinIcon,
  Compass,
  Eye,
  Maximize2,
  X,
  ListOrdered,
  Tag,
} from 'lucide-react';

export const RegionMapSection: React.FC = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(regionsData[0].id);
  const [selectedPin, setSelectedPin] = useState<MapPin | null>(regionsData[0].pins[0]);
  // pinMode: 'all' (地名＋番号), 'compact' (番号のみ), 'none' (ピンなし・白地図)
  const [pinMode, setPinMode] = useState<'all' | 'compact' | 'none'>('all');
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

  const scrollToPinInList = (pin: MapPin) => {
    setSelectedPin(pin);
    const el = document.getElementById(`spot-card-${pin.id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Banner */}
      <div className="bg-elden-panel p-4 sm:p-6 rounded-2xl border border-elden-border space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-elden-gold/15 border border-elden-gold/30 text-elden-gold-light text-xs font-serif font-bold">
          <Map className="w-3.5 h-3.5 text-elden-gold" />
          <span>INTERACTIVE MAP GUIDE • 地方別 地名＆訪問ポイント完全網羅</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
          <Compass className="w-6 h-6 text-elden-gold" />
          <span>地域ごとの探索マップ ＆ 訪問ポイント配置</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
          Gamerch準拠で各地方の主要ランドマーク・ダンジョン・祝福・教会を番号付きで完全配置しています。<br className="hidden sm:inline" />
          上部の切り替えボタンで<strong>「地名＋番号表示」「番号のみ」「地名なし（白地図モード）」</strong>を自在に切り替え可能です。
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
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isSelected ? 'bg-black/30 text-black font-bold' : 'bg-black/50 text-gray-400'
              }`}>
                {reg.pins.length}
              </span>
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
            <div className="flex items-center gap-3 mt-0.5">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                {currentRegion.name}
              </h3>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-elden-gold/20 text-elden-gold border border-elden-gold/40 font-mono font-bold">
                適正 {currentRegion.recommendedLevel}
              </span>
            </div>
          </div>

          {/* Map Display Toggles */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Pin Mode Toggle Buttons */}
            <div className="inline-flex p-0.5 bg-elden-card rounded-lg border border-elden-border">
              <button
                onClick={() => setPinMode('all')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all flex items-center gap-1 ${
                  pinMode === 'all'
                    ? 'bg-elden-gold text-black font-bold shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="地図上に地名ラベルと番号を表示"
              >
                <Tag className="w-3 h-3" />
                <span>地名＋番号</span>
              </button>
              <button
                onClick={() => setPinMode('compact')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all flex items-center gap-1 ${
                  pinMode === 'compact'
                    ? 'bg-elden-gold text-black font-bold shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="番号ピンのみ表示"
              >
                <ListOrdered className="w-3 h-3" />
                <span>番号のみ</span>
              </button>
              <button
                onClick={() => setPinMode('none')}
                className={`px-2.5 py-1 rounded text-xs font-medium transition-all flex items-center gap-1 ${
                  pinMode === 'none'
                    ? 'bg-elden-gold text-black font-bold shadow'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="ピンを非表示にして白地図のみ表示"
              >
                <Eye className="w-3 h-3" />
                <span>地名なし(白地図)</span>
              </button>
            </div>

            {/* Expand Modal Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1 bg-elden-card border border-elden-border hover:border-elden-gold/60 text-gray-300 hover:text-white rounded-lg text-xs font-medium transition-all flex items-center gap-1.5"
            >
              <Maximize2 className="w-3.5 h-3.5 text-elden-gold" />
              <span>全画面拡大</span>
            </button>
          </div>
        </div>

        {/* Exploration Flow & Summary */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-elden-card border border-elden-border/80 text-xs sm:text-sm text-gray-300 leading-relaxed">
          <p className="mb-2 font-medium text-gray-200">{currentRegion.summary}</p>
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            <span className="text-elden-gold font-bold shrink-0">地図断片の場所:</span>
            {currentRegion.mapFragments.map((mf, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/40 text-gray-300 border border-gray-700 text-xs"
              >
                <PinIcon className="w-3 h-3 text-elden-gold" />
                <span className="font-bold text-white">{mf.name}</span>: {mf.location}
              </span>
            ))}
          </div>
        </div>

        {/* Map Canvas with Interactive Overlay Pins */}
        <div className="space-y-2">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-elden-gold/30 bg-[#121418] shadow-2xl group select-none">
            {/* Base Map Image */}
            <img
              src={getMapImageUrl(currentRegion.mapImage)}
              alt={`${currentRegion.name} の公式マップ`}
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-500"
            />

            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.6)]" />

            {/* Interactive Overlay Pins */}
            {pinMode !== 'none' &&
              currentRegion.pins.map((pin) => {
                const isSelected = selectedPin?.id === pin.id;
                return (
                  <div
                    key={pin.id}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                    onClick={() => scrollToPinInList(pin)}
                  >
                    <div className="relative flex items-center group/pin">
                      {/* Numbered Pin Icon */}
                      <div
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold font-mono transition-all transform ${
                          isSelected
                            ? 'bg-elden-gold text-black ring-4 ring-elden-gold/40 scale-125 z-30 shadow-[0_0_12px_#c8aa6e]'
                            : 'bg-black/90 text-elden-gold border-2 border-elden-gold hover:scale-115 hover:bg-elden-gold hover:text-black shadow-md'
                        }`}
                      >
                        {pin.number}
                      </div>

                      {/* Name Label Tag (Visible when pinMode === 'all' or hovered) */}
                      {(pinMode === 'all' || isSelected) && (
                        <div
                          className={`ml-1.5 px-2 py-0.5 rounded shadow-lg backdrop-blur-md whitespace-nowrap text-[10px] sm:text-[11px] font-bold border transition-all ${
                            isSelected
                              ? 'bg-elden-gold text-black border-white shadow-[0_0_10px_rgba(200,170,110,0.5)] z-30'
                              : 'bg-black/85 text-white border-elden-gold/50 group-hover/pin:border-elden-gold z-20'
                          }`}
                        >
                          <span>{pin.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="flex items-center justify-between text-[11px] text-gray-400 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-elden-gold animate-pulse inline-block" />
              マップ上のピンをタップすると、下部の一覧と連動して詳細が表示されます。
            </span>
            <span className="font-mono text-elden-gold">全 {currentRegion.pins.length} 箇所 網羅</span>
          </div>
        </div>

        {/* Selected Pin Mini Info Box */}
        {selectedPin && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-elden-card to-elden-panel border border-elden-gold/60 shadow-lg animate-fadeIn flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-elden-gold text-black font-bold font-mono text-sm flex items-center justify-center shrink-0 shadow-md">
                {selectedPin.number}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="text-base font-bold text-white">{selectedPin.name}</h4>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/60 border border-gray-700 text-gray-300 font-mono">
                    {selectedPin.typeLabel}
                  </span>
                </div>
                <p className="text-xs text-elden-gold-light mt-0.5 font-bold">
                  最重要回収: {selectedPin.keyItems}
                </p>
                <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                  {selectedPin.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => scrollToPinInList(selectedPin)}
              className="self-end sm:self-center px-3 py-1.5 bg-elden-gold/20 hover:bg-elden-gold text-elden-gold hover:text-black border border-elden-gold/40 rounded-lg text-xs font-bold transition-all shrink-0"
            >
              リストへ移動 ↓
            </button>
          </div>
        )}

        {/* Gamerch-Style Complete Visiting Points Directory */}
        <div className="space-y-4 pt-4 border-t border-elden-border">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-elden-gold" />
              <h3 className="text-lg font-bold text-white font-serif">
                {currentRegion.name} 訪問ポイント完全一覧表
              </h3>
            </div>
            <span className="text-xs text-gray-400 font-mono">
              ※マップの番号【1】〜【{currentRegion.pins.length}】と完全対応
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentRegion.pins.map((pin) => {
              const isSelected = selectedPin?.id === pin.id;
              return (
                <div
                  id={`spot-card-${pin.id}`}
                  key={pin.id}
                  onClick={() => setSelectedPin(pin)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1a1712] border-elden-gold shadow-md ring-1 ring-elden-gold'
                      : 'bg-elden-card/80 border-elden-border hover:border-elden-gold/50 hover:bg-elden-panel'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                            isSelected
                              ? 'bg-elden-gold text-black shadow'
                              : 'bg-black/60 text-elden-gold border border-elden-gold/40'
                          }`}
                        >
                          {pin.number}
                        </span>
                        <h4 className="text-sm font-bold text-white leading-snug">
                          {pin.name}
                        </h4>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-black/50 border border-gray-700 text-gray-300 font-mono shrink-0">
                        {pin.typeLabel}
                      </span>
                    </div>

                    <div className="pl-8 space-y-1">
                      <div className="p-2 rounded bg-black/40 border border-white/5 text-xs text-elden-gold-light font-bold">
                        🎁 {pin.keyItems}
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed pt-1">
                        {pin.description}
                      </p>
                    </div>
                  </div>

                  <div className="pl-8 pt-2 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-400 font-mono">
                    <span>座標: X {pin.x}% / Y {pin.y}%</span>
                    {isSelected && <span className="text-elden-gold font-bold">● マップ選択中</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Map Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col p-2 sm:p-6 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 px-2">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-white font-serif">
                {currentRegion.name} 全画面マップ
              </h3>
              <div className="inline-flex p-0.5 bg-elden-card rounded-lg border border-elden-border text-xs">
                <button
                  onClick={() => setPinMode('all')}
                  className={`px-2.5 py-1 rounded ${
                    pinMode === 'all' ? 'bg-elden-gold text-black font-bold' : 'text-gray-300'
                  }`}
                >
                  地名＋番号
                </button>
                <button
                  onClick={() => setPinMode('compact')}
                  className={`px-2.5 py-1 rounded ${
                    pinMode === 'compact' ? 'bg-elden-gold text-black font-bold' : 'text-gray-300'
                  }`}
                >
                  番号のみ
                </button>
                <button
                  onClick={() => setPinMode('none')}
                  className={`px-2.5 py-1 rounded ${
                    pinMode === 'none' ? 'bg-elden-gold text-black font-bold' : 'text-gray-300'
                  }`}
                >
                  白地図(地名なし)
                </button>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 rounded-xl bg-elden-card border border-elden-border text-gray-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 relative rounded-xl overflow-auto border border-elden-gold/30 bg-[#0a0c0f] flex items-center justify-center p-2">
            <div className="relative max-w-5xl w-full aspect-[16/10] sm:aspect-[16/9]">
              <img
                src={getMapImageUrl(currentRegion.mapImage)}
                alt={currentRegion.name}
                className="w-full h-full object-contain"
              />
              {pinMode !== 'none' &&
                currentRegion.pins.map((pin) => (
                  <div
                    key={pin.id}
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                    onClick={() => {
                      setSelectedPin(pin);
                      setIsModalOpen(false);
                      scrollToPinInList(pin);
                    }}
                  >
                    <div className="flex items-center group">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black text-elden-gold font-bold font-mono text-xs flex items-center justify-center border-2 border-elden-gold hover:scale-125 hover:bg-elden-gold hover:text-black transition-all shadow-md">
                        {pin.number}
                      </div>
                      {pinMode === 'all' && (
                        <span className="ml-1 px-2 py-0.5 rounded bg-black/90 text-white border border-elden-gold/60 text-[10px] sm:text-xs font-bold whitespace-nowrap">
                          {pin.name}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { somberStoneRoute, regularSmithingTable, bellBearingsList } from '../data/smithingData';
import {
  Hammer,
  Gem,
  CheckCircle,
  Sparkles,
  MapPin,
  ShoppingBag,
  Info,
  ShieldCheck,
} from 'lucide-react';

export const SmithingSection: React.FC = () => {
  const [subTab, setSubTab] = useState<'somber' | 'regular' | 'bell'>('somber');
  const [bellFilter, setBellFilter] = useState<'all' | 'smithing' | 'somber'>('all');

  const filteredBells = bellBearingsList.filter((b) => {
    if (bellFilter === 'all') return true;
    return b.category === bellFilter;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-elden-panel p-5 sm:p-6 rounded-2xl border border-elden-border relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-amber-950/20 rounded-full blur-2xl pointer-events-none" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-800/60 text-elden-gold">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
                鍛石・喪色の鍛石「拾うだけ」逆引きルート表
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                坑道攻略やボス戦を完全スキップ！特殊武器を即座に+9（通常+24相当）にする裏技ルートと全鍛石逆引き。
              </p>
            </div>
          </div>

          {/* Subtab Buttons */}
          <div className="inline-flex p-1 bg-elden-card rounded-xl border border-elden-border self-start sm:self-auto shrink-0">
            <button
              onClick={() => setSubTab('somber')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                subTab === 'somber'
                  ? 'bg-elden-gold text-black font-bold shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              喪色+9 最速ルート
            </button>
            <button
              onClick={() => setSubTab('regular')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                subTab === 'regular'
                  ? 'bg-elden-gold text-black font-bold shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              通常鍛石 [1]〜[8]
            </button>
            <button
              onClick={() => setSubTab('bell')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                subTab === 'bell'
                  ? 'bg-elden-gold text-black font-bold shadow'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              鍛石の鈴玉一覧
            </button>
          </div>
        </div>
      </div>

      {/* Subtab 1: Somber Stone +9 Fast Route */}
      {subTab === 'somber' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Highlight Callout */}
          <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#1c140a] to-[#120f0a] border border-elden-gold/50 shadow-lg">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-elden-gold shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-elden-gold-light">
                  【衝撃の快適化】ボス戦ゼロで「名刀月隠」「猟犬の長牙」を+9へ！
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  喪色強化の特殊武器は、通常武器と違って各段階【1個】ずつ消費するだけで強化できます。
                  下記のルートを霊馬で駆け抜けて拾うだけで、序盤からラスボス戦手前の圧倒的火力（通常武器の+24相当）が手に入ります。
                </p>
              </div>
            </div>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {somberStoneRoute.map((item) => (
              <div
                key={item.level}
                className="bg-elden-panel/90 p-4 sm:p-5 rounded-xl border border-elden-border flex flex-col justify-between relative group hover:border-elden-gold/50 transition-all shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-bold bg-elden-gold/20 text-elden-gold border border-elden-gold/40">
                      STEP {item.level}
                    </span>
                    {item.isNoBoss && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-700/60 text-emerald-300 flex items-center gap-1 font-bold">
                        <ShieldCheck className="w-3 h-3" />
                        ボス戦不要
                      </span>
                    )}
                  </div>

                  <h4 className="text-base font-bold text-white mb-1 flex items-center gap-1.5">
                    <Gem className="w-4 h-4 text-cyan-400" />
                    <span>{item.name}</span>
                  </h4>

                  <div className="text-xs text-gray-400 flex items-center gap-1 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-elden-gold shrink-0" />
                    <span className="text-gray-300 font-medium">{item.area}</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-black/50 border border-white/5 mb-2.5">
                    <span className="text-[11px] font-bold text-elden-gold-light block mb-0.5">
                      📍 最速回収場所:
                    </span>
                    <p className="text-xs text-white font-medium">{item.location}</p>
                    <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                      {item.howToGet}
                    </p>
                  </div>

                  {item.altLocation && (
                    <p className="text-[11px] text-gray-400 mb-2">
                      <span className="text-gray-500">別候補: </span>
                      {item.altLocation}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-white/5 mt-1">
                  <p className="text-[11px] text-amber-300/90 font-mono leading-tight">
                    💡 {item.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Somber Ancient Dragon Smithing Stone Tip */}
          <div className="p-4 rounded-xl bg-elden-card border border-elden-border flex items-start gap-3">
            <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs text-gray-300 space-y-1">
              <span className="font-bold text-white text-sm">
                さらに最終強化（+10）を目指す場合:
              </span>
              <p>
                「古竜岩の喪色鍛石」は、白面ヴァレーのイベントで行ける【モーグウィン王朝】の血の池広場（巨大カラスがいる手前）の宝箱から、敵を無視して馬で駆け抜けるだけで最速回収可能です。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Subtab 2: Regular Smithing Table */}
      {subTab === 'regular' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-elden-border/60 pb-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-elden-gold" />
              <h3 className="text-lg font-bold text-white font-serif">
                通常鍛石【1】〜【8】逆引き早見表
              </h3>
            </div>
            <span className="text-xs text-gray-400 font-mono">通常武器は各段階12個必要</span>
          </div>

          <div className="space-y-3">
            {regularSmithingTable.map((item) => (
              <div
                key={item.tier}
                className="bg-elden-panel/90 p-4 sm:p-5 rounded-xl border border-elden-border flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4"
              >
                <div className="space-y-1 min-w-[200px]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-elden-gold/20 text-elden-gold border border-elden-gold/40">
                      TIER {item.tier}
                    </span>
                    <h4 className="text-base font-bold text-white">{item.name}</h4>
                  </div>
                  <p className="text-xs text-elden-gold-light font-mono">
                    強化段階: {item.targetLevel}
                  </p>
                </div>

                {/* Pickup Locations */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-[11px] font-bold text-gray-400 block mb-0.5">
                      ⛏️ 最多採取・坑道:
                    </span>
                    <span className="text-gray-200">{item.bestFarming}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-[11px] font-bold text-emerald-400 block mb-0.5">
                      🏃 ボス不要・フィールド拾得:
                    </span>
                    <span className="text-gray-200">{item.noBossPickup}</span>
                  </div>
                </div>

                {/* Bell Bearing Info */}
                <div className="min-w-[240px] p-2.5 rounded-lg bg-elden-card border border-elden-border text-xs">
                  <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1 mb-0.5">
                    <ShoppingBag className="w-3.5 h-3.5" />
                    {item.bellBearing}（無限購入）
                  </span>
                  <p className="text-gray-300 text-[11px] leading-relaxed">
                    {item.bellLocation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtab 3: Bell Bearings List */}
      {subTab === 'bell' && (
        <div className="space-y-4 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-elden-border/60 pb-2">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-elden-gold" />
              <h3 className="text-lg font-bold text-white font-serif">
                鍛石掘りの鈴玉 ＆ 喪色掘りの鈴玉 完全一覧
              </h3>
            </div>

            <div className="inline-flex p-0.5 bg-elden-card rounded-lg border border-elden-border self-start sm:self-auto">
              <button
                onClick={() => setBellFilter('all')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  bellFilter === 'all'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                全て
              </button>
              <button
                onClick={() => setBellFilter('smithing')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  bellFilter === 'smithing'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                通常鍛石の鈴玉
              </button>
              <button
                onClick={() => setBellFilter('somber')}
                className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                  bellFilter === 'somber'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                喪色鍛石の鈴玉
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredBells.map((bell) => (
              <div
                key={bell.id}
                className="bg-elden-panel/90 p-4 sm:p-5 rounded-xl border border-elden-border space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold mr-2 ${
                        bell.category === 'somber'
                          ? 'bg-cyan-950/60 text-cyan-300 border border-cyan-700/60'
                          : 'bg-amber-950/60 text-amber-300 border border-amber-700/60'
                      }`}
                    >
                      {bell.category === 'somber' ? '喪色の鈴玉' : '通常の鈴玉'}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">{bell.name}</h4>
                  </div>
                  <span className="text-xs text-elden-gold font-mono font-bold">
                    {bell.tierRange.split('・')[0]}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-gray-300">
                  <div className="flex items-center gap-1.5 text-elden-gold-light">
                    <MapPin className="w-3.5 h-3.5 text-elden-gold shrink-0" />
                    <span className="font-medium">{bell.location}</span>
                  </div>
                  <p className="p-2 rounded bg-black/40 border border-white/5 leading-relaxed text-gray-300">
                    {bell.howToGet}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400">円卓購入可能:</span>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {bell.shopItems.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-elden-card text-gray-200 border border-gray-700 text-[11px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { crystalTearsList, physickPresets } from '../data/physickData';
import {
  FlaskConical,
  Sparkles,
  ArrowRight,
  CheckCircle,
  MapPin,
} from 'lucide-react';

export const PhysickSection: React.FC = () => {
  const [tear1Id, setTear1Id] = useState<string>('cerulean-hidden');
  const [tear2Id, setTear2Id] = useState<string>('magic-shrouding');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const tear1 = crystalTearsList.find((t) => t.id === tear1Id) || crystalTearsList[0];
  const tear2 = crystalTearsList.find((t) => t.id === tear2Id) || crystalTearsList[1];

  const applyPreset = (t1: string, t2: string) => {
    setTear1Id(t1);
    setTear2Id(t2);
  };

  const filteredTears = crystalTearsList.filter((tear) => {
    const matchesCategory = filterCategory === 'all' || tear.category === filterCategory;
    const matchesSearch =
      tear.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tear.effect.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tear.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-elden-panel p-5 sm:p-6 rounded-2xl border border-elden-border relative overflow-hidden">
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-cyan-950/20 rounded-full blur-2xl pointer-events-none" />
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-950/60 border border-cyan-800/60 text-cyan-400">
            <FlaskConical className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              霊薬の結晶雫「最強配合シミュレーター」＆ 図鑑
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
              全32種の結晶雫から2つを自由に配合！魔術師の無限ビーム砲から脳筋ボス即ダウンまで、驚異のシナジーを即座に検証。
            </p>
          </div>
        </div>
      </div>

      {/* Simulator Section */}
      <div className="bg-gradient-to-b from-[#14161b] to-[#0e1014] p-5 sm:p-7 rounded-2xl border border-elden-gold/50 shadow-[0_0_30px_rgba(200,170,110,0.08)] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-elden-border/80 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-elden-gold" />
            <h3 className="text-lg font-bold text-white font-serif">
              霊薬の聖杯瓶 配合ミキサー
            </h3>
          </div>
          <span className="text-xs text-elden-gold-light font-mono">
            ※2つの結晶雫を選んで効果を調合
          </span>
        </div>

        {/* Selected Tears Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tear Slot 1 */}
          <div className="p-4 sm:p-5 rounded-xl bg-elden-panel/90 border border-elden-gold/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-elden-gold/20 text-elden-gold border border-elden-gold/40">
                  SLOT 1
                </span>
                <span className="text-[11px] text-gray-400 font-mono">
                  持続: {tear1.duration}
                </span>
              </div>

              <div className="mb-3">
                <label className="text-[11px] text-gray-400 font-medium block mb-1">
                  1つ目の結晶雫を選択:
                </label>
                <select
                  value={tear1Id}
                  onChange={(e) => setTear1Id(e.target.value)}
                  className="w-full bg-black/60 border border-elden-border rounded-lg p-2 text-xs sm:text-sm text-white focus:outline-none focus:border-elden-gold"
                >
                  {crystalTearsList.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.effect.slice(0, 24)}...)
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                <span className="text-xs font-bold text-elden-gold-light block">
                  {tear1.name}
                </span>
                <p className="text-xs text-emerald-300 font-medium">{tear1.effect}</p>
                <p className="text-[11px] text-gray-400 leading-relaxed mt-1">
                  {tear1.description}
                </p>
              </div>
            </div>

            <div className="text-[11px] text-gray-500 mt-2 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-elden-gold shrink-0" />
              <span className="truncate">{tear1.location}</span>
            </div>
          </div>

          {/* Tear Slot 2 */}
          <div className="p-4 sm:p-5 rounded-xl bg-elden-panel/90 border border-elden-gold/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-elden-gold/20 text-elden-gold border border-elden-gold/40">
                  SLOT 2
                </span>
                <span className="text-[11px] text-gray-400 font-mono">
                  持続: {tear2.duration}
                </span>
              </div>

              <div className="mb-3">
                <label className="text-[11px] text-gray-400 font-medium block mb-1">
                  2つ目の結晶雫を選択:
                </label>
                <select
                  value={tear2Id}
                  onChange={(e) => setTear2Id(e.target.value)}
                  className="w-full bg-black/60 border border-elden-border rounded-lg p-2 text-xs sm:text-sm text-white focus:outline-none focus:border-elden-gold"
                >
                  {crystalTearsList.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.name} ({t.effect.slice(0, 24)}...)
                    </option>
                  ))}
                </select>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-white/5 space-y-1">
                <span className="text-xs font-bold text-elden-gold-light block">
                  {tear2.name}
                </span>
                <p className="text-xs text-emerald-300 font-medium">{tear2.effect}</p>
                <p className="text-[11px] text-gray-400 leading-relaxed mt-1">
                  {tear2.description}
                </p>
              </div>
            </div>

            <div className="text-[11px] text-gray-500 mt-2 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-elden-gold shrink-0" />
              <span className="truncate">{tear2.location}</span>
            </div>
          </div>
        </div>

        {/* Combined Result Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-elden-panel border border-elden-gold/60 shadow-md">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-bold text-elden-gold font-mono uppercase tracking-wider flex items-center gap-1.5">
              <FlaskConical className="w-4 h-4 text-elden-gold" />
              調合された霊薬の総合発動効果
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-black/50 border border-gray-700 text-gray-300">
              聖杯瓶使用で2効果が同時発動
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div className="p-3 rounded-lg bg-black/50 border border-emerald-900/40">
              <span className="text-[11px] text-gray-400 block mb-0.5">効果 ①:</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-300">
                {tear1.effect}
              </p>
              <span className="text-[10px] text-gray-400 font-mono mt-1 block">
                持続時間: {tear1.duration}
              </span>
            </div>
            <div className="p-3 rounded-lg bg-black/50 border border-emerald-900/40">
              <span className="text-[11px] text-gray-400 block mb-0.5">効果 ②:</span>
              <p className="text-xs sm:text-sm font-bold text-emerald-300">
                {tear2.effect}
              </p>
              <span className="text-[10px] text-gray-400 font-mono mt-1 block">
                持続時間: {tear2.duration}
              </span>
            </div>
          </div>

          {/* Quick matching preset check */}
          {(() => {
            const matched = physickPresets.find(
              (p) =>
                (p.tear1Id === tear1Id && p.tear2Id === tear2Id) ||
                (p.tear1Id === tear2Id && p.tear2Id === tear1Id)
            );
            if (matched) {
              return (
                <div className="p-3 rounded-lg bg-elden-card border border-elden-gold/40 text-xs text-gray-200">
                  <span className="font-bold text-elden-gold flex items-center gap-1 mb-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    認定プリセット: {matched.name}
                  </span>
                  <p className="text-gray-300">{matched.synergy}</p>
                </div>
              );
            }
            return null;
          })()}
        </div>

        {/* Recommended Presets Buttons */}
        <div className="space-y-3 pt-2">
          <span className="text-xs font-bold text-elden-gold font-serif block">
            ⚡ おすすめ最強配合プリセット（ワンクリック調合）:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {physickPresets.map((preset) => {
              const isSelected =
                (preset.tear1Id === tear1Id && preset.tear2Id === tear2Id) ||
                (preset.tear1Id === tear2Id && preset.tear2Id === tear1Id);
              return (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset.tear1Id, preset.tear2Id)}
                  className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-elden-gold/20 border-elden-gold text-white shadow-md'
                      : 'bg-elden-card/70 border-elden-border text-gray-300 hover:border-elden-gold/40 hover:bg-elden-panel'
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">{preset.name}</h4>
                    <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                      {preset.tagline}
                    </p>
                  </div>
                  <span className="text-[10px] text-elden-gold-light font-mono mt-2 flex items-center gap-1">
                    <span>適正: {preset.recommendedBuild.split('・')[0]}</span>
                    <ArrowRight className="w-3 h-3 inline" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Crystal Tears Compendium */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-elden-border/60 pb-3">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-elden-gold" />
            <h3 className="text-lg font-bold text-white font-serif">
              全32種 結晶雫 入手場所図鑑
            </h3>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="雫名・効果・場所で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 text-xs bg-elden-card border border-elden-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-elden-gold w-44 sm:w-52"
            />
            <div className="inline-flex p-0.5 bg-elden-card rounded-lg border border-elden-border">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  filterCategory === 'all'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                全て
              </button>
              <button
                onClick={() => setFilterCategory('special')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  filterCategory === 'special'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                特殊・壊れ
              </button>
              <button
                onClick={() => setFilterCategory('buff')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  filterCategory === 'buff'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                攻撃・バフ
              </button>
              <button
                onClick={() => setFilterCategory('recovery')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  filterCategory === 'recovery'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                回復・耐久
              </button>
              <button
                onClick={() => setFilterCategory('stat')}
                className={`px-2 py-1 rounded text-[11px] font-medium transition-all ${
                  filterCategory === 'stat'
                    ? 'bg-elden-gold text-black font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                ステ強化
              </button>
            </div>
          </div>
        </div>

        {/* Grid of Tear Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredTears.map((tear) => (
            <div
              key={tear.id}
              className="bg-elden-panel/90 p-4 rounded-xl border border-elden-border flex flex-col justify-between hover:border-elden-gold/40 transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-sm font-bold text-white leading-snug">{tear.name}</h4>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/50 border border-gray-700 text-gray-300 font-mono shrink-0">
                    {tear.duration}
                  </span>
                </div>

                <p className="text-xs text-emerald-300 font-semibold mb-2">
                  {tear.effect}
                </p>

                <p className="text-[11px] text-gray-400 leading-relaxed mb-3">
                  {tear.description}
                </p>

                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1 text-xs mb-3">
                  <div className="flex items-start gap-1 text-gray-300">
                    <MapPin className="w-3.5 h-3.5 text-elden-gold shrink-0 mt-0.5" />
                    <span className="text-[11px]">{tear.location}</span>
                  </div>
                  <div className="text-[11px] text-gray-400 pl-4.5">
                    <span className="text-gray-500">守護者: </span>
                    {tear.guardian}
                  </div>
                </div>
              </div>

              {/* Set to Simulator Buttons */}
              <div className="pt-2 border-t border-white/5 flex gap-2">
                <button
                  onClick={() => setTear1Id(tear.id)}
                  className={`flex-1 py-1 px-2 rounded text-[10px] font-bold transition-all ${
                    tear1Id === tear.id
                      ? 'bg-elden-gold text-black'
                      : 'bg-elden-card border border-elden-border text-gray-300 hover:text-white hover:border-elden-gold'
                  }`}
                >
                  {tear1Id === tear.id ? '✓ SLOT 1選択中' : 'SLOT 1にセット'}
                </button>
                <button
                  onClick={() => setTear2Id(tear.id)}
                  className={`flex-1 py-1 px-2 rounded text-[10px] font-bold transition-all ${
                    tear2Id === tear.id
                      ? 'bg-elden-gold text-black'
                      : 'bg-elden-card border border-elden-border text-gray-300 hover:text-white hover:border-elden-gold'
                  }`}
                >
                  {tear2Id === tear.id ? '✓ SLOT 2選択中' : 'SLOT 2にセット'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

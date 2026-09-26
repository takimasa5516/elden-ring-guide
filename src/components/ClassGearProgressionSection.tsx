import React, { useState } from 'react';
import { classGearProgressionList } from '../data/classGearProgressionData';
import {
  Sword,
  Sparkles,
  MapPin,
  Check,
  Search,
  Flame,
  ShieldCheck,
  Layers,
  Zap,
} from 'lucide-react';

export const ClassGearProgressionSection: React.FC = () => {
  const [selectedClassId, setSelectedClassId] = useState<string>('vagabond');
  const [selectedPhase, setSelectedPhase] = useState<'early' | 'mid' | 'late' | 'dlc'>('early');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentClass = classGearProgressionList.find((c) => c.id === selectedClassId) || classGearProgressionList[0];
  const currentPhaseData = currentClass.phases[selectedPhase];

  const phases = [
    { id: 'early', label: '序盤', sub: 'リムグレイブ 〜 リエーニエ初期', icon: '🌱' },
    { id: 'mid', label: '中盤', sub: 'アルター高原 〜 王都ローデイル', icon: '⚔️' },
    { id: 'late', label: '終盤', sub: '巨人山嶺 〜 聖樹・ファルムアズラ', icon: '👑' },
    { id: 'dlc', label: 'DLC 影の地', sub: 'SHADOW OF THE ERDTREE', icon: '🌙' },
  ] as const;

  // Search filter across weapons and armors
  const filterGear = (items: typeof currentPhaseData.recommendedWeapons) => {
    if (!searchQuery.trim()) return items;
    const q = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.features.toLowerCase().includes(q) ||
        item.howToGet.toLowerCase().includes(q)
    );
  };

  const filteredWeapons = filterGear(currentPhaseData.recommendedWeapons);
  const filteredArmors = filterGear(currentPhaseData.recommendedArmors);

  return (
    <div className="space-y-6 pb-12">
      {/* Banner */}
      <div className="bg-elden-panel p-4 sm:p-6 rounded-2xl border border-elden-border relative overflow-hidden space-y-3 shadow-lg">
        <div className="absolute -right-6 -bottom-6 w-44 h-44 bg-elden-gold/10 rounded-full blur-2xl pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-elden-gold/15 border border-elden-gold/30 text-elden-gold-light text-xs font-serif font-bold">
          <Sparkles className="w-3.5 h-3.5 text-elden-gold" />
          <span>全素性・ビルド対応 ＆ 本編・DLC影の地 完全網羅</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
          <Sword className="w-6 h-6 text-elden-gold" />
          <span>各職業別おすすめ装備 ＆ 時期別取得情報（序盤・中盤・終盤・DLC）</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
          「初期装備からどの武器・防具に乗り換えるべきか？」を時期別（<strong>序盤 ➔ 中盤 ➔ 終盤 ➔ DLC影の地</strong>）に完全ナビゲート。各装備の<strong>【📍 入手場所・最寄り祝福】</strong>、<strong>【🎯 具体的な取得手順・ボスの要否】</strong>、<strong>【✨ 性能・特殊効果】</strong>を分かりやすくまとめています。
        </p>
      </div>

      {/* 1. Class Selector Tabs (Mobile Scrollable) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-gray-400 font-serif px-1">
          <span className="flex items-center gap-1.5 font-bold text-white">
            <Layers className="w-4 h-4 text-elden-gold" />
            <span>職業・戦闘スタイルを選択 (全8系統)</span>
          </span>
          <span className="text-[11px] text-gray-400 hidden sm:inline">横スクロールで全職業を選択可能</span>
        </div>

        <div className="overflow-x-auto no-scrollbar pb-1">
          <div className="flex items-center gap-2 min-w-max">
            {classGearProgressionList.map((cls) => {
              const isSelected = cls.id === selectedClassId;
              return (
                <button
                  key={cls.id}
                  onClick={() => setSelectedClassId(cls.id)}
                  className={`px-3.5 py-2.5 rounded-xl border text-xs font-serif font-bold transition-all flex flex-col items-start gap-1 text-left min-w-[150px] sm:min-w-[170px] ${
                    isSelected
                      ? 'bg-elden-gold text-black border-elden-gold shadow-lg scale-[1.02]'
                      : 'bg-elden-panel/90 text-gray-300 hover:text-white hover:bg-elden-panel border-elden-border'
                  }`}
                >
                  <div className="flex items-center justify-between w-full gap-1">
                    <span className="text-sm font-bold">{cls.name}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                        isSelected ? 'bg-black/30 text-black font-semibold' : 'bg-black/50 text-gray-400'
                      }`}
                    >
                      {cls.enName}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] leading-tight line-clamp-1 ${
                      isSelected ? 'text-black/80 font-medium' : 'text-elden-gold-light/80'
                    }`}
                  >
                    {cls.role.split('（')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Class Header Info */}
      <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-elden-gold/30 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
              {currentClass.name}
            </h3>
            <span className="text-xs px-2.5 py-0.5 rounded-full font-serif font-bold bg-elden-gold/20 text-elden-gold-light border border-elden-gold/40">
              {currentClass.badge}
            </span>
            <span className="text-xs text-gray-400 font-serif">
              対象素性: {currentClass.compatibleClasses.join('、')}
            </span>
          </div>

          {/* Search box for gear */}
          <div className="relative min-w-[200px] sm:min-w-[240px]">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="装備名・場所・戦技で検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-black/60 border border-elden-border text-xs text-white placeholder-gray-500 focus:outline-none focus:border-elden-gold"
            />
          </div>
        </div>

        <p className="text-xs text-gray-300 leading-relaxed">
          {currentClass.features}
        </p>
      </div>

      {/* 2. Phase Switcher (序盤 / 中盤 / 終盤 / DLC) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {phases.map((p) => {
          const isSelected = selectedPhase === p.id;
          const isDlc = p.id === 'dlc';

          return (
            <button
              key={p.id}
              onClick={() => setSelectedPhase(p.id)}
              className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? isDlc
                    ? 'bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 text-white border-purple-500 shadow-lg scale-[1.02]'
                    : 'bg-elden-gold text-black border-elden-gold shadow-md scale-[1.02]'
                  : 'bg-elden-panel/80 hover:bg-elden-panel text-gray-300 hover:text-white border-elden-border'
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-xs font-bold font-serif flex items-center gap-1.5">
                  <span>{p.icon}</span>
                  <span>{p.label}</span>
                </span>
                {isDlc && (
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                      isSelected ? 'bg-purple-400 text-black' : 'bg-purple-950/80 text-purple-300 border border-purple-800'
                    }`}
                  >
                    新要素
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] mt-1 truncate ${
                  isSelected ? (isDlc ? 'text-purple-200' : 'text-black/80 font-medium') : 'text-gray-400'
                }`}
              >
                {p.sub}
              </span>
            </button>
          );
        })}
      </div>

      {/* Phase Advice / Strategy Box */}
      <div className="p-3.5 sm:p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 space-y-1.5">
        <div className="flex items-center gap-2 text-amber-300 font-serif font-bold text-xs sm:text-sm">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>【{currentPhaseData.phaseLabel}の装備方針 ＆ 育成アドバイス】</span>
          <span className="text-[11px] font-normal text-amber-200/80 hidden sm:inline">
            （対象エリア：{currentPhaseData.targetArea}）
          </span>
        </div>
        <p className="text-xs text-gray-200 leading-relaxed pl-6">
          {currentPhaseData.phaseAdvice}
        </p>
      </div>

      {/* 3. Recommended Weapons, Catalysts & Shields */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <h4 className="text-sm sm:text-base font-bold text-white font-serif flex items-center gap-2">
            <Sword className="w-4 h-4 text-elden-gold" />
            <span>おすすめ武器・触媒・盾（{filteredWeapons.length}件）</span>
          </h4>
          <span className="text-[11px] text-gray-400">タップして詳細確認</span>
        </div>

        {filteredWeapons.length === 0 ? (
          <div className="p-6 text-center text-xs text-gray-400 bg-black/30 rounded-xl border border-white/5">
            検索条件に一致する武器が見つかりませんでした。
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredWeapons.map((weapon) => (
              <div
                key={weapon.id}
                className="bg-elden-panel/90 border border-elden-border hover:border-elden-gold/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all space-y-3 shadow-md"
              >
                <div className="space-y-2.5">
                  {/* Header: Name, Type, Boss Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] text-gray-400 font-mono">
                          {weapon.type}
                        </span>
                        {weapon.dlc && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-950/80 text-purple-300 border border-purple-800 font-bold">
                            DLC新武器
                          </span>
                        )}
                      </div>
                      <h5 className="text-base sm:text-lg font-bold text-white font-serif">
                        {weapon.name}
                      </h5>
                    </div>

                    <div className="shrink-0">
                      {!weapon.bossRequired ? (
                        <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-800/60">
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>拾うだけ（ボス不要）</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium bg-amber-950/70 text-amber-300 border border-amber-800/60">
                          <Flame className="w-3 h-3 text-amber-400" />
                          <span>ボス撃破/共闘</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Requirements */}
                  {weapon.statReq && (
                    <div className="inline-block text-[11px] font-mono bg-black/60 text-elden-gold-light px-2.5 py-0.5 rounded border border-white/10">
                      必要ステータス: {weapon.statReq}
                    </div>
                  )}

                  {/* Location & How to Get */}
                  <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 space-y-1.5 text-xs">
                    <div className="flex items-start gap-1.5 text-gray-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                          【入手場所・最寄り祝福】
                        </span>
                        <span className="text-xs text-white font-medium">{weapon.location}</span>
                      </div>
                    </div>

                    <div className="pl-5 text-[11px] text-gray-300 leading-relaxed border-t border-white/5 pt-1.5">
                      <strong className="text-elden-gold-light">取得手順: </strong>
                      <span>{weapon.howToGet}</span>
                      {weapon.bossName && (
                        <span className="block text-red-300 mt-0.5 font-medium">
                          討伐対象: {weapon.bossName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features / Advantages */}
                  <div className="p-2.5 rounded-xl bg-elden-card/80 border border-elden-border/60 text-xs text-gray-200 leading-relaxed">
                    <strong className="text-elden-gold font-serif block mb-0.5">✨ 性能・おすすめの理由:</strong>
                    <span>{weapon.features}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Recommended Armors & Sets */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between border-b border-white/5 pb-2">
          <h4 className="text-sm sm:text-base font-bold text-white font-serif flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-elden-gold" />
            <span>おすすめ防具・特殊効果装備（{filteredArmors.length}件）</span>
          </h4>
          <span className="text-[11px] text-gray-400">強靭度・特殊バフ</span>
        </div>

        {filteredArmors.length === 0 ? (
          <div className="p-6 text-center text-xs text-gray-400 bg-black/30 rounded-xl border border-white/5">
            防具データが見つかりませんでした。
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredArmors.map((armor) => (
              <div
                key={armor.id}
                className="bg-elden-panel/90 border border-elden-border hover:border-elden-gold/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all space-y-3 shadow-md"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] text-gray-400 font-mono">
                          {armor.type}
                        </span>
                        {armor.dlc && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-950/80 text-purple-300 border border-purple-800 font-bold">
                            DLC新防具
                          </span>
                        )}
                      </div>
                      <h5 className="text-base sm:text-lg font-bold text-white font-serif">
                        {armor.name}
                      </h5>
                    </div>

                    <div className="shrink-0">
                      {!armor.bossRequired ? (
                        <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium bg-emerald-950/70 text-emerald-300 border border-emerald-800/60">
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>拾うだけ/購入</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full font-medium bg-amber-950/70 text-amber-300 border border-amber-800/60">
                          <Flame className="w-3 h-3 text-amber-400" />
                          <span>要ボス撃破/侵入</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Location & How to Get */}
                  <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 space-y-1.5 text-xs">
                    <div className="flex items-start gap-1.5 text-gray-300">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block">
                          【入手場所・最寄り祝福】
                        </span>
                        <span className="text-xs text-white font-medium">{armor.location}</span>
                      </div>
                    </div>

                    <div className="pl-5 text-[11px] text-gray-300 leading-relaxed border-t border-white/5 pt-1.5">
                      <strong className="text-elden-gold-light">取得手順: </strong>
                      <span>{armor.howToGet}</span>
                      {armor.bossName && (
                        <span className="block text-red-300 mt-0.5 font-medium">
                          討伐対象: {armor.bossName}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-2.5 rounded-xl bg-elden-card/80 border border-elden-border/60 text-xs text-gray-200 leading-relaxed">
                    <strong className="text-elden-gold font-serif block mb-0.5">🛡️ 防御性能・特殊効果:</strong>
                    <span>{armor.features}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

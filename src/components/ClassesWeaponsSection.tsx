import React, { useState } from 'react';
import { classesList } from '../data/classesData';
import { weaponsList } from '../data/weaponsData';
import { Sword, Shield, Sparkles, MapPin, Check, Search } from 'lucide-react';

export const ClassesWeaponsSection: React.FC = () => {
  const [weaponCategory, setWeaponCategory] = useState<'all' | 'melee' | 'catalyst' | 'shield'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWeapons = weaponsList.filter((weapon) => {
    const matchesCat = weaponCategory === 'all' || weapon.category === weaponCategory;
    const matchesSearch =
      weapon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      weapon.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      weapon.feature.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-10 pb-12">
      {/* Introduction Banner */}
      <div className="bg-elden-panel p-4 sm:p-6 rounded-2xl border border-elden-border">
        <h2 className="text-xl sm:text-2xl font-bold text-white font-serif flex items-center gap-2">
          <Sword className="w-6 h-6 text-elden-gold" />
          <span>素性選び ＆ 序盤おすすめ装備</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
          エルデンリングでは、素性（初期職業）はスタート時の初期ステータスと装備を決めるだけで、後から自由にどのビルドにも変更可能です。
          ここでは<strong>「最も死ににくく、詰まりにくいおすすめ素性」</strong>と、<strong>「ボスを倒さずに探索だけで拾える強力な武器・盾」</strong>を厳選して紹介します。
        </p>
      </div>

      {/* Recommended Classes */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 border-b border-elden-border/60 pb-2">
          <Sparkles className="w-5 h-5 text-elden-gold" />
          <h3 className="text-lg font-bold text-white font-serif">
            おすすめ素性（初期クラス）徹底比較
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classesList.map((cls) => (
            <div
              key={cls.id}
              className="bg-elden-panel/90 border border-elden-gold/30 hover:border-elden-gold/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-gray-400">
                      {cls.enName} • Lv.{cls.level}
                    </span>
                    <h4 className="text-lg font-bold text-white font-serif">{cls.name}</h4>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-elden-gold/20 text-elden-gold-light border border-elden-gold/40 shrink-0">
                    {cls.badge}
                  </span>
                </div>

                {/* Stats Bar Mini */}
                <div className="my-3 p-2.5 rounded-lg bg-black/40 border border-elden-border/60 grid grid-cols-4 gap-2 text-center text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 block">生命力</span>
                    <span className={`font-mono font-bold ${cls.stats.vigor >= 14 ? 'text-emerald-400' : 'text-gray-200'}`}>
                      {cls.stats.vigor}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">筋力</span>
                    <span className={`font-mono font-bold ${cls.stats.strength >= 14 ? 'text-red-400' : 'text-gray-200'}`}>
                      {cls.stats.strength}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">技量</span>
                    <span className={`font-mono font-bold ${cls.stats.dexterity >= 14 ? 'text-amber-400' : 'text-gray-200'}`}>
                      {cls.stats.dexterity}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">知力/信仰</span>
                    <span className="font-mono font-bold text-cyan-400">
                      {cls.stats.intelligence}/{cls.stats.faith}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  {cls.features}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/5 text-[11px]">
                  <div className="text-gray-400">
                    <strong className="text-elden-gold-light font-medium">初期装備:</strong> {cls.startingGear.join('、')}
                  </div>
                  <div className="text-gray-400">
                    <strong className="text-elden-gold-light font-medium">向いている人:</strong> {cls.recommendedFor}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-elden-border/40 text-[11px] bg-black/30 -mx-4 -mb-4 sm:-mx-5 sm:-mb-5 p-3 rounded-b-xl">
                <span className="text-elden-gold font-semibold">💡 序盤の動き: </span>
                <span className="text-gray-300">{cls.recommendedPath}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Weapons & Gear */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-elden-border/60 pb-3">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-elden-gold" />
            <h3 className="text-lg font-bold text-white font-serif">
              探索だけで手に入る！おすすめ武器・触媒・盾
            </h3>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="武器名・場所で検索..."
                className="pl-8 pr-3 py-1 bg-elden-card border border-elden-border rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-elden-gold"
              />
            </div>
            <div className="inline-flex p-0.5 bg-elden-card rounded-lg border border-elden-border text-xs">
              <button
                onClick={() => setWeaponCategory('all')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  weaponCategory === 'all' ? 'bg-elden-gold text-black font-bold' : 'text-gray-400'
                }`}
              >
                すべて
              </button>
              <button
                onClick={() => setWeaponCategory('melee')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  weaponCategory === 'melee' ? 'bg-elden-gold text-black font-bold' : 'text-gray-400'
                }`}
              >
                近接武器
              </button>
              <button
                onClick={() => setWeaponCategory('catalyst')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  weaponCategory === 'catalyst' ? 'bg-elden-gold text-black font-bold' : 'text-gray-400'
                }`}
              >
                杖・魔術
              </button>
              <button
                onClick={() => setWeaponCategory('shield')}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  weaponCategory === 'shield' ? 'bg-elden-gold text-black font-bold' : 'text-gray-400'
                }`}
              >
                盾
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredWeapons.map((weapon) => (
            <div
              key={weapon.id}
              className="bg-elden-panel border border-elden-border hover:border-elden-gold/40 rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">
                      {weapon.weaponType}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white font-serif">
                      {weapon.name}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {!weapon.bossRequired ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        ボス討伐不要
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        要ボス撃破/共闘可
                      </span>
                    )}
                  </div>
                </div>

                <div className="inline-block text-[11px] font-mono bg-black/50 text-elden-gold-light px-2.5 py-1 rounded border border-elden-border mb-3">
                  必要ステータス: {weapon.requirements}
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-1.5 text-gray-300">
                    <MapPin className="w-4 h-4 text-elden-gold shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">{weapon.location}</span>
                      <p className="text-[11px] text-gray-400 mt-0.5">{weapon.howToGet}</p>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 bg-elden-card/80 p-2.5 rounded-lg border border-elden-border/60 leading-relaxed">
                    {weapon.feature}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-gray-400">
                <span className="text-elden-gold font-semibold">おすすめの理由: </span>
                <span>{weapon.whyGood}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

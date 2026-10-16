import React, { useState, useMemo } from 'react';
import {
  essentialCraftedItems,
  recipeBooksList,
  essentialMaterialsList,
  containerItemsList,
} from '../data/craftingData';
import { resolveMapTarget } from '../utils/mapResolver';
import {
  Hammer,
  Sparkles,
  BookOpen,
  Compass,
  Package,
  Search,
  MapPin,
  Info,
  Shield,
  Zap,
} from 'lucide-react';

interface CraftingSectionProps {
  onNavigateToMap?: (regionId: string, pinId?: string, title?: string) => void;
}

export const CraftingSection: React.FC<CraftingSectionProps> = ({ onNavigateToMap }) => {
  // メインタブ: 'recipes' (おすすめ神アイテム), 'books' (製法書一覧), 'materials' (素材マラソン), 'containers' (容器アイテム)
  const [activeTab, setActiveTab] = useState<'recipes' | 'books' | 'materials' | 'containers'>('recipes');

  // 検索クエリ
  const [searchQuery, setSearchQuery] = useState('');

  // カテゴリフィルター
  const [recipeCategory, setRecipeCategory] = useState<string>('all');
  const [bookSeries, setBookSeries] = useState<string>('all');
  const [materialCategory, setMaterialCategory] = useState<string>('all');

  // マップへジャンプ
  const handleOpenMap = (locationText: string, title: string) => {
    if (!onNavigateToMap) return;
    const target = resolveMapTarget(locationText);
    onNavigateToMap(target.regionId, target.pinId, `アイテム製作：${title} (${target.regionName})`);
  };

  // 1. クラフトアイテムのフィルタリング
  const filteredRecipes = useMemo(() => {
    return essentialCraftedItems.filter((item) => {
      const matchesCategory = recipeCategory === 'all' || item.category === recipeCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(q) ||
        item.effect.toLowerCase().includes(q) ||
        item.recipeBook.toLowerCase().includes(q) ||
        item.whyEssential.toLowerCase().includes(q) ||
        item.materials.some((m) => m.name.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [recipeCategory, searchQuery]);

  // 2. 製法書のフィルタリング
  const filteredBooks = useMemo(() => {
    return recipeBooksList.filter((book) => {
      const matchesSeries = bookSeries === 'all' || book.series === bookSeries;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        book.name.toLowerCase().includes(q) ||
        book.location.toLowerCase().includes(q) ||
        book.howToGet.toLowerCase().includes(q) ||
        book.unlocks.some((u) => u.toLowerCase().includes(q));
      return matchesSeries && matchesSearch;
    });
  }, [bookSeries, searchQuery]);

  // 3. 素材のフィルタリング
  const filteredMaterials = useMemo(() => {
    return essentialMaterialsList.filter((mat) => {
      const matchesCategory = materialCategory === 'all' || mat.category === materialCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        mat.name.toLowerCase().includes(q) ||
        mat.bestFarmingSpot.toLowerCase().includes(q) ||
        mat.description.toLowerCase().includes(q) ||
        mat.usedFor.some((u) => u.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [materialCategory, searchQuery]);

  return (
    <div className="space-y-6 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-950/40 via-elden-panel to-elden-panel border border-elden-gold/40 rounded-2xl p-4 sm:p-6 relative overflow-hidden shadow-xl">
        <div className="flex items-start gap-3.5">
          <div className="p-3 rounded-xl bg-elden-gold/20 border border-elden-gold/50 text-elden-gold shrink-0">
            <Hammer className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-elden-gold/20 text-elden-gold text-[11px] font-bold tracking-wider mb-1 border border-elden-gold/40">
              <Sparkles className="w-3 h-3" />
              <span>戦闘支援・サバイバル攻略</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              アイテム製作（クラフト）・製法書 ＆ 素材完全ガイド
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed">
              神肌キラーの<strong>「睡眠壺」</strong>、経験値1.56倍の<strong>「鳥脚の黄金漬け」</strong>、朱い腐敗を治す<strong>「免腐の苔薬」</strong>などの必須レシピ・製法書の入手場所・効率的な素材マラソン場所を完全網羅。
            </p>
          </div>
        </div>

        {/* 初心者心得アラート */}
        <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/40 border border-white/10">
            <Info className="w-4 h-4 text-elden-gold shrink-0" />
            <span className="text-gray-300">
              <strong>ツール鞄の購入</strong>: エレの教会（リムグレイブ）の放浪商人カーレから300ルーンで購入するとクラフト機能が解禁。
            </span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/40 border border-white/10">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-gray-300">
              <strong>容器アイテムの仕様</strong>: ヒビ壺・儀式壺・調香瓶は<strong>使用しても壊れず自動返却</strong>されます。惜しまず使いましょう！
            </span>
          </div>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
        {[
          { id: 'recipes', label: 'おすすめ神クラフト (優先度S/A)', shortLabel: '神クラフト', icon: Sparkles },
          { id: 'books', label: '主要製法書の入手場所一覧', shortLabel: '製法書一覧', icon: BookOpen },
          { id: 'materials', label: '重要素材マラソン周回場所', shortLabel: '素材集め', icon: Compass },
          { id: 'containers', label: '容器アイテム (壺・調香瓶)', shortLabel: '容器アイテム', icon: Package },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-elden-gold text-black border-elden-gold shadow-md font-serif'
                  : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 border-white/5'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-black' : 'text-elden-gold'}`} />
              <span className="hidden sm:inline whitespace-nowrap">{tab.label}</span>
              <span className="sm:hidden whitespace-nowrap">{tab.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Global Search Bar (Only for searchable tabs) */}
      {activeTab !== 'containers' && (
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              activeTab === 'recipes'
                ? 'アイテム名、効果、素材名で検索（例: 睡眠壺、鳥脚、腐敗、アルテリア）...'
                : activeTab === 'books'
                ? '製法書名、入手場所、解禁アイテムで検索（例: 放浪戦士、シーフラ河、聖水壺）...'
                : '素材名、周回場所、用途で検索（例: 鳥脚、ホタル、スイレン）...'
            }
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 text-xs sm:text-sm focus:border-elden-gold focus:outline-none transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
            >
              クリア
            </button>
          )}
        </div>
      )}

      {/* =========================================================================
          タブ 1: おすすめ神クラフト（優先度S/A）
         ========================================================================= */}
      {activeTab === 'recipes' && (
        <div className="space-y-4">
          {/* カテゴリフィルター */}
          <div className="flex flex-wrap items-center gap-1.5 pb-2">
            {[
              { id: 'all', label: 'すべて' },
              { id: 'pot', label: '投擲壺 (睡眠/冷気/火山)' },
              { id: 'utility', label: '育成・ブースト (ルーン/発見力)' },
              { id: 'remedy', label: '状態異常解除 (腐敗/毒)' },
              { id: 'perfume', label: '調香瓶バフ (高揚/狂熱)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setRecipeCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  recipeCategory === cat.id
                    ? 'bg-elden-gold text-black shadow-sm font-serif'
                    : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* アイテムカード一覧 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredRecipes.map((item) => (
              <div
                key={item.id}
                className="bg-elden-panel/90 border border-elden-border hover:border-elden-gold/50 rounded-2xl p-4 sm:p-5 transition-all shadow-md flex flex-col justify-between space-y-3"
              >
                <div>
                  {/* ヘッダー: 名前・バッジ・ランク */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-black font-mono ${
                            item.tier === 'S'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                          }`}
                        >
                          {item.tier} ランク
                        </span>
                        <span className="text-[11px] text-gray-400">
                          {item.categoryLabel}
                        </span>
                        {item.containerName && (
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                            {item.containerName}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-serif mt-1">
                        {item.name}
                      </h3>
                    </div>

                    <span className="text-[10px] font-bold text-elden-gold bg-elden-gold/10 px-2 py-1 rounded-lg border border-elden-gold/30 text-right shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  {/* 効果説明 */}
                  <p className="text-xs text-gray-200 leading-relaxed bg-black/40 p-2.5 rounded-xl border border-white/5 mb-3">
                    {item.effect}
                  </p>

                  {/* なぜ必須か */}
                  <div className="space-y-1 mb-3">
                    <span className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-elden-gold" />
                      なぜ必須か（圧倒的メリット）:
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed pl-4">
                      {item.whyEssential}
                    </p>
                  </div>

                  {/* 必要素材リスト */}
                  <div className="space-y-1 mb-3">
                    <span className="text-[11px] font-bold text-gray-400 block font-serif">
                      必要素材:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {item.materials.map((m, idx) => (
                        <div
                          key={idx}
                          className="bg-black/50 px-2.5 py-1.5 rounded-lg border border-white/5 text-[11px] flex items-center justify-between"
                        >
                          <span className="text-white font-bold">
                            {m.name} <span className="text-amber-300 font-mono">×{m.count}</span>
                          </span>
                          <span className="text-[10px] text-gray-400 truncate max-w-[120px]">
                            {m.quickLocation}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* フッター: 製法書 & マップボタン */}
                <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="text-[11px] text-gray-400">
                    <span className="text-elden-gold font-bold">製法書: </span>
                    <span className="text-white">{item.recipeBook}</span>
                    <span className="block text-[10px] text-gray-400 truncate">
                      {item.recipeBookLocation}
                    </span>
                  </div>

                  {onNavigateToMap && (
                    <button
                      onClick={() => handleOpenMap(item.recipeBookLocation, `${item.recipeBook} (${item.name})`)}
                      className="self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-elden-gold/15 hover:bg-elden-gold hover:text-black text-elden-gold border border-elden-gold/40 text-xs font-bold transition-all shrink-0"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>製法書の場所をマップで見る</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          タブ 2: 主要製法書（レシピ）の入手場所一覧
         ========================================================================= */}
      {activeTab === 'books' && (
        <div className="space-y-4">
          {/* シリーズフィルター */}
          <div className="flex flex-wrap items-center gap-1.5 pb-2">
            {[
              { id: 'all', label: 'すべて' },
              { id: 'nomadic', label: '放浪戦士' },
              { id: 'armorer', label: '武具職人' },
              { id: 'missionary', label: '宣教師' },
              { id: 'perfumer', label: '調香師' },
              { id: 'glintstone', label: '輝石職人' },
              { id: 'dragon', label: '古竜信徒' },
            ].map((s) => (
              <button
                key={s.id}
                onClick={() => setBookSeries(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  bookSeries === s.id
                    ? 'bg-elden-gold text-black shadow-sm font-serif'
                    : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 border border-white/5'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* 製法書カードグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="bg-elden-panel/90 border border-elden-border hover:border-elden-gold/40 rounded-2xl p-4 sm:p-5 transition-all shadow-md flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <div>
                      <span className="text-[10px] text-gray-400 block font-serif">
                        {book.seriesName}
                      </span>
                      <h3 className="text-base font-bold text-white font-serif">
                        {book.name}
                      </h3>
                    </div>
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-black font-mono shrink-0 ${
                        book.importance === 'S'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-black/60 text-gray-300 border border-white/10'
                      }`}
                    >
                      重要度 {book.importance}
                    </span>
                  </div>

                  {/* 入手場所 & 入手方法 */}
                  <div className="bg-black/40 p-2.5 rounded-xl border border-white/5 space-y-1 mb-2.5">
                    <div className="flex items-center gap-1.5 text-xs text-elden-gold font-bold">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{book.location}</span>
                    </div>
                    <p className="text-xs text-gray-300 pl-5 leading-relaxed">
                      {book.howToGet}
                    </p>
                  </div>

                  {/* 解禁アイテム一覧 */}
                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-400 block font-serif">
                      解禁されるクラフトアイテム:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {book.unlocks.map((u, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-black/60 border border-white/10 text-[11px] text-amber-200"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>

                  {book.memo && (
                    <p className="text-[11px] text-gray-400 italic mt-2">
                      💡 {book.memo}
                    </p>
                  )}
                </div>

                {/* マップジャンプボタン */}
                {onNavigateToMap && (
                  <div className="pt-2 border-t border-white/5">
                    <button
                      onClick={() => handleOpenMap(book.location, book.name)}
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-black/60 hover:bg-elden-gold hover:text-black text-elden-gold border border-elden-gold/30 text-xs font-bold transition-all"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>この製法書の場所をマップで見る</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          タブ 3: 重要素材マラソン周回場所
         ========================================================================= */}
      {activeTab === 'materials' && (
        <div className="space-y-4">
          {/* カテゴリフィルター */}
          <div className="flex flex-wrap items-center gap-1.5 pb-2">
            {[
              { id: 'all', label: 'すべて' },
              { id: 'animal', label: '動物・ドロップ (鳥脚/ホタル)' },
              { id: 'plant', label: '貴重植物 (スイレン/アルテリア/木の芽)' },
              { id: 'mineral', label: '鉱石・岩石 (火山石)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setMaterialCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  materialCategory === cat.id
                    ? 'bg-elden-gold text-black shadow-sm font-serif'
                    : 'bg-black/40 text-gray-400 hover:text-white hover:bg-black/60 border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 素材カード一覧 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMaterials.map((mat) => (
              <div
                key={mat.id}
                className="bg-elden-panel/90 border border-elden-border hover:border-elden-gold/40 rounded-2xl p-4 sm:p-5 transition-all shadow-md flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-400">{mat.categoryLabel}</span>
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            mat.rarity === 'very_rare'
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                              : mat.rarity === 'rare'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          }`}
                        >
                          {mat.rarityLabel}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-white font-serif mt-0.5">
                        {mat.name}
                      </h3>
                    </div>

                    {/* 主な用途タグ */}
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 block mb-1">主な用途</span>
                      <div className="flex flex-col items-end gap-1">
                        {mat.usedFor.map((u, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-bold"
                          >
                            {u}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 mb-3">{mat.description}</p>

                  {/* 最速マラソン場所 */}
                  <div className="bg-black/50 p-3 rounded-xl border border-white/10 space-y-2 mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold">
                      <Compass className="w-4 h-4 shrink-0" />
                      <span>最速周回スポット: {mat.bestFarmingSpot}</span>
                    </div>

                    <div className="space-y-1 pl-1">
                      {mat.farmingSteps.map((step, idx) => (
                        <p key={idx} className="text-xs text-gray-300 leading-relaxed">
                          {step}
                        </p>
                      ))}
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    💡 <strong>コツ: </strong>{mat.tips}
                  </p>
                </div>

                {/* マップジャンプボタン */}
                {onNavigateToMap && (
                  <div className="pt-2 border-t border-white/5">
                    <button
                      onClick={() => handleOpenMap(mat.bestFarmingSpot, `${mat.name}採取場所`)}
                      className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-black/60 hover:bg-emerald-600 hover:text-white text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-all"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      <span>採取場所をマップで見る</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* =========================================================================
          タブ 4: 容器アイテム（ヒビ壺・儀式壺・調香瓶）
         ========================================================================= */}
      {activeTab === 'containers' && (
        <div className="space-y-6">
          <div className="bg-black/40 p-4 rounded-xl border border-white/10 text-xs text-gray-300 space-y-1 leading-relaxed">
            <span className="font-bold text-elden-gold flex items-center gap-1.5 text-sm">
              <Package className="w-4 h-4" />
              容器アイテムの重要仕様
            </span>
            <p>
              エルデンリングの投擲壺や調香アイテムは、一度容器（ヒビ壺など）を入手すると<strong>使用しても壊れず手元に残ります</strong>。
              投げた後は、祝福で休息するかファストトラベルした瞬間に、手持ちの素材から自動的に新しい壺が補充されます。
              容器アイテムを集めるほど、同時に持ち運べる強力な投擲物・バフ香薬のストック数が増加します。
            </p>
          </div>

          <div className="space-y-6">
            {containerItemsList.map((container) => (
              <div
                key={container.type}
                className="bg-elden-panel/90 border border-elden-border rounded-2xl p-4 sm:p-6 space-y-4 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-elden-gold/15 border border-elden-gold/30 text-elden-gold">
                      <Package className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-serif">
                        {container.name}
                      </h3>
                      <span className="text-xs text-emerald-400 font-bold font-mono">
                        最大所持数: {container.maxCount} 個
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 max-w-md">
                    {container.features}
                  </p>
                </div>

                {/* 入手場所リスト */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {container.locations.map((loc, idx) => (
                    <div
                      key={idx}
                      className="bg-black/50 p-3 rounded-xl border border-white/5 flex items-start justify-between gap-2"
                    >
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-white mb-0.5">
                          <MapPin className="w-3.5 h-3.5 text-elden-gold shrink-0" />
                          <span>{loc.area}</span>
                        </div>
                        <p className="text-[11px] text-gray-400 pl-5">
                          {loc.detail}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="text-xs font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30 font-mono">
                          +{loc.count}個
                        </span>
                        {onNavigateToMap && (
                          <button
                            onClick={() => handleOpenMap(loc.area, `${container.name} (${loc.area})`)}
                            className="text-[10px] text-elden-gold hover:underline"
                          >
                            マップ表示
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

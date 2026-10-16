/**
 * エルデンリング クラフト・アイテム製作 完全ガイドデータ
 * 製法書（レシピ）の取得場所、主要アイテムのレシピ、重要素材の効率的周回場所、容器アイテム
 */

// 主要クラフトアイテム定義
export interface CraftedItem {
  id: string;
  name: string;
  category: 'utility' | 'remedy' | 'pot' | 'perfume' | 'grease' | 'arrow';
  categoryLabel: string;
  tier: 'S' | 'A' | 'B';
  badge: string;
  effect: string;
  recipeBook: string;
  recipeBookLocation: string;
  materials: {
    name: string;
    count: number;
    quickLocation: string;
  }[];
  containerType?: 'cracked_pot' | 'ritual_pot' | 'perfume_bottle';
  containerName?: string;
  whyEssential: string;
  usageTips: string;
}

// 製法書定義
export interface RecipeBook {
  id: string;
  series: 'nomadic' | 'armorer' | 'missionary' | 'perfumer' | 'glintstone' | 'fevor' | 'dragon' | 'frenzied' | 'dlc';
  seriesName: string;
  name: string;
  location: string;
  howToGet: string;
  unlocks: string[];
  importance: 'S' | 'A' | 'B';
  memo?: string;
}

// 重要素材アイテム定義
export interface CraftingMaterial {
  id: string;
  name: string;
  category: 'plant' | 'animal' | 'mineral' | 'special';
  categoryLabel: string;
  rarity: 'common' | 'rare' | 'very_rare';
  rarityLabel: string;
  description: string;
  usedFor: string[];
  bestFarmingSpot: string;
  farmingSteps: string[];
  infiniteShop?: string;
  tips: string;
}

// 容器アイテム定義
export interface ContainerItemInfo {
  type: 'cracked_pot' | 'ritual_pot' | 'perfume_bottle';
  name: string;
  maxCount: number;
  iconType: string;
  description: string;
  features: string;
  locations: {
    area: string;
    detail: string;
    count: number;
  }[];
}

// =========================================================================
// 1. おすすめ神クラフトアイテム（優先度S・A）
// =========================================================================
export const essentialCraftedItems: CraftedItem[] = [
  {
    id: 'sleep-pot',
    name: '睡眠壺',
    category: 'pot',
    categoryLabel: '投擲壺',
    tier: 'S',
    badge: '対ボス最終兵器・神肌キラー',
    effect: '投擲した周囲に濃密な睡眠煙を発生させ、敵を強制的に昏睡（約60秒間睡眠）させる。',
    recipeBook: '放浪戦士の製法書【11】',
    recipeBookLocation: 'アルター高原「ゲルミア火山」手前、道沿いの放浪商人から購入',
    materials: [
      { name: 'トリーナのスイレン', count: 1, quickLocation: 'リエーニエ学院前、呼び水の村周辺' },
      { name: 'キノコ', count: 1, quickLocation: 'リムグレイブのアギール湖北など森に群生' },
    ],
    containerType: 'cracked_pot',
    containerName: 'ヒビ壺 (消費せず返却)',
    whyEssential: '難関ボス「神肌の使徒」「神肌の貴種」「神肌のふたり」がわずか1発〜2発で確定で熟睡！ソロ攻略でもタコ殴り・致命ハメで難易度が劇的に崩壊するゲーム内屈指の救済アイテム。',
    usageTips: '巨人の山嶺やファルム・アズラ攻略前に必ず量産体制を整えましょう。トリーナのスイレンは貴重品ですが、クラゲなどのドロップでも集められます。',
  },
  {
    id: 'gold-pickled-foot',
    name: '鳥脚の黄金漬け',
    category: 'utility',
    categoryLabel: '育成・ブースト',
    tier: 'S',
    badge: 'ルーン獲得量 +30%',
    effect: '使用から3分間、敵撃破時のルーン獲得量が1.3倍に跳ね上がる。',
    recipeBook: '宣教師の製法書【2】',
    recipeBookLocation: 'リムグレイブ「曇り川の洞窟」パッチの店で購入 (800ルーン)',
    materials: [
      { name: 'ロアの実', count: 3, quickLocation: '平原の赤い実。ほぼ全土に無限自生' },
      { name: '四趾の鳥脚', count: 1, quickLocation: '海岸の海鳥（グア）ドロップ' },
      { name: '金輪草', count: 1, quickLocation: '小黄金樹周辺、林森の水辺' },
    ],
    whyEssential: '「金のスカラベ（+20%）」と重複し、併用すると【獲得ルーンが1.56倍】に爆増！大ボス撃破の消滅モーション中や、モーグウィン王朝でのカラス落とし・しろがね坂道で飲むと育成が超加速します。',
    usageTips: 'ボスにとどめを刺した直後（ルーンが画面に加算される前の約3〜5秒間）にメニューから即座に使用すれば、ボス報酬ルーンが丸ごと1.3倍になります。',
  },
  {
    id: 'silver-pickled-foot',
    name: '鳥脚の白銀漬け',
    category: 'utility',
    categoryLabel: '育成・ブースト',
    tier: 'A',
    badge: 'アイテム発見力 +50',
    effect: '使用から3分間、アイテム発見力を+50（ドロップ率大幅向上）。',
    recipeBook: '放浪戦士の製法書【3】',
    recipeBookLocation: 'リムグレイブ「聖人橋」の放浪商人から購入',
    materials: [
      { name: 'ロアの実', count: 3, quickLocation: '全土の草むら' },
      { name: '四趾の鳥脚', count: 1, quickLocation: '海岸の海鳥ドロップ' },
      { name: '銀色ホタル', count: 1, quickLocation: '地下シーフラ河の水辺、啜り泣き半島の小池' },
    ],
    whyEssential: '真鍮の盾、貴腐騎士の剣、使者たちの長笛、各種レア防具などのドロップ率激低アイテムをマラソンする際の必須アイテム。',
    usageTips: '銀のスカラベと併用すれば発見力が+100以上アップ。祝福で休むと効果が切れるため、1周の間に複数体倒せる場所で使いましょう。',
  },
  {
    id: 'preserving-boluses',
    name: '免腐の苔薬',
    category: 'remedy',
    categoryLabel: '状態異常解除',
    tier: 'S',
    badge: '朱い腐敗の完全治癒薬',
    effect: '朱い腐敗の蓄積値を完全にリセットし、すでに発症している腐敗スリップダメージを即座に治癒する。',
    recipeBook: '武具職人の製法書【6】',
    recipeBookLocation: '地下世界「シーフラ河」シーフラ河の岸辺北の崖上（角骸の霊場裏）の遺体',
    materials: [
      { name: '落葉樹の苔', count: 1, quickLocation: '湿った洞窟や壁面' },
      { name: '結晶の木の芽', count: 1, quickLocation: 'アルター高原、リエーニエ学院周辺' },
      { name: '聖血の木の芽', count: 1, quickLocation: 'ケイリッド腐敗病の教会周辺' },
    ],
    whyEssential: 'ケイリッドのエオニア沼、魔術街サリア、地下の腐れ湖、ミケラの聖樹など、朱い腐敗で即死しかける難所を快適に踏破するための最重要アイテム。祈祷「火の癒しよ」を使えないビルドの生命線です。',
    usageTips: '腐敗沼を渡る際は、蓄積がMAXになって発症した瞬間に1個飲むのが最も苔薬の消費を節約できます。',
  },
  {
    id: 'uplifting-aromatic',
    name: '勇気の芳香（高揚の香り）',
    category: 'perfume',
    categoryLabel: '調香瓶アイテム',
    tier: 'S',
    badge: '物理+20% ＆ 90%被ダメカットバリア',
    effect: '自身と周囲の味方に【物理攻撃力+20%（40秒）】と【一度だけ受けるダメージを90%カットする泡のバリア】を同時に付与。',
    recipeBook: '調香師の製法書【1】',
    recipeBookLocation: 'アルター高原「調香師の隠れ家」の宝箱',
    materials: [
      { name: 'アルテリアの葉', count: 1, quickLocation: '巨人山嶺の雪原トロル、各所の限定配置' },
      { name: '洞窟苔の結晶', count: 1, quickLocation: 'アルター高原の洞窟、結晶洞窟' },
      { name: '銀の涙の殻', count: 1, quickLocation: '永遠の都ノクローン、ノクステラのスライム' },
      { name: '生き血の木の芽', count: 1, quickLocation: 'モーグウィン王朝、血の池周辺' },
    ],
    containerType: 'perfume_bottle',
    containerName: '調香瓶 (消費せず返却)',
    whyEssential: '遺灰（ティシーや写し身）と一緒にボス戦前に撒くだけで、ボスの即死級開幕大技をノーダメージ感覚で耐えられ、物理火力も大幅強化される最強のバフ香料。',
    usageTips: '調香瓶さえ集めておけば、素材がある限り何度でも補充可能。高難度ボスで写し身を召喚する直前に撒くと写し身もバリア状態で戦闘開始します。',
  },
  {
    id: 'holy-water-pot',
    name: '聖水壺',
    category: 'pot',
    categoryLabel: '投擲壺',
    tier: 'A',
    badge: 'アンデッド復活阻止・死の鳥特効',
    effect: '聖属性の大爆発。死に生きる者（スケルトン）に4倍特効ダメージを与え、復活させずに一撃消滅させる。',
    recipeBook: '宣教師の製法書【1】',
    recipeBookLocation: 'リムグレイブ「エレの教会」商人カーレから購入 (500ルーン)',
    materials: [
      { name: 'キノコ', count: 1, quickLocation: '森・湿原の木陰' },
      { name: '聖樹の褪せ葉', count: 1, quickLocation: '平原の黄金の小低木' },
    ],
    containerType: 'cracked_pot',
    containerName: 'ヒビ壺',
    whyEssential: '序盤〜中盤の強敵「ティビアの呼び舟」「死の鳥」「死儀礼の鳥」に数千ダメージの超大ダメージ！倒したスケルトンが起き上がらないため、地下墓の探索が圧倒的に楽になります。',
    usageTips: '聖属性弱点の死儀礼の鳥には、投げるだけでボスのHPがゴッソリ吹き飛びます。',
  },
  {
    id: 'freezing-pot',
    name: '冷気壺',
    category: 'pot',
    categoryLabel: '投擲壺',
    tier: 'A',
    badge: 'マレニア水鳥乱舞確定キャンセル',
    effect: '一撃で相手に莫大な冷気蓄積を与え、即座に「凍傷（割合ダメージ＋被ダメージ20%増加）」を発動させて体勢を崩す。',
    recipeBook: '輝石職人の製法書【6】',
    recipeBookLocation: 'カーリアの城館「王家の月見場」裏手の崖を下りた小部屋',
    materials: [
      { name: '氷結結び', count: 2, quickLocation: 'カーリア城館周辺、巨人の山嶺雪原' },
    ],
    containerType: 'ritual_pot',
    containerName: '儀式壺',
    whyEssential: '最強ボス「マレニア」が宙に浮いて「乱舞（水鳥乱舞）」を構えた瞬間に投げつけると、即座に凍傷で怯んで乱舞が完全に強制中断される超有名テクニック用アイテム！',
    usageTips: 'マレニア戦で乱舞の回避が安定しない人は、冷気壺をスロットに入れて構えておくだけで勝率が何倍にも跳ね上がります。',
  },
  {
    id: 'volcano-pot',
    name: '火山壺',
    category: 'pot',
    categoryLabel: '投擲壺',
    tier: 'A',
    badge: '超簡単量産・継続炎大ダメージ',
    effect: '着弾地点に炎の雲を長時間残留させ、範囲内の敵に多段継続炎ダメージを与え続ける。',
    recipeBook: '武具職人の製法書【6】',
    recipeBookLocation: 'ゲルミア火山・火山館周辺',
    materials: [
      { name: '火山石', count: 2, quickLocation: 'ゲルミア火山一帯の岩肌で無限採取' },
    ],
    containerType: 'cracked_pot',
    containerName: 'ヒビ壺',
    whyEssential: '素材が「火山石」のみで、ゲルミア火山を少し歩くだけで数十個単位で採取可能。炎弱点の植物モンスター（ミランダフラワー）や手の怪物（ユビムシ）を行動不能にハメられます。',
    usageTips: '足の遅い大型ボスや盾を構えた騎士の足元に投げると、ガードをめくってダメージが入り続けます。',
  },
  {
    id: 'bloodboil-aromatic',
    name: '狂熱の香薬',
    category: 'perfume',
    categoryLabel: '調香瓶アイテム',
    tier: 'A',
    badge: '物理攻撃力 +30% 超ブースト',
    effect: '60秒間、自身の物理攻撃力を+30%、スタミナ最大値を向上。引き換えに被ダメージが30%増加。',
    recipeBook: '調香師の製法書【2】',
    recipeBookLocation: 'アルター高原「日陰城」内庭の屋根上',
    materials: [
      { name: 'アルテリアの葉', count: 1, quickLocation: '雪原トロル、限定商人' },
      { name: '洞窟苔の結晶', count: 1, quickLocation: 'アルター高原洞窟' },
      { name: '生き血の木の芽', count: 1, quickLocation: 'モーグウィン王朝' },
      { name: 'タコ玉', count: 1, quickLocation: '陸ダコ（タコの卵塊）' },
    ],
    containerType: 'perfume_bottle',
    containerName: '調香瓶',
    whyEssential: 'ボスを瞬殺するワンパン構成・出血ラッシュ構成の最終ブースター。被ダメ増加のデメリットはありますが、速攻でボスを消し去る際に最強の火力を誇ります。',
    usageTips: '霊薬（真紅の泡雫など）や遺灰と併用して、ボス部屋入場直後に一気に削り切る戦法に向いています。',
  },
  {
    id: 'neutralizing-boluses',
    name: '免毒の苔薬',
    category: 'remedy',
    categoryLabel: '状態異常解除',
    tier: 'B',
    badge: '毒沼・毒針トラップの即時解除',
    effect: '毒の蓄積値をリセットし、毒状態を即座に治療する。',
    recipeBook: '放浪戦士の製法書【2】',
    recipeBookLocation: 'リムグレイブ「エレの教会」放浪商人カーレから購入 (200ルーン)',
    materials: [
      { name: '落葉樹の苔', count: 1, quickLocation: '各地の洞窟・廃墟' },
      { name: '洞窟苔', count: 1, quickLocation: 'ほぼ全ての洞窟・坑道' },
      { name: '毒花の花粉', count: 1, quickLocation: '毒を吹く大型花（ミランダ）周辺' },
    ],
    whyEssential: 'ゲーム開始直後から製作可能。毒カビや毒沼（ケイリッドや啜り泣きの半島）での探索ストレスをゼロにします。',
    usageTips: '素材の「毒花の花粉」は花を倒さなくても周囲に落ちているものをしゃがみ回収できます。',
  },
];

// =========================================================================
// 2. 製法書（レシピ）一覧と入手場所
// =========================================================================
export const recipeBooksList: RecipeBook[] = [
  // --- 放浪戦士の製法書 ---
  {
    id: 'nomadic-1',
    series: 'nomadic',
    seriesName: '放浪戦士の製法書',
    name: '放浪戦士の製法書【1】',
    location: 'エレの教会 (リムグレイブ)',
    howToGet: 'エレの教会の放浪商人カーレから購入 (500ルーン)',
    unlocks: ['骨の矢', '骨の矢（羽付き）', '骨のボルト'],
    importance: 'S',
    memo: '遠距離攻撃の矢を現地調達するための最序盤必須レシピ。',
  },
  {
    id: 'nomadic-2',
    series: 'nomadic',
    seriesName: '放浪戦士の製法書',
    name: '放浪戦士の製法書【2】',
    location: 'エレの教会 (リムグレイブ)',
    howToGet: 'エレの教会の放浪商人カーレから購入 (500ルーン)',
    unlocks: ['免毒の苔薬', '毒ドライエッグ', '白光の干し肉'],
    importance: 'A',
    memo: '毒解除の苔薬が解禁。',
  },
  {
    id: 'nomadic-3',
    series: 'nomadic',
    seriesName: '放浪戦士の製法書',
    name: '放浪戦士の製法書【3】',
    location: '聖人橋の北東 (リムグレイブ)',
    howToGet: '聖人橋のすぐそばにいる放浪商人から購入 (500ルーン)',
    unlocks: ['鳥脚の白銀漬け', '骨の毒矢', '骨の毒ボルト'],
    importance: 'S',
    memo: 'レアアイテム掘り必須の「鳥脚の白銀漬け」が解禁。',
  },
  {
    id: 'nomadic-6',
    series: 'nomadic',
    seriesName: '放浪戦士の製法書',
    name: '放浪戦士の製法書【6】',
    location: 'ハイト砦 (リムグレイブ東部)',
    howToGet: 'ハイト砦の城壁上階、遺体から拾う',
    unlocks: ['血脂', '紐付き血脂', '骨の血矢', '骨の血ボルト'],
    importance: 'S',
    memo: '武器に出血属性を付与する「血脂」が解禁。序盤のボス戦が超有利に。',
  },
  {
    id: 'nomadic-7',
    series: 'nomadic',
    seriesName: '放浪戦士の製法書',
    name: '放浪戦士の製法書【7】',
    location: '嵐の丘のボロ家〜ストームヴィル迂回路 (リムグレイブ)',
    howToGet: '崩れた橋の先端に横たわる遺体から拾う',
    unlocks: ['虹の石の矢', '紐付き火炎脂', '軟光の干し肉'],
    importance: 'B',
  },
  {
    id: 'nomadic-10',
    series: 'nomadic',
    seriesName: '放浪戦士の製法書',
    name: '放浪戦士の製法書【10】',
    location: 'ストームヴィル城 (リムグレイブ)',
    howToGet: '城壁の塔から屋根伝いに降りたテラスの遺体',
    unlocks: ['嵐羽の骨矢'],
    importance: 'A',
    memo: '強靭削り性能の高い嵐羽の矢。',
  },
  {
    id: 'nomadic-11',
    series: 'nomadic',
    seriesName: '放浪戦士の製法書',
    name: '放浪戦士の製法書【11】',
    location: 'アルター高原・ゲルミア火山手前の商人',
    howToGet: '祝福「ゲルミア火山一合目」手前の崖沿いにいる放浪商人から購入',
    unlocks: ['睡眠壺', '骨の睡眠矢', '骨の睡眠ボルト'],
    importance: 'S',
    memo: '【最重要】神肌キラーの「睡眠壺」が解禁。必ず手に入れましょう。',
  },
  {
    id: 'nomadic-13',
    series: 'nomadic',
    seriesName: '放浪戦士の製法書',
    name: '放浪戦士の製法書【13】',
    location: 'ベイルム街道の放浪商人 (リエーニエ)',
    howToGet: 'ベイルム教会の坂下にある商人から購入',
    unlocks: ['骨の魔力矢', '骨の魔力ボルト'],
    importance: 'B',
  },
  {
    id: 'nomadic-17',
    series: 'nomadic',
    seriesName: '放浪戦士の製法書',
    name: '放浪戦士の製法書【17】',
    location: 'シーフラ河 (地下世界)',
    howToGet: 'シーフラ河の木道足場を登った先の隠れ商人から購入 (1000ルーン)',
    unlocks: ['石鹸', '油壺', '紐付き油壺'],
    importance: 'A',
    memo: '炎ダメージを倍化させる「油壺」と毒・腐敗沼の汚れを落とす「石鹸」。',
  },
  {
    id: 'nomadic-21',
    series: 'nomadic',
    seriesName: '放浪戦士の製法書',
    name: '放浪戦士の製法書【21】',
    location: '火山館・牢街教会周辺 (ゲルミア火山)',
    howToGet: '牢街教会から出て溶岩地帯を通り抜けた建物の遺体',
    unlocks: ['誘い頭蓋'],
    importance: 'A',
    memo: '雑魚敵を誘導して背後から安全に処理できる「誘い頭蓋」。',
  },

  // --- 武具職人の製法書 ---
  {
    id: 'armorer-1',
    series: 'armorer',
    seriesName: '武具職人の製法書',
    name: '武具職人の製法書【1】',
    location: 'アギール湖北東・野営地 (リムグレイブ)',
    howToGet: '関門前の廃墟から東の街道沿いにある兵士野営地の宝箱',
    unlocks: ['火炎脂', '紐付き火炎脂', '火炎耐性の干し肉'],
    importance: 'A',
    memo: '序盤のボスに特効の火炎エンチャント「火炎脂」が解禁。',
  },
  {
    id: 'armorer-2',
    series: 'armorer',
    seriesName: '武具職人の製法書',
    name: '武具職人の製法書【2】',
    location: '海岸の洞窟南の放浪商人 (リムグレイブ)',
    howToGet: '海岸沿いの崖下の商人が販売 (600ルーン)',
    unlocks: ['免血の苔薬', '骨の毒投げ矢'],
    importance: 'A',
    memo: '出血蓄積を抑える「免血の苔薬」。',
  },
  {
    id: 'armorer-3',
    series: 'armorer',
    seriesName: '武具職人の製法書',
    name: '武具職人の製法書【3】',
    location: '聖人橋の放浪商人 (リムグレイブ)',
    howToGet: '聖人橋北の放浪商人が販売 (2000ルーン)',
    unlocks: ['高揚の干し肉', '免疫の干し肉'],
    importance: 'B',
  },
  {
    id: 'armorer-6',
    series: 'armorer',
    seriesName: '武具職人の製法書',
    name: '武具職人の製法書【6】',
    location: 'シーフラ河 (地下世界)',
    howToGet: '祝福「シーフラ河の岸辺」から北へ進み、角骸の霊場の裏手の崖沿いにある遺体',
    unlocks: ['免腐の苔薬'],
    importance: 'S',
    memo: '【最重要】朱い腐敗を治療する「免腐の苔薬」の唯一の自作レシピ！',
  },
  {
    id: 'armorer-7',
    series: 'armorer',
    seriesName: '武具職人の製法書',
    name: '武具職人の製法書【7】',
    location: 'ゲール砦 (ケイリッド)',
    howToGet: 'ゲール砦内部の木造足場を登った先の宝箱',
    unlocks: ['免冷の苔薬'],
    importance: 'B',
    memo: '凍傷を解除する苔薬。',
  },

  // --- 宣教師の製法書 ---
  {
    id: 'missionary-1',
    series: 'missionary',
    seriesName: '宣教師の製法書',
    name: '宣教師の製法書【1】',
    location: 'エレの教会 (リムグレイブ)',
    howToGet: '放浪商人カーレから購入 (1000ルーン)',
    unlocks: ['聖水壺', '紐付き聖水壺'],
    importance: 'S',
    memo: 'アンデッド復活阻止・死の鳥キラーの「聖水壺」。',
  },
  {
    id: 'missionary-2',
    series: 'missionary',
    seriesName: '宣教師の製法書',
    name: '宣教師の製法書【2】',
    location: '曇り川の洞窟 (リムグレイブ)',
    howToGet: 'パッチの店から購入 (800ルーン)',
    unlocks: ['鳥脚の黄金漬け', '聖光の干し肉'],
    importance: 'S',
    memo: '【最重要】経験値1.3倍の「鳥脚の黄金漬け」。パッチを生かして購入必須。',
  },
  {
    id: 'missionary-5',
    series: 'missionary',
    seriesName: '宣教師の製法書',
    name: '宣教師の製法書【5】',
    location: 'シーフラの水道橋 (ノクローン)',
    howToGet: 'ノクローン水道橋の崖沿い、円形遺構の遺体',
    unlocks: ['聖律壺'],
    importance: 'A',
    memo: '聖水壺の上位互換。',
  },
  {
    id: 'missionary-6',
    series: 'missionary',
    seriesName: '宣教師の製法書',
    name: '宣教師の製法書【6】',
    location: '火山館・牢街教会先 (ゲルミア火山)',
    howToGet: '牢街教会の屋根上から降りた小部屋',
    unlocks: ['死ぎの聖水壺'],
    importance: 'A',
    memo: '死儀礼の鳥に破滅的ダメージを与える究極アンデッド壺。',
  },

  // --- 調香師の製法書 ---
  {
    id: 'perfumer-1',
    series: 'perfumer',
    seriesName: '調香師の製法書',
    name: '調香師の製法書【1】',
    location: '調香師の隠れ家 (アルター高原)',
    howToGet: 'アルター高原のダンジョン「調香師の隠れ家」最奥の宝箱',
    unlocks: ['勇気の芳香（高揚の香り）', '火花の芳香'],
    importance: 'S',
    memo: '【最重要】攻撃+20%＆90%軽減バリアの「勇気の芳香」が解禁。',
  },
  {
    id: 'perfumer-2',
    series: 'perfumer',
    seriesName: '調香師の製法書',
    name: '調香師の製法書【2】',
    location: '日陰城 (アルター高原)',
    howToGet: '日陰城内庭の屋根上にあるハシゴを登った遺体',
    unlocks: ['狂熱の香薬', '毒噴霧'],
    importance: 'A',
    memo: '物理攻撃力+30%の「狂熱の香薬」。',
  },
  {
    id: 'perfumer-3',
    series: 'perfumer',
    seriesName: '調香師の製法書',
    name: '調香師の製法書【3】',
    location: 'アルター高原・城壁沿いの小堂',
    howToGet: '王都外郭の調香師の廃屋の宝箱',
    unlocks: ['酸の噴霧'],
    importance: 'B',
  },

  // --- 輝石職人の製法書 ---
  {
    id: 'glintstone-6',
    series: 'glintstone',
    seriesName: '輝石職人の製法書',
    name: '輝石職人の製法書【6】',
    location: 'カーリアの城館 (リエーニエ)',
    howToGet: '王家の月見場手前の崖を飛び降りた小部屋',
    unlocks: ['冷気壺', '氷結脂'],
    importance: 'S',
    memo: '【最重要】マレニアの水鳥乱舞を即座にキャンセルする「冷気壺」。',
  },

  // --- 古竜信徒の製法書 ---
  {
    id: 'dragon-1',
    series: 'dragon',
    seriesName: '古竜信徒の製法書',
    name: '古竜信徒の製法書【1】',
    location: 'ウィンダムの廃墟地下 (アルター高原)',
    howToGet: 'ウィンダム廃墟の地下インプ封印部屋の宝箱',
    unlocks: ['雷脂', '紐付き雷脂', '骨の雷矢'],
    importance: 'A',
    memo: '水辺の敵や甲冑騎士に大ダメージを与える雷エンチャント。',
  },
  {
    id: 'dragon-2',
    series: 'dragon',
    seriesName: '古竜信徒の製法書',
    name: '古竜信徒の製法書【2】',
    location: '世捨て商人のボロ家 (アルター高原)',
    howToGet: '王都外郭の世捨て商人から購入',
    unlocks: ['雷壺', '紐付き雷壺'],
    importance: 'A',
  },
];

// =========================================================================
// 3. 重要素材アイテム ＆ 効率的マラソン場所
// =========================================================================
export const essentialMaterialsList: CraftingMaterial[] = [
  {
    id: 'four-toed-fowl-foot',
    name: '四趾の鳥脚',
    category: 'animal',
    categoryLabel: '動物・ドロップ',
    rarity: 'rare',
    rarityLabel: 'やや希少',
    description: '海鳥（グア）の足先。ルーン増加や発見力アップの鳥脚漬けの必須原材料。',
    usedFor: ['鳥脚の黄金漬け (ルーン+30%)', '鳥脚の白銀漬け (発見力+50)'],
    bestFarmingSpot: 'リムグレイブ西海岸「海を臨む古遺跡」南の砂浜',
    farmingSteps: [
      '① 祝福「海を臨む古遺跡」から霊馬で崖下（西の砂浜）へ霊気流で降りる。',
      '② 砂浜に海鳥（ペンギンのような黒い鳥「グア」）が3〜4羽ずつ固まって留まっている。',
      '③ 弓矢で遠距離狙撃するか、足音消し祈祷＋広範囲魔術（輝石の弧）や広範囲戦技（霜踏み）で一網打尽にする。',
      '④ 祝福に戻って休息しループ。5分で10〜15個集まります。',
    ],
    tips: '鳥はプレイヤーが近づくと飛び立つため、遠距離武器や音を立てないアプローチが効率化のコツです。',
  },
  {
    id: 'trinas-lily',
    name: 'トリーナのスイレン',
    category: 'plant',
    categoryLabel: '貴重植物',
    rarity: 'very_rare',
    rarityLabel: '極めて希少',
    description: '淡い紫色のスイレン。敵を即座に深い眠りに落とす「睡眠壺」の原材料。リスポーンしない自生品が多い。',
    usedFor: ['睡眠壺 (対ボス最終兵器)', '睡眠脂', '骨の睡眠矢'],
    bestFarmingSpot: 'ケイリッド「ファロス要塞」周辺のクラゲドロップ / 各地の商人買い占め',
    farmingSteps: [
      '【確定入手】：リムグレイブ「呼び水の村」周辺に約5本、リエーニエ学院前「学院の門前町」周辺に約8本自生（※自生は1回限り）。',
      '【無限マラソン】：ケイリッド「ファロス要塞」裏手や、リエーニエ南部の「赤いクラゲ」を倒すと低確率で無限ドロップ。',
      '【商人】：リエーニエ「リエーニエ湖の岸辺」の商人や、シーフラ河の隠れ商人がまとまった数を販売。',
    ],
    tips: '自生品を集めるだけでも本編クリア分（30〜40個）は十分確保できます。神肌のふたり戦などの決戦用に温存しましょう。',
  },
  {
    id: 'arteria-leaf',
    name: 'アルテリアの葉',
    category: 'plant',
    categoryLabel: '貴重植物',
    rarity: 'very_rare',
    rarityLabel: '極めて希少',
    description: '暗紅色の葉。攻撃力+20%＋バリアの「勇気の芳香」や「狂熱の香薬」に必須の高級素材。',
    usedFor: ['勇気の芳香 (高揚の香り)', '狂熱の香薬', '血の君主の歓喜トリガー'],
    bestFarmingSpot: '巨人の山嶺「巨人墓標」南の雪原トロル（無限確定ドロップ）',
    farmingSteps: [
      '① 巨人の山嶺の祝福「巨人墓標」から南の広場へ進む。',
      '② 雪山トロル（毛むくじゃらの巨人）が徘徊している。',
      '③ トロルを倒すと【高確率（約30%〜確定）でアルテリアの葉】をドロップ。',
      '④ 出血武器やジャンプ強攻撃で体勢を崩せば1分で周回可能。',
    ],
    tips: '序盤〜中盤のフィールド自生品はリスポーンしませんが、巨人の山嶺のトロルだけは何度でも無限にドロップします。',
  },
  {
    id: 'silver-firefly',
    name: '銀色ホタル',
    category: 'animal',
    categoryLabel: '水生昆虫',
    rarity: 'common',
    rarityLabel: '普通',
    description: '水辺で銀色に光るホタル。「鳥脚の白銀漬け」の素材。',
    usedFor: ['鳥脚の白銀漬け (発見力+50)'],
    bestFarmingSpot: '地下世界「シーフラ河」祝福「シーフラ河の岸辺」周辺の水たまり',
    farmingSteps: [
      '① 祝福「シーフラ河の岸辺」にワープ。',
      '② 祝福のすぐ南〜南西の水辺に銀色に光るホタルが5〜8匹群生している。',
      '③ 馬に乗ったままダッシュで走り抜けて○ボタン連打で回収。',
      '④ 祝福に戻って座るだけ。1分で20匹以上稼げます。',
    ],
    tips: '祝福の目と鼻の先に自生しており、敵と戦う必要が一切ないためゲーム内最高峰の高速マラソンが可能です。',
  },
  {
    id: 'gold-firefly',
    name: '金色ホタル',
    category: 'animal',
    categoryLabel: '水生昆虫',
    rarity: 'common',
    rarityLabel: '普通',
    description: '水辺で金色に輝くホタル。「鳥脚の黄金漬け」の素材。',
    usedFor: ['鳥脚の黄金漬け (ルーン+30%)'],
    bestFarmingSpot: '啜り泣きの半島「トモエの小塔」北のタコ池',
    farmingSteps: [
      '① 啜り泣きの半島の祝福「トモエの小塔」から北へ少し進む。',
      '② 陸ダコがいる小さな池の水面に、金色のホタルが約8〜10匹浮遊している。',
      '③ 霊馬で駆け抜けて回収し、小塔の祝福で休息。',
    ],
    tips: 'ケイリッドの「燻り教会」南の池にも多数群生しています。',
  },
  {
    id: 'volcano-stone',
    name: '火山石',
    category: 'mineral',
    categoryLabel: '鉱石・岩石',
    rarity: 'common',
    rarityLabel: '豊富',
    description: 'ゲルミア火山特有の熱を帯びた多孔質石。「火山壺」の素材。',
    usedFor: ['火山壺 (持続炎ダメージ壺)'],
    bestFarmingSpot: 'ゲルミア火山「ゲルミア火山一合目」〜「九合目」街道沿い',
    farmingSteps: [
      '① 祝福「ゲルミア火山一合目」周辺の岩肌を見る。',
      '② 橙色に光る岩石が大量に群生している。',
      '③ 馬で走り抜けるだけで1周20個以上を瞬時に回収可能。',
    ],
    tips: 'ヒビ壺さえあれば、素材調達の手間がほぼゼロで強力な炎投擲物を無限に量産できます。',
  },
  {
    id: 'sacrament-bud',
    name: '聖血の木の芽',
    category: 'plant',
    categoryLabel: '貴重植物',
    rarity: 'rare',
    rarityLabel: '希少',
    description: '新鮮な血で潤った木の芽。朱い腐敗を治療する「免腐の苔薬」の必須素材。',
    usedFor: ['免腐の苔薬 (朱い腐敗治癒)'],
    bestFarmingSpot: 'ケイリッド「腐敗病の教会」周辺',
    farmingSteps: [
      '① ケイリッドのサリアの裏手「腐敗病の教会」周辺に自生。',
      '② アルター高原「日陰城」の城壁内、腐れ湖周辺でも採取可能。',
      '③ ゲルミア火山の商人からもまとまった数を購入可能。',
    ],
    tips: '朱い腐敗のエリア（腐れ湖など）に挑む前に、ここで10〜15個ストックしておくと安心です。',
  },
];

// =========================================================================
// 4. 容器アイテム（ヒビ壺・儀式壺・調香瓶）
// =========================================================================
export const containerItemsList: ContainerItemInfo[] = [
  {
    type: 'cracked_pot',
    name: 'ヒビ壺',
    maxCount: 20,
    iconType: 'pot',
    description: '投擲壺アイテムを製作するための基本容器。使用しても壊れず、投げた後に祝福で休むとインベントリに自動返却されます。',
    features: '最大所持数は【全20個】。火炎壺、聖水壺、睡眠壺、火山壺などの基本壺に使用。',
    locations: [
      { area: 'エレの教会 (リムグレイブ)', detail: '商人カーレから購入 (300ルーン)', count: 3 },
      { area: '海岸の洞窟南の商人 (リムグレイブ)', detail: '海岸沿いの放浪商人から購入 (600ルーン)', count: 1 },
      { area: '聖人橋の商人 (リムグレイブ)', detail: '聖人橋北の商人から購入', count: 1 },
      { area: 'モーンの城砦前商人 (啜り泣き半島)', detail: '祝福近くの商人から購入', count: 1 },
      { area: 'ストームヴィル城', detail: '大昇降機側の部屋、壺の小部屋の遺体', count: 2 },
      { area: 'モーンの城 (啜り泣き半島)', detail: '城の屋上木造広場', count: 1 },
      { area: 'カーリアの城館 (リエーニエ)', detail: '中庭の巨大壺部屋周辺', count: 1 },
      { area: '壺村 (リエーニエ)', detail: '壺村の建物の屋根や花畑の遺体', count: 3 },
      { area: 'アウレーザの副墓 (アルター高原)', detail: 'ダンジョン内の壺敵エリア', count: 4 },
      { area: 'ケイリッド・竜塚の商人', detail: '世捨て商人のボロ家で購入', count: 1 },
    ],
  },
  {
    type: 'ritual_pot',
    name: '儀式壺',
    maxCount: 10,
    iconType: 'ritual',
    description: '大型で強力な儀式投擲壺（冷気壺、聖律壺など）を製作するための高級容器。使用後も自動返却。',
    features: '最大所持数は【全10個】。マレニア乱舞を止める「冷気壺」などの高級壺に使用。',
    locations: [
      { area: 'ラスカーの廃墟 (リエーニエ)', detail: '廃墟北側の遺体', count: 1 },
      { area: '学院正門前商人 (リエーニエ)', detail: '転送門先の世捨て商人から購入', count: 1 },
      { area: 'カーリアの書庫南 (リエーニエ)', detail: '壺村の小道', count: 2 },
      { area: 'アウレーザの副墓 (アルター高原)', detail: '巨大壺の奥の宝箱', count: 2 },
      { area: '巨人の山嶺・地下墓', detail: 'ダンジョン内の遺体', count: 1 },
      { area: '隠れた商人のボロ家 (アルター外郭)', detail: '世捨て商人が販売 (3000ルーン)', count: 1 },
      { area: 'ミケラの聖樹', detail: '聖樹の根付近の遺体', count: 1 },
    ],
  },
  {
    type: 'perfume_bottle',
    name: '調香瓶',
    maxCount: 10,
    iconType: 'perfume',
    description: '調香アイテム（勇気の芳香、火花の芳香、狂熱の香薬など）を製作するための特殊容器。使用後も自動返却。',
    features: '最大所持数は【全10個】。被ダメ90%カットバリアや超火力バフ香料に使用。',
    locations: [
      { area: '調香師の廃屋 (アルター高原)', detail: '廃屋の宝箱', count: 2 },
      { area: '調香師の隠れ家 (アルター高原)', detail: '洞窟内の宝箱', count: 1 },
      { area: '火山館 (ゲルミア火山)', detail: '客間の死体', count: 1 },
      { area: '王都ローデイル', detail: '大通り沿いの調香師部屋、城館', count: 2 },
      { area: '日陰城 (アルター高原)', detail: '城壁の宝箱', count: 1 },
      { area: '隠世商人のボロ家 (ケイリッド)', detail: '世捨て商人が販売 (2000ルーン)', count: 1 },
      { area: 'エインセル河 (地下世界)', detail: '商人が販売', count: 1 },
    ],
  },
];

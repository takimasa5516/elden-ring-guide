export interface MapPin {
  id: string;
  number: number;
  name: string;
  type: 'church' | 'tree' | 'mine' | 'ruins' | 'special';
  typeLabel: string;
  x: number; // percentage 0-100 on regional map
  y: number; // percentage 0-100 on regional map
  keyItems: string;
  description: string;
}

export type RegionCategory = 'world' | 'main_surface' | 'late_game' | 'underground' | 'dlc';

export interface RegionMapInfo {
  id: string;
  name: string;
  enName: string;
  category: RegionCategory;
  categoryLabel: string;
  recommendedLevel: string;
  summary: string;
  mapImage: string;
  aspectRatio: string;
  mapFragments: {
    name: string;
    location: string;
  }[];
  explorationFlow: string[];
  hazards: string[];
  pins: MapPin[];
}

export const regionsData: RegionMapInfo[] = [
  // 0. 全体俯瞰
  {
    id: 'world_overworld',
    name: '狭間の地 全体俯瞰マップ',
    enName: 'The Lands Between - Complete World Map',
    category: 'world',
    categoryLabel: '全域俯瞰',
    recommendedLevel: 'Lv. 1 〜 150+',
    summary: '狭間の地全土（南の啜り泣きの半島から北端のミケラの聖樹、東のファルム・アズラまで）の全地方位置関係を一枚で把握できる完全俯瞰図です。',
    mapImage: 'images/maps/world_full.jpg',
    aspectRatio: '1920 / 1851',
    mapFragments: [
      { name: '地図断片 全19箇所', location: '各地方の街道沿いに立つ石柱（オベリスク）から入手' }
    ],
    explorationFlow: [
      '① リムグレイブ・啜り泣きの半島で聖杯瓶・霊薬・霊馬トレントを揃える。',
      '② 湖のリエーニエで学院レアルカリアを突破し、レナラ撃破で産まれ直し（ステ振り直し）解放。',
      '③ ケイリッドでラダーン祭りを制覇し、星を落として地下世界ノクローンを解放。',
      '④ デクタスの大昇降機または谷底ルートからアルター高原・王都ローデイルへ進軍。',
      '⑤ 巨人たちの山嶺で巨人の火の釜を灯し、崩れゆくファルム・アズラ、そして灰都ローデイルへ。',
      '⑥ 聖樹の秘割符で聖別雪原・ミケラの聖樹エブレフェールへ到達し、最深部でマレニアに挑む。',
    ],
    hazards: [
      '地方ごとの推奨レベル格差（序盤に竜塚や雪原へ突入すると雑魚の一撃で即死）。',
      'ケイリッドや腐れ湖の「朱い腐敗」、狂い火村や深き根の「狂気・死ゲージ」。',
      '王都焼失イベント（ファルム・アズラのマリケス撃破で王都ローデイルが灰都化し一部アイテム消失）。',
    ],
    pins: [
      { id: 'wo1', number: 1, name: 'リムグレイブ ＆ 啜り泣きの半島', type: 'special', typeLabel: '序盤エリア', x: 44, y: 76, keyItems: '霊馬トレント / 霊薬の聖杯瓶 / 聖杯の雫×4', description: '冒険の起点。南の半島で聖杯瓶を最大まで強化するのが最重要。' },
      { id: 'wo2', number: 2, name: '湖のリエーニエ', type: 'special', typeLabel: '中盤エリア', x: 26, y: 55, keyItems: '魔術学院 / 満月の女王レナラ / 鍛石鈴玉【1】', description: '魔術と湖の広大な地方。産まれ直し解放とラニイベントの拠点。' },
      { id: 'wo3', number: 3, name: 'ケイリッド ＆ 竜塚', type: 'special', typeLabel: '中〜終盤エリア', x: 57, y: 69, keyItems: '星砕きのラダーン / 名刀月隠 / ラダゴンの爛れ刻印', description: '朱い腐敗の荒野。序盤でも壊れ装備を戦闘不要で回収可能。' },
      { id: 'wo4', number: 4, name: 'アルター高原 ＆ ゲルミア火山', type: 'special', typeLabel: '中盤〜後半エリア', x: 28, y: 31, keyItems: '火山館 / 冒涜の君主ライカード / 鍛石・喪色鈴玉【2】', description: '王都の周囲に広がる黄金の大地。各種鈴玉で武器を+12/+6まで常時強化可能に。' },
      { id: 'wo5', number: 5, name: '王都ローデイル', type: 'special', typeLabel: 'レガシー王都', x: 44, y: 36, keyItems: '最初の王ゴッドフレイ / 忌み王モーゴット', description: '黄金樹の根元に広がる巨大立体都市。エルデの王座を目指す。' },
      { id: 'wo6', number: 6, name: '巨人たちの山嶺', type: 'special', typeLabel: '終盤エリア', x: 65, y: 28, keyItems: '火の巨人 / 巨人の火の釜', description: 'ロルドの大昇降機を越えた極寒の連峰。黄金樹を焼く火種を求める。' },
      { id: 'wo7', number: 7, name: '聖別雪原', type: 'special', typeLabel: '終盤秘境', x: 54, y: 19, keyItems: '典礼街オルディナ / 聖樹への転送門', description: '吹雪で視界が閉ざされた隠された雪原。秘割符を掲げて進入。' },
      { id: 'wo8', number: 8, name: 'ミケラの聖樹 / エブレフェール', type: 'special', typeLabel: '最難関秘境', x: 58, y: 8, keyItems: '腐敗の女神マレニア / 聖樹の騎士ローレッタ', description: '狭間の地最北端の巨大樹。エルデンリング本編最高難易度の隠しダンジョン。' },
      { id: 'wo9', number: 9, name: '崩れゆくファルム・アズラ', type: 'special', typeLabel: '天空浮遊都市', x: 88, y: 46, keyItems: '黒き剣のマリケス / 竜王プラキドサクス', description: '竜巻に浮かぶ太古の神殿。死のルーンを解放するクライマックスの地。' },
    ],
  },

  // 1. 本編地上：リムグレイブ ＆ 啜り泣きの半島
  {
    id: 'limgrave',
    name: 'リムグレイブ ＆ 啜り泣きの半島',
    enName: 'Limgrave & Weeping Peninsula',
    category: 'main_surface',
    categoryLabel: '地上界 (序盤)',
    recommendedLevel: 'Lv. 1 〜 35',
    summary: '冒険の出発点。北のストームヴィル城へ挑む前に、南の「啜り泣きの半島」を一周して聖杯瓶を最大まで強化するのが最も賢いサバイバル順序です。',
    mapImage: 'images/maps/limgrave.png',
    aspectRatio: '596 / 800',
    mapFragments: [
      { name: 'リムグレイブ西部', location: '関門前の廃墟中央の石柱' },
      { name: 'リムグレイブ東部', location: '霧の森の街道沿い（大熊エリア手前）' },
      { name: '啜り泣きの半島', location: 'モーン城の手前街道沿い' },
    ],
    explorationFlow: [
      '① 漂着墓地を出たらエレの教会へ向かい、放浪商人カーレから「ツール鞄」を購入。',
      '② 関門前の廃墟で祝福に触れ、メリナと契約してレベルアップと霊馬トレントを解放。',
      '③ 夜にしてエレの教会に戻り、魔女レナから「霊呼びの鈴」と「狼の遺灰」を入手。',
      '④ 南下して贄送りの大橋を越え、啜り泣きの半島の教会3箇所（第四マリカ・巡礼・カルの洗礼堂）で聖杯の雫×3を回収。',
      '⑤ 第三マリカ教会で「霊薬の聖杯瓶」を確保し、裏の転送門からケイリッドへ飛んでグレイオール討伐。',
    ],
    hazards: [
      'エレの教会前の黄金騎兵ツリーガード（初期状態では絶対にスルー推奨）。',
      'アギール湖中央に降り立つ飛竜アギール（霊馬で逃走推奨）。',
      '霧の森の巨大ヒグマ（感知が早く即死級。しゃがみ移動か馬で全力離脱）。',
    ],
    pins: [
      { id: 'p1', number: 1, name: '漂着墓地 / 学びの洞窟', type: 'special', typeLabel: 'ダンジョン', x: 44, y: 44, keyItems: '黄金樹の恩寵 (タリスマン)', description: '冒険の始まりの地。地下の英雄墓には最序盤最強タリスマン「黄金樹の恩寵」あり。' },
      { id: 'p2', number: 2, name: '導きのはじまり', type: 'special', typeLabel: '重要NPC', x: 37, y: 46, keyItems: '白面ヴァレー', description: '地上最初の祝福。ヴァレーから案内を受ける（絶対に攻撃・殺害禁止）。' },
      { id: 'p3', number: 3, name: 'エレの教会', type: 'church', typeLabel: '教会・拠点', x: 42, y: 37, keyItems: '霊呼びの鈴 / 狼の遺灰 / ツール鞄', description: '夜に魔女レナが出現。放浪商人カーレからツール鞄や望遠鏡を購入可能。' },
      { id: 'p4', number: 4, name: '関門前の廃墟 / 嵐の関門', type: 'ruins', typeLabel: '最重要拠点', x: 46, y: 27, keyItems: '地図断片(西) / 砥石の小刀 / 黄金の種子', description: 'メリナと契約し霊馬トレント解放。地下宝箱に砥石の小刀。' },
      { id: 'p5', number: 5, name: '嵐丘のボロ屋', type: 'special', typeLabel: '重要NPC', x: 36, y: 22, keyItems: 'クラゲの遺灰 / ローデリカ', description: 'ローデリカと会話してクラゲの遺灰入手。円卓調霊師への第一歩。' },
      { id: 'p6', number: 6, name: '死に触れた地下墓', type: 'mine', typeLabel: '地下墓', x: 47, y: 11, keyItems: '名刀「打刀」 / 緋色の凶刃', description: '2階の死体から打刀をボス不要で回収可能。侍以外の素性でも二刀流可能。' },
      { id: 'p7', number: 7, name: 'リムグレイブ坑道', type: 'mine', typeLabel: '坑道', x: 55, y: 36, keyItems: '鍛石【1】大量 / 咆哮のメダリオン', description: '最序盤の通常武器強化素材を一気に確保できる最重要ダンジョン。' },
      { id: 'p8', number: 8, name: 'アギール湖北 / アギール湖', type: 'special', typeLabel: '祝福・湖', x: 53, y: 30, keyItems: '飛竜アギール / 竜の心臓', description: '序盤の広大な湖。飛竜アギールは霊馬に乗って逃げ回るのが安全。' },
      { id: 'p9', number: 9, name: '宿場跡の地下室', type: 'ruins', typeLabel: '魔術師NPC', x: 67, y: 41, keyItems: '魔術師セレン / 輝石魔術販売', description: 'かぼちゃ頭を倒した奥にセレン。魔術師ビルドの最重要拠点。' },
      { id: 'p10', number: 10, name: '霧の森の廃墟 / 霧の森', type: 'ruins', typeLabel: '廃墟・NPC', x: 74, y: 27, keyItems: '斧のタリスマン / 半狼ブライヴ', description: '大熊が眠る地下に斧のタリスマン。遠吠えを聞いたらカーレに指鳴らしを教わる。' },
      { id: 'p11', number: 11, name: '第三マリカ教会', type: 'church', typeLabel: '聖杯強化', x: 88, y: 19, keyItems: '霊薬の聖杯瓶 / 聖杯の雫', description: '霊薬システム解放の最重要地。北の小川裏にケイリッドへの直通転送門あり。' },
      { id: 'p12', number: 12, name: 'ハイト砦', type: 'special', typeLabel: '砦', x: 88, y: 43, keyItems: 'デクタスの割符(左) / 血の斬撃 / 黄金の種子', description: '最上階で大昇降機の割符、騎士撃破で序盤最強戦技「血の斬撃」を入手。' },
      { id: 'p13', number: 13, name: '呼び水村', type: 'ruins', typeLabel: 'ボス・施設', x: 78, y: 14, keyItems: 'ティビアの呼び舟 / 死の根 / 緑亀のタリスマン', description: '呼び舟撃破でDから獣の神殿へ案内。地下にスタミナ回復速度UPタリスマン。' },
      { id: 'p14', number: 14, name: 'ストームヴィル城 (正門・城壁)', type: 'special', typeLabel: 'レガシー城', x: 22, y: 17, keyItems: 'マルギット / ゴドリック / 大ルーン', description: 'リムグレイブの大ボス居城。探索前に南の半島を一周するのが推奨。' },
      { id: 'p15', number: 15, name: '贄送りの大橋', type: 'special', typeLabel: '橋・関所', x: 75, y: 57, keyItems: '石剣の鍵', description: '啜り泣きの半島への境界線。バリスタ攻撃を霊馬で一気に走り抜ける。' },
      { id: 'p16', number: 16, name: '巡礼教会', type: 'church', typeLabel: '聖杯強化', x: 50, y: 55, keyItems: '聖杯の雫', description: '半島北西の高台。聖杯瓶の回復量を即座に強化。' },
      { id: 'p17', number: 17, name: '第四マリカ教会', type: 'church', typeLabel: '聖杯強化', x: 27, y: 59, keyItems: '聖杯の雫', description: '半島西端の教会。雫を拾うだけで戦闘不要。' },
      { id: 'p18', number: 18, name: 'モーンの坑道', type: 'mine', typeLabel: '坑道', x: 61, y: 70, keyItems: '鍛石【1】・【2】', description: '武器を+6前後まで一気に引き上げる素材の宝庫。' },
      { id: 'p19', number: 19, name: 'カルの洗礼堂 (病村のはずれ)', type: 'church', typeLabel: '聖杯強化', x: 65, y: 65, keyItems: '聖杯の雫 / フレンジー村', description: '狂い火村奥の教会。半島3つ目の聖杯の雫で回復量が大幅上昇。' },
      { id: 'p20', number: 20, name: 'モーンの城', type: 'special', typeLabel: 'レガシー砦', x: 58, y: 86, keyItems: 'イレーナ / エドガー / 剣接ぎの大剣', description: '半島の最南端。NPCイレーナの手紙を父エドガーに届けるサブクエスト。' },
    ],
  },

  // 2. 本編地上：湖のリエーニエ
  {
    id: 'liurnia',
    name: '湖のリエーニエ',
    enName: 'Liurnia of the Lakes',
    category: 'main_surface',
    categoryLabel: '地上界 (中盤)',
    recommendedLevel: 'Lv. 40 〜 60',
    summary: '霧深き広大な湖沼地帯。魔術と輝石の聖地であり、魔術師ビルドの装備や記憶スロット、鍛石鈴玉【1】が集中しています。',
    mapImage: 'images/maps/liurnia.png',
    aspectRatio: '624 / 800',
    mapFragments: [
      { name: 'リエーニエ東部', location: '湖を臨む断崖から街道沿い北上した石柱' },
      { name: 'リエーニエ北部', location: '学院の門前町北の石柱' },
      { name: 'リエーニエ西部', location: '四鐘楼の麓の街道沿い' },
    ],
    explorationFlow: [
      '① ストームヴィル城裏手から湖を臨む断崖へ抜け、イリス教会で聖杯の雫を回収。',
      '② 湖脇の結晶洞窟を抜けて「狼の眠るボロ家」のラティナと会話（最強射程遺灰）。',
      '③ しろがね村の長老アルバスから「聖樹の秘割符(右)」を入手（重要NPC）。',
      '④ レアルカリア結晶坑道でボスを倒し、「鍛石掘りの鈴玉【1】」を回収（無限購入解放）。',
      '⑤ 竜に守られた「輝石の鍵」を掠め取ってレアルカリア学院へ潜入、レナラを倒してステ振り直しを解放。',
    ],
    hazards: [
      '湖の落下遺跡周辺の巨大ロブスター（長距離狙撃の水鉄砲は回避必須）。',
      '学院内部の魔術師集団（集中砲火を浴びると即蒸発するため遮蔽物を利用）。',
      '狂い火の灯台（視界に入ると発狂ゲージ蓄積。岩陰に隠れながら頂上の狂信者を倒す）。',
    ],
    pins: [
      { id: 'lp1', number: 1, name: '湖を臨む断崖 / イリス教会', type: 'church', typeLabel: '聖杯強化', x: 79, y: 98, keyItems: '聖杯の雫 / トープス', description: 'リエーニエ最初の祝福。トープスに学院の鍵を渡すイベントあり。' },
      { id: 'lp2', number: 2, name: '湖脇の結晶洞窟 / 狼の眠るボロ家', type: 'special', typeLabel: '神遺灰NPC', x: 53, y: 86, keyItems: 'しろがねのラティナ (固定砲台遺灰)', description: '洞窟奥のボロ家にラティナ。裏ボス戦まで活躍する長射程アーチャー遺灰。' },
      { id: 'lp3', number: 3, name: 'ラスカーの廃墟', type: 'ruins', typeLabel: '廃墟・転送門', x: 63, y: 85, keyItems: '霊姿すずらん / 転送装置', description: '幽霊や貴腐騎士が徘徊。学院付近へのワープ門あり。' },
      { id: 'lp4', number: 4, name: '見晴らし島 / ラーヤ・パッチ', type: 'special', typeLabel: '重要NPC', x: 47, y: 77, keyItems: 'ラーヤの首飾り / 火山館招待状', description: '火山館へのショートカット導線。エビ茹でのボロ家でならず者と交渉。' },
      { id: 'lp5', number: 5, name: 'エビ茹でのボロ家', type: 'special', typeLabel: '重要商人', x: 50, y: 72, keyItems: 'ゆでエビ (物理カット防護食)', description: 'ならず者からエビを買うと防御力大幅アップの常備バフ食料を無限購入可能に。' },
      { id: 'lp6', number: 6, name: 'しろがね村', type: 'special', typeLabel: '重要NPC', x: 25, y: 81, keyItems: '聖樹の秘割符(右)', description: '壺に化けた長老アルバスから割符を入手。ギデオンの義理の娘ネフェリ・ルーも滞在。' },
      { id: 'lp7', number: 7, name: '学院の門前町', type: 'ruins', typeLabel: '地図断片', x: 53, y: 64, keyItems: 'リエーニエ北部の地図断片', description: '沈んだ市街地。雷の羊戦灰やアイテム多数。' },
      { id: 'lp8', number: 8, name: 'レアルカリア結晶坑道', type: 'mine', typeLabel: '無限購入解放', x: 51, y: 38, keyItems: '鍛石掘りの鈴玉【1】', description: '最重要ダンジョン！ボス結晶人を打撃武器で倒し円卓で鍛石【1】【2】常時販売。' },
      { id: 'lp9', number: 9, name: '結びの教会', type: 'church', typeLabel: '免罪・魔術', x: 55, y: 43, keyItems: 'ミリエル (亀司祭) / 贖罪の泉', description: '敵対したNPCを「星の雫」で免罪できる最重要セーフティ施設。' },
      { id: 'lp10', number: 10, name: '魔術学院レアルカリア (大書庫)', type: 'special', typeLabel: 'レガシーダンジョン', x: 31, y: 47, keyItems: '満月の女王レナラ (ステ振り直し)', description: '学院の鍵で結界を解除して突入。レナラ撃破で産まれ直し機能が解放。' },
      { id: 'lp11', number: 11, name: 'カーリアの書院 (神授塔)', type: 'special', typeLabel: '塔・謎解き', x: 74, y: 59, keyItems: 'カーリアの反転像', description: 'ラニイベント進行で書院が逆さまになり神授塔へ進める。' },
      { id: 'lp12', number: 12, name: '四鐘楼', type: 'special', typeLabel: 'ワープハブ', x: 13, y: 38, keyItems: '魔石剣の鍵 / 王を待つ礼拝堂ワープ', description: '3つの転送門から初期地点やファルムアズラ先行へ飛べる。' },
      { id: 'lp13', number: 13, name: 'カーリアの城館', type: 'special', typeLabel: '大邸宅・ボス', x: 26, y: 12, keyItems: '夜と炎の剣 / 親衛騎士ローレッタ', description: '手の化け物が多数生息。奥のローレッタを倒すとラニの魔術師塔へ。' },
      { id: 'lp14', number: 14, name: 'スリーシスターズ (ラニの魔術師塔)', type: 'special', typeLabel: '最重要NPC', x: 15, y: 8, keyItems: '魔女ラニ / 星の世紀エンド', description: 'エルデンリング最大の長編イベント始動。地下世界への道が拓かれる。' },
      { id: 'lp15', number: 15, name: 'デクタスの大昇降機', type: 'special', typeLabel: '大昇降機', x: 65, y: 12, keyItems: 'アルター高原への門', description: 'ハイト砦とファロス砦の割符2枚を掲げてアルター高原へ。' },
      { id: 'lp16', number: 16, name: '谷底の隠し村 / 遺跡断崖', type: 'mine', typeLabel: 'バイパスルート', x: 57, y: 8, keyItems: '溶岩土竜マカール / 土竜の鱗剣', description: '割符なしでアルター高原へ登れる崖登りルート。' },
      { id: 'lp17', number: 17, name: 'ベイルム教会', type: 'church', typeLabel: '聖杯強化', x: 44, y: 22, keyItems: '聖杯の雫', description: '大昇降機へ続く街道沿いの教会。雫を忘れずに回収。' },
      { id: 'lp18', number: 18, name: '鎮めの教会', type: 'church', typeLabel: '聖杯強化・侵入', x: 57, y: 19, keyItems: '聖杯の雫 / 指痕のブドウ', description: '狂い火村の丘上。赤霊ヴァイクが侵入してくる強敵ポイント。' },
    ],
  },

  // 3. 本編地上：ケイリッド ＆ グレイオールの竜塚
  {
    id: 'caelid',
    name: 'ケイリッド ＆ グレイオールの竜塚',
    enName: 'Caelid & Dragonbarrow',
    category: 'main_surface',
    categoryLabel: '地上界 (高難度)',
    recommendedLevel: '南: Lv. 50〜70 / 竜塚: Lv. 90+',
    summary: '朱い腐敗に侵された死の大地。危険度は極めて高いものの、戦闘不要で「名刀月隠」「隕石の杖」「ラダゴンの爛れ刻印」などの壊れ装備が拾える宝庫です。',
    mapImage: 'images/maps/caelid.png',
    aspectRatio: '780 / 800',
    mapFragments: [
      { name: 'ケイリッド', location: 'エオニア沼南西の街道沿い石柱' },
      { name: 'グレイオールの竜塚', location: 'ファロス砦の北東、竜塚街道沿い' },
    ],
    explorationFlow: [
      '① 第三マリカ教会の裏から転送門で「獣の神殿」へ飛び、南下してファロス砦へ。',
      '② ファロス砦で「デクタスの割符(右)」と「ラダゴンの爛れ刻印 (全ステ+5)」を拾う。',
      '③ 砦前の巨大白竜グレイオールを出血武器で背後から殴り、安全に74,000ルーン獲得。',
      '④ 賢者街の廃墟で知力序盤最強セット「隕石の杖 ＆ 岩石弾」を回収。',
      '⑤ ゲール坑道でボスを倒し、技魔の最終兵器「名刀月隠」を入手。',
    ],
    hazards: [
      '沼地全体の「朱い腐敗」（割合ダメージが非常に激しいため霊馬から降りないこと）。',
      '恐竜カラス＆巨大犬（感知範囲が異常に広く追跡速度が高速。戦闘を避けて逃走）。',
      '竜塚エリアの雑魚敵（終盤基準の超火力のため一撃死に注意）。',
    ],
    pins: [
      { id: 'cp1', number: 1, name: '燻り教会', type: 'church', typeLabel: '教会・侵入', x: 5, y: 40, keyItems: '聖杯の雫 / 腐敗野火の祈祷', description: 'リムグレイブとの境界。赤霊アナスタシアが侵入。聖杯の雫あり。' },
      { id: 'cp2', number: 2, name: '腐敗を臨む露台', type: 'special', typeLabel: '祝福・拠点', x: 17, y: 44, keyItems: 'ケイリッド入口', description: '荒野を見下ろす高台祝福。商人からアイテム購入可能。' },
      { id: 'cp3', number: 3, name: 'ゲール砦', type: 'special', typeLabel: '砦', x: 14, y: 60, keyItems: '獅子斬り (超強力戦技)', description: '砦中庭の獅子の混種撃破で脳筋最強戦技「獅子斬り」を入手。' },
      { id: 'cp4', number: 4, name: 'ゲール坑道 (裏口・正面)', type: 'mine', typeLabel: '名刀月隠', x: 11, y: 52, keyItems: '名刀月隠 / 鍛石【4】', description: '最重要！ボス溶岩土竜を倒して侍・魔術師の最強刀「名刀月隠」を入手。' },
      { id: 'cp5', number: 5, name: '賢者街の廃墟 / エオニア沼', type: 'ruins', typeLabel: '魔術師神器', x: 45, y: 62, keyItems: '隕石の杖 / 岩石弾 (最強魔術)', description: '戦闘不要で拾える知力S補正の壊れ杖と物理属性の誘導岩石魔術。' },
      { id: 'cp6', number: 6, name: 'サリアの街、階段下 / サリアの街', type: 'special', typeLabel: '街・封印解除', x: 50, y: 56, keyItems: '夜の彗星 / 記憶の小瓶', description: '高所の燭台3つに火を灯すと結界が解け、魔術や宝箱が解放。' },
      { id: 'cp7', number: 7, name: 'サリアの結晶坑道', type: 'mine', typeLabel: '罠転送先・鈴玉', x: 47, y: 46, keyItems: '喪色鍛石【5】 / 喪色掘りの鈴玉【1】', description: 'アギール湖の宝箱罠で飛ばされる恐怖の坑道。落石虫を避けて外へ脱出。' },
      { id: 'cp8', number: 8, name: '腐れ病の教会', type: 'church', typeLabel: '重要NPC', x: 60, y: 61, keyItems: '聖杯の雫 / ミリセント', description: '義手イベントのヒロイン・ミリセントが眠る。聖杯の雫あり。' },
      { id: 'cp9', number: 9, name: 'エオニアの中心', type: 'special', typeLabel: 'ボス', x: 46, y: 67, keyItems: '宿将オニール / 無垢金の針', description: '沼中央のボス。ミリセント救出に必要な針をドロップ。' },
      { id: 'cp10', number: 10, name: 'ファロス砦', type: 'special', typeLabel: '最強タリスマン', x: 67, y: 49, keyItems: 'ラダゴンの爛れ刻印 / デクタスの割符(右)', description: '蝙蝠を無視して屋上梯子からダイブ。生命・持久・筋力・技量が各+5される神器。' },
      { id: 'cp11', number: 11, name: '老竜グレイオール', type: 'special', typeLabel: 'ルーン稼ぎ', x: 63, y: 44, keyItems: '74,000ルーン / 竜の心臓×5', description: '動けない巨大白竜。出血武器で背後から殴り続けるだけで安全に大量ルーン獲得。' },
      { id: 'cp12', number: 12, name: 'レンの魔術師塔', type: 'special', typeLabel: '記憶スロット', x: 82, y: 30, keyItems: 'メモリ・ストーン', description: '霊馬ジャンプでバルコニーから侵入。魔術記憶スロットを拡張。' },
      { id: 'cp13', number: 13, name: '獣の神殿', type: 'special', typeLabel: '祈祷NPC', x: 70, y: 6, keyItems: '獣の司祭グラング / 獣の祈祷', description: '第三マリカ教会裏の転送門直通。死の根を渡して祈祷や爪痕の聖印を入手。' },
      { id: 'cp14', number: 14, name: 'ファルム大橋', type: 'special', typeLabel: '序盤ルーン稼ぎ', x: 75, y: 17, keyItems: '転がる鉄球稼ぎ (1回2000ルーン)', description: '崖際で鉄球を避けて落とすだけで最序盤に自動ルーン稼ぎができる名所。' },
      { id: 'cp15', number: 15, name: '不落の大橋 / 赤獅子城', type: 'special', typeLabel: 'レガシー砦', x: 75, y: 88, keyItems: '星砕きのラダーン / ラダーン祭り', description: 'ケイリッド最大のボス。ラダーン撃破で星が落ち、地下世界ノクローンが解放。' },
      { id: 'cp16', number: 16, name: '大竜餐教会', type: 'church', typeLabel: '竜祈祷', x: 30, y: 86, keyItems: '腐敗ブレス (ボスキラー祈祷)', description: '竜の心臓と交換で全ボスに有効な腐敗ブレス「エグズキスの腐敗」を獲得。' },
    ],
  },

  // 4. 本編地上：アルター高原 ＆ ゲルミア火山
  {
    id: 'altus',
    name: 'アルター高原 ＆ ゲルミア火山',
    enName: 'Altus Plateau & Mt. Gelmir',
    category: 'main_surface',
    categoryLabel: '地上界 (後半)',
    recommendedLevel: 'Lv. 70 〜 100',
    summary: '黄金樹の麓に広がる壮麗な高原と灼熱の活火山。王都ローデイルへの進軍路であり、各種鈴玉【2】や超高難度NPCイベントが集結します。',
    mapImage: 'images/maps/altus.png',
    aspectRatio: '800 / 418',
    mapFragments: [
      { name: 'アルター高原', location: 'デクタスの大昇降機から北上した街道分岐の石柱' },
      { name: '王都ローデイル', location: '外郭の幻影樹の祝福脇の石柱' },
      { name: 'ゲルミア火山', location: '罪人橋を渡り、梯子を登った先の石柱' },
    ],
    explorationFlow: [
      '① デクタスの大昇降機からアルター高原へ入り、三叉路の街道を進む。',
      '② 旧アルター坑道で「鍛石掘りの鈴玉【2】」を回収（鍛石【3】【4】無限購入）。',
      '③ 外郭の幻影樹で「黄金の種子×2」を一度に回収（種子が一気に潤沢に）。',
      '④ 封印された坑道で「喪色掘りの鈴玉【2】」を拾う（喪色【3】【4】無限購入）。',
      '⑤ ゲルミア火山を登り、火山館でタニスと契約してNPC暗殺依頼クエストを開始。',
    ],
    hazards: [
      '王都外郭のツリーガード2体（同時に相手にせず片方ずつ釣り出して各個撃破）。',
      '日陰城の毒沼地帯（毒ゲージが早く溜まるため毒消し苔薬を常備）。',
      '人さらいの乙女人形（掴み攻撃で鉄の腹内に引き込まれると即死級ダメージ）。',
    ],
    pins: [
      { id: 'ap1', number: 1, name: 'デクタスの大昇降機 (出口)', type: 'special', typeLabel: '高原入口', x: 33, y: 95, keyItems: 'アルター高原到着', description: '割符を掲げて到着する最初の足がかり。壮大な黄金樹が眼前に広がる。' },
      { id: 'ap2', number: 2, name: 'アルター街道の三叉路', type: 'special', typeLabel: '祝福・十字路', x: 45, y: 78, keyItems: 'ボック / コリン', description: '旅のNPCが立ち寄る重要ポイント。街道沿いに北や東へ分岐。' },
      { id: 'ap3', number: 3, name: '旧アルター坑道', type: 'mine', typeLabel: '無限購入解放', x: 38, y: 48, keyItems: '鍛石掘りの鈴玉【2】', description: '最重要坑道！ボス石掘りトロルを倒して鍛石【3】【4】常時販売を解放。' },
      { id: 'ap4', number: 4, name: '封印された坑道', type: 'mine', typeLabel: '無限購入解放', x: 74, y: 88, keyItems: '喪色掘りの鈴玉【2】', description: '王都堀の南端。隠し壁の奥の宝箱から喪色【3】【4】常時販売を即回収。' },
      { id: 'ap5', number: 5, name: '外郭の幻影樹', type: 'tree', typeLabel: '黄金の種子大量', x: 65, y: 76, keyItems: '黄金の種子×2 / 外郭地図', description: '1つの苗木から種子が2個同時に拾える大ボーナス地点。地図断片もここ。' },
      { id: 'ap6', number: 6, name: '小黄金樹教会', type: 'church', typeLabel: '聖杯強化', x: 71, y: 96, keyItems: '聖杯の雫 / 黄金律の聖印', description: '王都外郭の南東端にある教会。聖杯の雫を回収。' },
      { id: 'ap7', number: 7, name: '貴族の英雄墓', type: 'mine', typeLabel: '英雄墓', x: 55, y: 56, keyItems: 'ザミアの氷嵐 / 黄金の種子', description: '光の陣に誘導して影の敵を倒すパズル墓地。ボス撃破で黒き刃の遺灰。' },
      { id: 'ap8', number: 8, name: '風車村 ドミヌラ', type: 'special', typeLabel: 'ボス・神肌', x: 61, y: 20, keyItems: '神肌剥ぎ (強両刃剣) / 死神の踊り', description: '踊る老婆たちの村。頂上で神肌の貴種を倒すと出血値の高い強武器入手。' },
      { id: 'ap9', number: 9, name: '日陰城', type: 'special', typeLabel: '毒城・ボス', x: 40, y: 25, keyItems: '義手長の義手 / エイドヒルの宝剣', description: 'ミリセントイベントに不可欠な義手を入手。ボス鉄茨のエレメール撃破。' },
      { id: 'ap10', number: 10, name: 'ゲルミア火山 (一合目・罪人橋)', type: 'special', typeLabel: '火山登攀路', x: 33, y: 31, keyItems: '梯子ルート / 黄金の種子', description: '切り立った断崖を長い梯子で登っていく立体的な火山登山ルート。' },
      { id: 'ap11', number: 11, name: '火山館', type: 'special', typeLabel: '重要拠点・レガシー', x: 11, y: 39, keyItems: 'ライカード / 白狼戦鬼装備 / 暗殺依頼', description: 'タニスと会話して反律の同胞となる。裏道から冒涜の君主ライカードへ。' },
      { id: 'ap12', number: 12, name: '世捨て商人のボロ屋', type: 'special', typeLabel: '重要商人', x: 73, y: 40, keyItems: '獣除けの松明 (猛獣無効化)', description: '野犬やネズミ、恐竜カラスが攻撃してこなくなる神アイテム「獣除けの松明」を販売。' },
      { id: 'ap13', number: 13, name: '神授橋', type: 'special', typeLabel: '転送門先', x: 78, y: 85, keyItems: '恵みの雫のタリスマン (HP自動回復)', description: 'リムグレイブの転送罠で飛ばされる橋。巨人をスルーして宝箱からHPリジェネタリスマン。' },
      { id: 'ap14', number: 14, name: '王都城壁前 (王都入口)', type: 'special', typeLabel: '王都正門ボス', x: 92, y: 62, keyItems: '竜のツリーガード / 王都ローデイル', description: '大ルーン2個所持で通過可能。赤雷を放つ竜ツリーガードを撃破して王都へ。' },
    ],
  },

  // 5. 本編立体：王都ローデイル ＆ 忌み捨ての地下
  {
    id: 'leyndell',
    name: '王都ローデイル ＆ 忌み捨ての地下',
    enName: 'Royal Capital Leyndell & Subterranean Grounds',
    category: 'late_game',
    categoryLabel: '終盤・立体都市',
    recommendedLevel: '王都: Lv. 90〜110 / 地下: Lv. 100〜120',
    summary: '黄金樹の根元に広がる壮大無比な巨都。屋根伝いの立体移動、下層の城館、そして底深くに広がる迷宮「忌み捨ての地下」と狂い火の封印が重なる最重要レガシーです。',
    mapImage: 'images/maps/leyndell_3.png',
    aspectRatio: '800 / 621',
    mapFragments: [
      { name: '王都ローデイル', location: '外郭の幻影樹の祝福脇の石柱（アルター側）' }
    ],
    explorationFlow: [
      '① 竜のツリーガードを倒して王都東城壁から侵入。城壁から屋根伝いに下層へ降りる。',
      '② 大通り脇の露台から巨大な翼の竜の石像を伝って城壁上部へ登る。',
      '③ 黄金樹の大聖堂で「最初の王ゴッドフレイ（霊体）」を撃破し、タリスマン所持枠+1。',
      '④ 女王の閨を経てエルデの王座へ進み、「忌み王モーゴット」を撃破してロルドの割符を入手。',
      '⑤ 大通り脇の露台下の井戸から飛び降りて「忌み捨ての地下」へ潜入し、忌み子モーグ・狂い火の封印へ。',
    ],
    hazards: [
      '白雪の使者（雪だるま管楽器奏者）の遠距離誘導バブル（超多段ヒットで即死注意）。',
      '忌み捨ての地下の立体配管迷路＆忌み子（強靭が高く落下死のリスク極大）。',
      '狂い火の封印への飛び降り足場渡り（落下即死の精密ジャンプアスレチック）。',
    ],
    pins: [
      { id: 'ly1', number: 1, name: '王都東城壁', type: 'special', typeLabel: '王都玄関口', x: 75, y: 21, keyItems: '王都侵入祝福 / ボックイベント', description: '王都ローデイルのスタート地点。壮大な黄金の街並みを見下ろす。' },
      { id: 'ly2', number: 2, name: '大通り脇の露台', type: 'special', typeLabel: '中心祝福', x: 47, y: 44, keyItems: 'グランサクスの雷 (伝説の武器)', description: '大通りへの階段。巨大な巨大槍の先端に伝説の武器「グランサクスの雷」。' },
      { id: 'ly3', number: 3, name: '王都下層、教会', type: 'church', typeLabel: '教会・防具', x: 42, y: 51, keyItems: 'アルベリッヒ防具一式', description: '沈んだ下層の教会。狂い火魔術師アルベリッヒの防具が拾える。' },
      { id: 'ly4', number: 4, name: '城館一階', type: 'special', typeLabel: '旧円卓', x: 23, y: 60, keyItems: '秘文字のパタ / 鍛石鈴玉', description: '円卓と全く同じ構造の廃館。白狼戦鬼の侵入協力イベントの舞台。' },
      { id: 'ly5', number: 5, name: '王都西城壁', type: 'special', typeLabel: '城壁・石像', x: 44, y: 60, keyItems: '巨人の石像ルート', description: '城館から大聖堂へ登る中継地点。ガーゴイルや使者が巡回。' },
      { id: 'ly6', number: 6, name: '神授橋', type: 'special', typeLabel: '転送門・神授塔', x: 3, y: 68, keyItems: '孤立した神授塔転送門', description: '城館の昇降機から直通。巨大ゴーレムが守る。マレニアの大ルーン解放用。' },
      { id: 'ly7', number: 7, name: '黄金樹の大聖堂', type: 'special', typeLabel: 'ボス・タリスマン枠', x: 55, y: 88, keyItems: '最初の王ゴッドフレイ (霊体)', description: '黄金の霊体ゴッドフレイと激突。お守り袋を入手しタリスマン枠が4に。' },
      { id: 'ly8', number: 8, name: '女王の閨', type: 'special', typeLabel: 'マリカの寝所', x: 69, y: 70, keyItems: '黄金樹の回復 (最上位祈祷)', description: 'マリカの閨房。モーゴット直前の安全地帯。ベッドに祈祷あり。' },
      { id: 'ly9', number: 9, name: 'エルデの王座', type: 'special', typeLabel: '大ボス・大ルーン', x: 84, y: 93, keyItems: '忌み王モーゴット / ロルドの割符', description: '黄金樹の拒絶のトゲの前でモーゴットと対峙。撃破で雪原へのロルド割符入手。' },
      { id: 'ly10', number: 10, name: '地下大通り脇', type: 'special', typeLabel: '地下迷宮拠点', x: 53, y: 38, keyItems: '忌み捨ての地下入口', description: '井戸から落ちた先の暗黒迷宮の拠点。多数の鉄格子ショートカットを開通。' },
      { id: 'ly11', number: 11, name: 'ローデイルの地下墓', type: 'mine', typeLabel: '地下墓', x: 53, y: 55, keyItems: '血の君主の歓喜 (タリスマン)', description: '出血ビルドの最強タリスマン「血の君主の歓喜」をドロップするボス。' },
      { id: 'ly12', number: 12, name: '忌み捨ての底', type: 'special', typeLabel: '地下大ボス', x: 70, y: 34, keyItems: '忌み子、モーグ / モーグの拘束具有効', description: '巨大パイプを飛び降りた最奥の祭壇。血炎を操るモーグと激突。' },
      { id: 'ly13', number: 13, name: '忌み捨ての大聖堂', type: 'church', typeLabel: '隠し祭壇', x: 43, y: 4, keyItems: '祭壇裏の隠し通路', description: 'モーグ撃破後、祭壇を攻撃すると隠し扉が開き狂い火の底へ。' },
      { id: 'ly14', number: 14, name: '狂い火の封印', type: 'special', typeLabel: '狂い火エンド', x: 91, y: 16, keyItems: '三本指 / 指痕爛れのブドウ', description: '全裸で扉を開けると三本指に抱かれ「狂い火の王」ルート確定（針で解除可）。' },
    ],
  },

  // 6. 本編終盤：巨人たちの山嶺 ＆ 聖別雪原
  {
    id: 'mountaintops',
    name: '巨人たちの山嶺 ＆ 聖別雪原',
    enName: 'Mountaintops of the Giants & Consecrated Snowfield',
    category: 'late_game',
    categoryLabel: '終盤・雪原',
    recommendedLevel: '山嶺: Lv. 100〜120 / 雪原: Lv. 120〜140',
    summary: 'ロルドの大昇降機を越えた極寒の地。本編メインストーリーのクライマックス「巨人の火の釜」と、秘密の割符で開く秘境「聖別雪原」が広がる広大な終盤マップです。',
    mapImage: 'images/maps/mountaintops_1.jpg',
    aspectRatio: '541 / 800',
    mapFragments: [
      { name: '巨人山嶺西部', location: 'ザミエルの廃墟を抜けた街道沿い' },
      { name: '巨人山嶺東部', location: '巨人の墓標から南下した街道沿い' },
      { name: '聖別雪原', location: '聖別雪原の奥地へ向かう途中の吹雪の中の石柱' },
    ],
    explorationFlow: [
      '① 王都からロルドの大昇降機を稼働し「ザミエルの廃墟」へ。鍛石掘りの鈴玉【3】を回収。',
      '② 氷結湖を渡り、ソール城砦で宿将ニアールを撃破して「聖樹の秘割符(左)」を入手。',
      '③ 巨人の墓標を越えて「火の巨人」を撃破し、巨人の火の釜でメリナと会話しファルム・アズラへ。',
      '④ ロルドの大昇降機に戻り、秘割符を掲げて「聖別雪原」へ侵入。',
      '⑤ 吹雪を抜けて「典礼街オルディナ」の封印を解き、ミケラの聖樹への転送門を起動。',
    ],
    hazards: [
      '聖別雪原の濃霧・猛吹雪（周囲がほぼ見えず、突然の巨大熊や狼ライダーの奇襲に注意）。',
      '火の巨人の超高火力雪玉転がし＆叩きつけ（足首の弱点を狙い馬の機動力を活用）。',
      'ソール城砦の失地騎士（赤目の二刀流ワープ攻撃は即死級）。',
    ],
    pins: [
      { id: 'mp1', number: 1, name: '禁域 / ロルドの大昇降機', type: 'special', typeLabel: '昇降機', x: 28, y: 74, keyItems: '黒き剣の眷属 / 割符切り替え', description: '王都と山嶺を繋ぐ境界。秘割符所持で雪原行きと切り替え可能。' },
      { id: 'mp2', number: 2, name: 'ザミエルの廃墟', type: 'ruins', typeLabel: '無限購入解放', x: 38, y: 75, keyItems: '鍛石掘りの鈴玉【3】', description: '冷気を使う亡霊が徘徊。地下宝箱から鍛石【5】【6】常時販売を解放。' },
      { id: 'mp3', number: 3, name: '巨人山嶺の地下墓', type: 'mine', typeLabel: '地下墓', x: 42, y: 66, keyItems: 'すずらん摘みの鈴玉【2】', description: 'エレベーターが二重底になっているパズル地下墓。' },
      { id: 'mp4', number: 4, name: '巨人戦争の英雄墓', type: 'mine', typeLabel: '英雄墓', x: 38, y: 64, keyItems: '巨人狩り (強戦技)', description: '光の陣にトロルを誘導して倒す。ボス撃破でザミエルの曲剣。' },
      { id: 'mp5', number: 5, name: '古遺跡の雪谷', type: 'special', typeLabel: '渓谷祝福', x: 53, y: 47, keyItems: 'ミリセント滞在', description: '谷底を進むルート。ミリセントと会話して助言を受ける。' },
      { id: 'mp6', number: 6, name: '古遺跡谷の崖上', type: 'special', typeLabel: '崖上祝福', x: 58, y: 39, keyItems: '星見の廃墟', description: '崖上の廃墟でクラゲの遺灰を呼ぶと姉妹が再会しジェスチャー入手。' },
      { id: 'mp7', number: 7, name: '氷結湖', type: 'special', typeLabel: '湖・凍結竜', x: 67, y: 37, keyItems: '凍てつく霧のボレアリス', description: '猛吹雪を起こす白竜。視界不良の中での馬上戦が展開。' },
      { id: 'mp8', number: 8, name: '第一マリカ教会', type: 'church', typeLabel: '聖杯強化', x: 85, y: 51, keyItems: '聖杯の雫 / 喪色掘りの鈴玉【4】手前', description: '氷結湖南端の教会。雫を回収。近くの死体から喪色鈴玉【4】。' },
      { id: 'mp9', number: 9, name: 'ソール城砦 (正門・屋上)', type: 'special', typeLabel: '最重要砦・秘割符', x: 55, y: 35, keyItems: '宿将ニアール / 聖樹の秘割符(左)', description: '雪原へ行くための最重要砦！義足の電撃ニアールを倒し屋上で秘割符入手。' },
      { id: 'mp10', number: 10, name: '巨人の墓標 / 安息教会', type: 'church', typeLabel: '聖杯強化・侵入', x: 53, y: 72, keyItems: '聖杯の雫 / 屍山血海 (最強出血刀)', description: '安息教会前で翁が侵入！倒すと出血最強武器「屍山血海」を入手。雫もあり。' },
      { id: 'mp11', number: 11, name: '火の釜の麓 / 火の巨人', type: 'special', typeLabel: '大ボス', x: 72, y: 75, keyItems: '火の巨人の追憶', description: '超巨大ボス。左足の縄を攻撃して装甲を破壊し、後半は弱点の手を狙う。' },
      { id: 'mp12', number: 12, name: '巨人の火の釜', type: 'special', typeLabel: 'ストーリー転換点', x: 85, y: 70, keyItems: 'ファルム・アズラへの転送', description: '釜の縁を渡り祝福でメリナと対話。「準備はできた」で世界が激変。' },
      { id: 'mp13', number: 13, name: '聖樹への秘路 / 聖別雪原', type: 'special', typeLabel: '秘境入口', x: 26, y: 64, keyItems: '銀のスカラベ (発見力UP)', description: '秘割符で降り立つ隠しエリア。透明な見えない床の先に銀スカラベ。' },
      { id: 'mp14', number: 14, name: '典礼街オルディナ', type: 'special', typeLabel: '聖樹への門', x: 21, y: 39, keyItems: '封印の燭台 / 聖樹ワープ門', description: '封印牢の中で屋根の4つの灯火を点灯。白銀の射手と不可視の刺客を警戒。' },
      { id: 'mp15', number: 15, name: '棄教の廃屋', type: 'special', typeLabel: 'ラティナ終着地', x: 12, y: 33, keyItems: '古竜岩の喪色鍛石 (ラティナ完結)', description: '雪原最北西の廃屋。巨大しろがね人の前でラティナを召喚し最終強化素材獲得。' },
    ],
  },

  // 7. 本編秘境：ミケラの聖樹 ＆ エブレフェール
  {
    id: 'haligtree',
    name: 'ミケラの聖樹 ＆ エブレフェール',
    enName: "Miquella's Haligtree & Elphael",
    category: 'late_game',
    categoryLabel: '終盤・最難関秘境',
    recommendedLevel: 'Lv. 130 〜 160+',
    summary: '典礼街オルディナの転送門からのみ到達できる、狭間の地最北端の巨大樹都市。本編最強の裏ボス「腐敗の女神マレニア」が最深部に鎮座する最高難度エリアです。',
    mapImage: 'images/maps/haligtree_tree.jpg',
    aspectRatio: '800 / 470',
    mapFragments: [
      { name: 'ミケラの聖樹', location: '聖樹街の祝福手前、広場階段の死体' }
    ],
    explorationFlow: [
      '① 聖樹の高枝から極細の枝を渡り、巨大蟻や雪だるまの狙撃を避けて聖樹街へ。',
      '② 聖樹街から広場を抜けて「聖樹の大舞台」へ進み、親衛騎士ローレッタを撃破。',
      '③ 梯子を下りて城塞都市「エブレフェール」の内壁へ。祈祷室を拠点に城壁を進む。',
      '④ 排水路から腐敗の池を越え、ミリセントの共闘/敵対サイン分岐イベントを完遂。',
      '⑤ 昇降機で聖樹最下層へ降り、最深部で「腐敗の女神マレニア」に挑戦。',
    ],
    hazards: [
      '聖樹高枝の落下死（細い枝渡り中に巨大雪だるまの連続バブル狙撃が直撃）。',
      '祈祷室周辺の貴腐騎士＆結晶人＆王族の幽鬼（狭い通路に強敵が高密度で密集）。',
      '腐敗の女神マレニアの「水鳥乱舞」＆「朱きエオニア」（一瞬の判断ミスで即死）。',
    ],
    pins: [
      { id: 'ht1', number: 1, name: '聖樹の高枝', type: 'special', typeLabel: '聖樹スタート', x: 53, y: 77, keyItems: '細枝渡り / 落下注意', description: '転送直後に降り立つ枝の上。大シャボンを吹く巨大使者を遠距離から狙撃推奨。' },
      { id: 'ht2', number: 2, name: '聖樹街', type: 'special', typeLabel: '街入口', x: 56, y: 58, keyItems: '真珠竜のタリスマン+2', description: '枝から降り立った人工の街並み。混種や狂戦士が待ち構える。' },
      { id: 'ht3', number: 3, name: '聖樹街、広場', type: 'special', typeLabel: '広場祝福', x: 34, y: 67, keyItems: '古竜岩の鍛石', description: '獅子の混種が護る広場。屋根を伝って大舞台へ進む。' },
      { id: 'ht4', number: 4, name: '聖樹の大舞台', type: 'special', typeLabel: 'ボス・ローレッタ', x: 64, y: 50, keyItems: '親衛騎士ローレッタ / ローレッタの絶技', description: '大舞台のボス。弓魔術の達人ローレッタを撃破しエブレフェールへ。' },
      { id: 'ht5', number: 5, name: '祈祷室', type: 'special', typeLabel: 'エブレフェール拠点', x: 58, y: 36, keyItems: '貴腐騎士周回 / ミリセント', description: 'エブレフェールのメイン拠点。通路を巡回する兵士から大量ルーンを獲得可能。' },
      { id: 'ht6', number: 6, name: 'エブレフェールの内壁', type: 'special', typeLabel: '城内祝福', x: 51, y: 18, keyItems: '腐敗した化身 / 腐敗結晶剣', description: '内壁門前を守る腐敗の化身とバリスタ部隊を突破して城内へ。' },
      { id: 'ht7', number: 7, name: '排水路', type: 'special', typeLabel: 'ミリセント最終決戦', x: 60, y: 29, keyItems: '腐敗翼剣の徽章 / ミリセントの義手', description: '排水路先の腐敗沼で爛れた樹霊を倒し、ミリセントと姉妹4人の決戦へ。' },
      { id: 'ht8', number: 8, name: '聖樹最下層', type: 'special', typeLabel: 'マレニア直前', x: 58, y: 22, keyItems: 'マリカの爛れ刻印 / 昇降機開通', description: '祈祷室からの直通昇降機を開通。ボス部屋直前の最深部祝福。' },
      { id: 'ht9', number: 9, name: '腐敗の女神、マレニア', type: 'special', typeLabel: '本編最強裏ボス', x: 36, y: 27, keyItems: 'マレニアの手 (義手刀) / ミケラの針', description: '全ソウルシリーズ屈指の強敵。リゲイン持ち。撃破で大ルーンと針入手。' },
    ],
  },

  // 8. 本編終盤：崩れゆくファルム・アズラ
  {
    id: 'farum_azula',
    name: '崩れゆくファルム・アズラ',
    enName: 'Crumbling Farum Azula',
    category: 'late_game',
    categoryLabel: '終盤・天空浮遊都市',
    recommendedLevel: 'Lv. 110 〜 135',
    summary: '巨人の火の釜を灯した後に目覚める天空の古代浮遊霊廟。嵐と竜巻の中に漂う瓦礫を渡り、神肌のふたりや黒き剣のマリケスと激突するクライマックスダンジョンです。',
    mapImage: 'images/maps/farum_azula_2.png',
    aspectRatio: '800 / 516',
    mapFragments: [
      { name: 'ファルム・アズラ', location: '竜巻を臨む露台を出てすぐの広場' }
    ],
    explorationFlow: [
      '① 崩れゆく獣墓からスタート。古竜の電撃や獣人を退けながら進む。',
      '② 竜巻を臨む露台で地図断片を回収し、瓦礫を飛び移って竜の聖堂へ。',
      '③ 竜聖堂の祭壇で強敵「神肌のふたり」を撃破し、鍛石掘りの鈴玉【4】を入手。',
      '④ 竜の聖堂屋根上から大橋梁の脇へ抜け、昇降機ショートカットを開通。',
      '⑤ 大橋梁を登って「黒き剣のマリケス」を撃破し、死のルーンを解放して灰都ローデイルへ。',
    ],
    hazards: [
      '崩落する足場と落下死（強風と狭い浮遊岩を飛び移る際のミスに注意）。',
      '古竜の赤雷狙撃（広範囲かつ高威力のため、柱や遮蔽物を盾に接近）。',
      '神肌のふたり（スリップダメージの睡眠壺を投げて片方を眠らせるのが定石）。',
    ],
    pins: [
      { id: 'fa1', number: 1, name: '崩れゆく獣墓', type: 'special', typeLabel: 'スタート地点', x: 53, y: 70, keyItems: '古竜岩の鍛石手前', description: '火の釜イベント後に目覚める最初の祝福。眼下に巨大な竜巻が吹き荒れる。' },
      { id: 'fa2', number: 2, name: '崩れゆく獣墓、奥部', type: 'special', typeLabel: '獣墓中腹', x: 37, y: 66, keyItems: '喪色掘りの鈴玉【4】', description: '獣人たちが祈りを捧げる広間を抜ける。' },
      { id: 'fa3', number: 3, name: '竜巻を臨む露台', type: 'special', typeLabel: '地図断片・拠点', x: 37, y: 59, keyItems: 'ファルム・アズラの地図断片', description: '露台を出た先の広場で地図断片を拾う。大竜巻の全貌が見渡せる。' },
      { id: 'fa4', number: 4, name: '竜の聖堂', type: 'special', typeLabel: '聖堂入口', x: 38, y: 46, keyItems: 'アズラの獣人遺灰', description: '聖堂内部へ潜入。階段を降りて祭壇へ。' },
      { id: 'fa5', number: 5, name: '竜聖堂の祭壇 (ボス)', type: 'special', typeLabel: 'ボス・神肌のふたり', x: 45, y: 44, keyItems: '鍛石掘りの鈴玉【4】 (通常武器+24解放)', description: '最重要！神肌のふたりを撃破して鍛石【7】【8】無限購入を解放。' },
      { id: 'fa6', number: 6, name: '竜の聖堂、昇降機前', type: 'special', typeLabel: '隠し昇降機', x: 49, y: 35, keyItems: '石剣の鍵で起動', description: '噴水広場や古竜の待ち構える中庭へ通じる隠しルート。' },
      { id: 'fa7', number: 7, name: '竜の聖堂、屋根上', type: 'special', typeLabel: '屋根上ルート', x: 49, y: 25, keyItems: '赤雷の古竜', description: '赤い雷を降らせる傷ついた古竜が鎮座。足元を走り抜けて大橋梁へ。' },
      { id: 'fa8', number: 8, name: '大橋梁の脇', type: 'special', typeLabel: 'ボス直前祝福', x: 48, y: 50, keyItems: '昇降機ショートカット', description: 'マリケス直前の重要拠点。ここから下に降りると竜王プラキドサクスへ。' },
      { id: 'fa9', number: 9, name: '竜王プラキドサクス (隠しボス)', type: 'special', typeLabel: '伝説の竜王', x: 50, y: 58, keyItems: 'プラキドサクスの滅び / 針の鎮静場', description: '大橋梁下の岩場から横たわると時が巻き戻り戦う裏ボス。狂い火の解除場所。' },
      { id: 'fa10', number: 10, name: '黒き剣のマリケス', type: 'special', typeLabel: 'ストーリー大ボス', x: 59, y: 49, keyItems: '獣の司祭 / 黒き剣 / 死のルーン解放', description: '第1形態は獣の司祭、第2形態は黒き剣。撃破で王都が灰都化。' },
    ],
  },

  // 9. 地下世界：シーフラ河 ＆ ノクローン ＆ モーグウィン王朝
  {
    id: 'siofra_nokron',
    name: '地下：シーフラ河 ＆ ノクローン ＆ モーグウィン王朝',
    enName: 'Siofra River, Nokron & Mohgwyn Palace',
    category: 'underground',
    categoryLabel: '地下世界 (東部)',
    recommendedLevel: 'シーフラ: Lv. 25〜45 / ノクローン: Lv. 60〜80 / 王朝: Lv. 100+',
    summary: '狭間の地下に広がる満天の星空のような巨大空間。8つの篝火で解放される祖霊、星の落下孔から入る永遠の都ノクローン、そして全ゲーム中最大のルーン稼ぎ場モーグウィン王朝を一枚で収録。',
    mapImage: 'images/maps/siofra_river.png',
    aspectRatio: '800 / 450',
    mapFragments: [
      { name: 'シーフラ河', location: 'シーフラ河、岸辺の北東、角骸の霊場階段の死体' },
      { name: 'モーグウィン王朝', location: '王朝廟入口手前の階段死体' }
    ],
    explorationFlow: [
      '① 霧の森の井戸からシーフラ河へ降り、8箇所の石柱の篝火に点火して「祖霊」を撃破。',
      '② ラダーン撃破後、ハイト砦北西の大穴から「永遠の都ノクローン」へ突入。',
      '③ ボス「写し身の雫」を倒し、最強遺灰を回収。',
      '④ 夜の神域最奥で「指殺しの刃」を入手（ラニイベントの鍵）。',
      '⑤ 白面ヴァレーの「純血騎士褒章」を使い、モーグウィン王朝へワープしてカラス・坂道ルーン稼ぎ。',
    ],
    hazards: [
      '祖霊の民の長弓超長距離スナイプ（直撃すると吹き飛ばされるため遮蔽物を縫ってダッシュ）。',
      'モーグウィン王朝の血の池の巨大カラス＆名も無き白面侵入（連続出血で即死）。',
      'ノクローンの巨大鉄球トラップ（転がり落ちてくる球に潰されないよう注意）。',
    ],
    pins: [
      { id: 'sn1', number: 1, name: 'シーフラ河、井戸下', type: 'special', typeLabel: '地下入口', x: 21, y: 78, keyItems: '巨大昇降機出口', description: '地上リムグレイブの霧の森から降りてくる地下の玄関口。' },
      { id: 'sn2', number: 2, name: 'シーフラ河、岸辺', type: 'special', typeLabel: '拠点・地図', x: 36, y: 71, keyItems: 'シーフラ河の地図断片', description: '広大な河原を見渡す祝福。東の階段足元で地図断片を拾う。' },
      { id: 'sn3', number: 3, name: '永遠の都、ノクローン', type: 'special', typeLabel: '都市入口', x: 21, y: 73, keyItems: 'ラダーン撃破後の大穴直通', description: '星が落ちて開いた巨大な穴から屋根伝いに侵入する壮大な夜の都。' },
      { id: 'sn4', number: 4, name: '写し身の雫 (ボス)', type: 'special', typeLabel: '神遺灰', x: 33, y: 79, keyItems: '写し身の雫の遺灰 (全遺灰最強)', description: '自分と全く同じ武器・防具・戦技を使う最強遺灰。装備を外して入ると裸化可能。' },
      { id: 'sn5', number: 5, name: '夜の神域', type: 'special', typeLabel: '重要アイテム', x: 31, y: 69, keyItems: '指殺しの刃 / 幼生蝶', description: '巨大な神人の遺骸が鎮座する聖域。ラニに届けるキーアイテムを宝箱から入手。' },
      { id: 'sn6', number: 6, name: '祖霊の森', type: 'special', typeLabel: '森祝福', x: 33, y: 57, keyItems: '6箇所の篝火点火', description: '祖霊の王が眠る森。点火完了で角骸の霊場からボスへ。' },
      { id: 'sn7', number: 7, name: '水道橋を臨む断崖', type: 'special', typeLabel: '導水橋入口', x: 39, y: 37, keyItems: '英雄のガーゴイル / Dの弟', description: '双賢ガーゴイル2体と激突。奥の滝壺の石棺から「深き根の底」へワープ。' },
      { id: 'sn8', number: 8, name: '大滝壺', type: 'special', typeLabel: '石棺ワープ', x: 40, y: 26, keyItems: '深き根の底への石棺', description: 'ガーゴイル撃破後に滝の奥の石棺に入ると深き根の底へ移動。' },
      { id: 'sn9', number: 9, name: '信奉者の森', type: 'special', typeLabel: '森・商人', x: 50, y: 53, keyItems: '高台の世捨て商人', description: '足場を登った先の洞窟に商人生息。石剣の鍵などを販売。' },
      { id: 'sn10', number: 10, name: '奥井戸の下', type: 'special', typeLabel: '地上昇降機', x: 53, y: 29, keyItems: 'ケイリッド大壺前へ直通', description: '石剣の鍵で昇降機を動かすと、ケイリッドの大壺騎士前へ脱出。' },
      { id: 'sn11', number: 11, name: '王朝に至る崖路', type: 'special', typeLabel: '世界最高ルーン稼ぎ', x: 75, y: 70, keyItems: 'カラス狙撃 / しろがね人殲滅', description: '全エルデンリングプレイヤーの聖地！弓でカラスを落とすだけで数秒で1万〜4万ルーン。' },
      { id: 'sn12', number: 12, name: '王朝廟入口 / 中腹', type: 'special', typeLabel: '王朝拠点', x: 67, y: 40, keyItems: '古竜岩の喪色鍛石 / 商人', description: '血の貴族たちが徘徊する大階段。洞窟内に最高強化素材。' },
      { id: 'sn13', number: 13, name: '神人眠りの繭 (大ボス)', type: 'special', typeLabel: '大ボス・DLC入口', x: 57, y: 62, keyItems: '血の君主モーグ / ミケラの枯れ果てた腕', description: 'モーグを撃破すると「神人眠りの繭」が出現。DLC影の地への入場口となる。' },
    ],
  },

  // 10. 地下世界：エインセル河 ＆ ノクステラ ＆ 腐れ湖
  {
    id: 'ainsel_rot',
    name: '地下：エインセル河 ＆ ノクステラ ＆ 腐れ湖',
    enName: 'Ainsel River, Nokstella & Lake of Rot',
    category: 'underground',
    categoryLabel: '地下世界 (西部)',
    recommendedLevel: 'エインセル: Lv. 50〜70 / 腐れ湖: Lv. 80〜100',
    summary: 'リエーニエの井戸、あるいはラニイベントのレナの魔術師塔転送門から進入する大地下渓谷。月光の祭壇へ至るための「腐れ湖」と「暗黒の落とし子アステール」が待ち受けます。',
    mapImage: 'images/maps/ainsel_river.png',
    aspectRatio: '800 / 450',
    mapFragments: [
      { name: 'エインセル河', location: 'エインセル河、下流手前の遺跡（世を捨てた商人前）' },
      { name: '腐れ湖', location: '腐れ湖の岸の祝福すぐ目の前の死体' }
    ],
    explorationFlow: [
      '① レナの魔術師塔の転送門から「エインセル河本流」へワープ。「小さなラニ」人形を拾う。',
      '② 祝福で小さなラニに3回話しかけ、「災いの影」討伐の使命を受ける。',
      '③ 「永遠の都ノクステラ」を探索し、タリスマン「ノクステラの月」や霊姿すずらんを回収。',
      '④ ノクステラ滝壺で災いの影を撃破し「捨てられた王家の鍵」を入手（レナラの大書庫で暗月の指輪入手）。',
      '⑤ 「腐れ湖」をスイッチで足場を出しながら渡り、大回廊の石棺から「暗黒の落とし子アステール」へ。',
    ],
    hazards: [
      'エインセル河本流の星獣（天井から巨大な重力落石を連射してくる）。',
      '腐れ湖の「超猛毒朱い腐敗」（通常の腐敗の倍の速度でHPが削れる。「火の癒しよ」祈祷常備）。',
      '腐れ湖のバジリスク集団（死の霧を大量に吐くため抗死対策必須）。',
    ],
    pins: [
      { id: 'ar1', number: 1, name: 'エインセル河、井戸下', type: 'special', typeLabel: '地上井戸入口', x: 74, y: 50, keyItems: 'リエーニエ東部井戸直通', description: 'リエーニエ東部の昇降機から降り立つエインセル河下層の入口。' },
      { id: 'ar2', number: 2, name: 'エインセル河、水門 / 下流', type: 'special', typeLabel: '水門・商人', x: 67, y: 56, keyItems: 'エインセル河の地図断片', description: '水門を抜けた先の遺跡に商人が生息。地図断片を回収。' },
      { id: 'ar3', number: 3, name: 'ノクステラの竜人兵 (ボス)', type: 'special', typeLabel: 'ボス・氷雷', x: 54, y: 35, keyItems: '氷雷の剣 (祈祷)', description: 'エインセル河下層のボス。氷と雷をまとった竜人兵。' },
      { id: 'ar4', number: 4, name: 'エインセル河本流', type: 'special', typeLabel: 'ラニ転送先', x: 71, y: 24, keyItems: '小さなラニ人形', description: 'レナの魔術師塔からワープする上流部。川底の石棺で人形を拾う。' },
      { id: 'ar5', number: 5, name: '永遠の都、ノクステラ', type: 'special', typeLabel: 'レガシー都市', x: 59, y: 37, keyItems: 'ノクステラの月 (記憶スロット+2)', description: '壮麗な建築が並ぶ夜の都。銀雫の変身や雷スライムが徘徊。' },
      { id: 'ar6', number: 6, name: 'ノクステラ滝壺', type: 'special', typeLabel: '影の刺客戦', x: 49, y: 32, keyItems: '災いの影 / 捨てられた王家の鍵', description: '赤い影のブライヴ（災いの影）と決闘。倒すとレナラの鍵を入手。' },
      { id: 'ar7', number: 7, name: '腐れ湖の岸', type: 'special', typeLabel: '腐敗湖拠点・地図', x: 46, y: 47, keyItems: '腐れ湖の地図断片', description: '一面が深紅の腐敗液に染まる広大な地下湖。目の前で地図断片を拾う。' },
      { id: 'ar8', number: 8, name: '大回廊', type: 'special', typeLabel: '腐敗寺院', x: 42, y: 79, keyItems: '蠍の針 / 腐敗の眷属', description: '祈りを捧げる無数のエビ人間たち。水路の石棺に入るとボスエリアへ。' },
      { id: 'ar9', number: 9, name: '暗黒の落とし子、アステール', type: 'special', typeLabel: '大ボス・宇宙生命体', x: 89, y: 76, keyItems: 'アステールの薄羽 / 暗月の大剣への昇降機', description: '異形の宇宙怪獣。撃破後、暗月の指輪を所持していれば月光の祭壇へ登れる。' },
    ],
  },

  // 11. 地下世界：深き根の底
  {
    id: 'deeproot',
    name: '地下：深き根の底',
    enName: 'Deeproot Depths',
    category: 'underground',
    categoryLabel: '地下世界 (最深部)',
    recommendedLevel: 'Lv. 80 〜 105',
    summary: '黄金樹の最深部の根が張り巡らされた死と滝の聖域。ノクローンの導水橋の石棺、または王都の忌み捨ての底の隠し壁から到達し、死衾の乙女フィアの結末と死竜フォルサクスを迎えます。',
    mapImage: 'images/maps/deeproot_depths.png',
    aspectRatio: '800 / 450',
    mapFragments: [
      { name: '深き根の底', location: '深き根の底の祝福から北東のあずまや（大熊エリア手前）' }
    ],
    explorationFlow: [
      '① ノクローンの英雄ガーゴイル撃破後、滝の石棺に入って「大滝口」へワープ。',
      '② 根を伝って下り、「深き根の底」の祝福で地図断片を回収。',
      '③ 水没した「名も無き永遠の都」を探索し、巨大な木の根をアスレチック登攀。',
      '④ 「死王子の座」でフィアの英雄たちを撃破し、フィアに「死のルーンの刻印」を渡す。',
      '⑤ フィアの夢の中に入り、伝説の裏ボス「死竜フォルサクス」を討伐して死補正エンディングのルーンを入手。',
    ],
    hazards: [
      '巨大バジリスク（抗死ゲージが猛烈に溜まる黒煙を吐く）。',
      '巨大根渡り中の落下死（足場が曲がりくねっており、カメラ操作の狂いに注意）。',
      '死竜フォルサクスの赤雷・死の霧連動攻撃（地面に赤雷が走ると同時に死ゲージが蓄積）。',
    ],
    pins: [
      { id: 'dr1', number: 1, name: '大滝口', type: 'special', typeLabel: '石棺到着地点', x: 66, y: 50, keyItems: 'ノクローンからの石棺', description: 'ノクローンの大滝から石棺に乗って落ちてくる最初の足がかり。' },
      { id: 'dr2', number: 2, name: '根を臨む断崖', type: 'special', typeLabel: '断崖祝福', x: 66, y: 44, keyItems: '蟻の巣・武器', description: '巨大蟻の巣を見下ろす断崖。' },
      { id: 'dr3', number: 3, name: '深き根の底 (祝福・地図)', type: 'special', typeLabel: '拠点・地図断片', x: 50, y: 49, keyItems: '深き根の底の地図断片', description: '広大な根の空間の中央拠点。北東のあずまやで地図断片を拾う。' },
      { id: 'dr4', number: 4, name: '名も無き永遠の都', type: 'special', typeLabel: '水没都市', x: 46, y: 36, keyItems: '坩堝の騎士シルリア / シルリアの樹槍', description: '水没した廃墟。木の根を登って高所の大聖堂を目指す。' },
      { id: 'dr5', number: 5, name: '根渡りの先', type: 'special', typeLabel: '高所祝福', x: 55, y: 32, keyItems: '王都直通の転送門', description: '巨大な根を登りきった先の高台。王都ローデイル城壁内への転送門あり。' },
      { id: 'dr6', number: 6, name: '死王子の座 (大ボス)', type: 'special', typeLabel: 'フィア完結・死竜', x: 58, y: 22, keyItems: '死竜フォルサクス / 死の王子の修復ルーン', description: 'フィアの同衾イベント最終地。夢の中で死竜フォルサクスと激突。' },
    ],
  },

  // 12. 大型DLC：影の地 全域マップ
  {
    id: 'shadow_realm',
    name: 'DLC 影の地 全域マップ (祝福・重要施設完全版)',
    enName: 'Realm of Shadow - Full World Map',
    category: 'dlc',
    categoryLabel: 'DLC 影の地',
    recommendedLevel: 'Lv. 150+ (影樹の加護必須)',
    summary: '大型DLC「SHADOW OF THE ERDTREE」の舞台・影の地全域を網羅した高解像度マップ。墓地平原から影の城、ラウフの古遺跡、エニル・イリム、奈落の森、尖った山まで、全祝福・施設を配置。',
    mapImage: 'images/maps/shadow_realm.png',
    aspectRatio: '1814 / 1728',
    mapFragments: [
      { name: '墓地平原', location: '火を点す村の北、街道沿いの石柱' },
      { name: '影のアルター', location: 'ハイロータス峠を越えた街道沿い' },
      { name: '南海岸 (青海岸)', location: '青海岸へ下りた海岸線の石柱' },
      { name: 'ラウフの古遺跡', location: '古遺跡の麓を抜けた街道沿い' },
      { name: '奈落 (深淵)', location: '奈落の森の廃教会手前' },
    ],
    explorationFlow: [
      '① モーグウィン王朝の繭に触れて「墓地平原」へ到着。「影樹の破片」「霊灰」を集めて加護を高める。',
      '② 「塔の町ベルラート」を攻略し、神獣獅子舞を撃破。',
      '③ エンシスの城砦でレラーナを倒し、「影のアルター」へ進軍。',
      '④ 「影の城」を攻略し、保管庫最上階で串刺し公メスメルを撃破して「メスメルの種火」を入手。',
      '⑤ 「ラウフの古遺跡」で蕾の聖女ロミナを倒し、封印の木を燃やして最終レガシー「エニル・イリム」へ。',
    ],
    hazards: [
      '焼炉のゴーレム（超長距離の誘導火炎弾。霊馬ジャンプで足踏み衝撃波を回避しダウンを取る）。',
      '奈落の森の「触れ得ざる者（発狂の冬のランタン）」（霊馬不可。パリィでのみ倒せる即死掴み敵）。',
      '影樹の加護不足（加護レベルが低いと雑魚の通常攻撃でも即死。探索を最優先）。',
    ],
    pins: [
      { id: 'sr1', number: 1, name: '墓地平原 (入口)', type: 'special', typeLabel: 'DLC起点', x: 33, y: 77, keyItems: '影樹の破片 / 霊灰 / 地図断片', description: '影の地に降り立つ最初の平原。焼炉のゴーレムが遠くを歩く。' },
      { id: 'sr2', number: 2, name: '塔の町ベルラート', type: 'special', typeLabel: 'レガシーダンジョン', x: 24, y: 50, keyItems: '神獣獅子舞 / 舞い戻りの角', description: '角人たちの聖都。雷・氷・風を切り替える神獣獅子舞と激突。' },
      { id: 'sr3', number: 3, name: 'エンシスの城砦', type: 'special', typeLabel: 'レガシー砦', x: 44, y: 44, keyItems: '双月の騎士、レラーナ / 双剣', description: 'カーリアの王族レラーナが護る関所。月と炎の二刀流剣技。' },
      { id: 'sr4', number: 4, name: '影のアルター / ハイロータス十字', type: 'special', typeLabel: '中盤平原', x: 50, y: 39, keyItems: 'ミケラの十字 / 影樹の破片大量', description: 'エンシスを越えた大高原。各地への分岐路となるハブ地帯。' },
      { id: 'sr5', number: 5, name: '影の城 (正門・保管庫)', type: 'special', typeLabel: '超巨大レガシー', x: 48, y: 22, keyItems: '串刺し公メスメル / 保管庫の裏区', description: 'メスメル軍の本拠地。巨大な図書館保管庫を登り詰めてメスメルへ。' },
      { id: 'sr6', number: 6, name: '教区 (水没区)', type: 'special', typeLabel: '影の城裏手', x: 62, y: 26, keyItems: '排水レバー / 影樹の化身', description: '水没した教会区。レバーで水を抜くと底に影樹の化身が出現。' },
      { id: 'sr7', number: 7, name: '隠者川 / 川底', type: 'special', typeLabel: '縦穴渓谷ルート', x: 53, y: 48, keyItems: '青海岸・奈落への連絡路', description: '城砦脇の池の石棺から降りる隠し渓谷。南の青海岸や東の奈落へ分岐。' },
      { id: 'sr8', number: 8, name: '青海岸', type: 'special', typeLabel: '南海岸秘境', x: 42, y: 88, keyItems: '石棺の裂け目 / 泥濘の騎士 / トリーナ', description: '青い花が一面に咲き乱れる美しい海岸。最南端の大穴から石棺の裂け目へ。' },
      { id: 'sr9', number: 9, name: 'カロの隠し墓', type: 'special', typeLabel: '赤花高原', x: 38, y: 64, keyItems: '竜餐の巫女 / 死儀礼の鳥', description: '赤い花が咲く高地。竜餐の大祭壇へ通じる。' },
      { id: 'sr10', number: 10, name: '尖った山', type: 'special', typeLabel: '竜の連峰', x: 74, y: 70, keyItems: '暴竜ベール / イエゴンイベント', description: '落雷が吹き荒れる竜の巣。竜戦士イエゴンと共に狂気の大竜ベールに挑む。' },
      { id: 'sr11', number: 11, name: '奈落の森', type: 'special', typeLabel: 'ホラー・狂気エリア', x: 64, y: 56, keyItems: '狂い火の王、ミドラー / ミドラーの館', description: '霊馬が怖気づいて使えない不気味な森。館の主ミドラーと激突。' },
      { id: 'sr12', number: 12, name: 'ラウフの古遺跡', type: 'special', typeLabel: '空中古代遺跡', x: 21, y: 35, keyItems: '蕾の聖女、ロミナ / 封印の木', description: '赤腐敗と古代ゴーレムが守る高架遺跡。ロミナを倒し木を燃やす。' },
      { id: 'sr13', number: 13, name: 'エニル・イリム', type: 'special', typeLabel: 'DLC最終レガシー', x: 28, y: 24, keyItems: '針の騎士レダ決戦 / 約束の王ラダーン', description: '神の門へ続く螺旋の神殿。仲間NPCたちとの大乱闘を経て最終ボスへ。' },
    ],
  },

  // 13. 大型DLC：影の地 各エリア連絡・踏破ルート図
  {
    id: 'shadow_routes',
    name: 'DLC 影の地 各エリア連絡・踏破ルート図',
    enName: 'Realm of Shadow - Area Routes & Path Connection Guide',
    category: 'dlc',
    categoryLabel: 'DLC ルート図',
    recommendedLevel: '全DLCエリア対応',
    summary: '高低差が複雑に入り組む「影の地」の全エリア到達ルートを色分けした完全道案内マップ。メインストーリーボス進行（赤）、教区・巫女の村（緑）、奈落の森（橙）、ラウフ麓（黄）、青海岸（青）、尖った山（桃）を網羅。',
    mapImage: 'images/maps/shadow_routes.png',
    aspectRatio: '1779 / 1688',
    mapFragments: [
      { name: 'ルートガイド', location: '各色のラインに沿って崖や昇降機、隠し通路を進む' }
    ],
    explorationFlow: [
      '【赤ライン】メインストーリー：墓地平原 → エンシス城砦(ボス1:レラーナ) → 影のアルター → 影の城(ボス2:メスメル) → ラウフ古遺跡(ボス3:ロミナ) → エニル・イリム(ボス4:ラストボス)。',
      '【緑ライン】教区・影樹裏ルート：影の城・教区から排水 → 保管庫裏手 → 影樹の背 → 指の母メテール ＆ シャーマンの村。',
      '【橙ライン】奈落の森ルート：影の城の絵画裏の隠し梯子 → 石棺で隠者川下流へ → 闇照らしの地下墓 → 奈落の森・ミドラーの館。',
      '【黄ライン】古代遺跡の麓ルート：モースの廃墟の北のトンネルから毒沼の谷底へ → 古遺跡の麓。',
      '【青ライン】青海岸ルート：城砦正面の南西の谷底からエラク川を下る → 青海岸 → 石棺の裂け目。',
      '【桃ライン】尖った山ルート：竜餐の大祭壇を越え、竜穴のボスを倒して南東の山脈へ登る → 尖った山・暴竜ベール。',
    ],
    hazards: [
      '高低差による落下死（マップ上では近くに見えても数十メートルの断崖絶壁で隔てられている）。',
      '隠し通路の見落とし（影の城の隠し梯子や教区の屋根伝いなど見つけにくい分岐が多い）。',
    ],
    pins: [
      { id: 'rt1', number: 1, name: '【赤】メインボス① 双月の騎士レラーナ', type: 'special', typeLabel: 'メインボス1', x: 44, y: 44, keyItems: 'エンシスの城砦最奥', description: '墓地平原から影のアルターへ抜ける必須関所ボス。' },
      { id: 'rt2', number: 2, name: '【赤】メインボス② 串刺し公メスメル', type: 'special', typeLabel: 'メインボス2', x: 48, y: 22, keyItems: '影の城・保管庫最上階', description: '影の城の支配者。撃破で封印の木を燃やす火種を入手。' },
      { id: 'rt3', number: 3, name: '【赤】メインボス③ 蕾の聖女ロミナ', type: 'special', typeLabel: 'メインボス3', x: 21, y: 35, keyItems: 'ラウフの古遺跡最奥', description: '封印の木を守る聖女。撃破後に木を燃やすとエニル・イリム出現。' },
      { id: 'rt4', number: 4, name: '【赤】メインボス④ 約束の王 (ラストボス)', type: 'special', typeLabel: 'DLC最終ボス', x: 21, y: 45, keyItems: '神の門', description: 'エニル・イリム頂上で待つDLC最強の最終決戦。' },
      { id: 'rt5', number: 5, name: '【緑】教区 ＆ 巫女の村 ＆ 影樹の背', type: 'special', typeLabel: '裏ルート', x: 62, y: 26, keyItems: '指の母メテール / マリカの故郷', description: '教区の水を抜き、保管庫裏手からマリカの故郷「シャーマンの村」へ。' },
      { id: 'rt6', number: 6, name: '【橙】奈落の森 ＆ ミドラーの館', type: 'special', typeLabel: '隠しエリア', x: 64, y: 56, keyItems: '狂い火の王ミドラー', description: '影の城の隠し壁から石棺で川へ降り、闇照らしの地下墓を抜けて到達。' },
    ],
  },
];

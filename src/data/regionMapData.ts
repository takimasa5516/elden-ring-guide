export interface MapPin {
  id: string;
  name: string;
  type: 'church' | 'tree' | 'mine' | 'ruins' | 'special';
  typeLabel: string;
  x: number; // percentage 0-100 on regional map
  y: number; // percentage 0-100 on regional map
  keyItems: string;
  description: string;
}

export interface RegionMapInfo {
  id: string;
  name: string;
  enName: string;
  recommendedLevel: string;
  summary: string;
  mapFragments: {
    name: string;
    location: string;
  }[];
  explorationFlow: string[];
  hazards: string[];
  pins: MapPin[];
}

export const regionsData: RegionMapInfo[] = [
  {
    id: 'limgrave',
    name: 'リムグレイブ ＆ 啜り泣きの半島',
    enName: 'Limgrave & Weeping Peninsula',
    recommendedLevel: 'Lv. 1 〜 35',
    summary: '冒険の出発点。広大な草原と森林、南の孤立した半島。ストーリー上は北のストームヴィル城が目標とされますが、まずは南の「啜り泣きの半島」を一周して聖杯瓶を最大まで強化するのが最も賢い探索順序です。',
    mapFragments: [
      { name: 'リムグレイブ西部', location: '関門前の廃墟中央の石柱' },
      { name: 'リムグレイブ東部', location: '霧の森の街道沿い（大熊エリア手前）' },
      { name: '啜り泣きの半島', location: 'モーン城の手前街道沿い' },
    ],
    explorationFlow: [
      '① 漂着墓地を出たら北のエレの教会・関門前へ進み、メリナと会って馬（トレント）を解放。',
      '② 時間を夜にしてエレの教会に戻り、魔女レナから「霊呼びの鈴」を入手。',
      '③ 南へ向かい、贄送りの大橋を越えて「啜り泣きの半島」へ。第四マリカ教会・巡礼教会・カルの洗礼堂で聖杯の雫×3を回収。',
      '④ 霊廟ヶ原の廃墟で「翼の鎌」、霊廟ヶ原の地下墓で「首なし騎士ルーテル」を確保。',
      '⑤ リムグレイブ東部へ進み、第三マリカ教会で「霊薬の聖杯瓶」と「聖杯の雫」を回収。裏の転送門からケイリッドへ飛んでグレイオール討伐。',
    ],
    hazards: [
      'アギール湖中央に降り立つ飛竜アギール（序盤は馬で逃走推奨）。',
      'エレの教会のすぐ前にいる黄金騎兵ツリーガード（初期状態では絶対に挑まないこと）。',
      '霧の森の巨大ヒグマ（感知範囲が広く一撃が即死級。しゃがみか全速力で駆け抜ける）。',
    ],
    pins: [
      { id: 'p1', name: '漂着墓地 / 辺境の英雄墓', type: 'special', typeLabel: 'ダンジョン', x: 28, y: 35, keyItems: '黄金樹の恩寵 (タリスマン)', description: 'ゲーム開始地点。石剣の鍵で入れる英雄墓の奥にタリスマンあり。' },
      { id: 'p2', name: 'エレの教会', type: 'church', typeLabel: '教会・重要拠点', x: 30, y: 30, keyItems: '霊呼びの鈴 / はぐれ狼の遺灰 / 鍛冶台', description: '夜に魔女レナが出現。放浪商人カーレからツール鞄も購入可能。' },
      { id: 'p3', name: '関門前の廃墟', type: 'ruins', typeLabel: '廃墟・重要', x: 35, y: 22, keyItems: '地図断片(西) / 砥石の小刀 / 嵐の関門の黄金の種子', description: 'メリナと契約してレベルアップと霊馬が解放される最重要ポイント。' },
      { id: 'p4', name: '死に触れた地下墓', type: 'mine', typeLabel: '地下墓', x: 45, y: 15, keyItems: '名刀「打刀」 / 緋色の凶刃', description: 'ダンジョン2階の遺体から打刀をノーボスで回収可能。' },
      { id: 'p5', name: '主なき猟犬の封牢', type: 'special', typeLabel: '封牢', x: 38, y: 42, keyItems: '最強大曲剣「猟犬の長牙」', description: 'NPCブライヴを呼べば共闘で圧倒可能。' },
      { id: 'p6', name: '第三マリカ教会', type: 'church', typeLabel: '最重要教会', x: 65, y: 26, keyItems: '聖杯の雫 / 霊薬の聖杯瓶 / ケイリッド転送門', description: '霊薬を入手可能。裏の小川に獣の神殿への直通ワープ門あり。' },
      { id: 'p7', name: '呼び水の村', type: 'ruins', typeLabel: '村・タリスマン', x: 68, y: 18, keyItems: '緑亀のタリスマン / 民兵の遺灰', description: '亀がいる地下階段で緑亀のタリスマン。ボス撃破で復活タンク遺灰。' },
      { id: 'p8', name: 'ハイト砦', type: 'special', typeLabel: '砦', x: 72, y: 42, keyItems: '黄金の種子 / デクタスの割符(左) / 血の斬撃', description: '大昇降機を動かす鍵の半分と優秀な戦灰が手に入る。' },
      { id: 'p9', name: '巡礼教会', type: 'church', typeLabel: '教会', x: 30, y: 65, keyItems: '聖杯の雫', description: '啜り泣き半島北の高台。マリカ像足元。' },
      { id: 'p10', name: '第四マリカ教会', type: 'church', typeLabel: '教会', x: 20, y: 78, keyItems: '聖杯の雫', description: '啜り泣き半島西の断崖。敵無視で回収可能。' },
      { id: 'p11', name: 'カルの洗礼堂', type: 'church', typeLabel: '教会', x: 42, y: 75, keyItems: '聖杯の雫', description: 'ネズミがいる廃墟。マリカ像足元。' },
      { id: 'p12', name: 'モーンの城塞手前', type: 'special', typeLabel: '街道', x: 45, y: 88, keyItems: '地図断片(南) / 黄金の種子 / 隠遁商人(ランタン)', description: '半島の地図と携帯ランタンを即確保。' },
    ],
  },
  {
    id: 'liurnia',
    name: '湖のリエーニエ',
    enName: 'Liurnia of the Lakes',
    recommendedLevel: 'Lv. 35 〜 65',
    summary: '常に濃い霧と水に包まれた巨大な湿地帯。中央にそびえる魔術学院レアルカリアを中心に、魔術や知力系の装備・鈴玉・重要NPCイベントが密集しています。ストームヴィル城をクリアしていなくても東の崖沿い道から直行可能です。',
    mapFragments: [
      { name: 'リエーニエ東部', location: '湖に入ってすぐ北の湖畔街道沿い' },
      { name: 'リエーニエ北部', location: '学院の門前町から北西の沈んだ広場' },
      { name: 'リエーニエ西部', location: '西岸の街道をカーリア城館へ進む途中' },
    ],
    explorationFlow: [
      '① ストームヴィル城裏手または崖道からリエーニエに入り、イリス教会で聖杯の雫を拾う。',
      '② リエーニエ湖の岸辺の商人でランタン（未所持の場合）や素材を確保。',
      '③ 東岸の「火炎僧の野営地」で祈祷「火の癒しよ」を最優先で回収。',
      '④ レアルカリア結晶坑道をクリアし「鍛石掘りの鈴玉[1]」を円卓へ納品。',
      '⑤ 学院南のバラ教会で白面のヴァレーと会い、モーグウィン王朝へのワープ手段を解放。',
      '⑥ 結びの教会で亀の司祭ミリエルに会い、魔術・祈祷の教え手匠として活用。',
    ],
    hazards: [
      '湖を歩き回る巨大ザリガニ（超長射程の水鉄砲スナイプ。馬でもジグザグに走らないと撃ち落とされる）。',
      '狂い火の灯台（視界に入ると狂気ゲージが急速蓄積。岩陰に隠れながら進んで塔の頂上の敵を排除）。',
    ],
    pins: [
      { id: 'l1', name: 'イリス教会', type: 'church', typeLabel: '教会', x: 38, y: 88, keyItems: '聖杯の雫', description: 'リエーニエの入口すぐ左手。' },
      { id: 'l2', name: 'バラ教会', type: 'church', typeLabel: '重要NPC', x: 28, y: 70, keyItems: '白面のヴァレー / 純血騎士褒章', description: 'モーグウィン王朝へ最速で行くための必須イベント拠点。' },
      { id: 'l3', name: '火炎僧の野営地', type: 'special', typeLabel: 'キャンプ', x: 75, y: 68, keyItems: '祈祷「火の癒しよ」', description: '朱い腐敗と毒を瞬時に完治する救済祈祷を拾える。' },
      { id: 'l4', name: '結びの教会', type: 'church', typeLabel: '重要拠点', x: 72, y: 50, keyItems: '亀の司祭ミリエル / 黄金の裁縫道具', description: 'すべての魔術書・祈祷書を安全に預けられる最高の師匠。' },
      { id: 'l5', name: 'レアルカリア結晶坑道', type: 'mine', typeLabel: '坑道', x: 62, y: 40, keyItems: '鍛石掘りの鈴玉[1]', description: '円卓で鍛石1〜2が無限購入可能になる。' },
      { id: 'l6', name: '魔術学院レアルカリア', type: 'special', typeLabel: '大ダンジョン', x: 42, y: 48, keyItems: '満月の女王レナラ (生まれ直し)', description: 'ステータス振り直し機能が解放される。' },
      { id: 'l7', name: 'カーリアの城館', type: 'ruins', typeLabel: '城館', x: 35, y: 20, keyItems: '夜と炎の剣 / ラニの魔術師塔への道', description: '北西の城館。裏手に進むと魔女ラニのイベントへ。' },
      { id: 'l8', name: 'ベイルム教会 & 鎮めの教会', type: 'church', typeLabel: '教会群', x: 65, y: 18, keyItems: '聖杯の雫×2 / 指詠みのヴァイク', description: '北東部の街道沿いと高台でそれぞれ雫を回収。' },
    ],
  },
  {
    id: 'caelid',
    name: 'ケイリッド ＆ グレイオールの竜塚',
    enName: 'Caelid & Dragonbarrow',
    recommendedLevel: 'ケイリッド Lv. 50〜70 / 竜塚 Lv. 70+ (※回収のみならLv.1可)',
    summary: '朱い腐敗に侵された地獄のような荒野。敵の攻撃力は極めて凶悪ですが、馬で駆け抜けるだけで「隕石の杖」「岩石弾」「グレートソード」「金のスカラベ」「約10万ルーンのグレイオール」など全マップ屈指の壊れ報酬が集まります。',
    mapFragments: [
      { name: 'ケイリッド', location: 'エオニア沼の南の三叉路' },
      { name: '竜塚', location: '竜塚西部の断崖沿い街道' },
    ],
    explorationFlow: [
      '① 第三マリカ教会の裏転送門から北東の「獣の神殿」へワープ。',
      '② ファロス要塞へ南下し、要塞屋根裏から「ラダゴンの爛れ刻印」と「デクタスの割符(右)」を戦闘なしで回収。',
      '③ ファロス要塞前の大竜グレイオールの尻尾を出血武器で殴り、10万ルーンを獲得して生命力をブースト。',
      '④ エオニア沼の「賢者街の廃墟」で「隕石の杖」と「岩石弾」を拾う。',
      '⑤ ゲール坑道で溶岩土竜を倒し、最強魔剣「名刀月隠」をゲット。',
      '⑥ 燻り壁の東の崖下の「廃棄洞窟」でボスを倒し「金のスカラベ」を入手。',
    ],
    hazards: [
      'エオニア沼の「朱い腐敗」（火の癒しよ、または馬から降りないことで蓄積回避）。',
      '巨大カラスとティラノサウルス犬（執拗に追尾してくるため立ち止まらないこと）。',
    ],
    pins: [
      { id: 'c1', name: '獣の神殿', type: 'special', typeLabel: '神殿・転送先', x: 80, y: 15, keyItems: '獣の司祭グラング / 卑兵狩りスポット', description: '序盤にワープしてこれる高レベル拠点。' },
      { id: 'c2', name: 'ファロス要塞', type: 'special', typeLabel: '要塞', x: 75, y: 38, keyItems: 'ラダゴンの爛れ刻印 / デクタスの割符(右)', description: '神タリスマンと大昇降機の鍵が眠る重要要塞。' },
      { id: 'c3', name: '大竜グレイオール', type: 'special', typeLabel: '巨竜', x: 72, y: 42, keyItems: '約10万ルーン / 竜の心臓×5', description: '反撃しない巨竜。出血武器で殴るだけで大量ルーン。' },
      { id: 'c4', name: '奇矯の街道（荷車）', type: 'special', typeLabel: '宝箱', x: 50, y: 30, keyItems: '特大剣「グレートソード」', description: '黒い荷馬車の宝箱から戦闘なしで回収。' },
      { id: 'c5', name: '賢者街の廃墟', type: 'ruins', typeLabel: '廃墟', x: 38, y: 55, keyItems: '隕石の杖 / 魔術「岩石弾」', description: '知力S補正のチート杖とダウン魔術。' },
      { id: 'c6', name: 'ゲール坑道', type: 'mine', typeLabel: '坑道', x: 22, y: 48, keyItems: '刀「名刀月隠」 / 鍛石', description: 'リムグレイブとの境界。ボス撃破で名刀月隠。' },
      { id: 'c7', name: '廃棄洞窟', type: 'mine', typeLabel: '洞窟', x: 52, y: 48, keyItems: 'タリスマン「金のスカラベ」', description: 'ルーン獲得量+20%の必須タリスマン。' },
      { id: 'c8', name: 'サリアの結晶坑道', type: 'mine', typeLabel: '坑道', x: 62, y: 35, keyItems: '喪色掘りの鈴玉[1]', description: '転送罠の送り先。ボス撃破で喪色鈴玉。' },
    ],
  },
  {
    id: 'altus-volcano',
    name: 'アルター高原 ＆ ゲルミア火山',
    enName: 'Altus Plateau & Mt. Gelmir',
    recommendedLevel: 'Lv. 60 〜 90',
    summary: '黄金樹の麓に広がる美しい黄金の高原と、険しい溶岩の火山地帯。デクタスの大昇降機または古遺跡断崖から進入可能。王都ローデイルの外郭や火山館など、終盤へ向けた最高峰の戦力（冒涜の聖剣、鈴玉[2]、無限FP霊薬）が集まります。',
    mapFragments: [
      { name: 'アルター高原', location: '大昇降機を出て街道を進んだ北の分岐点' },
      { name: 'ゲルミア火山', location: '罪人橋を渡って火山山道を登った先の石柱' },
      { name: '王都ローデイル', location: '外郭の幻影樹祝福のすぐ横' },
    ],
    explorationFlow: [
      '① ハイト砦とファロス要塞で集めた「デクタスの割符」で大昇降機を動かしてアルター高原へ。',
      '② 外郭の幻影樹で「黄金の種子×2」と「王都の地図断片」を一網打尽。',
      '③ 封印された坑道で宝箱から「鍛石掘りの鈴玉[2]」をノーボス回収。',
      '④ ゲルミア火山の小黄金樹で樹霊を倒し「青色の秘雫（FP消費ゼロ）」を確保。',
      '⑤ 火山館を攻略し、ボス撃破後の追憶交換で「冒涜の聖剣」を入手して無双モードへ。',
    ],
    hazards: [
      '王都外郭門前のツリーガード2体（馬で間をすり抜けて門の中へ駆け込めば安全）。',
      '火山のアイアンメイデン（拉致人形）。掴まれると即死級ダメージ。雷属性が弱点。',
    ],
    pins: [
      { id: 'a1', name: 'デクタスの大昇降機', type: 'special', typeLabel: '昇降機', x: 25, y: 70, keyItems: 'アルター高原へのメイン玄関口', description: '割符両方を掲げてアルター高原へ入場。' },
      { id: 'a2', name: '外郭の幻影樹', type: 'tree', typeLabel: '重要拠点', x: 65, y: 55, keyItems: '黄金の種子×2 / 地図断片(王都)', description: '一度に種子が2つ拾える超重要スポット。' },
      { id: 'a3', name: '封印された坑道', type: 'mine', typeLabel: '坑道', x: 62, y: 75, keyItems: '鍛石掘りの鈴玉[2]', description: '入口すぐの宝箱から鍛石鈴玉2を戦闘不要回収。' },
      { id: 'a4', name: 'アルター坑道', type: 'mine', typeLabel: '坑道', x: 50, y: 62, keyItems: '喪色掘りの鈴玉[2]', description: '喪色の鍛石3〜4の無限購入を解放。' },
      { id: 'a5', name: '死の一撃のボロ屋', type: 'ruins', typeLabel: 'ボロ屋', x: 35, y: 40, keyItems: '祈祷「黄金樹に誓って」', description: '最強クラスの攻防バフ祈祷を拾える。' },
      { id: 'a6', name: 'ゲルミア火山・小黄金樹', type: 'tree', typeLabel: '小黄金樹', x: 18, y: 35, keyItems: '青色の秘雫 (15秒間FP消費0)', description: '無限ビーム砲や高コスト召喚を可能にする神雫。' },
      { id: 'a7', name: '火山館', type: 'special', typeLabel: '大ダンジョン', x: 15, y: 22, keyItems: '大蛇狩り / 冒涜の聖剣', description: 'ゲーム内最強の自前回復大剣を入手可能。' },
    ],
  },
  {
    id: 'underground',
    name: '地下世界 ＆ モーグウィン王朝',
    enName: 'Underground Rivers & Mohgwyn Dynasty',
    recommendedLevel: 'Lv. 60 〜 120 (※稼ぎのみならLv.30可)',
    summary: '狭間の地下に広がる星空のような地下世界（シーフラ河・永遠の都ノクローン・深き根の底・モーグウィン王朝）。最強の遺灰「写し身の雫」や、全プレイヤーの稼ぎの終着点であるモーグウィン王朝が存在します。',
    mapFragments: [
      { name: 'シーフラ河', location: '角骸の霊場の手前の遺体' },
      { name: 'エインセル河', location: 'ウルの王朝遺跡の広場の遺体' },
      { name: 'モーグウィン王朝', location: '血の池を抜けた廟の入口の遺体' },
    ],
    explorationFlow: [
      '① リエーニエのバラ教会でヴァレーイベントを進め、「純血騎士褒章」でモーグウィン王朝へ最速入場。',
      '② 祝福「王朝に至る崖路の坂道」で弓矢によるカラス落とし（10秒で1万〜1.7万ルーン）を開始。',
      '③ ラダーン撃破後、霧の森の大穴から「永遠の都ノクローン」へ降りる。',
      '④ ノクローンの「夜の神域」で石剣の鍵を使い「写し身の雫の遺灰」を回収し即+10強化。',
      '⑤ 広範囲戦技（黄金波、星呼び等）を入手したらモーグウィン王朝の「しろがね坂」で時給1,000万ルーンへ。',
    ],
    hazards: [
      'シーフラ河の牛頭弓兵（超遠距離から必中の高火力スナイプ。岩陰を使って接近）。',
      'モーグウィン王朝の血の池の巨大カラスと侵入血の指（馬で駆け抜けて崖路坂道へ直行）。',
    ],
    pins: [
      { id: 'u1', name: '王朝に至る崖路の坂道', type: 'special', typeLabel: '全人類の聖地', x: 75, y: 35, keyItems: 'カラス落とし ＆ しろがね坂ルーン稼ぎ', description: '時給300万〜1,000万超えの絶対的稼ぎスポット。' },
      { id: 'u2', name: '永遠の都ノクローン（夜の神域）', type: 'ruins', typeLabel: '神域', x: 45, y: 55, keyItems: '写し身の雫の遺灰', description: 'プレイヤーのフル装備をコピーする最強遺灰。' },
      { id: 'u3', name: 'シーフラ河・角骸の霊場', type: 'special', typeLabel: '霊場', x: 48, y: 75, keyItems: '地図断片(シーフラ河) / 祖霊の角', description: 'かがり火を灯して挑む神秘のエリア。' },
    ],
  },
];

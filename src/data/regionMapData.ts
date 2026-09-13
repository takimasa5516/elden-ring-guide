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

export interface RegionMapInfo {
  id: string;
  name: string;
  enName: string;
  recommendedLevel: string;
  summary: string;
  mapImage: string;
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
    summary: '冒険の出発点。北のストームヴィル城へ挑む前に、南の「啜り泣きの半島」を一周して聖杯瓶を最大まで強化するのが最も賢いサバイバル順序です。',
    mapImage: 'images/maps/limgrave.png',
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
      { id: 'p1', number: 1, name: '漂着墓地 / 辺境の英雄墓', type: 'special', typeLabel: 'ダンジョン', x: 30, y: 36, keyItems: '黄金樹の恩寵 (タリスマン)', description: 'チュートリアル洞窟。石剣の鍵で入れる英雄墓の奥にタリスマンあり。' },
      { id: 'p2', number: 2, name: '導きのはじまり', type: 'special', typeLabel: '重要NPC', x: 32, y: 34, keyItems: '白面ヴァレー', description: '地上最初の祝福。ヴァレーと会話（絶対に攻撃禁止）。' },
      { id: 'p3', number: 3, name: 'エレの教会', type: 'church', typeLabel: '教会・拠点', x: 31, y: 29, keyItems: '霊呼びの鈴 / 狼の遺灰 / ツール鞄', description: '夜に魔女レナが出現。鍛冶台で武器+3まで強化可能。' },
      { id: 'p4', number: 4, name: '関門前の廃墟 / 嵐の関門', type: 'ruins', typeLabel: '最重要拠点', x: 37, y: 22, keyItems: '地図断片(西) / 砥石の小刀 / 黄金の種子', description: 'メリナと契約し霊馬トレント解放。地下宝箱に砥石の小刀。' },
      { id: 'p5', number: 5, name: '嵐丘のボロ屋', type: 'special', typeLabel: '重要NPC', x: 30, y: 16, keyItems: 'クラゲの遺灰 / ローデリカ', description: 'ローデリカと会話してクラゲの遺灰入手。円卓調霊師への第一歩。' },
      { id: 'p6', number: 6, name: '死に触れた地下墓', type: 'mine', typeLabel: '地下墓', x: 46, y: 15, keyItems: '名刀「打刀」 / 緋色の凶刃', description: '2階の死体から打刀をボス不要で回収可能。侍以外の素性でも二刀流可能。' },
      { id: 'p7', number: 7, name: 'リムグレイブ坑道', type: 'mine', typeLabel: '坑道', x: 39, y: 32, keyItems: '鍛石【1】大量 (10個以上)', description: '壁の黄色い鉱石を掘るだけで武器を+3まで一気に強化可能。' },
      { id: 'p8', number: 8, name: '宿場跡', type: 'ruins', typeLabel: '魔術師NPC', x: 48, y: 33, keyItems: '魔術師セレン / カボチャ兜の狂兵', description: '地下ボス撃破後にセレンが魔術を教えてくれるようになる。' },
      { id: 'p9', number: 9, name: 'アギール湖', type: 'special', typeLabel: 'フィールド', x: 38, y: 37, keyItems: '竜の心臓 / 竜餐教会への道', description: '飛竜アギールが降臨。竜を倒せば西の島で竜ブレスを習得可能。' },
      { id: 'p10', number: 10, name: '主なき猟犬の封牢', type: 'special', typeLabel: '封牢', x: 40, y: 44, keyItems: '最強大曲剣「猟犬の長牙」', description: '騎士ダリウィルと対決。ブライヴの指鳴らしイベントで共闘可能。' },
      { id: 'p11', number: 11, name: 'アギール湖南', type: 'special', typeLabel: '重要NPC', x: 44, y: 42, keyItems: '血の指の狩人ユラ', description: '高架下でユラが焚き火。ネリウス戦で救援に来てくれる。' },
      { id: 'p12', number: 12, name: '呼び水の村', type: 'ruins', typeLabel: '村・タリスマン', x: 68, y: 18, keyItems: '緑亀のタリスマン / 民兵の遺灰', description: '地下階段で緑亀タリスマン（スタミナ回復大幅UP）。ボス撃破で死の根。' },
      { id: 'p13', number: 13, name: '第三マリカ教会', type: 'church', typeLabel: '最重要教会', x: 65, y: 26, keyItems: '聖杯の雫 / 霊薬の聖杯瓶 / 転送門', description: '霊薬入手。教会裏の小川に獣の神殿への直通ワープゲートあり。' },
      { id: 'p14', number: 14, name: '霧の森の廃墟', type: 'ruins', typeLabel: '廃墟・NPC', x: 58, y: 35, keyItems: '半狼のブライヴ / 斧のタリスマン', description: '遠吠えを聞いたらカーレに「指鳴らし」を教えてもらいブライヴと会話。' },
      { id: 'p15', number: 15, name: 'ハイト砦', type: 'special', typeLabel: '砦', x: 70, y: 42, keyItems: 'デクタスの割符(左) / 黄金の種子 / 血の斬撃', description: '大昇降機の鍵の半分と出血戦技「血の斬撃」を入手。' },
      { id: 'p16', number: 16, name: '贄送りの大橋', type: 'special', typeLabel: '関門', x: 47, y: 55, keyItems: 'バリスタ矢 / イレーナ', description: '啜り泣きの半島への架け橋。手前にモーン城の手紙を持つイレーナ。' },
      { id: 'p17', number: 17, name: '巡礼教会', type: 'church', typeLabel: '教会', x: 30, y: 65, keyItems: '聖杯の雫', description: '半島北部の高台教会。マリカ像の足元で雫回収。' },
      { id: 'p18', number: 18, name: '第四マリカ教会', type: 'church', typeLabel: '教会', x: 20, y: 78, keyItems: '聖杯の雫', description: '半島西端の教会。敵を無視して馬で突入可能。' },
      { id: 'p19', number: 19, name: 'カルの洗礼堂', type: 'church', typeLabel: '教会', x: 42, y: 75, keyItems: '聖杯の雫 / 狂い火祈祷', description: 'ネズミが群がる廃教会。マリカ像足元で雫回収。' },
      { id: 'p20', number: 20, name: 'モーンの城 / 城壁前', type: 'special', typeLabel: '大城塞', x: 48, y: 89, keyItems: '地図断片(南) / 黄金の種子 / 隠遁商人(ランタン)', description: '城壁前で地図と携帯ランタンを即購入。城内最奥で大剣「剣接ぎの大剣」。' },
    ],
  },
  {
    id: 'liurnia',
    name: '湖のリエーニエ',
    enName: 'Liurnia of the Lakes',
    recommendedLevel: 'Lv. 35 〜 65',
    summary: '常に霧と水に包まれた巨大湿地帯。中央にそびえるレアルカリア学院を中心に魔術・知力装備・鈴玉・重要NPCが密集。ストームヴィル城を迂回して東崖沿い道から直行可能です。',
    mapImage: 'images/maps/liurnia.png',
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
      '⑤ バラ教会で白面ヴァレーと会話、モーグウィン王朝への最速ワープを解放。',
      '⑥ 結びの教会でミリエルに会い、魔術・祈祷を安全に習得。',
    ],
    hazards: [
      '巨大ザリガニ（超長射程の水鉄砲スナイプ。ジグザグ走りで回避）。',
      '狂い火の灯台（視界に入ると狂気蓄積。遮蔽物に隠れながら登り排除）。',
    ],
    pins: [
      { id: 'l1', number: 1, name: 'イリス教会', type: 'church', typeLabel: '教会', x: 38, y: 88, keyItems: '聖杯の雫', description: 'リエーニエ入ってすぐ左手。マリカ像足元。' },
      { id: 'l2', number: 2, name: 'リエーニエ湖の岸辺', type: 'special', typeLabel: '拠点・商人', x: 43, y: 83, keyItems: '地図断片(東) / 放浪商人(ランタン)', description: 'リエーニエ最初の主要祝福。ランタンや調合書を購入。' },
      { id: 'l3', number: 3, name: 'ラスカーの廃墟', type: 'ruins', typeLabel: '廃墟', x: 41, y: 76, keyItems: '儀式壺 / 門前町への転送門', description: '地下に転送門があり、学院前へ一瞬でワープ可能。' },
      { id: 'l4', number: 4, name: 'バラ教会', type: 'church', typeLabel: '重要NPC', x: 28, y: 70, keyItems: '白面ヴァレー / 純血騎士褒章', description: 'モーグウィン王朝へ最速で行くための必須イベント拠点。' },
      { id: 'l5', number: 5, name: '見晴らし島', type: 'special', typeLabel: '重要NPC', x: 36, y: 66, keyItems: 'パッチ / ラーヤ', description: 'パッチが水車ワープを教えてくれる。ラーヤの首飾りを取り戻す。' },
      { id: 'l6', number: 6, name: '白金村', type: 'ruins', typeLabel: '村・重要NPC', x: 22, y: 74, keyItems: '聖樹の秘割符(右) / ネフェリ・ルゥ', description: '壺に擬態したアルバスから割符をもらう。広場下にネフェリ。' },
      { id: 'l7', number: 7, name: '改宗された塔', type: 'special', typeLabel: '魔術師塔', x: 25, y: 63, keyItems: 'メモリ・ストーン', description: 'ジェスチャー「叡智」を捧げて封印を解き、記憶スロットを拡張。' },
      { id: 'l8', number: 8, name: '学院の門前町', type: 'ruins', typeLabel: '廃墟・地図', x: 48, y: 56, keyItems: '地図断片(北) / 黄金の種子', description: '沈んだ街の中央に地図柱。北西に輝石竜スマラグ（鍵所持）。' },
      { id: 'l9', number: 9, name: 'レアルカリア結晶坑道', type: 'mine', typeLabel: '坑道', x: 62, y: 40, keyItems: '鍛石掘りの鈴玉【1】', description: 'ボス撃破で鍛石1〜2が円卓で無限購入可能に！' },
      { id: 'l10', number: 10, name: '魔術学院レアルカリア', type: 'special', typeLabel: '大ダンジョン', x: 42, y: 48, keyItems: '満月の女王レナラ (生まれ直し)', description: 'ステータス振り直し機能が解放される最重要大ダンジョン。' },
      { id: 'l11', number: 11, name: '結びの教会', type: 'church', typeLabel: '重要拠点', x: 72, y: 50, keyItems: '亀の司祭ミリエル / 黄金の裁縫道具 / 贖罪の泉', description: '魔術・祈祷を教えてくれる最高の師匠。誤攻撃したNPCを免罪可能。' },
      { id: 'l12', number: 12, name: '火炎僧の野営地', type: 'special', typeLabel: '重要祈祷', x: 75, y: 68, keyItems: '祈祷「火の癒しよ」', description: '朱い腐敗と毒を瞬時に治癒する必須救済祈祷を回収。' },
      { id: 'l13', number: 13, name: 'カーリアの書院', type: 'special', typeLabel: '書院', x: 75, y: 44, keyItems: 'カーリアの逆さ像使用場所', description: 'ラニイベントで像を台座に置くと上下反転し神授塔へ行ける。' },
      { id: 'l14', number: 14, name: '城館への道', type: 'special', typeLabel: '重要NPC・鍛冶屋', x: 32, y: 30, keyItems: '軍師イジー (喪色鍛石1〜4無限販売)', description: '巨大鍛冶屋イジー。話しかけるだけで特殊武器が即+4に！' },
      { id: 'l15', number: 15, name: 'カーリアの城館', type: 'ruins', typeLabel: '大城塞', x: 35, y: 20, keyItems: '夜と炎の剣 / 親衛騎士ローレッタ', description: '城館裏手から魔女ラニの住むスリーシスターズへ進入可能。' },
      { id: 'l16', number: 16, name: 'スリーシスターズ', type: 'special', typeLabel: '魔術師塔群', x: 30, y: 16, keyItems: '魔女ラニ / セルブス / 猟犬ステップ', description: 'ラニに仕官して暗月大剣イベントを開始。' },
      { id: 'l17', number: 17, name: 'ベイルム教会', type: 'church', typeLabel: '教会', x: 62, y: 22, keyItems: '聖杯の雫', description: '大昇降機へ向かう街道沿いの教会。' },
      { id: 'l18', number: 18, name: '鎮めの教会', type: 'church', typeLabel: '教会', x: 68, y: 15, keyItems: '聖杯の雫 / 指詠みのヴァイク', description: '狂い火村を抜けた崖上。ヴァイク侵入を撃破し雫回収。' },
    ],
  },
  {
    id: 'caelid',
    name: 'ケイリッド ＆ グレイオールの竜塚',
    enName: 'Caelid & Dragonbarrow',
    recommendedLevel: 'Lv. 60 〜 85',
    summary: '朱い腐敗に侵された死の大地。北部「グレイオールの竜塚」は終盤クラスの高適正エリアですが、戦闘を避けて駆け抜けるだけで莫大なルーンや最強杖・強化素材をノーリスク回収できます。',
    mapImage: 'images/maps/caelid.png',
    mapFragments: [
      { name: 'ケイリッド', location: 'エオニア沼南の分岐路の石柱' },
      { name: '竜塚', location: 'ファロス砦西の崖沿い街道' },
    ],
    explorationFlow: [
      '① 第三マリカ教会の裏から転送門で獣の神殿へ直行。',
      '② 南下してファロス砦の屋上宝箱から「デクタスの割符(右)」と「ラダゴンの爛れ刻印」を回収。',
      '③ 砦前の母竜グレイオールを出血武器で殴り、約10万ルーンで一気にレベルアップ。',
      '④ 賢者街の廃墟へ行き「隕石の杖」と「岩石弾」を拾う。',
      '⑤ ゲール坑道を裏口から抜けてボスを倒し「名刀月隠」を入手。',
      '⑥ 竜塚のスカラベと神授塔足元で「喪色の鍛石[8][9]」を回収。',
    ],
    hazards: [
      'エオニア沼の朱い腐敗（歩くと急速蓄積。「火の癒しよ」か霊馬で移動）。',
      '巨大カラスと巨大犬（感知が極めて広く攻撃力絶大。相手にせず馬で駆け抜ける）。',
    ],
    pins: [
      { id: 'c1', number: 1, name: 'スモルダー教会', type: 'church', typeLabel: '教会', x: 18, y: 35, keyItems: '聖杯の雫', description: 'リムグレイブから入ってすぐの腐敗教会。雫回収。' },
      { id: 'c2', number: 2, name: 'キレムの廃墟', type: 'ruins', typeLabel: '廃墟', x: 30, y: 32, keyItems: 'かぼちゃ頭デュオ', description: 'ケイリッド中央街道沿いの廃墟。' },
      { id: 'c3', number: 3, name: 'ゲール坑道', type: 'mine', typeLabel: '最重要坑道', x: 15, y: 48, keyItems: '知力最強刀「名刀月隠」 / 鍛石4', description: '裏口から入ればボス前まで直行可能。溶岩土竜撃破で月隠入手！' },
      { id: 'c4', number: 4, name: '賢者街の廃墟', type: 'ruins', typeLabel: '最重要廃墟', x: 35, y: 45, keyItems: '隕石の杖 / 重力魔術「岩石弾」', description: '序盤最強の杖と魔術が落ちている神スポット。ボス戦不要で即回収！' },
      { id: 'c5', number: 5, name: 'エオニア沼', type: 'special', typeLabel: '腐敗湖', x: 45, y: 50, keyItems: '無垢金の針 / 宿将オニール', description: '朱い腐敗の沼地。中央奥にミリセントイベントのキーボス。' },
      { id: 'c6', number: 6, name: 'サリアの街', type: 'ruins', typeLabel: '魔術街', x: 60, y: 40, keyItems: '夜の彗星 / 黄金の種子 / 魔術封印', description: '高台の燭台3箇所に火を灯すと封印が解け、宝箱が開放。' },
      { id: 'c7', number: 7, name: 'サリアの結晶坑道', type: 'mine', typeLabel: '転送罠坑道', x: 55, y: 32, keyItems: '喪色の鍛石【5】 / 喪色掘りの鈴玉[1]', description: 'リムグレイブの宝箱罠で飛ばされる坑道。しゃがみダッシュで脱出可能。' },
      { id: 'c8', number: 8, name: '赤獅子城', type: 'special', typeLabel: '大城塞', x: 72, y: 82, keyItems: 'ラダーン祭り / 将軍ラダーン', description: 'デクタス昇降機起動後に訪れると祭りが開催されボス直行可能。' },
      { id: 'c9', number: 9, name: '不落の大橋', type: 'special', typeLabel: '自動ルーン稼ぎ', x: 62, y: 75, keyItems: '兵士と巨大犬の同士討ち', description: '兵士と犬が勝手に戦うため放置するだけでルーンが溜まる。' },
      { id: 'c10', number: 10, name: 'ファロス砦', type: 'special', typeLabel: '最重要砦', x: 75, y: 36, keyItems: 'デクタスの割符(右) / ラダゴンの爛れ刻印', description: '屋上で割符、屋根裏から降りて全ステ+5の最強タリスマン回収。' },
      { id: 'c11', number: 11, name: '母竜グレイオール', type: 'special', typeLabel: '特大ルーン稼ぎ', x: 70, y: 38, keyItems: '約100,000ルーン / 竜の心臓×5', description: 'ファロス砦前の巨大竜。尾を出血武器で殴れば反撃なしで倒せる！' },
      { id: 'c12', number: 12, name: '竜塚の西', type: 'special', typeLabel: 'スカラベ', x: 52, y: 25, keyItems: '喪色の鍛石【8】', description: '神授塔北西の崖下にいる白銀スカラベを一撃で撃破。' },
      { id: 'c13', number: 13, name: 'ケイリッドの神授塔', type: 'special', typeLabel: '神授塔足元', x: 58, y: 20, keyItems: '喪色の鍛石【9】', description: '神授塔の崖沿いの円形椅子遺体から回収。馬で突入して即離脱！' },
      { id: 'c14', number: 14, name: 'レンの魔術師塔', type: 'special', typeLabel: '魔術師塔', x: 82, y: 28, keyItems: '鉄球回避ルーン稼ぎ', description: '坂道を転がる鉄球を避けるだけで1回2,000ルーン。' },
      { id: 'c15', number: 15, name: '獣の神殿', type: 'special', typeLabel: '転送先拠点', x: 85, y: 15, keyItems: '獣の司祭グラング / 死の根', description: '第三マリカ教会裏のワープ門で到着。死の根を渡すと祈祷をもらえる。' },
      { id: 'c16', number: 16, name: '大竜餐教会', type: 'church', typeLabel: '竜餐教会', x: 32, y: 78, keyItems: '腐敗ブレス / エグズキスの腐敗', description: '竜の心臓を消費して最強格の祈祷「腐敗ブレス」を習得。' },
    ],
  },
  {
    id: 'altus',
    name: 'アルター高原 ＆ ゲルミア火山',
    enName: 'Altus Plateau & Mt. Gelmir',
    recommendedLevel: 'Lv. 60 〜 90',
    summary: '黄金樹のお膝元に広がる美しい大地と、煮えたぎる溶岩の山。デクタスの大昇降機または古遺跡断崖から進入可能。武器の鈴玉[2]や重要タリスマン、火山館イベントが集結しています。',
    mapImage: 'images/maps/altus_map.png',
    mapFragments: [
      { name: 'アルター高原', location: '昇降機を出て北東の十字路石柱' },
      { name: 'ゲルミア火山', location: '罪人送りの道先の岩壁沿い' },
      { name: '王都ローデイル', location: '外郭城門前の広場石柱' },
    ],
    explorationFlow: [
      '① デクタスの大昇降機でアルター高原へ上がり、すぐ北東の地図柱で地図を解放。',
      '② 封印された坑道に入り、隠し壁の奥の宝箱から「鍛石掘りの鈴玉[2]」を回収。',
      '③ 第二マリカ教会へ向かい、ユラと会話して「長牙」と「浄血の結晶雫」を確保。',
      '④ ゲルミア火山へハシゴで登り、第一休止小屋南で「喪色の鍛石[6]」を拾う。',
      '⑤ 火山館の客間に入り、暗殺依頼の赤い手紙を受けて大角一式や戦鬼一式を狙う。',
    ],
    hazards: [
      '王都外郭のツリーガード2体（1体ずつ釣るか霊馬でスルー）。',
      '日陰城の毒沼地帯（足を取られるので猟犬ステップ等で移動）。',
    ],
    pins: [
      { id: 'a1', number: 1, name: 'デクタスの大昇降機', type: 'special', typeLabel: '大昇降機', x: 22, y: 65, keyItems: '高原側エントランス', description: '左右の割符を掲げてアルター高原へ進入する表玄関。' },
      { id: 'a2', number: 2, name: '黄金樹を臨む丘', type: 'special', typeLabel: '重要NPC', x: 30, y: 58, keyItems: 'ミリセント / 黄金の種子', description: '昇降機を出てすぐ北。ミリセントが佇んでいる。' },
      { id: 'a3', number: 3, name: 'ルクスの廃墟', type: 'ruins', typeLabel: '廃墟', x: 35, y: 62, keyItems: '赤獅子の小盾', description: '亜人の女王がいる廃墟。' },
      { id: 'a4', number: 4, name: '封印された坑道', type: 'mine', typeLabel: '最重要坑道', x: 68, y: 55, keyItems: '鍛石掘りの鈴玉【2】 (ボス不要)', description: '隠し壁の先の宝箱を開けるだけで鍛石3〜4が円卓無限購入可能に！' },
      { id: 'a5', number: 5, name: '旧アルター坑道', type: 'mine', typeLabel: '坑道', x: 45, y: 48, keyItems: '鍛石【5】大量', description: '石剣の鍵で入る坑道。トロル撃破で大槌入手。' },
      { id: 'a6', number: 6, name: 'アルター坑道', type: 'mine', typeLabel: '坑道', x: 55, y: 42, keyItems: '喪色掘りの鈴玉【2】', description: 'ボス結晶人撃破で喪色鍛石3〜4が無限購入可能に。' },
      { id: 'a7', number: 7, name: '第二マリカ教会', type: 'church', typeLabel: '最重要教会', x: 40, y: 52, keyItems: '長牙 / 浄血の結晶雫 / エレオノーラ双薙刀', description: '倒れているユラと会話。エレオノーラ撃破でモーグ特効薬入手。' },
      { id: 'a8', number: 8, name: '日陰城', type: 'ruins', typeLabel: '城塞', x: 48, y: 25, keyItems: 'マレー家の執行剣 / 城主の義手', description: '毒沼に沈む城。最奥でミリセントに渡す義手を回収。' },
      { id: 'a9', number: 9, name: '第一休止小屋', type: 'special', typeLabel: '火山街道', x: 25, y: 30, keyItems: '喪色の鍛石【6】', description: '南の崖端の椅子遺体から喪色6を回収。' },
      { id: 'a10', number: 10, name: 'ゲルミア英雄墓', type: 'mine', typeLabel: '英雄墓', x: 32, y: 35, keyItems: '猟犬騎士防具一式 / チャリオット', description: '溶岩の坂をチャリオットの上に乗って進むギミック。' },
      { id: 'a11', number: 11, name: '火山館', type: 'special', typeLabel: '大拠点・NPC', x: 20, y: 22, keyItems: 'タニス / 暗殺依頼 / 冒涜の君主ライカード', description: '赤い手紙の依頼を全て完了するまでライカード撃破は厳禁！' },
      { id: 'a12', number: 12, name: 'エーグレーの聖堂', type: 'church', typeLabel: '教会・ショートカット', x: 26, y: 24, keyItems: '喪色の鍛石【7】 / 神肌の貴種', description: '溶岩広場へ飛び降りて喪色7を回収。' },
      { id: 'a13', number: 13, name: '隠遁商人のボロ屋', type: 'special', typeLabel: '王都外郭', x: 62, y: 32, keyItems: '羽の結晶雫 (装備重量4.5倍)', description: '外郭墓地で拾える神雫。重装で超軽量ローリングが可能に。' },
      { id: 'a14', number: 14, name: '王都外郭・竜のツリーガード', type: 'special', typeLabel: '城門ボス', x: 75, y: 40, keyItems: '王都ローデイル進入', description: '城門を守る大ボス。毒霧や遺灰を活用して突破。' },
    ],
  },
  {
    id: 'siofra',
    name: '地下世界（シーフラ河・ノクローン）',
    enName: 'Siofra River & Nokron',
    recommendedLevel: 'Lv. 40 〜 75',
    summary: '地底に広がる満点の星空のような神秘の世界。ラダーン祭りをクリアするとリムグレイブ東部に大穴が開き、「永遠の都ノクローン」へ進入可能。最強遺灰「写し身の雫」が眠っています。',
    mapImage: 'images/maps/siofra_map.png',
    mapFragments: [
      { name: 'シーフラ河', location: '角骸の霊場の階段手前の石柱' },
      { name: '深き根の底', location: '名も無き永遠の都のガゼボ' },
    ],
    explorationFlow: [
      '① 霧の森の「シーフラ河の井戸」から長い昇降機で地底へ降りる。',
      '② 8つの石灯篭に火を灯し、角骸の霊場で祖霊と対決してタリスマン入手。',
      '③ ラダーン撃破後、ハイト砦北西の大穴から「永遠の都ノクローン」へ進入。',
      '④ 写し身の雫を撃破し、夜の神域の最奥で「指殺しの刃」と「写し身の雫の遺灰」を回収。',
    ],
    hazards: [
      '祖霊の民の狙撃手（超遠距離から精密大矢を連射。障害物を利用して接近）。',
    ],
    pins: [
      { id: 's1', number: 1, name: 'シーフラ河の井戸底', type: 'special', typeLabel: '昇降機', x: 45, y: 80, keyItems: '地下世界エントランス', description: '霧の森から降りてすぐの水路。' },
      { id: 's2', number: 2, name: '角骸の霊場', type: 'special', typeLabel: 'ボス祭壇', x: 50, y: 65, keyItems: '祖霊の角 (敵撃破時FP回復)', description: '周辺の8本の灯篭に火を灯すとボス戦が解放。' },
      { id: 's3', number: 3, name: '信仰の神殿', type: 'ruins', typeLabel: '商人', x: 58, y: 55, keyItems: '取り残された商人 / 雫の幼生', description: '足場をよじ登った先に商人が隠れている。' },
      { id: 's4', number: 4, name: 'シーフラ河の奥井戸', type: 'special', typeLabel: '昇降機', x: 52, y: 30, keyItems: 'ケイリッド大壺への道', description: '石剣の鍵で起動。ケイリッド北の大壺前へ直通。' },
      { id: 's5', number: 5, name: '永遠の都ノクローン', type: 'special', typeLabel: '大都市', x: 55, y: 45, keyItems: 'ラダーン撃破後進入可能', description: '星が落ちた穴から突入。屋根伝いに進む。' },
      { id: 's6', number: 6, name: '夜の神域', type: 'special', typeLabel: '最重要秘境', x: 48, y: 40, keyItems: '写し身の雫の遺灰 / 指殺しの刃', description: 'ゲーム最強遺灰とラニイベントの最重要アイテムを回収！' },
      { id: 's7', number: 7, name: '祖霊の森', type: 'special', typeLabel: '森・ボス', x: 60, y: 38, keyItems: '祖霊の王', description: '第2の祖霊戦。撃破で追憶入手。' },
      { id: 's8', number: 8, name: 'シーフラの水道橋', type: 'mine', typeLabel: '水道橋', x: 65, y: 32, keyItems: '英雄のガーゴイル / 石棺ワープ', description: 'ボス撃破後に滝の石棺に入ると「深き根の底」へワープ可能。' },
      { id: 's9', number: 9, name: 'エインセル河本流', type: 'special', typeLabel: 'エインセル河', x: 32, y: 35, keyItems: '小さなラニの人形 / 喪色鍛石7', description: 'レナの魔術師塔の転送門から進入。人形と会話。' },
      { id: 's10', number: 10, name: '永遠の都ノクステラ', type: 'special', typeLabel: '都・タリスマン', x: 25, y: 25, keyItems: 'タリスマン「ノクステラの月」 (記憶スロット+2)', description: '最上階の宝箱で記憶スロットを2枠も拡張できる最強タリスマン！' },
    ],
  },
];

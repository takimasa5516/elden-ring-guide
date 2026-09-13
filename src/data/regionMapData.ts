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
  {
    id: 'limgrave',
    name: 'リムグレイブ ＆ 啜り泣きの半島',
    enName: 'Limgrave & Weeping Peninsula',
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
  {
    id: 'liurnia',
    name: '湖のリエーニエ',
    enName: 'Liurnia of the Lakes',
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
  {
    id: 'caelid',
    name: 'ケイリッド ＆ グレイオールの竜塚',
    enName: 'Caelid & Dragonbarrow',
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
  {
    id: 'altus',
    name: 'アルター高原 ＆ ゲルミア火山',
    enName: 'Altus Plateau & Mt. Gelmir',
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
  {
    id: 'underground',
    name: '地下世界 (シーフラ河・ノクローン)',
    enName: 'Underground Rivers & Eternal Cities',
    recommendedLevel: 'Lv. 60 〜 90',
    summary: '狭間の地下に広がる満天の星空のような巨大鍾乳洞空間。ラニイベントの中核であり、伝説の最強遺灰「写し身の雫」が眠ります。',
    mapImage: 'images/maps/underground.png',
    aspectRatio: '800 / 545',
    mapFragments: [
      { name: 'シーフラ河', location: 'シーフラ河、岸辺の北東、角骸の霊場階段の死体' },
      { name: '深き根の底', location: '滝北西のあずまや（熊エリア付近）' },
      { name: 'モーグウィン王朝', location: '王朝廟入口手前の階段死体' },
    ],
    explorationFlow: [
      '① 霧の森の井戸から昇降機で「シーフラ河」へ降り、8箇所の篝火に火を灯す。',
      '② 角骸の霊場で「祖霊」を撃破。',
      '③ ラダーン撃破後、霧の森に大穴が開き「永遠の都ノクローン」へ突入。',
      '④ ノクローン中腹でボス「写し身の雫」を倒し、自分と同じ装備の最強遺灰を回収。',
      '⑤ 夜の神域の最奥で「指殺しの刃」を入手し、魔女ラニへ届ける。',
    ],
    hazards: [
      '祖霊の民の長弓狙撃（超長距離から高精度で矢を放ってくるためジグザグダッシュ推奨）。',
      'ノクローンの銀雫（変身して刺剣や大斧、巨大トゲ球となって圧殺してくる）。',
      '深き根の底・腐れ湖の死の霧・腐敗沼（抗死・腐敗対策のタリスマンや祈祷が必須）。',
    ],
    pins: [
      { id: 'up1', number: 1, name: 'シーフラ河、井戸下', type: 'special', typeLabel: '地下入口', x: 17, y: 88, keyItems: 'シーフラ河昇降機', description: '霧の森の巨大昇降機から降り立つ地下世界の玄関口。' },
      { id: 'up2', number: 2, name: 'シーフラ河、岸辺', type: 'special', typeLabel: '拠点・地図', x: 46, y: 78, keyItems: 'シーフラ河の地図断片', description: '広大な河原を見渡す祝福。東の階段足元で地図断片を拾う。' },
      { id: 'up3', number: 3, name: '角骸の霊場 (祖霊)', type: 'special', typeLabel: '大ボス', x: 55, y: 88, keyItems: '祖霊の遺灰', description: '8つの石柱の灯火をすべて点灯させると、光る大鹿の骨からボスエリアへ。' },
      { id: 'up4', number: 4, name: '信奉者の森', type: 'special', typeLabel: '祝福・森', x: 70, y: 53, keyItems: '灯火の柱 / 転送門', description: '祖霊の民が狩りを行う森。柱を登った高台に隠し商人が生息。' },
      { id: 'up5', number: 5, name: 'シーフラ河の奥井戸', type: 'special', typeLabel: '地上出口', x: 51, y: 9, keyItems: 'ケイリッド大壺への昇降機', description: '石剣の鍵で起動し、ケイリッド北西の谷底（巨大壺騎士前）へ脱出。' },
      { id: 'up6', number: 6, name: '永遠の都ノクローン (入口)', type: 'special', typeLabel: 'レガシー都市', x: 45, y: 45, keyItems: '霊姿すずらん【4】〜【6】', description: 'ラダーン撃破後の星の落下孔から進入。屋根伝いに進む。' },
      { id: 'up7', number: 7, name: '写し身の雫 (ボス)', type: 'special', typeLabel: '最重要遺灰', x: 49, y: 35, keyItems: '写し身の雫の遺灰 (全遺灰最強)', description: '自分自身の姿と武器を完全に複製する最強遺灰。戦闘前に装備を外すと裸ボス化。' },
      { id: 'up8', number: 8, name: '夜の神域', type: 'special', typeLabel: 'ラニイベント', x: 42, y: 25, keyItems: '指殺しの刃 / 幼生蝶', description: '巨大な巨人の遺体が鎮座する神域。ラニに捧げるキーアイテムを入手。' },
      { id: 'up9', number: 9, name: '水道橋の配水向 (導水橋)', type: 'special', typeLabel: '石棺ワープ', x: 67, y: 30, keyItems: '英雄のガーゴイル / 深き根への石棺', description: 'ガーゴイル2体撃破後、滝壺の石棺に入ると「深き根の底」へワープ。' },
      { id: 'up10', number: 10, name: 'モーグウィン王朝 (王朝廟)', type: 'special', typeLabel: '裏ボス・稼ぎ', x: 78, y: 15, keyItems: '血の君主モーグ / カラス・しろがね坂稼ぎ', description: '純血騎士褒章でワープ。全ゲーム中最高のルーン効率を誇る聖地。' },
    ],
  },
];

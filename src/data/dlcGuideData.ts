// DLC「SHADOW OF THE ERDTREE (影の地)」完全攻略データ

export interface DlcStepGoal {
  step: string;
  title: string;
  area: string;
  recommendedBlessing: string;
  summary: string;
  keyActions: string[];
  bosses: {
    name: string;
    location: string;
    weakness: string;
    tips: string;
    drops: string;
  }[];
  criticalItems: {
    name: string;
    type: string;
    location: string;
    whyNeeded: string;
  }[];
  pitfalls: string[];
  mapPinId?: string;
  mapRegionId?: string;
}

export interface DlcSecretArea {
  id: string;
  name: string;
  category: string;
  routeTitle: string;
  howToReach: string[];
  boss: string;
  keyItems: string[];
  mapRegionId: string;
  mapPinId: string;
}

export interface DlcScadutreeQuickRoute {
  number: number;
  location: string;
  area: string;
  count: number;
  howToGet: string;
  isCombatRequired: boolean;
  mapRegionId: string;
  mapPinId?: string;
}

export interface DlcGearItem {
  name: string;
  category: 'weapon' | 'talisman' | 'ash' | 'armor';
  categoryLabel: string;
  weaponType?: string;
  tier: 'S' | 'A';
  location: string;
  whyStrong: string;
  recommendedBuild: string;
  mapRegionId: string;
  mapPinId?: string;
}

// 影樹の加護の効果倍率データ (Lv0 〜 Lv20)
export const scadutreeBlessingScaling = [
  { level: 0, attack: '1.00倍 (基準)', defense: '1.00倍 (基準被ダメ)' },
  { level: 2, attack: '1.17倍 (+17%)', defense: '0.86倍 (被ダメ14%減)' },
  { level: 5, attack: '1.40倍 (+40%)', defense: '0.72倍 (被ダメ28%減)' },
  { level: 8, attack: '1.57倍 (+57%)', defense: '0.64倍 (被ダメ36%減)' },
  { level: 10, attack: '1.68倍 (+68%)', defense: '0.60倍 (被ダメ40%減)' },
  { level: 15, attack: '1.90倍 (+90%)', defense: '0.52倍 (被ダメ48%減)' },
  { level: 20, attack: '2.05倍 (+105%)', defense: '0.48倍 (被ダメ52%減・半減)' },
];

// 戦闘不要！序盤に一気に加護Lv10まで上げる安全回収ルート
export const scadutreeQuickRoutes: DlcScadutreeQuickRoute[] = [
  {
    number: 1,
    location: '慰めの教会',
    area: '墓地平原（開始地点から南東）',
    count: 2,
    howToGet: '開始地点から馬で南東へ直行。慰めの教会のマリカ像の足元に2個落ちている。戦闘不要。',
    isCombatRequired: false,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr1',
  },
  {
    number: 2,
    location: '三叉路の十字',
    area: '墓地平原（関門の北）',
    count: 1,
    howToGet: '街道を北西に進んだ場所にあるミケラの十字の足元。フレイヤと角人がいる。',
    isCombatRequired: false,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr1',
  },
  {
    number: 3,
    location: '塔の街ベルラート正門前十字',
    area: '墓地平原（西端）',
    count: 1,
    howToGet: 'ベルラート正門の階段を上がった右手のミケラの十字の足元。ムーアのNPCがいる。',
    isCombatRequired: false,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr2',
  },
  {
    number: 4,
    location: '城砦正面の十字',
    area: 'エンシスの城砦手前',
    count: 1,
    howToGet: '聖戦教会を抜けてエンシスの城砦へと続く橋の手前、街道脇のミケラの十字。',
    isCombatRequired: false,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr3',
  },
  {
    number: 5,
    location: '城砦正面の沼地（ツボ影人）',
    area: 'エンシスの城砦手前の水辺',
    count: 1,
    howToGet: '城砦正面から南の谷底水辺にいる「頭にツボを乗せて光る影人」を倒す（逃げるので即攻撃）。',
    isCombatRequired: true,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr3',
  },
  {
    number: 6,
    location: 'ハイロータス十字',
    area: '影のアルター（エンシス城砦出口）',
    count: 1,
    howToGet: 'エンシス城砦をクリアして影のアルターに出た直後、正面のミケラの十字（レダと角人がいる）。',
    isCombatRequired: false,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr4',
  },
  {
    number: 7,
    location: 'モースの廃墟の十字',
    area: '影のアルター東部',
    count: 1,
    howToGet: '街道を東に進んだモースの廃墟の入口。ミケラの十字の足元。',
    isCombatRequired: false,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr4',
  },
  {
    number: 8,
    location: 'モースの廃墟（ツボ影人）',
    area: '影のアルター東部',
    count: 1,
    howToGet: 'モースの廃墟の崩れた建物周辺をうろつく光るツボ影人を撃破。',
    isCombatRequired: true,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr4',
  },
  {
    number: 9,
    location: '聖戦教会',
    area: '影のアルター北西',
    count: 1,
    howToGet: '影のアルター街道を北西に進んだ聖戦教会のマリカ像足元。（侵入者アンソバッハの刺客に注意）',
    isCombatRequired: false,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr4',
  },
  {
    number: 10,
    location: '影の城正門前十字',
    area: '影のアルター北端（影の城手前）',
    count: 1,
    howToGet: '影の城へと続く大階段手前、右手のミケラの十字足元。',
    isCombatRequired: false,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr5',
  },
  {
    number: 11,
    location: 'ボロの教会',
    area: '影のアルター東崖上',
    count: 2,
    howToGet: 'モースの廃墟から北の崖道またはボニ村を抜けて到達する教会のマリカ像足元に2個。',
    isCombatRequired: false,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr4',
  },
  {
    number: 12,
    location: '青海岸十字',
    area: '南海岸（青海岸）',
    count: 1,
    howToGet: '城砦正面の谷底からエラク川を下って青海岸へ南下。海岸中央のミケラの十字足元。',
    isCombatRequired: false,
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr8',
  },
];

// DLCメインストーリー攻略フロー
export const dlcMainFlow: DlcStepGoal[] = [
  {
    step: 'STEP 1',
    title: '影の地へ突入 ＆ 墓地平原の加護爆集め',
    area: '墓地平原・塔の街ベルラート',
    recommendedBlessing: '加護 Lv.0 〜 4',
    summary: 'モーグウィン王朝の繭から影の地へ進入。開始直後の巨大な「焼炉のゴーレム」は完全無視し、霊馬で駆け巡って影樹の破片・新武器（逆手剣）・タリスマン（双頭亀）を回収して加護Lv4以上を確保。ベルラートで最初のレガシーボスを倒します。',
    keyActions: [
      '【突入条件】本編で「星砕きのラダーン」と「血の君主モーグ」を倒し、神託の祭壇の繭の手を調べる。',
      '開始地点から南東へ馬を走らせ「慰めの教会」で【影樹の破片×2】を即回収。',
      '西の「火に焼かれた廃墟」北東で壊れ武器【逆手剣（戦技：死角の一撃）】をノー戦闘で拾う。',
      '「呼び水の村」のような池の滝裏にある洞窟で【双頭亀のタリスマン（スタミナ超回復）】を回収。',
      'ベルラート入口前のミケラの十字で影樹の破片を回収し、加護Lv3〜4まで上げてから城内へ。',
      '「塔の街ベルラート」を攻略し、ボスの神獣獅子舞を撃破（赤獅子・霊灰を活用）。',
    ],
    bosses: [
      {
        name: '神獣獅子舞',
        location: '塔の街ベルラート最奥',
        weakness: '刺突・出血・打撃（頭部弱点）',
        tips: '嵐・雷・氷の3形態に変化。雷時は落雷の予兆地面から離れ、氷時は冷気スタンプをジャンプ回避。写し身の雫や協力NPC（赤獅子フレイヤ）を呼ぶとヘイトが分散して劇的に楽になります。',
        drops: '神獣の追憶、神獣の頭（頭防具・筋力+4技量+4）',
      },
    ],
    criticalItems: [
      {
        name: '逆手剣',
        type: '新武器種（逆手剣）',
        location: '墓地平原「火に焼かれた廃墟」北東の石棺遺体',
        whyNeeded: '戦技「死角の一撃」がステップ無敵＋敵の盾ガードを完全貫通。DLC最優秀の万能ぶっ壊れ武器。',
      },
      {
        name: '双頭亀のタリスマン',
        type: 'タリスマン',
        location: '墓地平原北東、エラク川手前の滝の裏の小洞窟',
        whyNeeded: 'スタミナ回復速度が常時+22%上昇。本編の緑亀タリスマンの完全上位互換で全ビルド必須。',
      },
      {
        name: '竜狩りの大刀',
        type: '大刀',
        location: '墓地平原南東「竜穴」の古竜人撃破報酬',
        whyNeeded: '戦技「竜撃」の超高威力光波。ギザの山の竜たちや暴竜ベールを消滅させる対竜決戦兵器。',
      },
    ],
    pitfalls: [
      '平原を歩く超巨大な「焼炉のゴーレム」に挑んで焼き殺される（序盤は無視！後で高所から大壺を投げ込むのが正解）。',
      '影樹の破片を使わずにレベルだけで挑み、「敵の攻撃が痛すぎる」と錯覚する（加護Lvを上げることが最優先）。',
    ],
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr1',
  },
  {
    step: 'STEP 2',
    title: 'エンシスの城砦突破 ＆ 影のアルター進出',
    area: 'エンシスの城砦・影のアルター',
    recommendedBlessing: '加護 Lv.4 〜 7',
    summary: '関所となるエンシスの城砦を登り、レラーナを突破して影の地の中枢「影のアルター」へ進出。各地のNPCイベントが本格化します。影の城へ近づく前に主要NPCの話を聞いておきましょう。',
    keyActions: [
      '城砦正面のミケラの十字で影樹の破片を回収。',
      'エンシスの城砦内部の宝箱から新武器【軽大剣ミルディ】を入手。',
      '城砦最奥でボス【双月の騎士レラーナ】を撃破。',
      '影のアルターに出たら正面の「ハイロータス十字」で針の騎士レダ、角人と会話。',
      '東のモースの廃墟で落葉のダンと対面（ジェスチャー「手合わせ願おう」で格闘武器入手可能）。',
      '【要注意時限警告】影の城に接近すると「どこかで大ルーンが壊れた」のテロップが出てNPC関係が激変するため、接近前に一度各地の十字を巡るのが推奨。',
    ],
    bosses: [
      {
        name: '双月の騎士、レラーナ',
        location: 'エンシスの城砦最奥',
        weakness: '雷・刺突・パリィ（魔力・炎カット率高）',
        tips: '魔術剣と火炎剣の二刀流連撃。第2形態の二連月落下（双月）は大爆発が連続発生するため、タイミングよく「3回連続ジャンプ」で完全回避！魔力カット率を高めた盾（カーリアの騎士盾など）でガードカウンターも有効。',
        drops: '双月の騎士の追憶（レラーナの双剣 or 魔術「レラーナの双月」）',
      },
    ],
    criticalItems: [
      {
        name: '軽大剣ミルディ',
        type: '軽大剣（通常強化）',
        location: 'エンシスの城砦、昇降機手前の物見塔宝箱',
        whyNeeded: '通常強化できるスタイリッシュな軽大剣。通常攻撃の連撃速度とリーチ、ダウン値が極めて優秀。',
      },
      {
        name: '火花の調香瓶',
        type: '調香瓶武器',
        location: 'エンシスの城砦手前、城砦正面の野営地宝箱',
        whyNeeded: '通常攻撃で扇状の火炎をばら撒く。集団戦や対大型ボスに高い継続火力を発揮。',
      },
      {
        name: 'レラーナの双剣',
        type: '軽大剣（追憶武器）',
        location: 'レラーナ撃破後の円卓追憶交換',
        whyNeeded: '構えから弱攻撃で魔術の五連光波、強攻撃で全周囲の業火螺旋。全ビルド憧れの万能武器。',
      },
    ],
    pitfalls: [
      'レラーナの双月ジャンプをローリングで避けようとして爆風に巻き込まれる（ジャンプならノーダメージ）。',
      '影の城へ一直線に向かって「大ルーン破損」を即発生させ、NPCの初期会話を聞き逃す。',
    ],
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr3',
  },
  {
    step: 'STEP 3',
    title: '影の城攻略 ＆ メスメルの種火強奪',
    area: '影の城（正門・保管庫）',
    recommendedBlessing: '加護 Lv.8 〜 12',
    summary: '影の城はDLC最大の超立体レガシーダンジョン。正門広場の黄金カバを倒し、巨大な図書館「保管庫」を各階の梁や標本を伝って天守へ。串刺し公メスメルを倒し、ストーリー進行の鍵「メスメルの種火」を手に入れます。',
    keyActions: [
      '影の城正門を開けてボス【黄金カバ】と交戦。撃破で影樹の破片×2を入手。',
      '保管庫（1階〜7階）を探索。各階の影樹の破片、霊灰、古竜岩の鍛石を回収。',
      '保管庫4階のミケラの十字、保管庫7階の祝福を順次解放。',
      'アンスバッハとフレイヤの保管庫イベント（手紙の受け渡し）を進める。',
      '保管庫最上階の天守でボス【串刺し公メスメル】と激突。',
      'メスメル撃破で【メスメルの種火】と追憶を獲得。',
      '（寄り道）保管庫1階の裏通路から水没した「教区」や「奈落の森」への分岐ルートも解放可能。',
    ],
    bosses: [
      {
        name: '黄金カバ',
        location: '影の城正門広場',
        weakness: '炎・出血・頭部',
        tips: '開幕の突進丸呑み攻撃は横ローリングで回避。中盤から背中から黄金の針を全方位に射出するため距離を取る。写し身にタゲを取らせて側面から攻撃。',
        drops: '影樹の破片×2、祈祷「坩堝の諸相・針」',
      },
      {
        name: '串刺し公、メスメル',
        location: '影の城・天守（保管庫最上階）',
        weakness: '出血・冷気・斬撃（炎耐性高）',
        tips: '素早い槍撃と炎の大技。突き攻撃の後の隙に反撃。第2形態では「深淵の邪蛇」に変異し、巨大な蛇が次々に噛みついてくるため、蛇が頭を振り下ろす瞬間に前方ローリングで躱す。角人やアンスバッハを召喚可能。',
        drops: '串刺し公の追憶、メスメルの種火（封印の木を燃やす重要品）',
      },
    ],
    criticalItems: [
      {
        name: 'メスメルの種火',
        type: 'ストーリーキーアイテム',
        location: '串刺し公メスメル撃破報酬',
        whyNeeded: 'ラウフの古遺跡の「封印の木」を燃やし、最終ダンジョンへ行くための絶対必須品。',
      },
      {
        name: 'カーリアの刺突盾',
        type: '新武器種（刺突盾）',
        location: '影の城・保管庫の裏手、遺体から拾う',
        whyNeeded: 'ガード判定を維持したまま刺突攻撃を繰り出せる鉄壁のハイブリッド攻防装備。',
      },
      {
        name: '真珠竜の印のタリスマン+3',
        type: 'タリスマン',
        location: '影の城・保管庫裏手の宝箱',
        whyNeeded: '物理以外の全属性（魔力・炎・雷・聖）カット率が+20%も激増する防御の要。',
      },
    ],
    pitfalls: [
      '保管庫の立体的構造に迷って同じ場所をぐるぐる回る（吊るされた巨大標本像の上に乗って渡るのが正規ルート）。',
      'メスメルの第2形態の邪蛇ラッシュでパニックロールして連続被弾する（蛇の着地に合わせて冷静にローリング）。',
    ],
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr5',
  },
  {
    step: 'STEP 4',
    title: 'ラウフの古遺跡 ＆ 封印の木を焼却',
    area: 'ラウフの古遺跡・蕾の教会',
    recommendedBlessing: '加護 Lv.12 〜 16',
    summary: '影のアルター西の高架橋を渡り、古代の巨石建築と腐敗が渦巻く「ラウフの古遺跡」へ。古代ゴーレムや朱い腐敗の虫人を退け、最深部の蕾の聖女ロミナを撃破。メスメルの種火で封印の木を燃やし、天空の螺旋塔へ進みます。',
    keyActions: [
      '高架橋からラウフの古遺跡へ。霊気流ジャンプの封印（石積みを壊す）を解きながら上層へ進む。',
      '朱い腐敗対策に「火の癒しよ」や「免腐の苔薬」をスロットに常備。',
      '遺跡内の影樹の破片・霊灰を余さず回収。',
      '最深部「蕾の教会」でボス【蕾の聖女ロミナ】と対戦。',
      'ロミナ撃破後、教会の奥にある「封印の木」にインタラクト。',
      '「メスメルの種火で木を燃やす」を選択するとムービーが入り、ベルラート上空の最終レガシー「エニル・イリム」へ自動転送！',
    ],
    bosses: [
      {
        name: '蕾の聖女、ロミナ',
        location: 'ラウフの古遺跡・蕾の教会',
        weakness: '炎・凍傷・出血（腐敗・毒は無効）',
        tips: 'サソリと百足が融合した異形。薙刀による大回転斬りと、周囲に蝶を舞わせて爆発させる腐敗範囲攻撃を持つ。炎属性武器（冒涜の聖剣など）が猛烈に刺さる。写し身の雫を盾にして背後から削る。',
        drops: '蕾の聖女の追憶（薙刀「エオニアの長柄」 or 祈祷「腐敗の蝶」）',
      },
    ],
    criticalItems: [
      {
        name: '緑青の大盾',
        type: '大盾',
        location: 'モースの廃墟のムーアイベント完結時、またはラウフ古遺跡',
        whyNeeded: 'ガード強度驚異の82。指紋石の盾に匹敵するガード性能でボスの猛攻をスタミナほぼ無消費で防ぐ。',
      },
    ],
    pitfalls: [
      '【取り返しのつかない要素】封印の木を燃やすと、影の地全体のNPCイベントが最終フェーズへ移行し、未完了の会話・依頼が打ち切られます。やり残したNPCイベントや探索は木を燃やす前に済ませましょう！',
    ],
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr12',
  },
  {
    step: 'STEP 5',
    title: '最終ダンジョン エニル・イリム ＆ 決戦「約束の王」',
    area: '螺旋塔 エニル・イリム・神の門',
    recommendedBlessing: '加護 Lv.17 〜 20 (MAX推奨)',
    summary: '雲海の上にそびえ立つ螺旋の聖塔。神聖術師や角人戦士を突破し、仲間だったNPCたちとの大乱闘を経て、神の門の前でDLC最終ボス「約束の王ラダーン」との決戦に挑みます。',
    keyActions: [
      'エニル・イリム内部を螺旋状に登り、祝福「浄化の小広間」「第一塔」「螺旋塔」を解放。',
      '道中の神聖術師（超長距離の光線攻撃）は遮蔽物を使って接近し即座に倒す。',
      '【同志たちとの大乱闘】針の騎士レダ、ダン、ムーアらとの連続NPC戦闘。味方NPC（ティエリエ、アンスバッハ）を召喚して突破。',
      '神の門前で最終決戦【約束の王ラダーン / ラダーン＆ミケラ】に挑む！',
      '撃破後、神の門の記憶に触れてエンディング（追憶交換で大剣や祈祷「光のミケラ」を入手）。',
    ],
    bosses: [
      {
        name: '針の騎士レダと同志たち',
        location: 'エニル・イリム・浄化の広間',
        weakness: '体勢崩し・出血・範囲戦技',
        tips: 'NPCが次々に乱入してくる乱闘。ティエリエやアンスバッハの召喚サインを必ず使い、タイマンに持ち込む。巨剣の「獅子斬り」や「巨人狩り」で起き上がりハメをするのが最も安全。',
        drops: 'レダの剣、レダの鎧、同志たちの装備一式',
      },
      {
        name: '約束の王、ラダーン (ラストボス)',
        location: '神の門（エニル・イリム最頂上）',
        weakness: '刺突・出血・腐敗・冷気（聖・炎・魔力カット高）',
        tips: '【第1形態】超連撃と重力波。開幕の跳躍突進を躱して反撃。\n【第2形態】ミケラが背負われ、剣劇の後に「全画面の光柱レーザー」が追撃。聖属性カット率を高める「聖竜印のタリスマン+2」や祈祷「黄金樹の防護」が必須！\n【鉄板の救済戦法】「指紋石の大盾」＋「蟻棘のレイピア（出血派生）」によるガードチク戦法。盾を構えたままチクチク刺すだけで、腐敗と出血が蓄積し、驚くほど安全に倒せます。',
        drops: '約束の王の追憶、ミケラの光冠',
      },
    ],
    criticalItems: [
      {
        name: 'ミケラの光冠',
        type: '頭防具',
        location: 'ラスボス撃破後、神の門の光を調べる',
        whyNeeded: '祈祷や特定のミケラ魔術の威力をブーストするクリア記念品。',
      },
    ],
    pitfalls: [
      '加護レベル15未満でラスボスに挑むと、第2形態の光柱追撃で即死を繰り返す（各地の影樹の破片を集めて加護18〜20にしてから挑むのが鉄則！）。',
      '第2形態のミケラの抱擁掴み攻撃を2回食らうと「魅了」されて強制敗北する（「ミケラのルーン」を使うと1回解除可能）。',
    ],
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr13',
  },
];

// 広大な隠し・寄り道エリア踏破ガイド
export const dlcSecretAreas: DlcSecretArea[] = [
  {
    id: 'cerulean_coast',
    name: '青海岸 ＆ 石棺の裂け目',
    category: '南海岸・秘境',
    routeTitle: '城砦正面の谷底エラク川ルート',
    howToReach: [
      '① 祝福「城砦正面」から南西の崖際へ進み、谷底へ降りる坂道を探す。',
      '② エラク川の急流を滝沿いに南へ下り、毒沼地帯を抜ける。',
      '③ 青い花が一面に咲く「青海岸」へ到達。西端で地図断片を拾う。',
      '④ 青海岸の南端にある超巨大な大穴へ向かい、足場を飛び降りて「石棺の裂け目」へ。',
    ],
    boss: '泥濘の騎士（霊馬に乗って戦う巨大骸骨。炎と聖属性が弱点）',
    keyItems: [
      'トリーナのスイレン大量',
      '休眠中のトリーナ（蜜を4回吸って会話するとティエリエイベント進展）',
      '泥濘の追憶（泥濘の鉈 or 祈祷）',
      '青海岸の影樹の破片×2',
    ],
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr8',
  },
  {
    id: 'jagged_peak',
    name: 'ギザの山 ＆ 暴竜ベール',
    category: '東部・竜の連峰',
    routeTitle: '竜穴トンネル突破ルート',
    howToReach: [
      '① 墓地平原南東、柱坂の十字から街道を南下し「竜穴」ダンジョンへ入る。',
      '② 最深部のボス「古竜人」を倒して奥の扉を出ると「ギザの山麓」へ到達。',
      '③ 脚を負傷して絶叫する「竜戦士エーゴン」と出会い、共闘を誓う。',
      '④ 竜餐の大祭壇を越え、落雷が吹き荒れる山頂へ霊気流ジャンプで登る。',
      '⑤ 途中の水辺で「古竜セネサクス」、山頂の噴火口で「暴竜ベール」と激突。',
    ],
    boss: '暴竜ベール（プラキドサクスに反逆した最古の巨竜。竜狩りの大刀とエーゴン召喚が特効）',
    keyItems: [
      '暴竜ベールの追憶（ベールの炎雷 or ベールの暴虐）',
      'エーゴンの大弓 ＆ エーゴン装備一式',
      '竜餐の巫女イベント（巫女の心臓 or 古竜の祈祷）',
      'ギザの山の影樹の破片×3',
    ],
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr10',
  },
  {
    id: 'abyssal_woods',
    name: '奈落の森 ＆ ミドラーの館',
    category: '南東・狂気ホラーエリア',
    routeTitle: '影の城・隠し石棺 ＆ 闇照らしの地下墓ルート',
    howToReach: [
      '① 影の城・保管庫1階の北東、絵画「侵竜」がある部屋の横の壁を攻撃（隠し通路）。',
      '② 梯子を下りて滝の裏の石棺に入ると、影のアルター谷底の「城底の抜け道」へワープ。',
      '③ 隠者川を下り、最南端の「闇照らしの地下墓」をクリアしてレバーを引きボス撃破。',
      '④ 地下墓の出口を出ると、不気味な暗闇が広がる「奈落の森」へ到達。',
      '⑤ 霊馬が使えず、即死攻撃を持つ「触れ得ざる者（冬のランタン）」をしゃがみで躱しながら西の「ミドラーの館」へ。',
    ],
    boss: '狂い火の王、ミドラー（狂気の大剣と黄金の狂い火を操る。出血と冷気が弱点）',
    keyItems: [
      'ミドラーの追憶（大剣「ミドラーの狂剣」 or 祈祷「ミドラーの狂火」）',
      'タリスマン「狂香の露」（狂気時攻撃力アップ）',
      '冬のランタンをパリィして倒すとタリスマン「斑色首飾り+2」入手',
      '奈落の森の影樹の破片×3',
    ],
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr11',
  },
  {
    id: 'hinterland',
    name: '隠された地 ＆ シャーマンの村',
    category: '北東・マリカの故郷',
    routeTitle: '影の城裏門・ジェスチャー「母よ」隠し扉ルート',
    howToReach: [
      '① ボニ村の北端、首なし遺体からジェスチャー「母よ」を入手。',
      '② 影の城の教区（水没区）から保管庫裏手を抜け、祝福「影の城、裏門」へ到達。',
      '③ 裏門祝福のすぐ右手にある「マリカ像」の前で、ジェスチャー「母よ」を使用。',
      '④ 像が横にスライドして隠し扉が開き、黄金の光が降り注ぐ「隠された地」へ！',
      '⑤ 東へ進むと、マリカの生まれ故郷「シャーマンの村」へ到達。',
    ],
    boss: '宿将ガイウス（影の城裏門）、指の母メーテール（ミアの指遺跡奥）',
    keyItems: [
      '祈祷「小黄金樹」（シャーマンの村で拾えるマリカの祈祷）',
      '黄金の編み込み（信仰+10の神タリスマン）',
      '隠された地の影樹の破片×4',
    ],
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr5',
  },
];

// DLC最強武器・タリスマン厳選リスト
export const dlcTopGears: DlcGearItem[] = [
  {
    name: '逆手剣',
    category: 'weapon',
    categoryLabel: '新武器種: 逆手剣',
    weaponType: '逆手剣 (通常強化)',
    tier: 'S',
    location: '墓地平原「火に焼かれた廃墟」北東の石棺遺体（戦闘不要）',
    whyStrong: '専用戦技「死角の一撃」が圧倒的壊れ性能。ステップで相手の攻撃を無敵回避しながら背後へ回り込み、盾ガードを完全にすり抜けて致命傷を与える。通常攻撃の二刀流連撃も超高速。',
    recommendedBuild: '技量特化 / 鋭利派生 または 神秘・出血派生',
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr1',
  },
  {
    name: '血鬼の腕',
    category: 'weapon',
    categoryLabel: '特大武器',
    weaponType: '特大武器 (通常強化)',
    tier: 'S',
    location: '展望台の街（墓地平原西）の血鬼（雑魚敵）からドロップ',
    whyStrong: 'DLC最強のボスキラー。タメ強攻撃の血溜まり噴出により、血派生時の出血蓄積値が「200超」に達する。大半の大ボスがタメ強攻撃2〜3発で出血＆体勢崩しダウンを起こし、文字通り秒殺できる。',
    recommendedBuild: '筋力・神秘特化 / 血派生',
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr2',
  },
  {
    name: '竜狩りの大刀',
    category: 'weapon',
    categoryLabel: '新武器種: 大刀',
    weaponType: '大刀 (喪色強化)',
    tier: 'S',
    location: '墓地平原南東「竜穴」のボス・古竜人撃破報酬',
    whyStrong: '対竜ダメージに特大の特効ボーナス。専用戦技「竜撃」は超長射程の巨大な気刃を撃ち放ち、タメると威力が激増。ギザの山の古竜や暴竜ベールの頭部へ大ダメージを叩き込める。',
    recommendedBuild: '上質（筋力・技量）ビルド',
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr1',
  },
  {
    name: 'レラーナの双剣',
    category: 'weapon',
    categoryLabel: '新武器種: 軽大剣',
    weaponType: '軽大剣 (喪色強化)',
    tier: 'S',
    location: 'エンシスの城砦ボス「双月の騎士レラーナ」の追憶交換',
    whyStrong: '構えから弱攻撃でカーリアの五連光波（魔力）、強攻撃で全周囲の渦巻く業火（炎）を放つ。手数が多く刀身の美しさと殲滅力を兼ね備えた万能武器。',
    recommendedBuild: '筋力・技量・知力・信仰の均等育成（高レベル向け）',
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr3',
  },
  {
    name: '双頭亀のタリスマン',
    category: 'talisman',
    categoryLabel: '神タリスマン',
    tier: 'S',
    location: '墓地平原北東、川沿いの滝の裏の小洞窟（戦闘不要）',
    whyStrong: 'スタミナ回復速度が約22%向上（本編の緑亀タリスマンは18%）。DLCのボスの激しい猛攻をローリングや盾受けした後のスタミナ息切れが劇的に解消される。全褪せ人必携。',
    recommendedBuild: 'あらゆる全ビルドで必須装備',
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr1',
  },
  {
    name: '真珠竜の印のタリスマン+3',
    category: 'talisman',
    categoryLabel: '最強防御タリスマン',
    tier: 'S',
    location: '影の城・保管庫裏手、教区側から渡るテラスの宝箱',
    whyStrong: '魔力・炎・雷・聖の全属性カット率が常時+20%激増。メスメルの炎、レラーナの魔術、ラスボスの聖レーザーなど、DLCボスの壊滅的属性ダメージを大幅に減衰できる。',
    recommendedBuild: '全ボス戦・探索で必須',
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr5',
  },
  {
    name: 'カーリアの刺突盾',
    category: 'weapon',
    categoryLabel: '新武器種: 刺突盾',
    weaponType: '刺突盾 (通常強化)',
    tier: 'A',
    location: '影の城・保管庫の裏手、遺体から拾う',
    whyStrong: '攻撃モーション中に常時盾ガード判定が発生する画期的武器。相手の攻撃を受け止めながら同時に刺突ダメージを与えるため、安全極まりない立ち回りが可能。',
    recommendedBuild: '筋力・知力 / 冷気または魔力派生',
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr5',
  },
  {
    name: '落葉格闘 / 丹毒の格闘',
    category: 'weapon',
    categoryLabel: '新武器種: 格闘',
    weaponType: '格闘 (通常強化)',
    tier: 'A',
    location: 'モースの廃墟で落葉のダンにジェスチャー「手合わせ願おう」を行って撃破',
    whyStrong: 'パンチとキックを組み合わせた超高速アクション。エンチャントや状態異常派生（冷気・出血）との相性が抜群で、体勢崩し能力も非常に高い。',
    recommendedBuild: '筋力・技量・神秘ビルド',
    mapRegionId: 'shadow_realm',
    mapPinId: 'sr4',
  },
];

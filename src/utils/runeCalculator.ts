/**
 * エルデンリング 必要ルーン数（経験値）計算ユーティリティ
 * 公式レベルアップ計算式およびステータス逆算ロジック
 */

export interface CharacterStats {
  vigor: number;        // 生命力
  mind: number;         // 精神力
  endurance: number;    // 持久力
  strength: number;     // 筋力
  dexterity: number;    // 技量
  intelligence: number; // 知力
  faith: number;        // 信仰
  arcane: number;       // 神秘
}

export type StatKey = keyof CharacterStats;

export interface StatMeta {
  key: StatKey;
  label: string;
  shortLabel: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  description: string;
  softCaps: number[];
}

export const STAT_METAS: Record<StatKey, StatMeta> = {
  vigor: {
    key: 'vigor',
    label: '生命力',
    shortLabel: '生命',
    color: '#ef4444',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    textColor: 'text-red-400',
    description: 'HP（体力）の最大値と火防御力・免疫耐性に影響。最優先ステータス。',
    softCaps: [40, 60],
  },
  mind: {
    key: 'mind',
    label: '精神力',
    shortLabel: '精神',
    color: '#3b82f6',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-400',
    description: 'FP（魔力・戦技ゲージ）の最大値と正気耐性に影響。',
    softCaps: [38, 60],
  },
  endurance: {
    key: 'endurance',
    label: '持久力',
    shortLabel: '持久',
    color: '#10b981',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
    description: 'スタミナ最大値・装備重量の上限と頑健耐性に影響。重装備に必須。',
    softCaps: [25, 50],
  },
  strength: {
    key: 'strength',
    label: '筋力',
    shortLabel: '筋力',
    color: '#f97316',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    textColor: 'text-orange-400',
    description: '重い武器の必要能力値・筋力補正攻撃力と物理防御力に影響。両手持ちで1.5倍。',
    softCaps: [20, 50, 80],
  },
  dexterity: {
    key: 'dexterity',
    label: '技量',
    shortLabel: '技量',
    color: '#eab308',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    textColor: 'text-yellow-400',
    description: '鋭利な武器の必要能力値・技量補正攻撃力、魔術・祈祷の詠唱速度に影響。',
    softCaps: [20, 50, 80],
  },
  intelligence: {
    key: 'intelligence',
    label: '知力',
    shortLabel: '知力',
    color: '#a855f7',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
    description: '魔術の必要能力値・魔術威力補正・魔力派生武器の攻撃力に影響。',
    softCaps: [20, 50, 80],
  },
  faith: {
    key: 'faith',
    label: '信仰',
    shortLabel: '信仰',
    color: '#e2b342',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400',
    description: '祈祷の必要能力値・祈祷威力補正・神聖/炎術派生武器の攻撃力に影響。',
    softCaps: [20, 50, 80],
  },
  arcane: {
    key: 'arcane',
    label: '神秘',
    shortLabel: '神秘',
    color: '#ec4899',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    textColor: 'text-pink-400',
    description: '発見力（アイテムドロップ率）、出血・毒などの状態異常蓄積値に影響。',
    softCaps: [20, 45, 80],
  },
};

export const STAT_KEYS: StatKey[] = [
  'vigor',
  'mind',
  'endurance',
  'strength',
  'dexterity',
  'intelligence',
  'faith',
  'arcane',
];

/**
 * 8属性ステータスの合計からレベルを算出する
 * エルデンリングの仕様: Level = Σ(stats) - 79
 */
export function calculateLevelFromStats(stats: CharacterStats): number {
  const sum = STAT_KEYS.reduce((acc, key) => acc + (stats[key] || 0), 0);
  return Math.max(1, sum - 79);
}

/**
 * レベル level から level + 1 へ上がるために必要なルーン数を算出する
 * 公式関数:
 * x = max(0, (level - 11) * 0.02)
 * Rune Cost = floor((x + 0.1) * (level + 81)^2) + 1
 */
export function getRuneCostForNextLevel(level: number): number {
  if (level < 1) return 0;
  if (level >= 713) return 0; // 最大レベル

  const x = Math.max(0, (level - 11) * 0.02);
  const cost = Math.floor((x + 0.1) * Math.pow(level + 81, 2)) + 1;
  return cost;
}

/**
 * fromLevel から toLevel までレベルアップするのに必要な総ルーン数を計算する
 */
export function getTotalRunesBetweenLevels(fromLevel: number, toLevel: number): number {
  if (fromLevel >= toLevel) return 0;
  
  const clampedFrom = Math.max(1, Math.min(713, fromLevel));
  const clampedTo = Math.max(1, Math.min(713, toLevel));

  let total = 0;
  for (let lvl = clampedFrom; lvl < clampedTo; lvl++) {
    total += getRuneCostForNextLevel(lvl);
  }
  return total;
}

/**
 * 手持ちルーンから、現在のレベルから何レベルまで上げられるかを逆算する
 */
export function calculateMaxLevelWithRunes(
  currentLevel: number,
  runes: number
): {
  reachedLevel: number;
  levelsGained: number;
  usedRunes: number;
  remainingRunes: number;
  runesNeededForNextLevel: number;
} {
  let lvl = Math.max(1, Math.min(713, currentLevel));
  let remaining = Math.max(0, runes);
  let used = 0;

  while (lvl < 713) {
    const cost = getRuneCostForNextLevel(lvl);
    if (remaining >= cost) {
      remaining -= cost;
      used += cost;
      lvl++;
    } else {
      break;
    }
  }

  const nextCost = lvl < 713 ? getRuneCostForNextLevel(lvl) : 0;
  const runesNeededForNextLevel = lvl < 713 ? nextCost - remaining : 0;

  return {
    reachedLevel: lvl,
    levelsGained: lvl - currentLevel,
    usedRunes: used,
    remainingRunes: remaining,
    runesNeededForNextLevel,
  };
}

/**
 * 主要なルーン稼ぎスポットでの必要周回数・所要時間の換算
 */
export interface FarmingEstimate {
  id: string;
  name: string;
  area: string;
  runesPerRunBase: number;
  effectiveRunesPerRun: number;
  runsNeeded: number;
  estimatedSeconds: number;
  estimatedTimeText: string;
  note: string;
}

export function calculateFarmingEstimates(
  totalRunes: number,
  options: { hasScarab?: boolean; hasFowlFoot?: boolean } = {}
): FarmingEstimate[] {
  let multiplier = 1.0;
  if (options.hasScarab) multiplier *= 1.2;
  if (options.hasFowlFoot) multiplier *= 1.3;

  const spots = [
    {
      id: 'mohgwyn-bird',
      name: 'モーグウィン王朝「巨鳥落とし」',
      area: '王朝に至る崖路の坂道',
      baseRunes: 11038,
      secondsPerRun: 11,
      note: '弓矢でカラスを1発撃って落下死させるだけ。誰でも安全＆高速。',
    },
    {
      id: 'mohgwyn-wave',
      name: 'モーグウィン王朝「しろがね坂道一掃」',
      area: '王朝に至る崖路の坂道',
      baseRunes: 45000,
      secondsPerRun: 25,
      note: '神剣の黄金波や星砕きの大剣、冒涜の聖剣で坂のしろがね人を全滅。',
    },
    {
      id: 'greyoll',
      name: '大竜グレイオール討伐',
      area: 'ケイリッド・ファロス要塞前',
      baseRunes: 74000,
      secondsPerRun: 240,
      note: '出血武器で尻尾を殴る序盤の特大ボーナス（1回限定またはリスポーン技）。',
    },
    {
      id: 'beast-militia',
      name: '獣の神殿前「卑兵暗殺」',
      area: 'ケイリッド・ファルム大橋坂道',
      baseRunes: 1094,
      secondsPerRun: 8,
      note: '中盤のバックスタブ暗殺。1体倒すごとに手堅く稼げる。',
    },
  ];

  if (totalRunes <= 0) {
    return spots.map((s) => ({
      id: s.id,
      name: s.name,
      area: s.area,
      runesPerRunBase: s.baseRunes,
      effectiveRunesPerRun: Math.round(s.baseRunes * multiplier),
      runsNeeded: 0,
      estimatedSeconds: 0,
      estimatedTimeText: '0分',
      note: s.note,
    }));
  }

  return spots.map((s) => {
    const effectiveRunes = Math.round(s.baseRunes * multiplier);
    const runsNeeded = Math.ceil(totalRunes / effectiveRunes);
    const totalSeconds = runsNeeded * s.secondsPerRun;
    
    let timeText = '';
    if (totalSeconds < 60) {
      timeText = `約${totalSeconds}秒`;
    } else if (totalSeconds < 3600) {
      const minutes = Math.ceil(totalSeconds / 60);
      timeText = `約${minutes}分`;
    } else {
      const hours = Math.floor(totalSeconds / 3600);
      const remainingMinutes = Math.round((totalSeconds % 3600) / 60);
      timeText = `約${hours}時間${remainingMinutes > 0 ? `${remainingMinutes}分` : ''}`;
    }

    return {
      id: s.id,
      name: s.name,
      area: s.area,
      runesPerRunBase: s.baseRunes,
      effectiveRunesPerRun: effectiveRunes,
      runsNeeded,
      estimatedSeconds: totalSeconds,
      estimatedTimeText: timeText,
      note: s.note,
    };
  });
}

/**
 * ステータス差分の計算
 */
export function calculateStatDiff(
  current: CharacterStats,
  target: CharacterStats
): Record<StatKey, number> {
  const diff = {} as Record<StatKey, number>;
  for (const key of STAT_KEYS) {
    diff[key] = (target[key] || 0) - (current[key] || 0);
  }
  return diff;
}

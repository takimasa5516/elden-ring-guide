export type Platform = 'ps' | 'xbox' | 'pc' | 'switch2';

export interface ControlItem {
  id: string;
  action: string;
  category: 'movement' | 'combat' | 'horse' | 'system';
  ps: string;
  xbox: string;
  pc: string;
  switch2: string;
  note?: string;
  isCrucial?: boolean;
}

export interface EssentialTip {
  id: string;
  title: string;
  badge: string;
  description: string;
  details: string[];
  alertLevel?: 'info' | 'warning' | 'tip';
}

export interface CharacterClass {
  id: string;
  name: string;
  enName: string;
  badge: string;
  level: number;
  stats: {
    vigor: number; // 生命力
    mind: number;  // 精神力
    endurance: number; // 持久力
    strength: number; // 筋力
    dexterity: number; // 技量
    intelligence: number; // 知力
    faith: number; // 信仰
    arcane: number; // 神秘
  };
  startingGear: string[];
  features: string;
  recommendedFor: string;
  recommendedPath: string;
}

export interface RecommendedGear {
  id: string;
  name: string;
  category: 'melee' | 'catalyst' | 'shield' | 'armor' | 'talisman';
  weaponType: string;
  requirements: string;
  location: string;
  bossRequired: boolean;
  howToGet: string;
  feature: string;
  recommendedClass: string;
  whyGood: string;
}

export interface BuildGuide {
  id: string;
  name: string;
  tagline: string;
  recommendedStartingClass: string[];
  statPriority: string;
  statsTarget: {
    level50: { vigor: number; mind: number; endurance: number; strength: number; dexterity: number; int: number; faith: number; arcane: number; memo: string };
    level100: { vigor: number; mind: number; endurance: number; strength: number; dexterity: number; int: number; faith: number; arcane: number; memo: string };
    level150: { vigor: number; mind: number; endurance: number; strength: number; dexterity: number; int: number; faith: number; arcane: number; memo: string };
  };
  keyWeapons: string[];
  keySkills: string[];
  keyTalismans: string[];
  combatStyle: string[];
}

export interface UpgradeItem {
  id: string;
  name: string;
  category: 'seed' | 'tear' | 'physick' | 'map' | 'bell';
  area: 'リムグレイブ・啜り泣き' | '湖のリエーニエ' | 'ケイリッド・竜塚' | 'アルター高原・火山' | '王都・山嶺・地下';
  location: string;
  detail: string;
  effect: string;
}

export interface RuneFarmSpot {
  id: string;
  name: string;
  stage: '序盤 (Lv1~40)' | '中盤 (Lv40~80)' | '最高効率 (終盤/即日可)';
  area: string;
  runesPerRun: string;
  efficiency: string;
  risk: '極めて安全' | '普通' | '高';
  requirements: string[];
  steps: string[];
  tips: string;
}

// --- NPC & Missable Safety ---
export interface MissableAlert {
  id: string;
  title: string;
  timing: string;
  riskLevel: 'critical' | 'high' | 'warning';
  whatIsLost: string[];
  preventRule: string;
  details: string[];
}

export interface NpcSafetyItem {
  id: string;
  name: string;
  title: string;
  firstLocation: string;
  bestReward: string;
  rewardType: 'weapon' | 'talisman' | 'item' | 'material';
  safetyRule: string;
  stepGuide: {
    location: string;
    action: string;
    note?: string;
  }[];
}

// --- Smithing Stones ---
export interface SomberStoneRouteItem {
  level: number;
  name: string;
  location: string;
  area: string;
  isNoBoss: boolean;
  howToGet: string;
  altLocation?: string;
  tip: string;
}

export interface RegularSmithingItem {
  tier: number;
  name: string;
  targetLevel: string;
  countNeeded: number;
  bestFarming: string;
  noBossPickup: string;
  bellBearing: string;
  bellLocation: string;
}

export interface BellBearingItem {
  id: string;
  name: string;
  category: 'smithing' | 'somber' | 'glovewort';
  tierRange: string;
  location: string;
  howToGet: string;
  shopItems: string[];
}

// --- Flask of Wondrous Physick ---
export interface CrystalTearItem {
  id: string;
  name: string;
  category: 'buff' | 'recovery' | 'special' | 'stat';
  effect: string;
  duration: string;
  location: string;
  guardian: string;
  description: string;
}

export interface PhysickComboPreset {
  id: string;
  name: string;
  tagline: string;
  tear1Id: string;
  tear2Id: string;
  recommendedBuild: string;
  description: string;
  synergy: string;
}

// --- Player Techniques & Magic Guides ---
export interface PlayerTechnique {
  id: string;
  name: string;
  tag: string;
  command: string;
  description: string;
  whyCrucial: string;
  practiceTip: string;
}

export interface SpellEquipStep {
  step: number;
  title: string;
  command: string;
  detail: string;
  caution?: string;
}

export interface ClassRecommendedSpell {
  id: string;
  name: string;
  category: 'sorcery' | 'incantation';
  targetClass: string;
  reqStats: string;
  fpCost: string;
  location: string;
  howToGet: string;
  feature: string;
  whyBest: string;
}



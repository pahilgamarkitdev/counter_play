export interface Hero {
  id: string;
  name: string | null;
  avatar: string | null;
  category: string | null;
  tier: string | null;
  bg_avatar: string | null;
  alias: string | null;
  lane: string | null;
  category_avatar: string | null;
  created_at: string | null;
}

export interface Ability {
  id: string;
  name: string | null;
  description: string | null;
  avatar: string | null;
  hero_id: string | null;
  created_at: string;
}

export interface Emblem {
  id: string;
  name: string | null;
  avatar: string | null;
  stats: string[] | null;
  description: string | null;
  category: string | null; //e.g. 'Main_Emblem', 'Emblem_Section_1, Emblem_Section_2, Emblem_Section_3'
  created_at: string;
}

export interface Item {
  id: string;
  name: string | null;
  avatar: string | null;
  category: string | null;
  stats: string[] | null;
  description: string | null;
  created_at: string;
}

export interface Spell {
  id: string;
  name: string | null;
  description: string[] | string | null;
  avatar: string | null;
  created_at: string;
}

export interface RecommendedBuild {
  id: number;
  hero_id: string | null;
  items: string[] | null;
  emblems: string[] | null;
  spells: string[] | null;
  created_at: string;
}

export interface StrongAgainst {
  id: number;
  hero_id: string | null;
  hero_against_id: string | null;
  created_at: string;
}

export interface WeakAgainst {
  id: number;
  hero_id: string | null;
  hero_against_id: string | null;
  created_at: string;
}

export interface DuoSynergy {
  id: number;
  hero_ids: string | null;
  created_at: string;
}

export interface TrioSynergy {
  id: number;
  hero_ids: string[] | null;
  created_at: string;
}

export interface FiveSynergy {
  id: number;
  hero_ids: string | null;
  created_at: string;
}

// Enum for hero categories as shown in the reference image
export type HeroCategory = 
  | 'Fighter' 
  | 'Mage' 
  | 'Assassin' 
  | 'Marksman' 
  | 'Tank' 
  | 'Support';

export type HeroTier = 'S' | 'A' | 'B' | 'C' | 'D';

// Extended hero interface with related data
export interface HeroWithRelations extends Hero {
  abilities?: Ability[];
  strongAgainst?: Hero[];
  weakAgainst?: Hero[];
  recommendedBuilds?: RecommendedBuild[];
  duoSynergy?: DuoSynergy[];
  trioSynergy?: TrioSynergy[];
  fiveSynergy?: FiveSynergy[];
}
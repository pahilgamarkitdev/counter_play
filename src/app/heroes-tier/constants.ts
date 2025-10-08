// Define the tiers we actually use
export type TierType = 'S' | 'A' | 'B' | 'C';

// Define tier configurations with descriptions based on the UI
export const tierConfig = {
  S: {
    label: 'S',
    title: 'Top tier picks',
    description: 'Discover the current meta rankings for Mobile Legends heroes. Find the best picks for your playstyle.',
    bgColor: 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/50',
    textColor: 'text-yellow-400'
  },
  A: {
    label: 'A',
    title: 'Strong heroes that consistently perform well',
    description: 'Reliable picks that work well in most situations and team compositions.',
    bgColor: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/50',
    textColor: 'text-green-400'
  },
  B: {
    label: 'B',
    title: 'Heroes with situational strength',
    description: 'Good heroes that excel in specific situations or team compositions.',
    bgColor: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/50',
    textColor: 'text-blue-400'
  },
  C: {
    label: 'C',
    title: 'Under-performing heroes',
    description: 'Heroes that need buffs or have fallen out of the current meta.',
    bgColor: 'bg-gradient-to-r from-gray-500/20 to-slate-500/20',
    borderColor: 'border-gray-500/50',
    textColor: 'text-gray-400'
  }
} as const;

export interface TierSection {
  tier: TierType;
  config: typeof tierConfig[TierType];
  heroes: import('@/types/database').Hero[];
}
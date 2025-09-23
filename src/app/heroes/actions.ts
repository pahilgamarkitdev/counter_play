'use server';

import { createClient } from '../../../utils/supabase/server';
import { Hero } from '@/types/database';
import { sampleHeroes } from '@/lib/sampleData';

export async function getAllHeroesAction(): Promise<Hero[]> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('hero')
      .select('*')
      .order('name');
      
    if (error) {
      console.error('Supabase error fetching heroes:', error);
      console.log('Using sample data as fallback');
      return sampleHeroes;
    }
    
    console.log('Successfully fetched heroes from server:', data?.length || 0);
    return data || sampleHeroes;
  } catch (err) {
    console.error('Network error fetching heroes:', err);
    console.log('Using sample data as fallback');
    return sampleHeroes;
  }
}

export async function getHeroByIdAction(heroId: string): Promise<Hero | null> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('hero')
      .select('*')
      .eq('id', heroId)
      .single();
      
    if (error) {
      console.error('Error fetching hero by ID:', error);
      // Fallback to sample data
      return sampleHeroes.find(hero => hero.id === heroId) || null;
    }
    
    return data;
  } catch (err) {
    console.error('Network error fetching hero by ID:', err);
    return sampleHeroes.find(hero => hero.id === heroId) || null;
  }
}
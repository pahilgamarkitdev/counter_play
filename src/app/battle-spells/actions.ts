'use server';

import { createClient } from '../../../utils/supabase/server';
import { Spell } from '@/types/database';
import { sampleSpells } from '@/lib/sampleData';

export async function getAllSpellsAction(): Promise<Spell[]> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('spell')
      .select('*')
      .order('name');
      
    if (error) {
      console.error('Supabase error fetching spells:', error);
      console.log('Using sample data as fallback');
      return sampleSpells;
    }
    
    console.log('Successfully fetched spells from server:', data?.length || 0);
    return data || sampleSpells;
  } catch (err) {
    console.error('Network error fetching spells:', err);
    console.log('Using sample data as fallback');
    return sampleSpells;
  }
}

export async function getSpellByIdAction(spellId: string): Promise<Spell | null> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('spell')
      .select('*')
      .eq('id', spellId)
      .single();
      
    if (error) {
      console.error('Error fetching spell by ID:', error);
      // Fallback to sample data
      return sampleSpells.find(spell => spell.id === spellId) || null;
    }
    
    return data;
  } catch (err) {
    console.error('Network error fetching spell by ID:', err);
    return sampleSpells.find(spell => spell.id === spellId) || null;
  }
}
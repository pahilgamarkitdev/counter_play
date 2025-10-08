'use server';

import { createClient } from '../../../utils/supabase/server';
import { Emblem } from '@/types/database';
import { sampleEmblems } from '@/lib/sampleData';

export async function getAllEmblemsAction(): Promise<Emblem[]> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('emblem')
      .select('*')
      .order('name');
      
    if (error) {
      console.error('Supabase error fetching emblems:', error);
      console.log('Using sample data as fallback');
      return sampleEmblems;
    }
    
    console.log('Successfully fetched emblems from server:', data?.length || 0);
    return data || sampleEmblems;
  } catch (err) {
    console.error('Network error fetching emblems:', err);
    console.log('Using sample data as fallback');
    return sampleEmblems;
  }
}

export async function getEmblemByIdAction(emblemId: string): Promise<Emblem | null> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('emblem')
      .select('*')
      .eq('id', emblemId)
      .single();
      
    if (error) {
      console.error('Error fetching emblem by ID:', error);
      // Fallback to sample data
      return sampleEmblems.find(emblem => emblem.id === emblemId) || null;
    }
    
    return data;
  } catch (err) {
    console.error('Network error fetching emblem by ID:', err);
    return sampleEmblems.find(emblem => emblem.id === emblemId) || null;
  }
}
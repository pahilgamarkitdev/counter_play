'use server';

import { createClient } from '../../../utils/supabase/server';
import { Item } from '@/types/database';

// Sample items data as fallback
const sampleItems: Item[] = [
  {
    id: '1',
    name: 'Dagger',
    avatar: '/items/dagger.png',
    category: 'Attack',
    stats: ['+15 Physical Attack'],
    description: 'A basic attack item that increases physical damage.',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Knife',
    avatar: '/items/knife.png',
    category: 'Attack',
    stats: ['+10% Attack Speed'],
    description: 'Increases attack speed for faster strikes.',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Javelin',
    avatar: '/items/javelin.png',
    category: 'Attack',
    stats: ['+8% Crit Chance'],
    description: 'Provides critical strike chance.',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Vampire Mallet',
    avatar: '/items/vampire-mallet.png',
    category: 'Attack',
    stats: ['+5 Physical Attack', '+3% Lifesteal'],
    description: 'Provides physical attack and lifesteal.',
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Iron Hunting Bow',
    avatar: '/items/iron-hunting-bow.png',
    category: 'Attack',
    stats: ['+10 Physical Attack', '+7% Cooldown Reduction'],
    description: 'Increases physical attack and reduces cooldowns.',
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'Regular Spear',
    avatar: '/items/regular-spear.png',
    category: 'Attack',
    stats: ['+20 Physical Attack', '+10% Attack Speed'],
    description: 'A versatile weapon with attack and speed bonuses.',
    created_at: new Date().toISOString(),
  },
  {
    id: '7',
    name: 'Legion Sword',
    avatar: '/items/legion-sword.png',
    category: 'Attack',
    stats: ['+60 Physical Attack'],
    description: 'A powerful sword with high physical attack.',
    created_at: new Date().toISOString(),
  },
  {
    id: '8',
    name: 'Ogre Tomahawk',
    avatar: '/items/ogre-tomahawk.png',
    category: 'Attack',
    stats: ['+25 Physical Attack', '+20 HP'],
    description: 'Increases physical attack and health points.',
    created_at: new Date().toISOString(),
  },
];

export async function getAllItemsAction(): Promise<Item[]> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .order('name');
      
    if (error) {
      console.error('Supabase error fetching items:', error);
      console.log('Using sample data as fallback');
      return sampleItems;
    }
    
    console.log('Successfully fetched items from server:', data?.length || 0);
    return data || sampleItems;
  } catch (err) {
    console.error('Network error fetching items:', err);
    console.log('Using sample data as fallback');
    return sampleItems;
  }
}

export async function getItemByIdAction(itemId: string): Promise<Item | null> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('id', itemId)
      .single();
      
    if (error) {
      console.error('Error fetching item by ID:', error);
      // Fallback to sample data
      return sampleItems.find(item => item.id === itemId) || null;
    }
    
    return data;
  } catch (err) {
    console.error('Network error fetching item by ID:', err);
    return sampleItems.find(item => item.id === itemId) || null;
  }
}

export async function getItemsByCategoryAction(category: string): Promise<Item[]> {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('items')
      .select('*')
      .eq('category', category)
      .order('name');
      
    if (error) {
      console.error('Error fetching items by category:', error);
      // Fallback to sample data
      return sampleItems.filter(item => 
        item.category?.toLowerCase() === category.toLowerCase()
      );
    }
    
    return data || [];
  } catch (err) {
    console.error('Network error fetching items by category:', err);
    return sampleItems.filter(item => 
      item.category?.toLowerCase() === category.toLowerCase()
    );
  }
}
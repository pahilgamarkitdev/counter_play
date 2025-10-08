import { Ability, Emblem, Hero, Item, RecommendedBuild, Spell } from "@/types/database";
import { createClient } from "../../../../utils/supabase/server";


export async function getHeroAbilitiesByIdAction(heroId: string): Promise<Ability[] | null> {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase
            .from('abilities')
            .select('*')
            .eq('hero_id', heroId);

        if (error) {
            console.error('Error fetching hero abilities by ID:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Network error fetching hero abilities by ID:', error);
        return null;
    }
}

export async function getHeroStrongAgainstByIdAction(heroId: string): Promise<Hero[] | null> {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase
            .from('strong_against')
            .select(`
                id,
                hero_id,
                hero_against_id,
                hero!strong_against_hero_against_id_fkey (
                    id,
                    name,
                    avatar,
                    alias,
                    bg_avatar,
                    tier,
                    lane,
                    category_avatar
                )
            `)
            .eq('hero_id', heroId);

        if (error) {
            console.error('Error fetching hero strong against by ID:', error);
            return null;
        }

        console.log("Raw strong against data:", data);

        // reduce to extract the hero objects
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const strongAgainst = data.reduce((acc: Hero[], item: any) => {
            if (item.hero) {
                acc.push(item.hero);
            }
            return acc;
        }, []);

        return strongAgainst;

    } catch (error) {
        console.error('Network error fetching hero strong against by ID:', error);
        return null;
    }
}

export async function getHeroWeakAgainstByIdAction(heroId: string): Promise<Hero[] | null> {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase
            .from('weak_against')
            .select(`
                id,
                hero_id,
                hero_against_id,
                hero!weak_against_hero_against_id_fkey (
                    id,
                    name,
                    avatar,
                    alias,
                    bg_avatar,
                    tier,
                    lane,
                    category_avatar
                )
            `)
            .eq('hero_id', heroId);

        if (error) {
            console.error('Error fetching hero weak against by ID:', error);
            return null;
        }

        console.log("Raw weak against data:", data);

        // reduce to extract the hero objects
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const weakAgainst = data.reduce((acc: Hero[], item: any) => {
            if (item.hero) {
                acc.push(item.hero);
            }
            return acc;
        }, []);

        return weakAgainst;

    } catch (error) {
        console.error('Network error fetching hero weak against by ID:', error);
        return null;
    }
}

export async function getHeroRecommendedBuildByIdAction(heroId: string): Promise<RecommendedBuild[] | null> {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase
            .from('recommended_build')
            .select('*')
            .eq('hero_id', heroId);

        if (error) {
            console.error('Error fetching hero recommended build by ID:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Network error fetching hero recommended build by ID:', error);
        return null;
    }
}

export async function getItemByIdAction(itemId: string): Promise<Item | null> {
    try {
        // Validate itemId
        if (!itemId || itemId.trim() === '') {
            console.warn('getItemByIdAction: Invalid item ID provided:', itemId);
            return null;
        }

        // Check if itemId looks like multiple UUIDs concatenated
        if (itemId.includes(',')) {
            console.error(`getItemByIdAction received comma-separated IDs: ${itemId}`);
            console.error('This suggests the calling code is passing multiple IDs as a single string');
            return null;
        }

        const supabase = await createClient();

        const { data, error } = await supabase
            .from('items')
            .select('*')
            .eq('id', itemId)
            .single();

        if (error) {
            // Supabase returns an empty error object {} when no record is found with .single()
            // This is expected behavior, not an actual error
            if (error.code === 'PGRST116' || Object.keys(error).length === 0) {
                console.warn(`Item not found with ID: ${itemId}`);
                return null;
            }
            // Log actual errors with more context
            console.error(`Error fetching item by ID ${itemId}:`, error);
            return null;
        }

        return data;
    } catch (error) {
        console.error(`Network error fetching item by ID ${itemId}:`, error);
        return null;
    }
}

export async function getSpellByIdAction(spellId: string): Promise<Spell | null> {
    try {
        // Validate spellId
        if (!spellId || spellId.trim() === '') {
            console.warn('getSpellByIdAction: Invalid spell ID provided:', spellId);
            return null;
        }

        const supabase = await createClient();

        const { data, error } = await supabase
            .from('spell')
            .select('*')
            .eq('id', spellId)
            .single();

        if (error) {
            // Supabase returns an empty error object {} when no record is found with .single()
            if (error.code === 'PGRST116' || Object.keys(error).length === 0) {
                console.warn(`Spell not found with ID: ${spellId}`);
                return null;
            }
            console.error(`Error fetching spell by ID ${spellId}:`, error);
            return null;
        }

        return data;
    } catch (error) {
        console.error(`Network error fetching spell by ID ${spellId}:`, error);
        return null;
    }
}

export async function getEmblemByIdAction(emblemId: string): Promise<Emblem | null> {
    try {
        // Validate emblemId
        if (!emblemId || emblemId.trim() === '') {
            console.warn('getEmblemByIdAction: Invalid emblem ID provided:', emblemId);
            return null;
        }

        const supabase = await createClient();

        const { data, error } = await supabase
            .from('emblem')
            .select('*')
            .eq('id', emblemId)
            .single();

        if (error) {
            // Supabase returns an empty error object {} when no record is found with .single()
            if (error.code === 'PGRST116' || Object.keys(error).length === 0) {
                console.warn(`Emblem not found with ID: ${emblemId}`);
                return null;
            }
            console.error(`Error fetching emblem by ID ${emblemId}:`, error);
            return null;
        }

        return data;
    } catch (error) {
        console.error(`Network error fetching emblem by ID ${emblemId}:`, error);
        return null;
    }
}
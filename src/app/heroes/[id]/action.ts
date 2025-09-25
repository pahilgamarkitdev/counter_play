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
            .eq('hero_id', heroId)
            

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
        const supabase = await createClient();

        const { data, error } = await supabase
            .from('items')
            .select('*')
            .eq('id', itemId)
            .single();

        if (error) {
            console.error('Error fetching item by ID:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Network error fetching item by ID:', error);
        return null;
    }
}

export async function getSpellByIdAction(spellId: string): Promise<Spell | null> {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase
            .from('spells')
            .select('*')
            .eq('id', spellId)
            .single();

        if (error) {
            console.error('Error fetching spell by ID:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Network error fetching spell by ID:', error);
        return null;
    }
}

export async function getEmblemByIdAction(emblemId: string): Promise<Emblem | null> {
    try {
        const supabase = await createClient();

        const { data, error } = await supabase
            .from('emblems')
            .select('*')
            .eq('id', emblemId)
            .single();

        if (error) {
            console.error('Error fetching emblem by ID:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Network error fetching emblem by ID:', error);
        return null;
    }
}
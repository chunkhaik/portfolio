import { createClient } from '@supabase/supabase-js'
import { CoffeeBean } from '@/components/section-coffee-beans';

export async function getCoffeeBeans(){ 
	const supabase = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
	);

	let { data: coffee_beans } = await supabase
		.from('coffee_beans')
		.select()

    coffee_beans = JSON.parse(JSON.stringify(coffee_beans)) as CoffeeBean[];
}
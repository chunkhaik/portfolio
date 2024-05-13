import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)


async function insertCoffeeBean (coffeeBlend) {
  const res = await supabase
    .from('coffee_beans')
    .insert([{ coffee_bean: coffeeBlend }])

  if (res.status !== 201) {
    throw new Error(`Failed to insert coffee bean: ${res.status}`)
  }
  console.log('Succesfully inserted coffee bean!\n', coffeeBlend)
}

async function getCoffeeBeans () {
  const res = await supabase
    .from('coffee_beans')
    .select('coffee_bean_data')

  const res_data = res.data 
  const res_status = res.status

  if (res_status >= 400) {
    throw new Error(`Failed to fetch coffee beans: ${res_status}`)
  }

  return res_data.map(item => item.coffee_bean_data)
}

import bean from './new_bean.json' assert { type: "json" }

;(async () => {
  await insertCoffeeBean(bean)
})()

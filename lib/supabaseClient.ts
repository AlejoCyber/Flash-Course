import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

console.log("NEXT_PUBLIC_SUPABASE_URL:", supabaseUrl)
console.log("NEXT_PUBLIC_SUPABASE_ANON_KEY:", supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Faltan variables de entorno de Supabase. Por favor, configura NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY.",
  )
}

export const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null


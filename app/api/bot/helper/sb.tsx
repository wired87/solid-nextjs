import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://bvvpjxnzhahifdphhqpr.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE!
const supabase = createClient(supabaseUrl, supabaseKey)
export const defaultRequest = async (db: string, key: string[]) => {
  try {
    const { data, error } = await supabase
      .from(db)
      .select(key.join(", "))
    console.log("data:", data);
    console.log("error:", error);
    return data
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log("Error:", e);
    }
  }
}
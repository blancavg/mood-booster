import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_ANON_KEY!

// Supabase client instance for server-side operations
export const supabase = createClient(supabaseUrl, supabaseKey)

// Type-safe database client (will be expanded when database schema is defined)
export type Database = {
  public: {
    Tables: {
      // TODO: Add mood_selections table schema
      // TODO: Add affirmations table schema
      // TODO: Add user_interactions table schema
    }
  }
}
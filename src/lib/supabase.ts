import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase Project URL and Anon Key
// You can find them in: Supabase Dashboard -> Project Settings -> API
const supabaseUrl = 'https://knycxcqkyhuhgbvshbph.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtueWN4Y3FreWh1aGdidnNoYnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NTgxMjAsImV4cCI6MjA4NTMzNDEyMH0.-Nlx7LH4pH2DJU5eQAaods4zS7qonTGWbuERMC62jPc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

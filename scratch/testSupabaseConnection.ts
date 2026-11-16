import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project-id.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-supabase-anon-key';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkDatabase() {
  console.log('Testing connection to Supabase:', supabaseUrl);

  // 1. Test profiles table
  const { data: profiles, error: profErr } = await supabase.from('profiles').select('*').limit(5);
  console.log('1. profiles table:', { count: profiles?.length, error: profErr?.message, profiles });

  // 2. Test user_stats table
  const { data: stats, error: statsErr } = await supabase.from('user_stats').select('*').limit(5);
  console.log('2. user_stats table:', { count: stats?.length, error: statsErr?.message, stats });

  // 3. Test learner_profiles table
  const { data: learners, error: learnErr } = await supabase.from('learner_profiles').select('*').limit(5);
  console.log('3. learner_profiles table:', { count: learners?.length, error: learnErr?.message });

  // 4. Test user_settings table
  const { data: settings, error: setErr } = await supabase.from('user_settings').select('*').limit(5);
  console.log('4. user_settings table:', { count: settings?.length, error: setErr?.message });
}

checkDatabase();

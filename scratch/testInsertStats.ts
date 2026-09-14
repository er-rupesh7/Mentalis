import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aqgjnqsuwdoegpjznfag.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxZ2pucXN1d2RvZWdwanpuZmFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODkzODMxMDMsImV4cCI6MjEwNDk1OTEwM30.cpDrw0YBART1uXFxxGX-d1Am1xyYU52lg4TzQRQ0iPQ';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testInsert() {
  const userId = 'e509a080-f745-405b-a9f8-663fc850ca12';

  console.log('Testing upsert into user_stats without auth token (as anon)...');
  const { data, error } = await supabase.from('user_stats').upsert({
    user_id: userId,
    total_questions_answered: 10,
    total_correct: 8,
    current_streak: 5,
    longest_streak: 5,
    last_active_date: '2026-09-14',
    overall_cpm: 25,
    overall_accuracy: 80,
    progress_map: {},
    anzan_stats: {},
    updated_at: new Date().toISOString(),
  });

  console.log('Result:', { data, error });
}

testInsert();

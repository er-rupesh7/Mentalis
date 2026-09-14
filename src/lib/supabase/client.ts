import { createClient, SupabaseClient, User, AuthChangeEvent, Session } from '@supabase/supabase-js';
import { Database } from './types';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

let clientInstance: SupabaseClient<Database> | null = null;

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('http') &&
    !supabaseUrl.includes('placeholder')
  );
};

export const getSupabase = (): SupabaseClient<Database> | null => {
  if (!isSupabaseConfigured()) {
    return null;
  }
  if (!clientInstance) {
    clientInstance = createClient<Database>(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    });
  }
  return clientInstance;
};

/**
 * Sign in using Google OAuth via Supabase
 */
export const signInWithGoogle = async (redirectTo?: string) => {
  const supabase = getSupabase();
  if (!supabase) {
    console.warn('[Mentalis Supabase] Supabase credentials not configured in environment variables.');
    return { error: new Error('Supabase is not configured yet. Please provide NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.') };
  }

  const redirectUrl = redirectTo || (typeof window !== 'undefined' ? window.location.origin : '');

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: redirectUrl,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  return { data, error };
};

/**
 * Sign out the current user
 */
export const signOutUser = async () => {
  const supabase = getSupabase();
  if (!supabase) return { error: null };
  const { error } = await supabase.auth.signOut();
  return { error };
};

/**
 * Get current authenticated session
 */
export const getCurrentSession = async (): Promise<Session | null> => {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data?.session || null;
};

/**
 * Get current authenticated user
 */
export const getCurrentUser = async (): Promise<User | null> => {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data } = await supabase.auth.getUser();
  return data?.user || null;
};

/**
 * Subscribe to Supabase Auth state changes
 */
export const onAuthStateChange = (
  callback: (event: AuthChangeEvent, session: Session | null) => void
) => {
  const supabase = getSupabase();
  if (!supabase) {
    return { data: { subscription: { unsubscribe: () => {} } } };
  }
  return supabase.auth.onAuthStateChange(callback);
};

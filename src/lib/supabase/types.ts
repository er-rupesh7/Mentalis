export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          username: string | null;
          display_name: string | null;
          avatar_url: string | null;
          rating: number;
          tier: string;
          rank_tier?: string;
          bio: string | null;
          xp: number;
          level: number;
          avatar_type: 'google' | 'badge' | 'mastery';
          selected_badge_level: number;
          equipped_badge_type?: string;
          equipped_badge_id?: string | null;
          last_seen_at: string;
          username_changed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          username?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          rating?: number;
          tier?: string;
          rank_tier?: string;
          bio?: string | null;
          xp?: number;
          level?: number;
          avatar_type?: 'google' | 'badge' | 'mastery';
          selected_badge_level?: number;
          equipped_badge_type?: string;
          equipped_badge_id?: string | null;
          last_seen_at?: string;
          username_changed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          username?: string | null;
          display_name?: string | null;
          avatar_url?: string | null;
          rating?: number;
          tier?: string;
          rank_tier?: string;
          bio?: string | null;
          xp?: number;
          level?: number;
          avatar_type?: 'google' | 'badge' | 'mastery';
          selected_badge_level?: number;
          equipped_badge_type?: string;
          equipped_badge_id?: string | null;
          last_seen_at?: string;
          username_changed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      user_stats: {
        Row: {
          user_id: string;
          total_questions_answered: number;
          total_correct: number;
          current_streak: number;
          longest_streak: number;
          total_time_spent_seconds: number;
          last_active_date: string | null;
          overall_cpm: number;
          overall_accuracy: number;
          progress_map: Json;
          anzan_stats: Json;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          total_questions_answered?: number;
          total_correct?: number;
          current_streak?: number;
          longest_streak?: number;
          total_time_spent_seconds?: number;
          last_active_date?: string | null;
          overall_cpm?: number;
          overall_accuracy?: number;
          progress_map?: Json;
          anzan_stats?: Json;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          total_questions_answered?: number;
          total_correct?: number;
          current_streak?: number;
          longest_streak?: number;
          total_time_spent_seconds?: number;
          last_active_date?: string | null;
          overall_cpm?: number;
          overall_accuracy?: number;
          progress_map?: Json;
          anzan_stats?: Json;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_stats_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      learner_profiles: {
        Row: {
          user_id: string;
          profile_data: Json;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          profile_data?: Json;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          profile_data?: Json;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "learner_profiles_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      fact_memory_states: {
        Row: {
          user_id: string;
          fact_key: string;
          state_data: Json;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          fact_key: string;
          state_data: Json;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          fact_key?: string;
          state_data?: Json;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "fact_memory_states_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      technique_mastery: {
        Row: {
          user_id: string;
          technique_id: string;
          mastery_state: Json;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          technique_id: string;
          mastery_state: Json;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          technique_id?: string;
          mastery_state?: Json;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "technique_mastery_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      user_settings: {
        Row: {
          user_id: string;
          sound_enabled: boolean;
          reduced_motion: boolean;
          timer_visible: boolean;
          locale: string;
          has_completed_language_onboarding: boolean;
          learning_mode: string;
          active_add_sub_level: number;
          active_table: number;
          active_square_track: string;
          anzan_config: Json;
          custom_drill_config: Json | null;
          ai_coaching_enabled: boolean;
          ai_coach_state: Json;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          sound_enabled?: boolean;
          reduced_motion?: boolean;
          timer_visible?: boolean;
          locale?: string;
          has_completed_language_onboarding?: boolean;
          learning_mode?: string;
          active_add_sub_level?: number;
          active_table?: number;
          active_square_track?: string;
          anzan_config?: Json;
          custom_drill_config?: Json | null;
          ai_coaching_enabled?: boolean;
          ai_coach_state?: Json;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          sound_enabled?: boolean;
          reduced_motion?: boolean;
          timer_visible?: boolean;
          locale?: string;
          has_completed_language_onboarding?: boolean;
          learning_mode?: string;
          active_add_sub_level?: number;
          active_table?: number;
          active_square_track?: string;
          anzan_config?: Json;
          custom_drill_config?: Json | null;
          ai_coaching_enabled?: boolean;
          ai_coach_state?: Json;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_settings_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      leaderboard_entries: {
        Row: {
          id: string;
          user_id: string;
          category: string;
          score: number;
          period: string;
          rank_position: number | null;
          metadata: Json;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          category: string;
          score?: number;
          period?: string;
          rank_position?: number | null;
          metadata?: Json;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          category?: string;
          score?: number;
          period?: string;
          rank_position?: number | null;
          metadata?: Json;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "leaderboard_entries_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      friendships: {
        Row: {
          id: string;
          user_id: string;
          friend_id: string;
          status: 'pending' | 'accepted' | 'declined' | 'blocked';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          friend_id: string;
          status?: 'pending' | 'accepted' | 'declined' | 'blocked';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          friend_id?: string;
          status?: 'pending' | 'accepted' | 'declined' | 'blocked';
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "friendships_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "friendships_friend_id_fkey";
            columns: ["friend_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      follows: {
        Row: {
          follower_id: string;
          following_id: string;
          created_at: string;
        };
        Insert: {
          follower_id: string;
          following_id: string;
          created_at?: string;
        };
        Update: {
          follower_id?: string;
          following_id?: string;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "follows_follower_id_fkey";
            columns: ["follower_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "follows_following_id_fkey";
            columns: ["following_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      challenges_1v1: {
        Row: {
          id: string;
          creator_id: string;
          opponent_id: string | null;
          challenge_type: string;
          status: 'waiting' | 'active' | 'completed' | 'cancelled';
          config: Json;
          creator_score: number;
          opponent_score: number;
          creator_time_ms: number;
          opponent_time_ms: number;
          winner_id: string | null;
          created_at: string;
          completed_at: string | null;
        };
        Insert: {
          id?: string;
          creator_id: string;
          opponent_id?: string | null;
          challenge_type?: string;
          status?: 'waiting' | 'active' | 'completed' | 'cancelled';
          config?: Json;
          creator_score?: number;
          opponent_score?: number;
          creator_time_ms?: number;
          opponent_time_ms?: number;
          winner_id?: string | null;
          created_at?: string;
          completed_at?: string | null;
        };
        Update: {
          id?: string;
          creator_id?: string;
          opponent_id?: string | null;
          challenge_type?: string;
          status?: 'waiting' | 'active' | 'completed' | 'cancelled';
          config?: Json;
          creator_score?: number;
          opponent_score?: number;
          creator_time_ms?: number;
          opponent_time_ms?: number;
          winner_id?: string | null;
          created_at?: string;
          completed_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "challenges_1v1_creator_id_fkey";
            columns: ["creator_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "challenges_1v1_opponent_id_fkey";
            columns: ["opponent_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      chat_conversations: {
        Row: {
          id: string;
          type: string;
          challenge_id: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          type?: string;
          challenge_id?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          type?: string;
          challenge_id?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      chat_participants: {
        Row: {
          conversation_id: string;
          user_id: string;
          last_read_at: string;
        };
        Insert: {
          conversation_id: string;
          user_id: string;
          last_read_at?: string;
        };
        Update: {
          conversation_id?: string;
          user_id?: string;
          last_read_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "chat_participants_conversation_id_fkey";
            columns: ["conversation_id"];
            isOneToOne: false;
            referencedRelation: "chat_conversations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "chat_participants_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      chat_messages: {
        Row: {
          id: string;
          conversation_id: string;
          sender_id: string;
          message_text: string;
          metadata: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          conversation_id: string;
          sender_id: string;
          message_text: string;
          metadata?: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          conversation_id?: string;
          sender_id?: string;
          message_text?: string;
          metadata?: Json;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "chat_messages_conversation_id_fkey";
            columns: ["conversation_id"];
            isOneToOne: false;
            referencedRelation: "chat_conversations";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "chat_messages_sender_id_fkey";
            columns: ["sender_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      notifications: {
        Row: {
          id: string;
          user_id: string;
          actor_id: string;
          type: string;
          title: string;
          message: string;
          metadata: Json;
          is_read: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          actor_id: string;
          type: string;
          title: string;
          message: string;
          metadata?: Json;
          is_read?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          actor_id?: string;
          type?: string;
          title?: string;
          message?: string;
          metadata?: Json;
          is_read?: boolean;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "notifications_actor_id_fkey";
            columns: ["actor_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}

export type Profile = Database['public']['Tables']['profiles']['Row'];
export type UserStatsRow = Database['public']['Tables']['user_stats']['Row'];
export type UserSettingsRow = Database['public']['Tables']['user_settings']['Row'];
export type LeaderboardEntryRow = Database['public']['Tables']['leaderboard_entries']['Row'];
export type FriendshipRow = Database['public']['Tables']['friendships']['Row'];
export type FollowRow = Database['public']['Tables']['follows']['Row'];
export type Challenge1v1Row = Database['public']['Tables']['challenges_1v1']['Row'];
export type ChatMessageRow = Database['public']['Tables']['chat_messages']['Row'];
export type NotificationRow = Database['public']['Tables']['notifications']['Row'];

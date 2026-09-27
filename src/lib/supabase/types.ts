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
          role?: 'user' | 'editor' | 'admin';
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
          role?: 'user' | 'editor' | 'admin';
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
          role?: 'user' | 'editor' | 'admin';
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
      psychology_categories: {
        Row: {
          id: string;
          slug: string;
          icon_name: string;
          accent_color: string;
          display_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          slug: string;
          icon_name?: string;
          accent_color?: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          slug?: string;
          icon_name?: string;
          accent_color?: string;
          display_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      psychology_category_translations: {
        Row: {
          id: string;
          category_id: string;
          language_code: string;
          title: string;
          subtitle: string | null;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          category_id: string;
          language_code: string;
          title: string;
          subtitle?: string | null;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          category_id?: string;
          language_code?: string;
          title?: string;
          subtitle?: string | null;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "psychology_category_translations_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "psychology_categories";
            referencedColumns: ["id"];
          }
        ];
      };
      psychology_topics: {
        Row: {
          id: string;
          category_id: string;
          slug: string;
          difficulty: 'beginner' | 'intermediate' | 'advanced';
          estimated_reading_minutes: number;
          featured_image_url: string | null;
          scientific_consensus_tier: 'established' | 'debated' | 'myth_debunked';
          publication_status: 'draft' | 'review' | 'published' | 'archived';
          published_at: string | null;
          sort_weight: number;
          view_count: number;
          share_count: number;
          bookmark_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          category_id: string;
          slug: string;
          difficulty?: 'beginner' | 'intermediate' | 'advanced';
          estimated_reading_minutes?: number;
          featured_image_url?: string | null;
          scientific_consensus_tier?: 'established' | 'debated' | 'myth_debunked';
          publication_status?: 'draft' | 'review' | 'published' | 'archived';
          published_at?: string | null;
          sort_weight?: number;
          view_count?: number;
          share_count?: number;
          bookmark_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          category_id?: string;
          slug?: string;
          difficulty?: 'beginner' | 'intermediate' | 'advanced';
          estimated_reading_minutes?: number;
          featured_image_url?: string | null;
          scientific_consensus_tier?: 'established' | 'debated' | 'myth_debunked';
          publication_status?: 'draft' | 'review' | 'published' | 'archived';
          published_at?: string | null;
          sort_weight?: number;
          view_count?: number;
          share_count?: number;
          bookmark_count?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "psychology_topics_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "psychology_categories";
            referencedColumns: ["id"];
          }
        ];
      };
      psychology_topic_translations: {
        Row: {
          id: string;
          topic_id: string;
          language_code: string;
          title: string;
          subtitle: string | null;
          short_description: string;
          one_line_explanation?: string | null;
          summary_60s: string;
          core_concept?: string | null;
          how_it_works?: string | null;
          why_it_happens: string | null;
          where_you_encounter_it: string | null;
          common_misconceptions: string | null;
          visual_explanation?: Json | null;
          research_summary?: string | null;
          limitations_and_controversies?: string | null;
          how_to_recognize?: string | null;
          how_to_respond?: string | null;
          psychological_defenses: Json;
          reflection_prompt?: string | null;
          quick_takeaways: Json;
          deep_explanation: string;
          evolutionary_mechanism: string | null;
          seo_title: string | null;
          seo_description: string | null;
          canonical_url: string | null;
          og_image_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          language_code: string;
          title: string;
          subtitle?: string | null;
          short_description: string;
          one_line_explanation?: string | null;
          summary_60s: string;
          core_concept?: string | null;
          how_it_works?: string | null;
          why_it_happens?: string | null;
          where_you_encounter_it?: string | null;
          common_misconceptions?: string | null;
          visual_explanation?: Json | null;
          research_summary?: string | null;
          limitations_and_controversies?: string | null;
          how_to_recognize?: string | null;
          how_to_respond?: string | null;
          psychological_defenses?: Json;
          reflection_prompt?: string | null;
          quick_takeaways?: Json;
          deep_explanation: string;
          evolutionary_mechanism?: string | null;
          seo_title?: string | null;
          seo_description?: string | null;
          canonical_url?: string | null;
          og_image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          language_code?: string;
          title?: string;
          subtitle?: string | null;
          short_description?: string;
          one_line_explanation?: string | null;
          summary_60s?: string;
          core_concept?: string | null;
          how_it_works?: string | null;
          why_it_happens?: string | null;
          where_you_encounter_it?: string | null;
          common_misconceptions?: string | null;
          visual_explanation?: Json | null;
          research_summary?: string | null;
          limitations_and_controversies?: string | null;
          how_to_recognize?: string | null;
          how_to_respond?: string | null;
          psychological_defenses?: Json;
          reflection_prompt?: string | null;
          quick_takeaways?: Json;
          deep_explanation?: string;
          evolutionary_mechanism?: string | null;
          seo_title?: string | null;
          seo_description?: string | null;
          canonical_url?: string | null;
          og_image_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "psychology_topic_translations_topic_id_fkey";
            columns: ["topic_id"];
            isOneToOne: false;
            referencedRelation: "psychology_topics";
            referencedColumns: ["id"];
          }
        ];
      };
      psychology_sections: {
        Row: {
          id: string;
          topic_id: string;
          section_type: 'summary' | 'deep_dive' | 'mechanism' | 'misconception' | 'defense' | 'reflection' | 'custom';
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          section_type: 'summary' | 'deep_dive' | 'mechanism' | 'misconception' | 'defense' | 'reflection' | 'custom';
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          section_type?: 'summary' | 'deep_dive' | 'mechanism' | 'misconception' | 'defense' | 'reflection' | 'custom';
          display_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_section_translations: {
        Row: {
          id: string;
          section_id: string;
          language_code: string;
          heading: string | null;
          body_markdown: string;
          callout_box: Json | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          section_id: string;
          language_code: string;
          heading?: string | null;
          body_markdown: string;
          callout_box?: Json | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          section_id?: string;
          language_code?: string;
          heading?: string | null;
          body_markdown?: string;
          callout_box?: Json | null;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_examples: {
        Row: {
          id: string;
          topic_id: string;
          domain: 'personal_finance' | 'workplace' | 'relationships' | 'health' | 'social_media' | 'general';
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          domain?: 'personal_finance' | 'workplace' | 'relationships' | 'health' | 'social_media' | 'general';
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          domain?: 'personal_finance' | 'workplace' | 'relationships' | 'health' | 'social_media' | 'general';
          display_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_example_translations: {
        Row: {
          id: string;
          example_id: string;
          language_code: string;
          title: string;
          description: string;
          takeaway: string | null;
        };
        Insert: {
          id?: string;
          example_id: string;
          language_code: string;
          title: string;
          description: string;
          takeaway?: string | null;
        };
        Update: {
          id?: string;
          example_id?: string;
          language_code?: string;
          title?: string;
          description?: string;
          takeaway?: string | null;
        };
        Relationships: [];
      };
      psychology_scenarios: {
        Row: {
          id: string;
          topic_id: string;
          scenario_type: 'indian_context' | 'workplace' | 'personal_finance' | 'social_media' | 'interpersonal' | 'general';
          display_order: number;
          is_featured: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          scenario_type?: 'indian_context' | 'workplace' | 'personal_finance' | 'social_media' | 'interpersonal' | 'general';
          display_order?: number;
          is_featured?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          scenario_type?: 'indian_context' | 'workplace' | 'personal_finance' | 'social_media' | 'interpersonal' | 'general';
          display_order?: number;
          is_featured?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_scenario_translations: {
        Row: {
          id: string;
          scenario_id: string;
          language_code: string;
          title: string;
          narrative_context: string;
          bias_in_action: string;
          optimal_response: string;
          reflection_prompt: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          scenario_id: string;
          language_code: string;
          title: string;
          narrative_context: string;
          bias_in_action: string;
          optimal_response: string;
          reflection_prompt?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          scenario_id?: string;
          language_code?: string;
          title?: string;
          narrative_context?: string;
          bias_in_action?: string;
          optimal_response?: string;
          reflection_prompt?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_practice_questions: {
        Row: {
          id: string;
          topic_id: string;
          difficulty: 'easy' | 'medium' | 'hard';
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          difficulty?: 'easy' | 'medium' | 'hard';
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          difficulty?: 'easy' | 'medium' | 'hard';
          display_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_question_translations: {
        Row: {
          id: string;
          question_id: string;
          language_code: string;
          prompt: string;
          scenario_text: string | null;
          explanation: string;
          antidote_advice: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          question_id: string;
          language_code: string;
          prompt: string;
          scenario_text?: string | null;
          explanation: string;
          antidote_advice?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          question_id?: string;
          language_code?: string;
          prompt?: string;
          scenario_text?: string | null;
          explanation?: string;
          antidote_advice?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_question_options: {
        Row: {
          id: string;
          question_id: string;
          is_correct: boolean;
          display_order: number;
        };
        Insert: {
          id?: string;
          question_id: string;
          is_correct?: boolean;
          display_order?: number;
        };
        Update: {
          id?: string;
          question_id?: string;
          is_correct?: boolean;
          display_order?: number;
        };
        Relationships: [];
      };
      psychology_option_translations: {
        Row: {
          id: string;
          option_id: string;
          language_code: string;
          option_text: string;
          feedback_text: string | null;
        };
        Insert: {
          id?: string;
          option_id: string;
          language_code: string;
          option_text: string;
          feedback_text?: string | null;
        };
        Update: {
          id?: string;
          option_id?: string;
          language_code?: string;
          option_text?: string;
          feedback_text?: string | null;
        };
        Relationships: [];
      };
      psychology_practice_attempts: {
        Row: {
          id: string;
          user_id: string;
          question_id: string;
          selected_option_id: string;
          is_correct: boolean;
          time_spent_ms: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          question_id: string;
          selected_option_id: string;
          is_correct: boolean;
          time_spent_ms?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          question_id?: string;
          selected_option_id?: string;
          is_correct?: boolean;
          time_spent_ms?: number | null;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_references: {
        Row: {
          id: string;
          topic_id: string;
          citation: string;
          authors: string | null;
          publication_year: number | null;
          journal_or_publisher: string | null;
          doi_or_url: string | null;
          evidence_strength: 'peer_reviewed_meta_analysis' | 'empirical_study' | 'foundational_book' | 'working_paper';
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          citation: string;
          authors?: string | null;
          publication_year?: number | null;
          journal_or_publisher?: string | null;
          doi_or_url?: string | null;
          evidence_strength?: 'peer_reviewed_meta_analysis' | 'empirical_study' | 'foundational_book' | 'working_paper';
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          citation?: string;
          authors?: string | null;
          publication_year?: number | null;
          journal_or_publisher?: string | null;
          doi_or_url?: string | null;
          evidence_strength?: 'peer_reviewed_meta_analysis' | 'empirical_study' | 'foundational_book' | 'working_paper';
          display_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_tags: {
        Row: {
          id: string;
          name: string;
          category: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          name: string;
          category?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          category?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_topic_tags: {
        Row: {
          topic_id: string;
          tag_id: string;
        };
        Insert: {
          topic_id: string;
          tag_id: string;
        };
        Update: {
          topic_id?: string;
          tag_id?: string;
        };
        Relationships: [];
      };
      psychology_related_topics: {
        Row: {
          topic_id: string;
          related_topic_id: string;
          relationship_type: 'frequently_confused_with' | 'counteracted_by' | 'amplified_by' | 'foundational_to' | 'general_related';
        };
        Insert: {
          topic_id: string;
          related_topic_id: string;
          relationship_type?: 'frequently_confused_with' | 'counteracted_by' | 'amplified_by' | 'foundational_to' | 'general_related';
        };
        Update: {
          topic_id?: string;
          related_topic_id?: string;
          relationship_type?: 'frequently_confused_with' | 'counteracted_by' | 'amplified_by' | 'foundational_to' | 'general_related';
        };
        Relationships: [];
      };
      psychology_images: {
        Row: {
          id: string;
          topic_id: string | null;
          image_url: string;
          alt_text: string;
          caption: string | null;
          attribution: string | null;
          license_type: string | null;
          width: number | null;
          height: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          topic_id?: string | null;
          image_url: string;
          alt_text: string;
          caption?: string | null;
          attribution?: string | null;
          license_type?: string | null;
          width?: number | null;
          height?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string | null;
          image_url?: string;
          alt_text?: string;
          caption?: string | null;
          attribution?: string | null;
          license_type?: string | null;
          width?: number | null;
          height?: number | null;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_reactions: {
        Row: {
          id: string;
          user_id: string;
          topic_id: string;
          reaction_type: 'helpful' | 'interesting' | 'surprising' | 'learned' | 'thinking';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          topic_id: string;
          reaction_type: 'helpful' | 'interesting' | 'surprising' | 'learned' | 'thinking';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          topic_id?: string;
          reaction_type?: 'helpful' | 'interesting' | 'surprising' | 'learned' | 'thinking';
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      psychology_bookmarks: {
        Row: {
          id: string;
          user_id: string;
          topic_id: string;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          topic_id: string;
          notes?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          topic_id?: string;
          notes?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_shares: {
        Row: {
          id: string;
          topic_id: string;
          platform: 'whatsapp' | 'twitter' | 'telegram' | 'linkedin' | 'clipboard' | 'native_share' | 'other';
          language_code: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          platform?: 'whatsapp' | 'twitter' | 'telegram' | 'linkedin' | 'clipboard' | 'native_share' | 'other';
          language_code?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          platform?: 'whatsapp' | 'twitter' | 'telegram' | 'linkedin' | 'clipboard' | 'native_share' | 'other';
          language_code?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_user_progress: {
        Row: {
          user_id: string;
          topic_id: string;
          status: 'not_started' | 'in_progress' | 'completed';
          completion_percent: number;
          sections_viewed: Json;
          practice_attempted: boolean;
          practice_score: number | null;
          first_viewed_at: string;
          last_viewed_at: string;
          completed_at: string | null;
        };
        Insert: {
          user_id: string;
          topic_id: string;
          status?: 'not_started' | 'in_progress' | 'completed';
          completion_percent?: number;
          sections_viewed?: Json;
          practice_attempted?: boolean;
          practice_score?: number | null;
          first_viewed_at?: string;
          last_viewed_at?: string;
          completed_at?: string | null;
        };
        Update: {
          user_id?: string;
          topic_id?: string;
          status?: 'not_started' | 'in_progress' | 'completed';
          completion_percent?: number;
          sections_viewed?: Json;
          practice_attempted?: boolean;
          practice_score?: number | null;
          first_viewed_at?: string;
          last_viewed_at?: string;
          completed_at?: string | null;
        };
        Relationships: [];
      };
      psychology_content_versions: {
        Row: {
          id: string;
          topic_id: string;
          version_number: number;
          editor_id: string | null;
          change_summary: string | null;
          content_snapshot: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          version_number: number;
          editor_id?: string | null;
          change_summary?: string | null;
          content_snapshot: Json;
          created_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          version_number?: number;
          editor_id?: string | null;
          change_summary?: string | null;
          content_snapshot?: Json;
          created_at?: string;
        };
        Relationships: [];
      };
      psychology_content_reviews: {
        Row: {
          id: string;
          topic_id: string;
          reviewer_id: string;
          review_status: 'pending' | 'approved' | 'rejected' | 'revision_requested';
          review_tier: 'editorial' | 'scientific_fact_check' | 'cultural_sensitivity';
          feedback_notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          topic_id: string;
          reviewer_id: string;
          review_status?: 'pending' | 'approved' | 'rejected' | 'revision_requested';
          review_tier?: 'editorial' | 'scientific_fact_check' | 'cultural_sensitivity';
          feedback_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          topic_id?: string;
          reviewer_id?: string;
          review_status?: 'pending' | 'approved' | 'rejected' | 'revision_requested';
          review_tier?: 'editorial' | 'scientific_fact_check' | 'cultural_sensitivity';
          feedback_notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
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

// Psychology / Mentalab Mind Row Types
export type PsychologyCategoryRow = Database['public']['Tables']['psychology_categories']['Row'];
export type PsychologyCategoryTranslationRow = Database['public']['Tables']['psychology_category_translations']['Row'];
export type PsychologyTopicRow = Database['public']['Tables']['psychology_topics']['Row'];
export type PsychologyTopicTranslationRow = Database['public']['Tables']['psychology_topic_translations']['Row'];
export type PsychologySectionRow = Database['public']['Tables']['psychology_sections']['Row'];
export type PsychologySectionTranslationRow = Database['public']['Tables']['psychology_section_translations']['Row'];
export type PsychologyExampleRow = Database['public']['Tables']['psychology_examples']['Row'];
export type PsychologyExampleTranslationRow = Database['public']['Tables']['psychology_example_translations']['Row'];
export type PsychologyScenarioRow = Database['public']['Tables']['psychology_scenarios']['Row'];
export type PsychologyScenarioTranslationRow = Database['public']['Tables']['psychology_scenario_translations']['Row'];
export type PsychologyPracticeQuestionRow = Database['public']['Tables']['psychology_practice_questions']['Row'];
export type PsychologyQuestionTranslationRow = Database['public']['Tables']['psychology_question_translations']['Row'];
export type PsychologyQuestionOptionRow = Database['public']['Tables']['psychology_question_options']['Row'];
export type PsychologyOptionTranslationRow = Database['public']['Tables']['psychology_option_translations']['Row'];
export type PsychologyPracticeAttemptRow = Database['public']['Tables']['psychology_practice_attempts']['Row'];
export type PsychologyReferenceRow = Database['public']['Tables']['psychology_references']['Row'];
export type PsychologyTagRow = Database['public']['Tables']['psychology_tags']['Row'];
export type PsychologyTopicTagRow = Database['public']['Tables']['psychology_topic_tags']['Row'];
export type PsychologyRelatedTopicRow = Database['public']['Tables']['psychology_related_topics']['Row'];
export type PsychologyImageRow = Database['public']['Tables']['psychology_images']['Row'];
export type PsychologyReactionRow = Database['public']['Tables']['psychology_reactions']['Row'];
export type PsychologyBookmarkRow = Database['public']['Tables']['psychology_bookmarks']['Row'];
export type PsychologyShareRow = Database['public']['Tables']['psychology_shares']['Row'];
export type PsychologyUserProgressRow = Database['public']['Tables']['psychology_user_progress']['Row'];
export type PsychologyContentVersionRow = Database['public']['Tables']['psychology_content_versions']['Row'];
export type PsychologyContentReviewRow = Database['public']['Tables']['psychology_content_reviews']['Row'];

// Core mood types for the Mood Booster app
export interface Mood {
  id: string
  name: string
  emoji: string
  description: string
  color: string // Hex color for visual theming
}

// Affirmation structure for mood-based content
export interface Affirmation {
  id: string
  mood_id: string
  text: string
  author?: string
  category: 'motivational' | 'calming' | 'energizing' | 'reflective'
  created_at: string
}

// Farcaster Frame interaction data
export interface FrameInteraction {
  fid: number // Farcaster ID
  username?: string
  selected_mood?: string
  selected_affirmation?: string
  timestamp: string
  interaction_type: 'mood_select' | 'affirmation_view' | 'share'
}

// Frame render configuration
export interface FrameRenderData {
  title: string
  description: string
  image_url?: string
  buttons: FrameButton[]
  input_text?: string
}

export interface FrameButton {
  text: string
  action: 'post' | 'link' | 'mint'
  target?: string
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}
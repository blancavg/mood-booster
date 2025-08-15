import { Mood, Affirmation } from './types'

// Static mood data (will be moved to Supabase in future phases)
export const MOODS: Mood[] = [
  {
    id: 'happy',
    name: 'Happy',
    emoji: '😊',
    description: 'Feeling joyful and positive',
    color: '#FFD700'
  },
  {
    id: 'stressed',
    name: 'Stressed',
    emoji: '😰',
    description: 'Feeling overwhelmed or anxious',
    color: '#FF6B6B'
  },
  {
    id: 'motivated',
    name: 'Motivated',
    emoji: '💪',
    description: 'Ready to take on challenges',
    color: '#4ECDC4'
  },
  {
    id: 'tired',
    name: 'Tired',
    emoji: '😴',
    description: 'Feeling low energy',
    color: '#95A5A6'
  }
]

// Sample affirmations (will be stored in Supabase)
export const SAMPLE_AFFIRMATIONS: Affirmation[] = [
  {
    id: '1',
    mood_id: 'happy',
    text: 'Your positive energy is contagious and makes the world brighter.',
    category: 'motivational',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    mood_id: 'stressed',
    text: 'Take a deep breath. You have overcome challenges before, and you will overcome this one too.',
    category: 'calming',
    created_at: new Date().toISOString()
  }
  // TODO: Add more affirmations for each mood type
]

// Helper functions for data operations
export const getMoodById = (id: string): Mood | undefined => {
  return MOODS.find(mood => mood.id === id)
}

export const getAffirmationsByMood = (moodId: string): Affirmation[] => {
  return SAMPLE_AFFIRMATIONS.filter(affirmation => affirmation.mood_id === moodId)
}

// TODO: Replace with Supabase queries in next phase
export const getRandomAffirmation = (moodId: string): Affirmation | null => {
  const affirmations = getAffirmationsByMood(moodId)
  return affirmations.length > 0 ? affirmations[Math.floor(Math.random() * affirmations.length)] : null
}
import { Metadata } from 'next'

// Farcaster Frame metadata configuration
export const metadata: Metadata = {
  title: 'Mood Booster - How are you feeling?',
  description: 'Get personalized affirmations based on your current mood',
  openGraph: {
    title: 'Mood Booster Frame',
    description: 'Select your mood for a personalized affirmation',
    images: [
      {
        url: '/api/og?step=initial', // Will be implemented in next phase
        width: 1200,
        height: 630,
        alt: 'Mood Booster Initial Screen'
      }
    ]
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': '/api/og?step=initial',
    'fc:frame:button:1': 'Select Your Mood',
    'fc:frame:post_url': '/frames/mood/select'
  }
}

// Initial frame screen - Step 1
export default function MoodFrame() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🌟 Mood Booster
          </h1>
          <p className="text-gray-600 mb-6">
            Step 1: Ready to get started with personalized affirmations?
          </p>
          <div className="text-sm text-gray-500">
            This is a Farcaster Frame. Use a Frame-compatible client to interact.
          </div>
        </div>
      </div>
    </div>
  )
}
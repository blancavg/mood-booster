import { NextRequest, NextResponse } from 'next/server'
import { ApiResponse, FrameRenderData } from '@/lib/types'
import { getMoodById, getRandomAffirmation } from '@/lib/data'

// Handle mood confirmation and show affirmation
export async function POST(request: NextRequest) {
  try {
    // TODO: Parse Farcaster Frame data
    const body = await request.json()
    const { searchParams } = new URL(request.url)
    const selectedMood = searchParams.get('mood')

    console.log('Mood confirmation received:', { body, selectedMood })

    // TODO: Validate frame signature
    // TODO: Store final selection in Supabase
    // TODO: Generate personalized affirmation

    if (!selectedMood) {
      throw new Error('No mood selected')
    }

    const mood = getMoodById(selectedMood)
    const affirmation = getRandomAffirmation(selectedMood)

    // Placeholder confirmation response
    const frameData: FrameRenderData = {
      title: `Affirmation for ${mood?.name || 'Unknown'} mood`,
      description: affirmation?.text || 'Your personalized affirmation will appear here',
      buttons: [
        { text: '🔄 Get Another', action: 'post', target: '/frames/mood/select' },
        { text: '🌟 Share', action: 'link', target: `${process.env.NEXT_PUBLIC_APP_URL}/frames/mood` }
      ]
    }

    const response: ApiResponse<FrameRenderData> = {
      success: true,
      data: frameData,
      message: 'Affirmation delivered successfully'
    }

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    })

  } catch (error) {
    console.error('Error in mood confirmation:', error)
    
    const errorResponse: ApiResponse = {
      success: false,
      error: 'Failed to confirm mood selection',
      message: 'Please try selecting your mood again'
    }

    return NextResponse.json(errorResponse, { status: 500 })
  }
}
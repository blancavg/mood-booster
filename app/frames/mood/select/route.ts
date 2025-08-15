import { NextRequest, NextResponse } from 'next/server'
import { ApiResponse, FrameRenderData } from '@/lib/types'

// Handle mood selection from Farcaster Frame
export async function POST(request: NextRequest) {
  try {
    // TODO: Parse Farcaster Frame data from request
    const body = await request.json()
    console.log('Frame interaction received:', body)

    // TODO: Validate frame signature
    // TODO: Extract user FID and button clicked
    // TODO: Store interaction in Supabase

    // Placeholder response - will show mood selection options
    const frameData: FrameRenderData = {
      title: 'Select Your Mood',
      description: 'How are you feeling right now?',
      buttons: [
        { text: '😊 Happy', action: 'post', target: '/frames/mood/confirm?mood=happy' },
        { text: '😰 Stressed', action: 'post', target: '/frames/mood/confirm?mood=stressed' },
        { text: '💪 Motivated', action: 'post', target: '/frames/mood/confirm?mood=motivated' },
        { text: '😴 Tired', action: 'post', target: '/frames/mood/confirm?mood=tired' }
      ]
    }

    // Return Farcaster Frame response
    const response: ApiResponse<FrameRenderData> = {
      success: true,
      data: frameData,
      message: 'Mood selection screen ready'
    }

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // TODO: Add proper Farcaster Frame headers in next phase
        'Cache-Control': 'no-cache'
      }
    })

  } catch (error) {
    console.error('Error in mood selection:', error)
    
    const errorResponse: ApiResponse = {
      success: false,
      error: 'Failed to process mood selection',
      message: 'Please try again'
    }

    return NextResponse.json(errorResponse, { status: 500 })
  }
}
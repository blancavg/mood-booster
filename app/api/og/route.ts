import { NextRequest, NextResponse } from 'next/server'

// Placeholder OG image generation endpoint
// TODO: Implement proper OpenGraph image generation with @vercel/og or similar
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const step = searchParams.get('step') || 'initial'
    const mood = searchParams.get('mood')

    console.log('OG image request:', { step, mood })

    // TODO: Generate actual image with canvas or @vercel/og
    // TODO: Return proper image response with correct headers
    // TODO: Include mood-specific colors and emojis
    
    // Placeholder text response for now
    const placeholderText = `OG image endpoint - Step: ${step}, Mood: ${mood || 'none'}`

    return new NextResponse(placeholderText, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    })

  } catch (error) {
    console.error('Error generating OG image:', error)
    return new NextResponse('Error generating image', { status: 500 })
  }
}
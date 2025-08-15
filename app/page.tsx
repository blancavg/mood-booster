export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            🌟 Mood Booster Frame
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            A Farcaster Frame that provides personalized affirmations based on your current mood.
          </p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Frame URL:</h3>
              <code className="text-sm text-blue-600">/frames/mood</code>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Development Status:</h3>
              <p className="text-sm text-gray-600">
                ✅ Base structure ready<br/>
                ✅ Supabase integration configured<br/>
                ✅ API routes created<br/>
                🔄 Frame logic implementation pending<br/>
                🔄 OG image generation pending
              </p>
            </div>

            <div className="mt-6">
              <a 
                href="/frames/mood" 
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                View Frame (Step 1)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
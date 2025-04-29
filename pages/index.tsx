import Button from '../components/Button'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to GoGetWell.ai</h1>
        <p className="text-gray-600 mb-6">Your AI-powered wellness companion.</p>
        <Button
          onClick={() => alert('Button clicked!')}
          className="bg-blue-500 text-white hover:bg-blue-600"
        >
          Get Started
        </Button>
      </div>
    </div>
  )
}

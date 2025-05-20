import { useState } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <h1 className="text-xl font-bold text-blue-600">iVote</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#how-it-works" className="hover:text-blue-600">How It Works</a>
            <a href="#features" className="hover:text-blue-600">Features</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">Login</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden px-4 pb-4 space-y-2 text-sm">
            <a href="#" className="block">Home</a>
            <a href="#how-it-works" className="block">How It Works</a>
            <a href="#features" className="block">Features</a>
            <a href="#contact" className="block">Contact</a>
            <Link to="/login" className="block bg-blue-600 text-white px-4 py-1 rounded mt-2">Login</Link>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-blue-50 text-center py-20 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">Empowering Democracy, One Vote at a Time</h2>
        <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-xl mx-auto">
          Vote securely and conveniently from anywhere in the world.
        </p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
          Get Started
        </button>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-8 max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-16 text-center">How It Works</h3>
      <div className="relative border-l-4 border-blue-600 ml-4">
        {/* 1. Register */}
        <div className="mb-10 ml-6 relative md:text-left">
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1.5"></div>
        <div className="bg-blue-50 p-6 rounded shadow-md md:max-w-md">
            <h4 className="text-blue-600 font-bold text-lg mb-2">1. Register</h4>
            <p className="text-sm text-gray-700">
            Create your account quickly using a valid email address or mobile number. Provide basic details and set up a secure password to get started on the platform.
            </p>
        </div>
        </div>

        {/* 2. Verify */}
        <div className="mb-10 ml-6 relative md:ml-0 md:mr-6 md:text-right md:flex md:justify-end">
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1.5 md:left-auto md:-right-2"></div>
        <div className="bg-blue-50 p-6 rounded shadow-md md:max-w-md">
            <h4 className="text-blue-600 font-bold text-lg mb-2">2. Verify</h4>
            <p className="text-sm text-gray-700">
            Complete identity verification to ensure your eligibility and prevent duplicate voting. This may include OTP verification, document upload, or biometric authentication depending on your region.
            </p>
        </div>
        </div>

        {/* 3. Vote */}
        <div className="mb-10 ml-6 relative md:text-left">
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1.5"></div>
        <div className="bg-blue-50 p-6 rounded shadow-md md:max-w-md">
            <h4 className="text-blue-600 font-bold text-lg mb-2">3. Vote</h4>
            <p className="text-sm text-gray-700">
            Browse the list of candidates or voting options. Cast your vote with a single click in a secure, encrypted environment. Your vote is confidential and cannot be altered.
            </p>
        </div>
        </div>

        {/* 4. Results */}
        <div className="mb-10 ml-6 relative md:ml-0 md:mr-6 md:text-right md:flex md:justify-end">
        <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-1.5 md:left-auto md:-right-2"></div>
        <div className="bg-blue-50 p-6 rounded shadow-md md:max-w-md">
            <h4 className="text-blue-600 font-bold text-lg mb-2">4. Results</h4>
            <p className="text-sm text-gray-700">
            Once voting ends, view live and transparent results in real time. Our tamper-proof system ensures fairness and accuracy, giving you instant access to election outcomes.
            </p>
        </div>
        </div>

    </div>
    </section>
    
    
<section id="feat" className="py-16 px-4 sm:px-8 max-w-4xl mx-auto">
  <h3 className="text-2xl font-bold mb-16 text-center">Features</h3>
  <div className="relative">
    {/* Timeline vertical line – only visible on medium screens and up */}
    <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-600 transform -translate-x-1/2 z-0"></div>

    {/* Feature Items */}
    <div className="flex flex-col gap-10 relative z-10">
      
      {/* Security */}
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 md:pr-6 text-left">
          <div className="bg-blue-50 p-6 rounded shadow-md">
            <h4 className="text-blue-600 font-bold text-lg mb-2">Security</h4>
            <p className="text-sm text-gray-700">End-to-end encryption and secure protocols.</p>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2"></div>
      </div>

      {/* Privacy */}
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="hidden md:block md:w-1/2"></div>
        <div className="md:w-1/2 md:pl-6 text-right">
          <div className="bg-blue-50 p-6 rounded shadow-md">
            <h4 className="text-blue-600 font-bold text-lg mb-2">Privacy</h4>
            <p className="text-sm text-gray-700">Your vote is anonymous and protected.</p>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 md:pr-6 text-left">
          <div className="bg-blue-50 p-6 rounded shadow-md">
            <h4 className="text-blue-600 font-bold text-lg mb-2">Accessibility</h4>
            <p className="text-sm text-gray-700">Mobile-friendly, multi-language support.</p>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2"></div>
      </div>

      {/* Real-time Results */}
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="hidden md:block md:w-1/2"></div>
        <div className="md:w-1/2 md:pl-6 text-right">
          <div className="bg-blue-50 p-6 rounded shadow-md">
            <h4 className="text-blue-600 font-bold text-lg mb-2">Real-time Results</h4>
            <p className="text-sm text-gray-700">Track vote counts as they happen.</p>
          </div>
        </div>
      </div>

      {/* Reliability */}
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2 md:pr-6 text-left">
          <div className="bg-blue-50 p-6 rounded shadow-md">
            <h4 className="text-blue-600 font-bold text-lg mb-2">Reliability</h4>
            <p className="text-sm text-gray-700">Fail-safe systems ensure uptime.</p>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2"></div>
      </div>

    </div>
  </div>
</section>



      {/* Benefits */}
      <section className="py-16 px-4 sm:px-8 max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-10 text-center">Why Choose iVote?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-3 text-sm">
            
            <div className="bg-blue-100 text-black p-6 rounded shadow-md">
                <h4 className="text-blue-600 font-bold text-lg mb-2">Convenience</h4>
                <p className="text-sm text-gray-700">Vote from anywhere, anytime.</p>
            </div>
            
            <div className="bg-blue-100 text-black p-6 rounded shadow-md">
                <h4 className="text-blue-600 font-bold text-lg mb-2">Cost-Effective</h4>
                <p className="text-sm text-gray-700">No need for physical logistics.</p>
            </div>
            
            <div className="bg-blue-100 text-black p-6 rounded shadow-md">
                <h4 className="text-blue-600 font-bold text-lg mb-2">Eco-Friendly</h4>
                <p className="text-sm text-gray-700">Fully digital platform.</p>
            </div>
            
            <div className="bg-blue-100 text-black p-6 rounded shadow-md">
                <h4 className="text-blue-600 font-bold text-lg mb-2">Global Reach</h4>
                <p className="text-sm text-gray-700">Accessible from anywhere.</p>
            </div>
            
        </div>
        </section>


      {/* Testimonials */}
      <section className="bg-blue-50 py-16 px-4 sm:px-8 text-center">
        <h3 className="text-2xl font-bold mb-6">What Our Users Say</h3>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">"Voting with iVote was seamless, secure, and super easy."</blockquote>
        <p className="mt-2 font-semibold">– Jane Doe</p>
      </section>

      {/* Security Badges */}
      <section className="py-12 px-4 sm:px-8 text-center">
        <h3 className="text-xl font-bold mb-4">Certified & Secure</h3>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-gray-100 px-4 py-2 rounded">GDPR</div>
          <div className="bg-gray-100 px-4 py-2 rounded">ISO 27001</div>
          <div className="bg-gray-100 px-4 py-2 rounded">Encrypted</div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 px-4 sm:px-8 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">FAQs</h3>
        <div className="space-y-4 text-sm">
          <div><strong>Q:</strong> How do I know my vote is secure?<p>A: We use encryption and independent audits.</p></div>
          <div><strong>Q:</strong> Can I vote twice?<p>A: No, one verified user = one vote.</p></div>
          <div><strong>Q:</strong> What if I forget my password?<p>A: Use the password recovery option via email.</p></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between">
          <div>
            <h4 className="font-semibold">iVote</h4>
            <p className="text-gray-400">Secure Online Voting Platform</p>
          </div>
          <div className="space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300">Terms</a>
            <a href="#" className="hover:text-blue-300">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

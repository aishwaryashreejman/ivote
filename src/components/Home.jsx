import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [hasVoted, setHasVoted] = useState(false); // Simulate user status
  const [username, setUsername] = useState("John Doe"); // Simulate logged-in user
  const [timeLeft, setTimeLeft] = useState('');

  // Simulated voting deadline
  const votingDeadline = new Date('2025-05-25T23:59:59');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = votingDeadline - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        setTimeLeft(`${days}d ${hours}h ${minutes}m left`);
      } else {
        setTimeLeft('Voting Closed');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">iVote</h1>
        <nav className="space-x-4 text-sm">
          <a href="#info" className="hover:underline">Election Info</a>
          <a href="#support" className="hover:underline">Help</a>
          <Link to="/logout" className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-blue-100">Logout</Link>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Welcome, {username}!</h2>

        {/* Voting Status */}
        <div className="bg-white shadow rounded p-4 mb-6">
          <h3 className="text-lg font-semibold mb-2">Your Voting Status</h3>
          <p className={`mb-2 font-semibold ${hasVoted ? 'text-green-600' : 'text-red-600'}`}>
            {hasVoted ? "✅ You have already voted." : "⏳ You have not voted yet."}
          </p>
          {!hasVoted && (
            <Link to="/vote" className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Vote Now
            </Link>
          )}
        </div>

        {/* Countdown */}
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded mb-6">
          <strong>🕒 Time Left to Vote:</strong> {timeLeft}
        </div>

        {/* Candidate Info Preview */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Candidates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Dummy Candidates */}
            <div className="bg-white p-4 shadow rounded">
              <h4 className="font-bold text-blue-600">Alice Smith</h4>
              <p className="text-sm mt-2">"Empowering education and healthcare for all."</p>
            </div>
            <div className="bg-white p-4 shadow rounded">
              <h4 className="font-bold text-blue-600">Bob Johnson</h4>
              <p className="text-sm mt-2">"Focus on economy and job growth."</p>
            </div>
          </div>
          <Link to="/candidates" className="block text-blue-600 mt-2 hover:underline text-sm">View All Candidates</Link>
        </div>

        {/* Election Info */}
        <div id="info" className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Election Information</h3>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            <li>Voting Date: May 21 – May 25, 2025</li>
            <li>One vote per registered user</li>
            <li>All votes are encrypted and secure</li>
          </ul>
        </div>

        {/* Support */}
        <div id="support" className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
          <p className="text-sm">Contact our support team at <a href="mailto:support@ivote.com" className="text-blue-600 underline">support@ivote.com</a></p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} iVote. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

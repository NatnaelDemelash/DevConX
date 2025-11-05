"use client";

import ExploreBtn from "@/components/ExploreBtn";
import NavBar from "@/components/Navbar";

// --- Icon Components ---
const PlusIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const ZapIcon = () => (
  <svg
    className="w-8 h-8 mx-auto text-gray-500 mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

// --- Reusable Components ---
const Button = ({ children, icon, className = "", ...props }: any) => (
  <button
    className={`flex items-center justify-center px-6 py-3 rounded-xl font-medium ${className}`}
    {...props}
  >
    {icon}
    {children}
  </button>
);

const Card = ({ children, className = "" }: any) => (
  <div
    className={`rounded-2xl bg-white border border-gray-200 shadow-xl ${className}`}
  >
    {children}
  </div>
);

// --- Main App ---
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center font-sans overflow-hidden">
      <NavBar />

      <main className="max-w-7xl w-full mx-auto p-4 sm:p-8 flex-grow flex items-center justify-center">
        <Card className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Left Side */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="text-lg font-semibold text-gray-500 uppercase tracking-widest mb-2">
              DevConX Platform
            </p>
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
              The Central Hub for{" "}
              <span className="text-gray-800">Developer Events</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Browse, create, and manage your tech conferences, meetups, and
              workshops with ease.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <ExploreBtn />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center">
            <Card className="w-full h-80 bg-gray-100 flex items-center justify-center border-dashed border-gray-300">
              <div className="text-center text-gray-600 p-8">
                <ZapIcon />
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                  Event Dashboard Preview
                </h3>
                <p className="text-sm">
                  Dynamic view of your scheduled events and registrations.
                </p>
              </div>
            </Card>
          </div>
        </Card>
      </main>

      <footer className="mt-6 mb-8 text-sm text-gray-500">
        Already managing an event?
        <a href="#" className="ml-1 text-gray-700 hover:text-gray-900">
          Go to Dashboard
        </a>
      </footer>
    </div>
  );
}

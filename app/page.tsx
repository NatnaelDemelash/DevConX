'use client';

// To maintain type safety, we define the props for the mock components.
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

interface CardComponentProps {
  children: React.ReactNode;
  className?: string;
}

// Mock Icon components (using inline SVGs for simplicity and single-file mandate)
const ZapIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4v16m8-8H4"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

// --- Mock Components for Shadcn/ui look and feel ---
const Button = ({ children, className = '', icon, ...props }: ButtonProps) => (
  <button
    className={`
      flex items-center justify-center px-6 py-3 rounded-xl font-medium transition duration-300 ease-in-out
      focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-gray-950
      transform hover:scale-[1.02] active:scale-[0.98]
      ${className}
    `}
    {...props}
  >
    {icon}
    {children}
  </button>
);

const Card = ({ children, className = '' }: CardComponentProps) => (
  <div
    className={`
      rounded-2xl backdrop-blur-md bg-gray-900/60 border border-gray-800 shadow-2xl
      ${className}
    `}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = '' }: CardComponentProps) => (
  <div className={`p-6 sm:p-10 ${className}`}>{children}</div>
);

// --- Main Application Component ---
export default function App() {
  const handleAction = (action: string) => {
    console.log(`${action} action triggered.`);
    // In a real app, this would navigate using a switch/case logic
  };

  return (
    <div className="relative min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center font-sans p-4 sm:p-8 overflow-hidden">
      {/* Background Grid and Light Effect */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      ></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-[150px] animate-blob z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-[150px] animate-blob animation-delay-4000 z-0"></div>

      {/* Hero Content Card */}
      <Card className="z-10 max-w-6xl w-full my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-12">
        {/* Left Side: Text and CTAs */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <p className="text-lg font-semibold text-blue-400 uppercase tracking-widest mb-2">
            DevConX
          </p>

          <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
            The Central Hub for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Developer Events
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0">
            Browse, create, and manage your tech conferences, meetups, and
            workshops with unparalleled ease.
          </p>

          {/* Core Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-500/50"
              onClick={() => handleAction('Browse Events')}
              icon={<SearchIcon />}
            >
              Browse Events
            </Button>

            <Button
              className="bg-transparent text-cyan-400 border border-cyan-500 hover:bg-cyan-500/10 focus:ring-cyan-500/50"
              onClick={() => handleAction('Create New Event')}
              icon={<PlusIcon />}
            >
              Create New Event
            </Button>
          </div>
        </div>

        {/* Right Side: Feature Placeholder */}
        <div className="flex items-center justify-center p-4 lg:p-0">
          <Card className="w-full h-80 bg-gray-900/50 flex items-center justify-center border-dashed border-gray-700/50">
            <div className="text-center text-gray-500 p-8">
              <ZapIcon />
              <h3 className="text-xl font-bold text-gray-400 mb-2">
                Event Dashboard Preview
              </h3>
              <p className="text-sm">
                Dynamic view of your scheduled events and registrations.
              </p>
            </div>
          </Card>
        </div>
      </Card>

      {/* Management Link (Subtle) */}
      <footer className="z-10 mt-6 text-sm text-gray-500">
        Already managing an event?
        <a
          href="#"
          onClick={() => handleAction('Dashboard')}
          className="ml-1 text-blue-400 hover:text-blue-300 transition"
        >
          Go to Dashboard
        </a>
      </footer>

      {/* CSS for custom animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 15s infinite ease-in-out;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

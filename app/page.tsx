'use client';

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

// --- Mock Icon components (using inline SVGs) ---
const PlusIcon = () => (
  // Icons now inherit dark text color by default
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

const UserIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
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
  // Placeholder icon now uses a simple gray color
  <svg
    className="w-8 h-8 mx-auto text-gray-500 mb-4"
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

// --- Mock Components for Shadcn/ui look and feel (White/Black Styling) ---
const Button = ({ children, className = '', icon, ...props }: ButtonProps) => (
  <button
    className={`
      flex items-center justify-center px-6 py-3 rounded-xl font-medium transition duration-300 ease-in-out
      focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-white
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
      rounded-2xl bg-white border border-gray-200 shadow-xl
      ${className}
    `}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = '' }: CardComponentProps) => (
  <div className={`p-6 sm:p-10 ${className}`}>{children}</div>
);

// --- Navigation Bar Component ---
const NavBar = () => {
  const handleNavClick = (name: string) => console.log(`Navigating to ${name}`);

  return (
    <header className="z-20 w-full sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 sm:p-6">
        {/* Logo (Black) */}
        <a
          href="#"
          className="text-3xl font-extrabold text-gray-900 tracking-wider"
        >
          DevConX
        </a>

        {/* Desktop Links and Button (aligned right) */}
        <div className="flex items-center space-x-6">
          {/* Links */}
          <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
            <a
              href="#"
              onClick={() => handleNavClick('Browse Events')}
              className="text-gray-600 hover:text-gray-900 transition duration-200"
            >
              Browse Events
            </a>
            <a
              href="#"
              onClick={() => handleNavClick('For Organizers')}
              className="text-gray-600 hover:text-gray-900 transition duration-200"
            >
              For Organizers
            </a>
          </div>

          {/* Sign In Button (Solid Black) */}
          <Button
            className="bg-gray-900 text-white text-sm hover:bg-gray-800 focus:ring-gray-400 md:py-2 md:px-5 px-4 py-2"
            onClick={() => handleNavClick('Sign In')}
            icon={<UserIcon />}
          >
            Sign In
          </Button>
        </div>
      </nav>
    </header>
  );
};

// --- Main Application Component ---
export default function App() {
  const handleAction = (action: string) => {
    console.log(`${action} action triggered.`);
    // In a real app, this would navigate using a switch/case logic
  };

  return (
    // Updated to light background and dark text
    <div className="relative min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center font-sans overflow-hidden">
      <NavBar /> {/* Integrated Navbar */}
      {/* Background Grid (Removed completely for simple white background) */}
      {/* Main Content Area */}
      <main className="max-w-7xl w-full mx-auto p-4 sm:p-8 grow flex items-center justify-center relative z-10">
        <Card className="max-w-6xl w-full my-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 sm:p-12">
          {/* Left Side: Text and CTAs */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="text-lg font-semibold text-gray-500 uppercase tracking-widest mb-2">
              DevConX Platform
            </p>

            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
              The Central Hub for{' '}
              <span className="text-gray-800">Developer Events</span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-xl lg:max-w-none mx-auto lg:mx-0">
              Browse, create, and manage your tech conferences, meetups, and
              workshops with unparalleled ease.
            </p>

            {/* Core Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                // Primary action button: Solid Black
                className="bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-400/50"
                onClick={() => handleAction('Browse Events')}
                icon={<SearchIcon />}
              >
                Browse Events
              </Button>

              <Button
                // Secondary action button: Outlined Light
                className="bg-transparent text-gray-800 border-2 border-gray-300 hover:bg-gray-50 focus:ring-gray-400/50"
                onClick={() => handleAction('Create New Event')}
                icon={<PlusIcon />}
              >
                Create New Event
              </Button>
            </div>
          </div>

          {/* Right Side: Feature Placeholder */}
          <div className="flex items-center justify-center p-4 lg:p-0">
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
      {/* Footer / Management Link */}
      <footer className="z-10 mt-6 mb-8 text-sm text-gray-500">
        Already managing an event?
        <a
          href="#"
          onClick={() => handleAction('Dashboard')}
          className="ml-1 text-gray-700 hover:text-gray-900 transition"
        >
          Go to Dashboard
        </a>
      </footer>
    </div>
  );
}

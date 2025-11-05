import ExploreBtn from "@/components/ExploreBtn";
import NavBar from "@/components/Navbar";

// --- Icon Components ---
const ZapIcon = () => (
  <svg
    className="w-12 h-12 mx-auto text-gray-400 mb-4"
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
const Card = ({ children, className = "" }: any) => (
  <div
    className={`rounded-2xl bg-white border border-gray-200 shadow-md ${className}`}
  >
    {children}
  </div>
);

// --- Main App ---
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col  font-sans">
      <NavBar />

      <main className="mt-20 max-w-6xl w-full mx-auto p-6 sm:p-12 flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:flex-1 space-y-4">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
            DevConX Platform
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-800">
            The Central Hub for{" "}
            <span className="text-gray-900">Developer Events</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            Browse, create, and manage your tech conferences, meetups, and
            workshops easily.
          </p>
          <ExploreBtn />
        </div>

        {/* Right Side */}
        <Card className="flex-1 bg-gray-100 h-64 lg:h-80 flex items-center justify-center border-dashed border-gray-300">
          <div className="text-center text-gray-600 p-6">
            <ZapIcon />
            <h3 className="text-lg font-bold text-gray-700 mb-1">
              Event Dashboard Preview
            </h3>
            <p className="text-sm text-gray-500">
              Dynamic view of your scheduled events and registrations.
            </p>
          </div>
        </Card>
      </main>

      <div className="mt-20 w-full flex justify-center">
        <div className="max-w-6xl w-full px-6 sm:px-12 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Featured Events
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "JavaScript Summit 2024",
              "React Rally 2024",
              "NodeConf EU 2024",
            ].map((event) => (
              <li
                key={event}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 text-gray-700 font-medium hover:shadow-md transition"
              >
                {event}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

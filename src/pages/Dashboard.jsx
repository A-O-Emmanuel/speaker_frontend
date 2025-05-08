import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div className="w-64 min-h-screen bg-white shadow-lg border-r  left-0 top-0 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-[#2E3A87] mb-6">Account</h2>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-[#2E3A87] transition"
          >
            Subscription
          </Link>
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-[#2E3A87] transition"
          >
            Get Premium
          </Link>
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-[#2E3A87] transition"
          >
            Get Pro
          </Link>
        </nav>

        <hr className="my-6 border-t" />
      </div>

      <div className="flex flex-col space-y-4">
        <Link
          to="/contact"
          className="text-gray-700 hover:text-[#2E3A87] transition"
        >
          Support
        </Link>
        <button className="text-red-600 hover:text-red-800 transition text-left">
          Sign Out
        </button>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 border-r p-4 flex flex-col justify-between">
        <div>
          <nav className="space-y-4 text-gray-800 font-medium">
            <Link to="/userprofile" className="block hover:text-teal-600">
              Account
            </Link>
            <Link className="block hover:text-teal-600">Subscription</Link>
            <div className="text-sm text-gray-600 mt-2 ml-2">
              Free –{" "}
              <span className="font-semibold text-green-600">Current</span>
            </div>
            <Link
              to="/pricing"
              className="block mt-4 text-yellow-600 hover:underline"
            >
              Get Premium
            </Link>
            <Link
              to="/pricing"
              className="block text-purple-600 hover:underline"
            >
              Get Pro
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <hr className="border-gray-300" />
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-teal-600"
          >
            Support
          </Link>
          <button className="text-red-600 hover:underline">Sign Out</button>
        </div>
      </aside>
    </>
  );
}

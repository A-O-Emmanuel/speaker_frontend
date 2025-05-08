import { Link } from "react-router-dom";

import { FaGoogle } from "react-icons/fa";

export default function Sign() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#2E3A87]">
          Sign in with Speaker
        </h2>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className=" text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <Link to='/resetpassword' className="absolute right-0 text-sm text-[#2E3A87] hover:underline">
              Forgot Password?
            </Link>

            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2E3A87] text-white py-2 rounded-md hover:bg-[#1e2e6f] transition duration-300 hover:cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#2E3A87] hover:underline"
          >
            Register for free
          </Link>
        </p>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="mx-4 text-sm text-gray-500">
            Or sign in with Google
          </span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition hover:cursor-pointer">
          <FaGoogle className="text-red-500" />
          <span className="text-sm font-medium text-gray-700">
            Sign in with Google
          </span>
        </button>
      </div>
    </div>
  );
}

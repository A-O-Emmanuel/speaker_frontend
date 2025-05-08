import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-20">
      <h2 className="text-2xl font-bold text-center text-[#2E3A87]">Create Your Account</h2>
      <p className="text-center text-sm text-gray-600 mt-1">Register with your email</p>

      <form className="mt-6 space-y-4">
        {/* Name fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
          />
        </div>

        {/* Terms */}
        <p className="text-sm text-gray-600">
          By creating an account, you agree to our{" "}
          <Link to="/termsofuse" className="text-[#2E3A87] hover:underline cursor-pointer">
            Terms and Conditions
          </Link>
        </p>

        {/* Register button */}
        <Link
          to="/dashboard"
          className="block text-center w-full bg-[#2E3A87] text-white py-2 rounded-md hover:bg-[#1f2d6f] transition"
        >
          Register
        </Link>

        {/* Sign in link */}
        <p className="text-sm text-center mt-2 text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#2E3A87] hover:underline cursor-pointer">
            Sign in
          </Link>
        </p>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-sm text-gray-500">or register with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google button */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google icon"
            className="w-5 h-5"
          />
          <span className="text-sm text-gray-700 font-medium">Register with Google</span>
        </button>
      </form>
    </div>
  );
}

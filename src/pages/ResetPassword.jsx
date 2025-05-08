import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-40 mb-20">
      <h2 className="text-2xl font-bold text-center text-[#2E3A87]">
        Reset Your Speaker Password
      </h2>

      <p className="text-sm text-center text-gray-600 mt-2">
        We’ll send you an email to reset your password
      </p>

      <form className="mt-6 space-y-4">
        {/* Email input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E3A87]"
          />
        </div>

        {/* Continue button */}
        <button
          type="submit"
          className="w-full bg-[#2E3A87] text-white py-2 rounded-md hover:bg-[#1f2d6f] transition"
        >
          Continue
        </button>

        {/* Back to sign in */}
        <Link
          to="/signin"
          className="block text-center mt-2 text-sm text-[#2E3A87] hover:underline cursor-pointer"
        >
          Back to Sign In
        </Link>
      </form>
    </div>
  );
}

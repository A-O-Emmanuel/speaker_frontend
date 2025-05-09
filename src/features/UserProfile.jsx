import { useState } from "react";
import { Link } from "react-router-dom";

export default function UserProfile() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [email, setEmail] = useState("johndoe@example.com");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-teal-700 text-white px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">scriptreadr</div>
        <div className="space-x-4">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/" className="hover:underline">Home</Link>
        </div>
      </nav>

      {/* Account Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-left">Account</h1>

        {/* First Name */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <label className="block font-semibold text-gray-700">First Name</label>
            <p className="text-gray-900 mt-1">{firstName}</p>
          </div>
          <button className="mt-2 md:mt-0 bg-teal-700 text-white px-4 py-1 rounded hover:bg-teal-800">Update</button>
        </div>

        {/* Last Name */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <label className="block font-semibold text-gray-700">Last Name</label>
            <p className="text-gray-900 mt-1">{lastName}</p>
          </div>
          <button className="mt-2 md:mt-0 bg-teal-700 text-white px-4 py-1 rounded hover:bg-teal-800">Update</button>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700">Email</label>
          <p className="text-gray-900 mt-1">{email}</p>
        </div>

        {/* Subscription Section */}
        <div className="mb-6">
          <label className="block font-semibold text-gray-700">Subscription</label>
          <div className="flex items-center justify-between mt-1">
            <p className="text-gray-900">Free</p>
            <span className="text-green-600 font-medium">Currently On</span>
          </div>
          <div className="mt-4 space-y-2">
            <Link to="/pricing" className="text-blue-600 hover:underline block">Get Premium</Link>
            <Link to="/pricing" className="text-blue-600 hover:underline block">Get Pro</Link>
            <button className="text-red-600 hover:underline block">Cancel Subscription</button>
          </div>
        </div>

        {/* Delete Account */}
        <div className="border-t pt-6 mt-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <button className="text-red-600 font-semibold hover:underline">Delete Account</button>
            <p className="text-sm text-gray-500 mt-2 md:mt-0 md:ml-4">
              Before deleting your account, make sure to cancel any subscription you have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UserProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white rounded-lg shadow-md mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="/default-avatar.png"
          alt="User Avatar"
          className="w-24 h-24 rounded-full border object-cover"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#2E3A87]">username</h2>
          <p className="text-sm text-gray-500">email</p>
          <span className="inline-block mt-2 px-3 py-1 text-sm font-medium bg-teal-100 text-teal-800 rounded-full">
            free plan
          </span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div>
          <p className="text-lg font-semibold text-[#2E3A87]">subscription</p>
          <p className="text-sm text-gray-600">Scripts Generated</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-[#2E3A87]">user imports</p>
          <p className="text-sm text-gray-600">Imports</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-[#2E3A87]">
            subscription status
          </p>
          <p className="text-sm text-gray-600">Subscription</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <button className="px-4 py-2 bg-[#2E3A87] text-white rounded hover:bg-[#1f2c6b] transition">
          Edit Profile
        </button>
        <button className="px-4 py-2 bg-red-100 text-red-700 border border-red-300 rounded hover:bg-red-200 transition">
          Logout
        </button>
      </div>
    </div>
  );
}

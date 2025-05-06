export default function Home() {
  return (
    <>
      <section className=" text-white h-[60vh] flex flex-col justify-center items-center text-center">
        <div className="text-2xl font-bold mb-4">
          <h1>
            Bring your scripts to life with Deep Fusion Films' AI powered script
            reading
          </h1>
          <p>
            tools to help you create, format and polish your scripts like a pro
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#2E3A87] text-white px-6 py-2 rounded">
            Get Started
          </button>
          <button className="text-white border border-[#2E3A87] text-[#2E3A87] px-6 py-2 rounded">
            Watch Demo
          </button>
        </div>
      </section>

      {/* everything you need */}
      <section className="py-12 px-6">
        <h1 className="text-white text-center text-2xl font-bold mb-8">
          Everything you need in one place
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md p-6 rounded lg:p-15">
            <h2 className="text-lg font-semibold mb-2">
              AI Script suggestions
            </h2>
            <p className="text-sm text-gray-600">
              Get real time ideas and fixes as you write
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded lg:p-15">
            <h2 className="text-lg font-semibold mb-2">Automatic Formating</h2>
            <p className="text-sm text-gray-600">
              Industy-standard formats in one click
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded lg:p-15">
            <h2 className="text-lg font-semibold mb-2">Export and share</h2>
            <p className="text-sm text-gray-600">
              PDF final draft or web links in seconds
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded lg:p-15">
            <h2 className="text-lg font-semibold mb-2">Collaborative Tools</h2>
            <p className="text-sm text-gray-600">
              Invite editors and co-writers easily
            </p>
          </div>
        </div>
      </section>

       {/* how it works */}
       <section className="py-12 px-6">
        <h1 className="text-white text-center text-2xl font-bold mb-8">
          How it works
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md p-6 rounded lg:p-15">
            <h2 className="text-lg font-semibold mb-2">
              Sign Up in seconds
            </h2>
            <p className="text-sm text-gray-600">
              In order to use this tool you need to be signed in
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded lg:p-15">
            <h2 className="text-lg font-semibold mb-2">Start a new script or use a template</h2>
            <p className="text-sm text-gray-600">
              Import your already pre-written script or use one of the templates available to you.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded lg:p-15">
            <h2 className="text-lg font-semibold mb-2">Write, Edit, Collaborate</h2>
            <p className="text-sm text-gray-600">
              Adjust your script for your desired outcome, collaborate with your team.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded lg:p-15">
            <h2 className="text-lg font-semibold mb-2">Export and Pitch</h2>
            <p className="text-sm text-gray-600">
              Satisfied? export your script and pitch to your stake holders.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

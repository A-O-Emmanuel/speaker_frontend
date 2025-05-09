import { useState } from "react";
import { useRef } from "react";

import { Link } from "react-router-dom";

import { FaPlay } from "react-icons/fa";
import { FiSave, FiFileText, FiMusic } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";

export default function DashboardLayout() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Loaded file:", file.name);
      // You can now read the file or upload it
    }
  };

  const handleSelect = (type) => {
    setOpen(false);
    if (type === "file") {
      console.log("Save as file");
    } else if (type === "audio") {
      console.log("Export as audio");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <nav className="bg-teal-700 text-white px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">ScriptReadr</div>
        <Link to="/" className="hover:underline">
          Home
        </Link>
      </nav>

      <div className="flex flex-1">
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

        {/* Main Content Area */}

        <main className="flex-1 p-6 bg-white">
          <div className="flex flex-wrap items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm mb-4">
            <input
              type="file"
              accept=".txt,.pdf" // adjust based on what you want to allow
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />

            <button
              onClick={handleClick}
              className="flex items-center gap-2 py-1 px-3 bg-teal-700 text-white rounded hover:bg-teal-800 transition"
            >
              <FiUpload />
              Load Script
            </button>
            <button className="py-1 px-3 bg-gray-500 text-white rounded hover:bg-gray-600 transition">
              New Script
            </button>

            <div className="relative inline-block text-left">
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-2 py-1 px-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
              >
                <FiSave />
                Save Script
              </button>

              {open && (
                <div className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                  <button
                    onClick={() => handleSelect("file")}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiFileText className="mr-2" /> Save as File
                  </button>
                  <button
                    onClick={() => handleSelect("audio")}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiMusic className="mr-2" /> Export as Audio
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <label
                htmlFor="format"
                className="text-sm font-medium text-gray-700"
              >
                Format:
              </label>
              <select
                name="format"
                id="format"
                className="py-1 px-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
              >
                <option value="generic">Generic</option>
                <option value="screenplay">Screenplay</option>
              </select>
            </div>
            <button className="flex items-center gap-2 py-1 px-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition">
              <FaPlay />
              Play Script
            </button>
          </div>

          <div className="flex justify-between gap-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your script here..."
              className="w-3/4 h-[70vh] border border-gray-300 p-4 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>

            <div className="relative w-1/4 border border-gray-300 rounded-md">
              <p className=" bg-teal-700 text-white p-4">
                Speaker voice selection:
              </p>
              <div className="flex gap-4 py-1 px-2 align-center">
                <label className="uppercase">narrator:</label>
                <select
                  name=""
                  id=""
                  className="py-1 px-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Aria</option>
                  <option value="">Jane</option>
                  <option value="">John</option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>

              <div className="">
                <p className=" bg-teal-700 text-white p-4">Speaker List:</p>
              </div>
              <div className="absolute bottom-0 left-0 border p-4 bg-teal-700 text-white w-full">
                <button className="border rounded-md px-4 py-2 text-sm hover:cursor-pointer" >Update Speaker List</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

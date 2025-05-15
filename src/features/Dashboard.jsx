import { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import { FaPlay, FaPause, FaStop } from "react-icons/fa";
import { FiSave, FiFileText, FiMusic } from "react-icons/fi";
import { FiUpload } from "react-icons/fi";

import  SideBar from "./SideBar"


export default function DashboardLayout() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const [abortController, setAbortController] = useState(null);

  //check if audio file is loading
  const [isLoading, setIsLoading] = useState(false);

  const [saveAudio, setSaveAudio] = useState(null);
  //state for playing, pausing and stopping the audio
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  //

  //handle upload files
  const fileInputRef = useRef(null);
  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Loaded file:", file.name);
      // You can now read the file or upload it
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("https://speaker-backend-jqqw.onrender.com/file/upload/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("upload successful:", data);
          setText(data.cleaned_text);
        } else {
          console.error("upload failed:", response.statusText);
          //load jsx component
        }
      } catch (error) {
        console.error("error uploading file:", error);
        //load jsx component
      } finally {
        event.target.value = "";
      }
    }
  };

  const handleNewScript = () => {
    setText("");
  };

  //get available voices
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");

  useEffect(() => {
    const fetchVoices = async() => {
      try {
        const response = await fetch("https://speaker-backend-jqqw.onrender.com/audio/tts/");
        if(!response.ok) throw new Error("Failed to load voices");
        const data = await response.json();
        setVoices(data);
      }catch (err) {
        console.error("Error loading voices", err);
      }
    };

    fetchVoices();
  }, []);

  //handle play script
  const handlePlayScript = async () => {
    if (isLoading || isPlaying) return;
    if (audio && isPaused) {
      audio.play();
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }

    //stop play script request
    const controller = new AbortController();
    setAbortController(controller);

    //check if there is no text
    if (!text) {
      alert("You need to type or upload a script to play");
      return;
    }

    setIsLoading(true); //start loading

    try {
      const response = await fetch("https://speaker-backend-jqqw.onrender.com/audio/tts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, voice_id: selectedVoice }),
        signal:controller.signal
      });

      if (!response.ok) {
        throw new Error(`TTS request failed with status ${response.status}`);
      }

      const audioBlob = await response.blob();

      setSaveAudio(audioBlob)
      //setAudioBlob(audioBlob);
      const audioURL = URL.createObjectURL(audioBlob);
      const newAudio = new Audio(audioURL);

      newAudio.onended = () => {
        setIsPlaying(false);
        setIsPaused(false);
      };

      await newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);
      setIsPaused(false);
      newAudio.play();
    } catch (error) {
      console.error("Error playing TTS audio:", error);
    } finally {
      setIsLoading(false);
      setAbortController(null);
    }
  };

  const handlePause = () => {
    if (audio && isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setIsPaused(false);
    }
  };

  const handleSaveScript = async (type) => {
    setOpen(false);
    if (type === "file") {
      console.log("file saved");
    } else if (type === "audio") {
      if (saveAudio) {
        const url = URL.createObjectURL(saveAudio);
        const a = document.createElement("a");
        a.href = url;
        a.download = "script.mp3";
        a.click();
      } else {
        alert("no audio to download");
        console.warn("No audio to download yet");
      }
      //console.log("Export as audio");
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

        <SideBar />
        
        {/* Main Content Area */}

        <main className="flex-1 p-6 bg-white">
          <div className="flex flex-wrap items-center gap-3 p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm mb-4">
            <input
              type="file"
              accept=".txt,.pdf,.docx" // adjust based on what you want to allow
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
            <button
              onClick={handleNewScript}
              className="py-1 px-3 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
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
                  {/* <button
                    onClick={() => handleSaveScript("file")}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FiFileText className="mr-2" /> Save as File
                  </button> */}
                  <button
                    onClick={() => handleSaveScript("audio")}
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
            {/* 
            <button
              onClick={handlePlayScript}
              className="flex items-center gap-2 py-1 px-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
            >
              <FaPlay />
              Play Script
            </button> */}

            {isLoading && (
              <button
                onClick={() => {
                  if (abortController) {
                    abortController.abort(); // abort the request
                  }
                }}
                className="ml-2 py-1 px-3 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            )}

           

            <button
              onClick={handlePlayScript}
              className="flex items-center gap-2 py-1 px-3 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
            >
              <FaPlay />
              {isLoading ? "Loading..." : isPlaying ? "Playing" : "Play Script"}
            </button>

            <button
              onClick={handlePause}
              className="flex items-center gap-2 py-1 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              disabled={!isPlaying}
            >
              <FaPause />
              {isPaused ? "Paused" : "Pause"}
            </button>

            <button
              onClick={handleStop}
              className="flex items-center gap-2 py-1 px-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
              disabled={!isPlaying && !isPaused}
            >
              <FaStop />
              {isPlaying || isPaused ? "Stop" : "Stopped"}
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
                  id="narrator"
                  value={selectedVoice}
                  onChange={(e) => setSelectedVoice(e.target.value)}
                  className="w-full max-w-xs py-1 px-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="">Default voice</option>
                  {voices.map((voice) => {
                    return (<option key={voice.id} value={voice.id}>
                      {voice.name}
                    </option>)
                  })
                    
                  }
                </select>
              </div>

              <div>
                <p className=" bg-teal-700 text-white p-4">Speaker List:</p>
              </div>
              <div className="absolute bottom-0 left-0 border p-4 bg-teal-700 text-white w-full">
                <button className="border rounded-md px-4 py-2 text-sm hover:cursor-pointer">
                  Update Speaker List
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

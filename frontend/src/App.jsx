import React, { useState, useRef } from "react";

export default function TextSummarization() {
  const [inputText, setInputText] = useState("");
  const [summaryText, setSummaryText] = useState("");
  const [loading, setLoading] = useState(false);
  const summaryRef = useRef(null);

  const handleCopy = () => {
    if (summaryRef.current) {
      navigator.clipboard.writeText(summaryText);
      alert("Summary copied to clipboard!");
    }
  };

  const handleClear = () => {
    setInputText("");
    setSummaryText("");
  };

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      alert("Please enter some text to summarize.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ job: inputText }),
      });

      const data = await response.json();

      if (data.summary) {
        setSummaryText(data.summary);
      } else {
        setSummaryText("⚠️ Unable to generate summary.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSummaryText("⚠️ An error occurred while summarizing.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 flex items-center justify-center">
      <div className="flex flex-col items-center w-full max-w-6xl">
        {/* Header */}
        <header className="w-full bg-white shadow-md rounded-xl px-6 py-4 mb-6 flex justify-center">
          <div className="text-2xl font-bold text-blue-700">📘 Summarizer</div>
        </header>

        <div className="w-full bg-white p-6 rounded-2xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Input Section */}
            <div className="flex flex-col border border-gray-200 rounded-xl p-6 bg-white">
              <label className="text-base font-semibold text-gray-700 mb-2">
                Enter your text
              </label>
              <textarea
                className="w-full h-60 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
                placeholder="Paste your text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              ></textarea>
              <button
                onClick={handleSummarize}
                disabled={loading}
                className={`mt-4 text-white font-medium py-2 rounded-lg transition ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Summarizing..." : "Summarize"}
              </button>
            </div>

            {/* Summary Section */}
            <div className="flex flex-col border border-gray-200 rounded-xl p-6 bg-white">
              <label className="text-base font-semibold text-gray-700 mb-2">
                Summary
              </label>
              <div
                ref={summaryRef}
                className="w-full h-60 p-4 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 overflow-y-auto whitespace-pre-wrap"
              >
                <p className={summaryText ? "" : "text-gray-500 italic"}>
                  {summaryText || "Your summary will appear here..."}
                </p>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={handleCopy}
                  className="px-4 py-2 bg-blue-100 text-blue-700 font-semibold border border-blue-300 rounded hover:bg-blue-200 transition"
                  title="Copy"
                >
                  📋 Copy
                </button>
                <button
                  onClick={handleClear}
                  className="px-4 py-2 bg-gray-100 text-gray-700 font-semibold border border-gray-300 rounded hover:bg-gray-200 transition"
                  title="Clear"
                >
                  ❌ Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

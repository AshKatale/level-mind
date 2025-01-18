// App.jsx
'use client'
import React, { useState } from "react";

const App = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      {isSidebarVisible && (
        <div className="w-1/4 bg-gray-800 flex flex-col">
          <div className="p-4 font-bold text-lg border-b border-gray-700">
            Sidebar
          </div>
          <ul className="flex-1 p-4 space-y-2">
            <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              Chat 1
            </li>
            <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              Chat 2
            </li>
            <li className="p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              Chat 3
            </li>
          </ul>
          <div className="p-4 border-t border-gray-700">Profile</div>
        </div>
      )}

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 bg-gray-800 flex justify-between items-center">
          <h1 className="text-lg font-bold">Chat Window</h1>
          <button
            onClick={toggleSidebar}
            className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none"
          >
            {isSidebarVisible ? "Hide Sidebar" : "Show Sidebar"}
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-900">
          <div className="space-y-4">
            <div className="bg-gray-800 p-3 rounded-lg max-w-sm">
              Hello! How can I help you?
            </div>
            <div className="bg-blue-600 text-white p-3 rounded-lg max-w-sm ml-auto">
              I have a question about your services.
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <input
            type="text"
            className="w-full p-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Type a message..."
          />
        </div>
      </div>
    </div>
  );
};

export default App;

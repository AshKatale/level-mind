'use client'

import axios from 'axios'
import React from 'react'

export default function Page() {
  const [output, setOutput] = React.useState(null); // Ensure this can handle objects
  const [input, setInput] = React.useState([]);

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/comp', { inputValue: input });
      console.log(res.data);
      setOutput(JSON.stringify(res.data)); // Directly set the parsed JSON object
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-15">
      <h1 className="text-5xl font-bold">Competitor Analysis</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 mt-4"
        placeholder="Enter input value"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        Submit
      </button>

      {/* Render output */}
        {output}
    </div>
  );
}

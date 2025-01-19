'use client'

import axios from 'axios'
import React from 'react'

export default function Page() {
  const [output, setOutput] = React.useState(); // Ensure this can handle objects
  const [input, setInput] = React.useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/comp', { inputValue: input });
      console.log(res.data);
      setOutput(parseJsonString(output?.candidates[0]?.content?.parts[0]?.text));
      
      // Directly set the parsed JSON object
    } catch (error) {
      console.error(error);
    }
  };

  function parseJsonString(jsonString) {
    try {
      // Remove any whitespace and newlines
      const cleanedString = jsonString.trim();
      
      // Parse the string to JSON
      const jsonObject = JSON.parse(cleanedString);
      
      // Return the parsed JSON object
      return jsonObject;
    } catch (error) {
      // Handle parsing errors
      console.error('Error parsing JSON string:', error.message);
      return null;
    }
  }
  

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

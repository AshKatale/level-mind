'use client'

import axios from 'axios'
import React from 'react'

export default function Page() {
  const [output, setOutput] = React.useState(null); // Ensure this can handle objects
  const [input, setInput] = React.useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/api/comp', { inputValue: input });
      console.log(res.data);
      setOutput(res.data); // Directly set the parsed JSON object
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
      {output && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Analysis Results</h2>
          <pre className="bg-gray-100 p-4 mt-4 rounded">
            {JSON.stringify(output, null, 2)}
          </pre>

          {/* Render specific fields */}
          <div className="mt-4">
            <h3 className="text-xl font-bold">Competitor Analysis:</h3>
            {Object.keys(output.CompetitorAnalysis || {}).map((competitor) => (
              <div key={competitor} className="mt-2">
                <h4 className="font-semibold">{competitor}</h4>
                <p>{output.CompetitorAnalysis[competitor].adStrategies}</p>
              </div>
            ))}

            <h3 className="text-xl font-bold mt-4">Insights & Recommendations:</h3>
            <ul className="list-disc ml-5">
              {(output.InsightsAndRecommendations || []).map((item, index) => (
                <li key={index}>
                  <strong>{item.point}:</strong> {item.recommendation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

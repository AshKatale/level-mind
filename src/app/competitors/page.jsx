"use client";
import React, { useState } from "react";
import axios from "axios";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Loader2 } from "lucide-react";

const MarketAnalysisDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState(""); // Track the user input

<<<<<<< HEAD
  // Function to process and structure the raw data into sections
  const parseData = (rawData) => {
    if (!rawData || !rawData.candidates) return null;

    const candidate = rawData.candidates[0];
    const contentParts = candidate?.content?.parts || [];

    // Example structure you can work with
    const structuredData = {
      title: "Market Analysis for " + inputValue,
      sections: contentParts.map((part) => {
        // Split content based on '***' and treat each as a separate paragraph
        const paragraphs = part.text.split('***').map((paragraph, index) => ({
          id: index,
          content: paragraph.trim(),
        }));

        return {
          header: paragraphs[0]?.content.split("\n")[0], // Extract first line as header
          paragraphs,
        };
      }),
    };

    return structuredData;
  };
=======
export default function Page() {
  const [output, setOutput] = React.useState(); // Ensure this can handle objects
  const [input, setInput] = React.useState('');
>>>>>>> fb7d818282fa60f665b1e36f09f02065153988a7

  const handleSubmit = async () => {
    if (!inputValue.trim()) return; // Ensure there is input

    setLoading(true);
    try {
<<<<<<< HEAD
      // Send the input value to the API
      const response = await axios.post("/api/comp", { inputValue: [inputValue] });
      const parsedData = parseData(response.data);
      setData(parsedData);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch market data");
      setLoading(false);
=======
      const res = await axios.post('/api/comp', { inputValue: input });
      console.log(res.data);
      setOutput(parseJsonString(output?.candidates[0]?.content?.parts[0]?.text));
      
      // Directly set the parsed JSON object
    } catch (error) {
      console.error(error);
>>>>>>> fb7d818282fa60f665b1e36f09f02065153988a7
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
    <div className="max-w-6xl mx-auto p-20 space-y-6">
      {/* Input for the user */}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Ensure onChange works
          placeholder="Enter product name (e.g., laptops)"
          className="border p-4 rounded w-full" // Full width for input
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded mt-2"
        >
          Get Market Data
        </button>
      </div>

      {/* Loading state */}
      {loading && <Loader2 className="animate-spin" />}

      {/* Error message */}
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Display data if available */}
      {data && (
        <div>
          {/* Render sections */}
          <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
          {data.sections.map((section, index) => (
            <div key={index} className="mt-6">
              <h3 className="text-xl font-semibold">{section.header}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.id}>{paragraph.content}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketAnalysisDashboard;

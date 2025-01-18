import React from 'react';

export default function FormatText({ inputText }) {
  // Function to process the input text
  const processText = (text) => {
    // Split the text into lines
    const lines = text.split('\n');
    // Process each line to replace **word** with HTML for bold and larger text
    return lines.map((line, index) => (
      <p key={index} className='align-left'>
        {line.split(/(\*\*.*?\*\*)/g).map((segment, i) =>
          segment.startsWith('**') && segment.endsWith('**') ? (
            <span key={i} style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
              {segment.replace(/\*\*/g, '')}
            </span>
          ) : (
            segment
          )
        )}
      </p>
    ));
  };

  return <div>{processText(inputText)}</div>;
}

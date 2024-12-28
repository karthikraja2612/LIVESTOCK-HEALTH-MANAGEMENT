// components/AIAssistant.js
import React, { useState } from "react";
import "./AIAssistant.css";

function AIAssistant() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleAskAI = () => {
    // Simulate AI response
    setResponse(`AI Assistant Response to: "${query}"`);
  };

  return (
    <div className="ai-assistant">
      <h2>AI Assistant</h2>
      <div className="ai-assistant-input">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleAskAI}>Ask AI</button>
      </div>
      {response && <div className="ai-assistant-response">{response}</div>}
    </div>
  );
}

export default AIAssistant;

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import knowledge from "../data/knowledge.txt?raw";

const cleanKnowledge = knowledge.toLowerCase();

// 🔑 Keyword map
const knowledgeMap = {
  placements: ["placement", "placements", "job", "package"],
  programs: ["course", "program", "btech", "mtech", "phd"],
  hostel: ["hostel", "accommodation", "residential"],
  labs: ["lab", "labs", "robotics", "iot", "cps"],
  campus: ["campus", "infrastructure", "facility", "facilities"],
  vision: ["vision", "mission"],
  accreditation: ["nba", "naac", "autonomous", "ugc"],
  departments: ["department", "branches"],
  leadership: ["principal", "chairman", "director", "hod"],
};

// 🎯 Extract answer
function getAnswer(question) {
  const q = question.toLowerCase();

  for (const key in knowledgeMap) {
    if (knowledgeMap[key].some((word) => q.includes(word))) {
      const start = cleanKnowledge.indexOf(key);
      if (start !== -1) {
        return knowledge.slice(start, start + 500);
      }
    }
  }

  const lines = knowledge.split("\n");
  const match = lines.find((line) =>
    q.split(" ").some((w) => line.toLowerCase().includes(w))
  );

  return match || "I can help you with programs, placements, campus, or facilities at Sahrdaya.";
}

export default function Chatbot() {
  const nav = useNavigate(); // ✅ FIXED POSITION
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    const answer = getAnswer(input);

    setMessages([
      ...messages,
      { role: "user", text: input },
      { role: "bot", text: answer },
    ]);

    setInput("");
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">Sahrdaya AI Assistant</h2>

      {/* ✅ BACK BUTTON */}
      <button className="back-btn" onClick={() => nav("/")}>
        ⬅ Home
      </button>

      {/* Messages */}
      <div className="chat-box">
        {messages.length === 0 && (
          <div className="bot-msg">
            Hello 👋 Ask me about programs, placements, campus or facilities.
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "user-msg" : "bot-msg"}>
            {m.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="chat-input-area">
        <input
          className="chat-input"
          placeholder="Ask about courses, placements, hostel..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />

        <button className="chat-send" onClick={sendMessage}>
          Ask
        </button>
      </div>
    </div>
  );
}
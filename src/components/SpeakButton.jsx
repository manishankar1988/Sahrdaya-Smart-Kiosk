import { useEffect, useState } from "react";

export default function SpeakButton({ text }) {
  const [voices, setVoices] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Load voices
  useEffect(() => {
    const loadVoices = () => setVoices(speechSynthesis.getVoices());
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // 🎤 Male voice selector
  const getMaleVoice = () => {
    if (!voices.length) return null;

    // Prefer strong male voices
    const male =
      voices.find(v => v.name.includes("Google UK English Male")) ||
      voices.find(v => v.name.includes("David")) ||
      voices.find(v => v.name.includes("Mark")) ||
      voices.find(v => v.name.includes("Ravi")) ||
      voices.find(v => v.name.includes("Male"));

    return male || voices[0];
  };

  // 🔊 Auto speak
  useEffect(() => {
    if (!text || !voices.length) return;

    const cleanText = text.replace(/\./g, ". "); // clarity pauses

    const utter = new SpeechSynthesisUtterance(cleanText);
    utter.voice = getMaleVoice();

    // 🎧 Clarity tuning
    utter.rate = 0.82;   // slower = clearer
    utter.pitch = 0.9;   // slightly deeper = masculine
    utter.volume = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
    setIsSpeaking(true);

    return () => speechSynthesis.cancel();
  }, [text, voices]);

  // 🛑 Stop button
  const stopSpeech = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div>
      {isSpeaking && (
        <button className="action" onClick={stopSpeech}>
          🛑 Stop Voice
        </button>
      )}
    </div>
  );
}
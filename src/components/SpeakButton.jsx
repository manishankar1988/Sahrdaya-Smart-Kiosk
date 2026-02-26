import { useEffect, useState } from "react";
import { getStableIndianVoice } from "../utils/voiceEngine";

export default function SpeakButton({ text }) {
  const [ready, setReady] = useState(false);
  const [speaking, setSpeaking] = useState(false);

  // Wait for voices
  useEffect(() => {
    const load = () => {
      if (speechSynthesis.getVoices().length) {
        setReady(true);
      }
    };

    load();
    speechSynthesis.onvoiceschanged = load;

    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (!text || !ready) return;

    const timer = setTimeout(() => {
      let tunedText = text
        .replace(/UG/g, "U G")
        .replace(/PG/g, "P G")
        .replace(/PhD/g, "P H D");

      const utter = new SpeechSynthesisUtterance(tunedText);

      utter.voice = getStableIndianVoice();
      utter.lang = "en-IN";

      utter.rate = 0.72;
      utter.pitch = 0.88;
      utter.volume = 1;

      utter.onstart = () => setSpeaking(true);
      utter.onend = () => setSpeaking(false);

      speechSynthesis.cancel();
      speechSynthesis.speak(utter);
    }, 300);

    return () => {
      clearTimeout(timer);
      speechSynthesis.cancel();
      setSpeaking(false);
    };
  }, [text, ready]);

  const stopSpeech = () => {
    speechSynthesis.cancel();
    setSpeaking(false);
  };

  return (
    <>
      {speaking && (
        <button className="voice-stop" onClick={stopSpeech}>
          ⏹ Stop Voice
        </button>
      )}
    </>
  );
}
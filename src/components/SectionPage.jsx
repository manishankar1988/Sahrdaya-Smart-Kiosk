import { useEffect } from "react";
import SpeakButton from "./SpeakButton";

export default function SectionPage({ title, content, link, buttonText }) {
  useEffect(() => {
    const utter = new SpeechSynthesisUtterance(content);

    utter.rate = 0.85;
    utter.pitch = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(utter);

    // 🛑 STOP speech when leaving page
    return () => {
      speechSynthesis.cancel();
    };
  }, [content]);

  return (
    <div className="page">
      <h1>{title}</h1>

      <SpeakButton text={content} />

      <p className="content">{content}</p>

      {link && (
        <a href={link} target="_blank">
          <button className="action">{buttonText}</button>
        </a>
      )}
    </div>
  );
}
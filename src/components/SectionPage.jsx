import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function SectionPage({ title, content, audio, link, buttonText }) {
  const nav = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audio) return;

    // Stop previous audio globally
    window.currentAudio?.pause();

    const sound = new Audio(audio);
    sound.volume = 1;
    sound.preload = "auto";

    audioRef.current = sound;
    window.currentAudio = sound;

    const timer = setTimeout(() => {
      sound.play().catch(err => {
        console.log("Audio blocked:", err);
      });
    }, 400); // Pi stability delay

    return () => {
      clearTimeout(timer);
      sound.pause();
      sound.currentTime = 0;
    };
  }, [audio]);

  return (
    <div className="page">
      <button className="back-btn" onClick={() => nav("/")}>
        ⬅ Home
      </button>

      <h1>{title}</h1>
      <p className="content">{content}</p>

      {link && (
        <a href={link} target="_blank" rel="noreferrer">
          <button className="action">{buttonText}</button>
        </a>
      )}
    </div>
  );
}
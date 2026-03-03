import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function IframePage({
  title,
  content,
  audio,
  iframeUrl,
}) {
  const navigate = useNavigate();
  const audioRef = useRef(null);

  // 🔊 Auto play audio
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Top Bar */}
      <div
        style={{
          background: "#002855",
          color: "white",
          padding: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <h2 style={{ margin: 0 }}>{title}</h2>

        <button
          onClick={() => navigate("/")}
          style={{
            background: "#ffcc00",
            border: "none",
            padding: "10px 20px",
            fontWeight: "bold",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          ⬅ Back
        </button>
      </div>

      {/* Narration Section */}
      <div style={{ padding: "20px", background: "#f5f7ff" }}>
        <p style={{ fontSize: "18px", lineHeight: "1.6" }}>{content}</p>

        {/* Hidden audio autoplay */}
        <audio ref={audioRef} src={audio} />
      </div>

      {/* Iframe Section */}
      <iframe
        src={iframeUrl}
        title={title}
        style={{
          flex: 1,
          border: "none"
        }}
      />
    </div>
  );
}
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.png";
import conf from "../assets/adsssc.png";
import gram from "../assets/gramvista.png";

export default function Home() {
  const nav = useNavigate();

  // 🎤 Welcome voice on load
  useEffect(() => {
    const welcomeText =
      "Welcome to Sahr-dhaya. What would you like to know?";

    const utter = new SpeechSynthesisUtterance(welcomeText);

    // Male clarity tuning
  utter.rate = 0.70;   // Kerala pacing
utter.pitch = 0.88;
    // Small delay = natural feel
    const timer = setTimeout(() => {
      speechSynthesis.cancel();
      speechSynthesis.speak(utter);
    }, 600);

    // Stop speech when leaving home
    return () => {
      clearTimeout(timer);
      speechSynthesis.cancel();
    };
  }, []);

  const tiles = [
    {
      title: "Admissions Open 2026",
      icon: logo,
      path: "/admission",
    },
    {
      title: "ADSSSC 2026",
      icon: conf,
      path: "/conference",
    },
    {
      title: "GRAMVISTA",
      icon: gram,
      path: "/gramvista",
    },
    {
      title: "About Sahrdaya",
      icon: logo,
      path: "/about",
    },
    {
      title: "Ask Sahrdaya AI",
      icon: logo,
      path: "/chat",
    },
    {
      title: "Campus Video",
      icon: logo,
      path: "/video",
    },
  ];

  return (
    <div className="home">
      <header className="header-inner">
        <img src={logo} className="logo" />
        <h1>Sahrdaya Smart Kiosk</h1>
      </header>

      <div className="grid">
        {tiles.map((t, i) => (
          <div key={i} className="tile" onClick={() => nav(t.path)}>
            <img src={t.icon} className="icon" />
            <h2>{t.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
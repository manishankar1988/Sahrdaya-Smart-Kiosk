import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import logo from "../assets/logo.png";
import banner from "../assets/banner1.png";
import conf from "../assets/adsssc.png";
import gram from "../assets/gramvista.png";
import welcomeAudio from "../assets/welcome.mp3";


export default function Home() {
  const nav = useNavigate();
 

  // 🎤 Welcome voice on load
useEffect(() => {
  const audio = new Audio(welcomeAudio);

  audio.volume = 1; // 0 to 1

  const timer = setTimeout(() => {
    audio.play().catch(() => {
      console.log("Autoplay blocked by browser");
    });
  }, 600);

  return () => {
    clearTimeout(timer);
    audio.pause();
    audio.currentTime = 0;
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
  <img src={banner} className="logo" />
  <h1 className="kiosk-title">SAHRDAYA SMART KIOSK</h1>
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
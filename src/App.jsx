import Home from "./components/Home";
import Chatbot from "./components/Chatbot";
import Admissions from "./components/Admissions";
import AudioIframePage from "./components/IframePage";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

// 🎧 AUDIO IMPORTS
import confAudio from "../public/assets/conf.mp3";
import gramAudio from "../public/assets/gramvista.mp3";
import aboutAudio from "../public/assets/about.mp3";
import videoAudio from "../public/assets/video.mp3";

const confText = `
The International Conference on Artificial Intelligence Driven Solutions for Sustainable Smart Cities: Challenges and Opportunities (ADSSSC 2026) focuses on intelligent computational systems that enable inclusive, resilient, and sustainable urban environments.
`;

const gramvistaText = `
An inclusive village-scale Cyber-Physical Systems initiative integrating water, energy, agriculture, healthcare, safety, and governance into a unified digital ecosystem.
`;

const aboutText = `
Sahrdaya College is an autonomous engineering college entering into 25 years of excellence.
All UG programs are accredited by NBA.
Kerala's First Intel Accredited AI Campus.
`;

const campusVideoText =
  "Sahrdaya College of Engineering and Technology — a glimpse into our vibrant campus life.";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admissions />} />

        {/* 🎧 CONFERENCE */}
        <Route
          path="/conference"
          element={
            <AudioIframePage
              title="ADSSSC 2026"
              content={confText}
              audio={confAudio}
              iframeUrl="https://adsssc.sahrdaya.ac.in/"
            />
          }
        />

        {/* 🎧 GRAMVISTA */}
        <Route
          path="/gramvista"
          element={
            <AudioIframePage
              title="GRAMVISTA"
              content={gramvistaText}
              audio={gramAudio}
              iframeUrl="https://adsssc.sahrdaya.ac.in/gramvista.html"
            />
          }
        />

        {/* 🎧 ABOUT */}
        <Route
          path="/about"
          element={
            <AudioIframePage
              title="About Sahrdaya"
              content={aboutText}
              audio={aboutAudio}
              iframeUrl="https://sahrdaya.ac.in/about/about-us"
            />
          }
        />

        {/* 🎧 VIDEO */}
        <Route
          path="/video"
          element={
            <AudioIframePage
              title="Campus Life"
              content={campusVideoText}
              audio={videoAudio}
              iframeUrl="https://www.youtube.com/embed/jplXwZaQoX8"
            />
          }
        />

        <Route path="/chat" element={<Chatbot />} />

      </Routes>
    </BrowserRouter>
  );
}
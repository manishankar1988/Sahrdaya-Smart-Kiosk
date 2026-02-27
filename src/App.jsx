import Home from "./components/Home";
import SectionPage from "./components/SectionPage";
import Chatbot from "./components/Chatbot";
import Admissions from "./components/Admissions";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

// 🎧 AUDIO IMPORTS
import confAudio from "../public/assets/conf.mp3";
import gramAudio from "../public/assets/gramvista.mp3";
import aboutAudio from "../public/assets/about.mp3";
import videoAudio from "../public/assets/video.mp3";

const confText = `
The International Conference on Artificial Intelligence Driven Solutions for Sustainable Smart Cities: Challenges and Opportunities (ADSSSC 2026) focuses on intelligent computational systems that enable inclusive, resilient, and sustainable urban environments across domains such as healthcare, mobility, energy, environment, and infrastructure.
The conference brings together researchers, practitioners, and industry professionals to present cutting-edge research, innovative applications, and cross-disciplinary solutions in Electrical, Electronics, Computer Science, Biomedical, Biotechnology, and Information Sciences.
ADSSSC 2026 features invited keynotes, technical paper sessions, tutorials, and workshops, and aims to foster strong collaborations between academia, industry, and government agencies.
`;

const gramvistaText = `
An inclusive village-scale Cyber-Physical Systems initiative integrating water, energy, agriculture, healthcare, safety, and governance into a unified digital ecosystem.
Aligned with Unnat Bharat Abhiyan and driven by the Sahrdaya community vision of education through service, Gram Vista enables sustainable rural transformation through technology, collaboration, and innovation.
Connecting villages to global research, industry, and policy platforms through the International IEEE ADSSSC 2026 Conference.
`;

const aboutText = `
Sahrdaya College is an autonomous engineering college entering into 25 years of excellence.
All UG programs are accredited by NBA.

Kerala's First Intel Accredited AI Campus.
More than 90 percent placements.

Sahrdaya encourages project-based and experiential learning.
Government recognized Technology Business Incubator and advanced research labs.

Residential campus with separate hostels.
Winner of Swachh Campus Award and Best IEEE Student Branch.
Modern library with 24x7 internet connectivity.
`;

const campusVideoText =
  "Sahrdaya College of Engineering and Technology. A glimpse into our vibrant campus life, state-of-the-art facilities, and dynamic student community that makes Sahrdaya a unique place to learn and grow.";

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
            <SectionPage
              title="ADSSSC 2026"
              content={confText}
              audio={confAudio}
              link="https://adsssc.sahrdaya.ac.in/"
              buttonText="Register"
            />
          }
        />

        {/* 🎧 GRAMVISTA */}
        <Route
          path="/gramvista"
          element={
            <SectionPage
              title="GRAMVISTA"
              content={gramvistaText}
              audio={gramAudio}
              link="https://adsssc.sahrdaya.ac.in/gramvista.html"
              buttonText="Know More"
            />
          }
        />

        {/* 🎧 ABOUT */}
        <Route
          path="/about"
          element={
            <SectionPage
              title="About Sahrdaya"
              content={aboutText}
              audio={aboutAudio}
              link="https://sahrdaya.ac.in/about/about-us"
              buttonText="Visit Website"
            />
          }
        />

        {/* 🎧 VIDEO PAGE */}
        <Route
          path="/video"
          element={
            <SectionPage
              title="Campus Life Video"
              content={campusVideoText}
              audio={videoAudio}
              link="https://www.youtube.com/watch?v=jplXwZaQoX8"
              buttonText="Watch Video"
            />
          }
        />

        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}
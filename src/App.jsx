import Home from "./components/Home";
import SectionPage from "./components/SectionPage";
import Chatbot from "./components/Chatbot";
import { useEffect } from "react";
import Admissions from "./components/Admissions";
import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

const admissionData = {
  UG: [
    "Computer Science and Engineering (AI & ML)",
    "Computer Science & Engineering",
    "Cyber Physical Systems",
    "Biomedical Engineering",
    "Biotechnology",
    "Civil Engineering",
    "Electronics & Communication Engineering",
    "Electrical & Electronics Engineering",
    "Electrical and Computer Engineering"
  ],
  PG: [
    "MTech Biomedical Engineering",
    "MTech Computer Science & Engineering",
    "MTech Embedded Systems",
    "MTech Industrial Biotechnology",
    "MTech Structural Engineering & Construction Management",
    "MTech VLSI"
  ],
  INTEGRATED: [
    "Integrated MTech Biotech Engineering",
    "Integrated MTech VLSI"
  ],
  PHD: [
    "PhD Biotechnology & Allied Branches",
    "PhD Chemistry",
    "PhD Computer Science & Allied Branches",
    "PhD Electronics & Allied Branches"
  ]
};

const confText = `
The International Conference on Artificial Intelligence Driven Solutions for Sustainable Smart Cities: Challenges and Opportunities (ADSSSC 2026) focuses on intelligent computational systems that enable inclusive, resilient, and sustainable urban environments across domains such as healthcare, mobility, energy, environment, and infrastructure.
The conference brings together researchers, practitioners, and industry professionals to present cutting-edge research, innovative applications, and cross-disciplinary solutions in Electrical, Electronics, Computer Science, Biomedical, Biotechnology, and Information Sciences.
ADSSSC 2026 features invited keynotes, technical paper sessions, tutorials, and workshops, and aims to foster strong collaborations between academia, industry, and government agencies..
`;

const gramvistaText = `
An inclusive village-scale Cyber-Physical Systems (CPS) initiative integrating water, energy, agriculture, healthcare, safety, and governance into a unified digital ecosystem.
Aligned with Unnat Bharat Abhiyan and driven by the Sahrdaya community vision of education through service, Gram Vista enables sustainable rural transformation through technology, collaboration, and innovation.
Connecting villages to global research, industry, and policy platforms through the International IEEE ADSSSC 2026 Conference.
`;

const aboutText = `
Sahrdhaya College is a Autonomous Engineering College entering in to 25 years of excellence
All UG programs are Accredited by NBA

Kerala's First Intel Accredited AI Campus

More than 90% placements

Sahrdhaya Encourages Project Based Learning & Experiential Learning

Sahrdhaya has a Government Recognized Technology Business Incubator (TBI) e-Yantra, IOT, C2S, CPS & Robotics Labs

also Industry-Supported Laboratories from IIT, Agappe, Accenture, Dell & Intel

it is a Residential Campus with separate hostel for boys & girls

Winner of Swachh Campus Award from AICTE & Eco-friendly Green Campus

sahrdhaya has been awarded with Best IEEE Student Branch

Modern Library with 24×7 Internet Connectivity

`;

const campusVideoText='Sahrdaya College of Engineering and Technology - A glimpse into our vibrant campus life, state-of-the-art facilities, and the dynamic student community that makes Sahrdaya a unique place to learn and grow. Experience the energy and spirit of Sahrdaya through this captivating video tour.ss'

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admission" element={<Admissions />} />
  


        <Route
          path="/conference"
          element={
            <SectionPage
              title="ADSSSC 2026"
              content={confText}
              link="https://adsssc.sahrdaya.ac.in/"
              buttonText="Register"
            />
          }
        />

        <Route
          path="/gramvista"
          element={
            <SectionPage
              title="GRAMVISTA"
              content={gramvistaText}
              link="https://adsssc.sahrdaya.ac.in/gramvista.html"
              buttonText="Know More"
            />
          }
        />

        <Route
          path="/about"
          element={
            <SectionPage
              title="About Sahrdaya"
              content={aboutText}
              link="https://sahrdaya.ac.in/about/about-us"
              buttonText="Visit Website"
            />
          }
        />
        <Route
          path="/video"
          element={
            <SectionPage
              title="Campus Life Video"
              content={campusVideoText}
              link="https://www.youtube.com/watch?v=jplXwZaQoX8"
              buttonText="watch video"
            />
          }
        />

        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}
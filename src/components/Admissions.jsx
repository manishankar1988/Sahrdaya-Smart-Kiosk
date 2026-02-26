// Admissions.jsx
import { useState } from "react";
import "./admission.css";
import SpeakButton from "./SpeakButton";
import { admissionSections } from "../data/admissionData";

export default function Admissions() {
  const firstKey = Object.keys(admissionSections)[0] || "";
  const [active, setActive] = useState(firstKey);

  // For Programmes Offered inner tabs
  // default to first inner category
  const programmesInnerKeys =
    active === "Programmes Offered"
      ? Object.keys(admissionSections["Programmes Offered"]).filter(
          (k) => k.toLowerCase() !== "note"
        )
      : [];
  const [innerActive, setInnerActive] = useState(
    programmesInnerKeys[0] || ""
  );

  const welcomeVoice =
    "Explore wide range of UG, PG and PhD programmes. Admissions are open for 2026. Click on the sections to know more.";

  // Render content for any section or subsection
  const renderSectionContent = (sectionData) => {
    // If sectionData is object & not array
    if (
      sectionData &&
      typeof sectionData === "object" &&
      !Array.isArray(sectionData)
    ) {
      const entries = Object.entries(sectionData);
      return (
        <>
          {entries.map(([subKey, value], idx) => {
            // Skip note here; it may be rendered elsewhere
            if (subKey.toLowerCase() === "note") {
              return (
                <div key={idx} className="section-note">
                  {value}
                </div>
              );
            }
            return (
              <div key={idx} className="subsection">
                <h3>{subKey}</h3>
                {Array.isArray(value) ? (
                  <ul>
                    {value.map((li, i2) => (
                      <li key={i2}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{value}</p>
                )}
              </div>
            );
          })}
        </>
      );
    }

    // If it's an array
    if (Array.isArray(sectionData)) {
      return (
        <ul>
          {sectionData.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }

    // Fallback to text
    return <p>{String(sectionData)}</p>;
  };

  // For Programmes Offered inner content only
  const renderProgrammesInner = () => {
    if (active !== "Programmes Offered") return null;
    if (!innerActive) return null;

    const innerData =
      admissionSections["Programmes Offered"][innerActive];

    return (
      <>
        {/* Inner ribbon */}
        <div className="inner-tabs">
          {programmesInnerKeys.map((key) => (
            <div
              key={key}
              className={`itab ${innerActive === key ? "active" : ""}`}
              onClick={() => setInnerActive(key)}
            >
              {key}
            </div>
          ))}
        </div>

        {/* Inner content */}
        <div className="inner-content">
          {Array.isArray(innerData) ? (
            <ul>
              {innerData.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          ) : (
            renderSectionContent(innerData)
          )}
        </div>
      </>
    );
  };

  return (
    <div className="admission-wrapper">
      {/* Welcome voice */}
      <SpeakButton text={welcomeVoice} />

      <h1 className="title">Admissions Open 2026</h1>

      <div className="layout">
        {/* Main vertical ribbon */}
        <div className="vertical-tabs">
          {Object.keys(admissionSections).map((key) => (
            <div
              key={key}
              className={`vtab ${active === key ? "active" : ""}`}
              onClick={() => {
                setActive(key);
                // Reset innerActive when switching away
                if (key !== "Programmes Offered") {
                  setInnerActive("");
                } else {
                  // Set to first inner tab
                  const keys = Object.keys(
                    admissionSections["Programmes Offered"]
                  ).filter((k) => k.toLowerCase() !== "note");
                  setInnerActive(keys[0] || "");
                }
              }}
            >
              {key}
            </div>
          ))}
        </div>

        {/* Content area */}
        <div className="content-area">
          <h2>{active}</h2>

          {/* If Programmes Offered, show inner ribbon + content */}
          {active === "Programmes Offered"
            ? renderProgrammesInner()
            : renderSectionContent(admissionSections[active])}

          {/* Only for Programmes Offered: CTA */}
          {active === "Programmes Offered" && (
            <a
              href="https://sahrdaya.ac.in/admission/portal"
              target="_blank"
              rel="noreferrer"
              className="apply-btn"
            >
              Apply Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
let selectedVoice = null;

export const getStableIndianVoice = () => {
  const voices = speechSynthesis.getVoices();

  if (selectedVoice) return selectedVoice;

  // Strong en-IN preference
  selectedVoice =
    voices.find(v => v.lang === "en-IN") ||
    voices.find(v => v.name.includes("Ravi")) ||
    voices.find(v => v.name.includes("India")) ||
    voices.find(v => v.name.includes("UK English Male")) ||
    voices[0];

  return selectedVoice;
};
const video = document.getElementById("video");
const statusText = document.getElementById("statusText");
const moodText = document.getElementById("moodText");
const manualMood = document.getElementById("manualMood");
const previewList = document.getElementById("previewList");
const browseList = document.getElementById("browseList");
const libraryList = document.getElementById("libraryList");
const languageFilters = document.getElementById("languageFilters");
const nowPlaying = document.getElementById("nowPlaying");
const videoPlayer = document.getElementById("videoPlayer");
const overlay = document.getElementById("overlay");
const faceText = document.getElementById("faceText");

const moodNames = {
  happy: "Happy / Excited",
  sad: "Sad / Calm",
  angry: "Angry / Intense",
  surprised: "Surprised / Energetic",
  neutral: "Neutral / Focused",
};

const playlists = {
  happy: [
    {
      title: "Dil Se Dance",
      language: "Hindi",
      genre: "Bollywood Pop",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Sunlit Groove",
      language: "English",
      genre: "Indie Pop",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Chennai Sparks",
      language: "Tamil",
      genre: "Gaana Fusion",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "Malayalam Bloom",
      language: "Malayalam",
      genre: "Soft Pop",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      title: "Hyderabad Heights",
      language: "Telugu",
      genre: "Film Beat",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Bengaluru Bounce",
      language: "Kannada",
      genre: "Electro Pop",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    {
      title: "Amritsar Shine",
      language: "Punjabi",
      genre: "Bhangra",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      title: "Lucknow Lights",
      language: "Hindi",
      genre: "Dance",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
    {
      title: "Golden Hour",
      language: "English",
      genre: "Pop",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    },
    {
      title: "Coastal Glow",
      language: "Tamil",
      genre: "Electro",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
      title: "Kochi Carnival",
      language: "Malayalam",
      genre: "Dance",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    },
    {
      title: "Vizag Vibes",
      language: "Telugu",
      genre: "Festival",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    },
    {
      title: "Mysuru Melodies",
      language: "Kannada",
      genre: "Pop",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    },
    {
      title: "Chandigarh Cheers",
      language: "Punjabi",
      genre: "Bhangra",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    },
  ],
  sad: [
    {
      title: "Shaam Ki Roshni",
      language: "Hindi",
      genre: "Acoustic",
      query: "sad hindi songs",
    },
    {
      title: "Midnight Letters",
      language: "English",
      genre: "Lo-fi",
      query: "sad english songs",
    },
    {
      title: "Rasathi Unna",
      language: "Tamil",
      genre: "Melodic",
      query: "Rasathi Unna Tamil sad song",
    },
    {
      title: "Poongatrile",
      language: "Tamil",
      genre: "Melodic",
      query: "Poongatrile Tamil sad song",
    },
    {
      title: "Coconut Breeze",
      language: "Malayalam",
      genre: "Ambient",
      query: "sad malayalam songs",
    },
    {
      title: "Charminar Hush",
      language: "Telugu",
      genre: "Soft Rock",
      query: "sad telugu songs",
    },
    {
      title: "Mysuru Mist",
      language: "Kannada",
      genre: "Piano",
      query: "sad kannada songs",
    },
    {
      title: "Ludhiana Lullaby",
      language: "Punjabi",
      genre: "Soul",
      query: "sad punjabi songs",
    },
    {
      title: "Evening Ghaat",
      language: "Hindi",
      genre: "Sufi",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    {
      title: "Blue Notes",
      language: "English",
      genre: "Jazz",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      title: "Monsoon Drift",
      language: "Tamil",
      genre: "Chill",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
    {
      title: "River Lull",
      language: "Malayalam",
      genre: "Ambient",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    },
    {
      title: "Nizam Still",
      language: "Telugu",
      genre: "Acoustic",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
      title: "Silk City Haze",
      language: "Kannada",
      genre: "Instrumental",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    },
    {
      title: "Amritsar Rain",
      language: "Punjabi",
      genre: "Soul",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    },
  ],
  angry: [
    {
      title: "Agni Pulse",
      language: "Hindi",
      genre: "Rock",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    },
    {
      title: "Fireline",
      language: "English",
      genre: "Alternative",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    },
    {
      title: "Chennai Charge",
      language: "Tamil",
      genre: "Hip Hop",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    },
    {
      title: "Kochi Storm",
      language: "Malayalam",
      genre: "Indie Rock",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    },
    {
      title: "Volt Vizag",
      language: "Telugu",
      genre: "EDM",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Bangalore Blaze",
      language: "Kannada",
      genre: "Trap",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Punjab Riot",
      language: "Punjabi",
      genre: "Hip Hop",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "Dilli Thunder",
      language: "Hindi",
      genre: "Metal",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      title: "Voltage Run",
      language: "English",
      genre: "Rock",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Madurai Clash",
      language: "Tamil",
      genre: "Rap",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    {
      title: "Fort Surge",
      language: "Malayalam",
      genre: "Indie",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      title: "Vizian Beat",
      language: "Telugu",
      genre: "EDM",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
    {
      title: "Steel City",
      language: "Kannada",
      genre: "Rock",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    },
    {
      title: "Ludhiana Rage",
      language: "Punjabi",
      genre: "Trap",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
  ],
  surprised: [
    {
      title: "Aasmaan Lift",
      language: "Hindi",
      genre: "Dance",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    },
    {
      title: "City Spark",
      language: "English",
      genre: "Electro",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    },
    {
      title: "Marina Rush",
      language: "Tamil",
      genre: "Dance",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    },
    {
      title: "Backwater Glow",
      language: "Malayalam",
      genre: "Fusion",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    },
    {
      title: "Hyderabad Glow",
      language: "Telugu",
      genre: "Synth",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    },
    {
      title: "Kaveri Pulse",
      language: "Kannada",
      genre: "Electro",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    },
    {
      title: "Patiala Pop",
      language: "Punjabi",
      genre: "Dance",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Jaipur Jump",
      language: "Hindi",
      genre: "Pop",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Skyline Rush",
      language: "English",
      genre: "Synthwave",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "Neon Marina",
      language: "Tamil",
      genre: "Dance",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      title: "Harbor Lights",
      language: "Malayalam",
      genre: "Electro",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Golden Shore",
      language: "Telugu",
      genre: "Pop",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    {
      title: "Mysuru Flash",
      language: "Kannada",
      genre: "Synth",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    {
      title: "Jalandhar Jump",
      language: "Punjabi",
      genre: "Dance",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
  ],
  neutral: [
    {
      title: "Quiet Yatra",
      language: "Hindi",
      genre: "Focus",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
    },
    {
      title: "Soft Focus",
      language: "English",
      genre: "Ambient",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
      title: "Marina Mist",
      language: "Tamil",
      genre: "Chill",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
    },
    {
      title: "Kerala Calm",
      language: "Malayalam",
      genre: "Chill",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    },
    {
      title: "Deccan Drift",
      language: "Telugu",
      genre: "Instrumental",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3",
    },
    {
      title: "Mysuru Flow",
      language: "Kannada",
      genre: "Ambient",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3",
    },
    {
      title: "Punjab Ease",
      language: "Punjabi",
      genre: "Acoustic",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    },
    {
      title: "Morning Metro",
      language: "Hindi",
      genre: "Instrumental",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3",
    },
    {
      title: "Still Waters",
      language: "English",
      genre: "Chill",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      title: "Quiet Marina",
      language: "Tamil",
      genre: "Ambient",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    {
      title: "Backwater Breeze",
      language: "Malayalam",
      genre: "Acoustic",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    {
      title: "Deccan Dawn",
      language: "Telugu",
      genre: "Piano",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    {
      title: "Bengaluru Pause",
      language: "Kannada",
      genre: "Focus",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    {
      title: "Punjab Calm",
      language: "Punjabi",
      genre: "Ambient",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
  ],
};

const moodForExpression = {
  happy: "happy",
  sad: "sad",
  angry: "angry",
  surprised: "surprised",
  neutral: "neutral",
  fearful: "sad",
  disgusted: "angry",
};

let currentMood = "";
let detectionInterval = null;
const selectedLanguages = new Set();
const library = [];

function buildEmbedUrl(query) {
  const encoded = encodeURIComponent(query);
  return `https://www.youtube.com/embed?listType=search&list=${encoded}`;
}

function languageSlug(language) {
  return language.toLowerCase().replace(/\s+/g, "-");
}

function updateStatus(message) {
  statusText.textContent = message;
}

function updateFaceStatus(message) {
  faceText.textContent = message;
}

function updateMoodDisplay(moodKey) {
  const label = moodKey ? moodNames[moodKey] : "—";
  moodText.textContent = label;
}

function renderLanguageFilters(moodKey) {
  languageFilters.innerHTML = "";
  if (!moodKey || !playlists[moodKey]) {
    return;
  }
  const languages = [...new Set(playlists[moodKey].map((song) => song.language))];
  languages.forEach((language) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = language;
    const slug = languageSlug(language);
    button.className = `lang-button lang-${slug} ${selectedLanguages.has(language) ? "active" : ""}`.trim();
    button.addEventListener("click", () => {
      if (selectedLanguages.has(language)) {
        selectedLanguages.delete(language);
      } else {
        selectedLanguages.add(language);
      }
      renderAll(currentMood);
    });
    languageFilters.appendChild(button);
  });
}

function getFilteredSongs(moodKey) {
  const songs = playlists[moodKey] || [];
  if (!selectedLanguages.size) {
    return songs;
  }
  return songs.filter((song) => selectedLanguages.has(song.language));
}

function createCard({ song, moodKey, index, showAdd }) {
  const card = document.createElement("div");
  card.className = "preview-card";

  const title = document.createElement("div");
  title.className = "preview-title";
  title.textContent = song.title;

  const meta = document.createElement("div");
  meta.className = "preview-meta";
  meta.textContent = `${song.language} • ${song.genre}`;

  const actions = document.createElement("div");
  actions.className = "preview-actions";

  const button = document.createElement("button");
  button.textContent = index === 0 ? "Play" : "Preview";
  button.className = index === 0 ? "secondary" : "";
  button.addEventListener("click", () => playSong(moodKey, song));

  actions.appendChild(button);

  if (showAdd) {
    const addButton = document.createElement("button");
    addButton.textContent = "Add to Library";
    addButton.className = "add";
    addButton.addEventListener("click", () => addToLibrary(song));
    actions.appendChild(addButton);
  }

  card.appendChild(title);
  card.appendChild(meta);
  card.appendChild(actions);
  return card;
}

function addToLibrary(song) {
  if (!library.find((item) => item.title === song.title && item.language === song.language)) {
    library.push(song);
    renderLibrary();
  }
}

function renderPlaylist(moodKey) {
  previewList.innerHTML = "";
  if (!moodKey || !playlists[moodKey]) {
    previewList.innerHTML = "<p class=\"hint\">Choose a mood to see song previews.</p>";
    return;
  }

  const filtered = getFilteredSongs(moodKey);
  const grouped = filtered.reduce((acc, song) => {
    if (!acc[song.language]) {
      acc[song.language] = [];
    }
    acc[song.language].push(song);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([language, songs]) => {
    songs.slice(0, 3).forEach((song, index) => {
      const card = createCard({ song, moodKey, index, showAdd: true });
      previewList.appendChild(card);
    });
  });
}

function renderBrowse(moodKey) {
  browseList.innerHTML = "";
  if (!moodKey || !playlists[moodKey]) {
    browseList.innerHTML = "<p class=\"empty-state\">Select a mood to browse tracks.</p>";
    return;
  }
  const filtered = getFilteredSongs(moodKey);
  filtered.forEach((song, index) => {
    const card = createCard({ song, moodKey, index, showAdd: true });
    browseList.appendChild(card);
  });
}

function renderLibrary() {
  libraryList.innerHTML = "";
  if (!library.length) {
    libraryList.innerHTML = "<p class=\"empty-state\">No songs yet. Add tracks to build your library.</p>";
    return;
  }
  library.forEach((song, index) => {
    const card = createCard({ song, moodKey: currentMood || "neutral", index, showAdd: false });
    libraryList.appendChild(card);
  });
}

function renderAll(moodKey) {
  renderLanguageFilters(moodKey);
  renderPlaylist(moodKey);
  renderBrowse(moodKey);
  renderLibrary();
}

function playSong(moodKey, song) {
  nowPlaying.querySelector(".now-title").textContent = song.title;
  nowPlaying.querySelector(".now-meta").textContent = `${song.language} • ${song.genre} • ${moodNames[moodKey]}`;
  const query = song.query || `${moodKey} ${song.language} songs`;
  videoPlayer.src = buildEmbedUrl(query);
  updateStatus("Preview loaded. Tap play inside the player.");
}

function chooseMood(moodKey) {
  if (!moodKey || moodKey === currentMood) {
    return;
  }
  currentMood = moodKey;
  updateMoodDisplay(moodKey);
  renderAll(moodKey);
  playSong(moodKey, playlists[moodKey][0]);
}

async function setupCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    updateStatus("Camera ready. Detecting expressions…");
  } catch (error) {
    updateStatus("Camera unavailable. Use manual mood picker.");
  }
}

async function loadModels() {
  updateStatus("Loading expression model…");
  await Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri(
      "https://justadudewhohacks.github.io/face-api.js/models"
    ),
    faceapi.nets.faceExpressionNet.loadFromUri(
      "https://justadudewhohacks.github.io/face-api.js/models"
    ),
  ]);
}

async function detectExpression() {
  if (!video.srcObject) {
    return;
  }

  const result = await faceapi
    .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
    .withFaceExpressions();

  const dims = faceapi.matchDimensions(overlay, video, true);
  overlay.width = dims.width;
  overlay.height = dims.height;
  const ctx = overlay.getContext("2d");
  ctx.clearRect(0, 0, overlay.width, overlay.height);

  if (!result) {
    updateStatus("No face found. Adjust lighting or move closer.");
    updateFaceStatus("Face: not detected");
    return;
  }

  const resized = faceapi.resizeResults(result, dims);
  faceapi.draw.drawDetections(overlay, resized);
  updateFaceStatus("Face: detected");

  const expressions = result.expressions;
  const bestExpression = Object.keys(expressions).reduce((a, b) =>
    expressions[a] > expressions[b] ? a : b
  );

  const moodKey = moodForExpression[bestExpression] || "neutral";
  updateStatus(`Detected: ${bestExpression}`);
  chooseMood(moodKey);
}

manualMood.addEventListener("change", () => {
  const moodKey = manualMood.value;
  if (moodKey) {
    updateStatus("Manual mood selected.");
    chooseMood(moodKey);
  }
});

window.addEventListener("DOMContentLoaded", async () => {
  renderAll("");
  await loadModels();
  await setupCamera();

  detectionInterval = setInterval(() => {
    if (!manualMood.value) {
      detectExpression();
    }
  }, 2500);
});

window.addEventListener("beforeunload", () => {
  if (detectionInterval) {
    clearInterval(detectionInterval);
  }
});

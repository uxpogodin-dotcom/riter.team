const root = document.documentElement;
const videoGrid = document.getElementById('videoGrid');
const filters = document.querySelectorAll('.pill--filter');
const playlistButtons = document.querySelectorAll('.playlist-item');
const heroVideoCard = document.getElementById('heroVideoCard').querySelector('iframe');
const newsStream = document.getElementById('newsStream');
const togglePulse = document.getElementById('togglePulse');
const tickerTrack = document.getElementById('tickerTrack');
const longreadsGrid = document.getElementById('longreadsGrid');
const progressBar = document.getElementById('progressBar');
const leaderboardList = document.getElementById('leaderboardList');
const dailyBriefing = document.getElementById('dailyBriefing');
const randomJump = document.getElementById('randomJump');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalAction = document.getElementById('modalAction');
const darkModeToggle = document.getElementById('darkModeToggle');
const liveUsers = document.getElementById('liveUsers');
const nextEvent = document.getElementById('nextEvent');
const heroUpdated = document.getElementById('heroUpdated');
const year = document.getElementById('year');

const videos = [
  {
    title: 'AI founders decrypt Europe\'s new rules',
    description: 'Speed brief on the digital markets act and why startups still cheer.',
    category: 'tech',
    duration: '4:12',
    vibe: 'Policy pulse',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    url: 'https://www.youtube.com/embed/2sXjFzF9Zy0'
  },
  {
    title: 'Paris Fashion Week decoded by economists',
    description: 'What hemlines and luxury resale tell us about consumer confidence.',
    category: 'culture',
    duration: '3:26',
    vibe: 'Culture radar',
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    url: 'https://www.youtube.com/embed/O5nskjZ_GoI'
  },
  {
    title: 'Next-gen batteries from algae',
    description: 'Biotech labs race to outgrow lithium supply chains.',
    category: 'planet',
    duration: '5:03',
    vibe: 'Climate now',
    thumbnail: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=900&q=80',
    url: 'https://www.youtube.com/embed/4p-3U7JdWAs'
  },
  {
    title: 'Metaverse diplomacy is actually happening',
    description: 'Inside the embassies opening in virtual worlds and what they mean.',
    category: 'tech',
    duration: '2:47',
    vibe: 'Future politics',
    thumbnail: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
    url: 'https://www.youtube.com/embed/LXb3EKWsInQ'
  },
  {
    title: 'Indie creators reinvent investigative journalism',
    description: 'From TikTok threads to community-funded leaks.',
    category: 'culture',
    duration: '4:55',
    vibe: 'Creator lab',
    thumbnail: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80',
    url: 'https://www.youtube.com/embed/2U76x2dR5Z4'
  },
  {
    title: 'Regenerative cities: the blueprint',
    description: 'Mayors and climate designers team up for circular urbanism.',
    category: 'planet',
    duration: '6:32',
    vibe: 'Urban futures',
    thumbnail: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    url: 'https://www.youtube.com/embed/mF0QAngzre0'
  }
];

const news = [
  {
    time: '08:45',
    headline: 'EU fast-tracks digital identity wallet pilot',
    summary: 'Public beta opens in five capitals with privacy-preserving credentials backed by open source consortia.',
    reactions: { fire: 64, bulb: 23, wow: 12 }
  },
  {
    time: '08:20',
    headline: 'African solar grids beat funding slump',
    summary: 'Three community-owned grids raised $110M through tokenized green bonds crowdfunded by diaspora investors.',
    reactions: { fire: 88, bulb: 31, wow: 16 }
  },
  {
    time: '07:55',
    headline: 'Streamers partner with classrooms',
    summary: 'Education ministry pilots co-created docu-series blending esports narratives with civic lessons.',
    reactions: { fire: 44, bulb: 52, wow: 25 }
  },
  {
    time: '07:10',
    headline: 'Biofabricated leather hits mainstream retail',
    summary: 'Three major brands drop capsule collections stitched with lab-grown hides, slash water footprint by 91%.',
    reactions: { fire: 71, bulb: 19, wow: 34 }
  }
];

const longreads = [
  {
    title: 'The cities racing to be carbon-negative playgrounds',
    summary: 'An immersive tour through five experimental districts where climate tech feels like streetwear.',
    readTime: '17 min read',
    author: 'Daria Koroleva',
    cover: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    action: 'Open interactive map'
  },
  {
    title: 'Gen-Z financiers are rewriting the venture rulebook',
    summary: 'How collective intelligence, Discord deal rooms, and quadratic funding break the old boys club.',
    readTime: '21 min read',
    author: 'Jamal Saneev',
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
    action: 'Read the playbook'
  },
  {
    title: 'Gaming guilds become global unions',
    summary: 'Player-owned guilds negotiate contracts, wages, and benefits with major esports franchises across continents.',
    readTime: '14 min read',
    author: 'Lina Wu',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    action: 'Dive into the dossier'
  }
];

const leaderboard = [
  { name: 'Polina K.', streak: 47 },
  { name: 'NeoLogic DAO', streak: 42 },
  { name: 'Kaito R.', streak: 39 },
  { name: 'Inna B.', streak: 34 },
  { name: 'LatAm Solar Squad', streak: 29 }
];

const reactionEmojis = {
  fire: '🔥',
  bulb: '💡',
  wow: '🤯'
};

function renderVideos(filter = 'all') {
  const fragment = document.createDocumentFragment();
  videos
    .filter(video => filter === 'all' || video.category === filter)
    .forEach(video => {
      const card = document.createElement('article');
      card.className = 'card video-card';
      card.innerHTML = `
        <div class="card-media" role="presentation">
          <img src="${video.thumbnail}" alt="${video.title}" loading="lazy" />
        </div>
        <div>
          <span class="badge">${video.vibe}</span>
          <h3>${video.title}</h3>
          <p>${video.description}</p>
        </div>
        <div class="card-footer">
          <span>${video.duration}</span>
          <button class="pill pill--ghost" data-url="${video.url}" aria-label="Play ${video.title}">Play ▶</button>
        </div>
      `;
      fragment.appendChild(card);
    });
  videoGrid.innerHTML = '';
  videoGrid.appendChild(fragment);
}

function renderNews() {
  const fragment = document.createDocumentFragment();
  news.forEach(item => {
    const wrapper = document.createElement('article');
    wrapper.className = 'news-item';
    wrapper.innerHTML = `
      <div class="news-time">${item.time}</div>
      <div>
        <h3>${item.headline}</h3>
        <p>${item.summary}</p>
      </div>
      <div class="reaction-bar">
        ${Object.entries(item.reactions)
          .map(([key, value]) => `<button data-reaction="${key}" aria-label="${reactionEmojis[key]} reaction">${reactionEmojis[key]} <span>${value}</span></button>`)
          .join('')}
      </div>
    `;
    fragment.appendChild(wrapper);
  });
  newsStream.innerHTML = '';
  newsStream.appendChild(fragment);
}

function renderLongreads() {
  const fragment = document.createDocumentFragment();
  longreads.forEach(item => {
    const card = document.createElement('article');
    card.className = 'longread-card';
    card.innerHTML = `
      <img src="${item.cover}" alt="${item.title}" loading="lazy" />
      <div class="longread-content">
        <span class="badge">${item.readTime}</span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="longread-stats">
          <span>By ${item.author}</span>
          <button class="longread-action">${item.action}</button>
        </div>
      </div>
    `;
    fragment.appendChild(card);
  });
  longreadsGrid.innerHTML = '';
  longreadsGrid.appendChild(fragment);
}

function populateLeaderboard() {
  leaderboardList.innerHTML = '';
  leaderboard.forEach(entry => {
    const li = document.createElement('li');
    li.innerHTML = `<span>${entry.name}</span><span>${entry.streak} day streak</span>`;
    leaderboardList.appendChild(li);
  });
}

function updateLiveStats() {
  const base = 12000;
  const jitter = Math.floor(Math.random() * 1200);
  liveUsers.textContent = (base + jitter).toLocaleString('en-US');

  const now = new Date();
  const eventTime = new Date();
  eventTime.setHours(12, 0, 0, 0);
  if (now > eventTime) {
    eventTime.setDate(eventTime.getDate() + 1);
  }
  const diff = eventTime - now;
  const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  nextEvent.textContent = `${hours}:${minutes}:${seconds}`;
}

function updateHeroTimestamp() {
  const minutesAgo = Math.floor(Math.random() * 9) + 1;
  heroUpdated.textContent = `${minutesAgo}m ago`;
}

function toggleModal(show = true) {
  modal.setAttribute('aria-hidden', String(!show));
  if (show) {
    modal.querySelector('.modal-content').focus?.();
  }
}

function handleFilterClick(event) {
  const { filter } = event.target.dataset;
  if (!filter) return;
  filters.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
  renderVideos(filter);
}

function handleVideoAction(event) {
  const button = event.target.closest('button[data-url]');
  if (!button) return;
  heroVideoCard.src = button.dataset.url;
  document.querySelectorAll('.playlist-item').forEach(btn => btn.classList.remove('active'));
}

function handlePlaylistClick(event) {
  const button = event.target.closest('.playlist-item');
  if (!button) return;
  playlistButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  heroVideoCard.src = button.dataset.video;
}

function handleReactions(event) {
  const button = event.target.closest('button[data-reaction]');
  if (!button) return;
  const count = button.querySelector('span');
  const current = Number(count.textContent);
  count.textContent = current + 1;
  button.classList.add('active');
  setTimeout(() => button.classList.remove('active'), 600);
}

function handleRandomJump() {
  const sections = ['videos', 'news', 'longreads'];
  const target = document.getElementById(sections[Math.floor(Math.random() * sections.length)]);
  target.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function startProgressBar() {
  const totalHeight = longreadsGrid.scrollHeight;
  const viewportHeight = window.innerHeight;
  const scrollTop = window.scrollY;
  const longreadsTop = longreadsGrid.getBoundingClientRect().top + scrollTop;
  const visibleHeight = Math.min(scrollTop + viewportHeight - longreadsTop, totalHeight);
  const percentage = Math.max(0, Math.min(100, (visibleHeight / totalHeight) * 100));
  progressBar.style.width = `${percentage}%`;
}

function toggleDarkMode() {
  root.classList.toggle('light');
  const isLight = root.classList.contains('light');
  darkModeToggle.textContent = isLight ? '🌞' : '🌗';
  localStorage.setItem('ved-theme', isLight ? 'light' : 'dark');
}

function restoreTheme() {
  const saved = localStorage.getItem('ved-theme');
  if (saved === 'light') {
    root.classList.add('light');
    darkModeToggle.textContent = '🌞';
  }
}

function updateYear() {
  year.textContent = new Date().getFullYear();
}

renderVideos();
renderNews();
renderLongreads();
populateLeaderboard();
updateLiveStats();
updateHeroTimestamp();
restoreTheme();
updateYear();

filters.forEach(btn => btn.addEventListener('click', handleFilterClick));
videoGrid.addEventListener('click', handleVideoAction);
playlistButtons.forEach(btn => btn.addEventListener('click', handlePlaylistClick));
newsStream.addEventListener('click', handleReactions);
randomJump.addEventListener('click', handleRandomJump);
dailyBriefing.addEventListener('click', () => toggleModal(true));
modalClose.addEventListener('click', () => toggleModal(false));
modalAction.addEventListener('click', () => {
  toggleModal(false);
  document.getElementById('longreads').scrollIntoView({ behavior: 'smooth' });
});
darkModeToggle.addEventListener('click', toggleDarkMode);

togglePulse.addEventListener('click', () => {
  const isPaused = tickerTrack.style.animationPlayState === 'paused';
  tickerTrack.style.animationPlayState = isPaused ? 'running' : 'paused';
  togglePulse.textContent = isPaused ? 'Pause Live Pulse' : 'Resume Live Pulse';
});

modal.addEventListener('click', event => {
  if (event.target === modal) toggleModal(false);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    toggleModal(false);
  }
});

window.addEventListener('scroll', startProgressBar);
window.addEventListener('resize', startProgressBar);

setInterval(updateLiveStats, 8000);
setInterval(updateHeroTimestamp, 20000);

startProgressBar();

togglePulse.click();
togglePulse.click();

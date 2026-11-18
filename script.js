const FALLBACK_PROFILE = {
  login: 'amblessly',
  name: 'Blessly Chris Hanz T. Luison',
  html_url: 'https://github.com/amblessly',
  location: 'Muntinlupa City, Philippines',
  public_repos: 11,
  followers: 13,
  following: 13,
  created_at: '2025-12-25T16:17:46Z'
};

const FALLBACK_REPOS = [
  { name: 'aeriss', description: 'Raspberry Pi 4B offline system — MLX90640 thermal presence detection, LoRa 02 telemetry and a local FastAPI dashboard served from a hotspot. On-device hardware reads are not yet verified.', language: 'Python', stargazers_count: 0, forks_count: 0, fork: false, updated_at: '2026-11-17T03:26:47Z', html_url: 'https://github.com/amblessly/aeriss' },
  { name: 'atm-machine-c-', description: 'Terminal-based ATM banking simulation in C++ — balance inquiry, withdrawals, deposits, transfers, PIN change and transaction history with sample accounts.', language: 'C++', stargazers_count: 0, forks_count: 0, fork: false, updated_at: '2026-11-15T13:16:51Z', html_url: 'https://github.com/amblessly/atm-machine-c-' },
  { name: 'aeris', description: 'Raspberry Pi 4B offline system — MLX90640 thermal presence detection, LoRa 02 telemetry and a local FastAPI dashboard served from a hotspot. On-device hardware reads are not yet verified.', language: 'Python', stargazers_count: 0, forks_count: 0, fork: false, updated_at: '2026-11-14T08:07:27Z', html_url: 'https://github.com/amblessly/aeris' },
  { name: 'sikritu-backup-', description: 'Human-detection drone-vision prototype — YOLOv8n person detection on an Android IP-webcam stream, logging detections to CSV/JSON. Educational prototype, not production.', language: 'Python', stargazers_count: 0, forks_count: 0, fork: false, updated_at: '2026-11-14T03:27:14Z', html_url: 'https://github.com/amblessly/sikritu-backup-' },
  { name: 'smartqueue-plmun', description: 'Queueing system for Pamantasan ng Lungsod ng Muntinlupa — students join the line online, see their place in line and an estimated wait. Astro, React, Tailwind, Neon Postgres.', language: 'TypeScript', stargazers_count: 1, forks_count: 0, fork: false, updated_at: '2026-11-14T00:26:16Z', html_url: 'https://github.com/amblessly/smartqueue-plmun' },
  { name: 'delta-dashboard', description: 'Student identification and health-monitoring workflow — kiosk dashboard, per-student monitoring sessions, validated sensor ingestion, session history with CSV export. Node + Neon Postgres.', language: 'JavaScript', stargazers_count: 0, forks_count: 0, fork: false, updated_at: '2026-10-17T00:52:27Z', html_url: 'https://github.com/amblessly/delta-dashboard' },
  { name: 'notti', description: null, language: null, stargazers_count: 0, forks_count: 0, fork: false, updated_at: '2026-09-26T10:57:25Z', html_url: 'https://github.com/amblessly/notti' },
  { name: 'amblessly', description: 'Profile README for @amblessly — who I am, what I am learning, and what I am working on.', language: null, stargazers_count: 0, forks_count: 0, fork: false, updated_at: '2026-09-06T07:02:43Z', html_url: 'https://github.com/amblessly/amblessly' },
  { name: 'aeris-project', description: 'Off-grid UAV search-and-rescue — dual-link 5GHz Wi-Fi video and 915MHz LoRa telemetry, YOLOv8n survivor detection on a Raspberry Pi 5 with a Hailo-8L NPU.', language: 'Python', stargazers_count: 0, forks_count: 0, fork: false, updated_at: '2026-09-04T16:56:12Z', html_url: 'https://github.com/amblessly/aeris-project' },
  { name: 'schedly', description: 'Full-stack scheduling platform — Next.js 16, React 19, TypeScript, Prisma and PostgreSQL, better-auth, Redis/BullMQ background jobs, S3-compatible storage.', language: 'TypeScript', stargazers_count: 0, forks_count: 0, fork: false, updated_at: '2026-09-02T21:22:40Z', html_url: 'https://github.com/amblessly/schedly' },
  { name: 'photobooth', description: 'Snapcrate — browser photobooth with a canvas pixel-filter engine, three strip layouts, sticker layers, ten frame themes and a Firestore feedback wall.', language: 'JavaScript', stargazers_count: 0, forks_count: 0, fork: false, updated_at: '2026-07-23T09:08:23Z', html_url: 'https://github.com/amblessly/photobooth' }
];

const LIVE_REPO_DESCRIPTIONS = new Map(FALLBACK_REPOS.map((repo) => [repo.name, repo.description]));

function createIcon(symbolId) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'lucide');
  svg.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', `#${symbolId}`);
  svg.appendChild(use);
  return svg;
}

const repoState = {
  all: [],
  query: '',
  language: 'All',
  sort: 'updated',
  usingFallback: false
};

const dom = {};

function cacheDom() {
  dom.repoGrid = document.getElementById('repoGrid');
  dom.repoEmpty = document.getElementById('repoEmpty');
  dom.repoStatus = document.getElementById('repoStatus');
  dom.repoCount = document.getElementById('repoCount');
  dom.repoSearch = document.getElementById('repoSearch');
  dom.repoSort = document.getElementById('repoSort');
  dom.langFilters = document.getElementById('langFilters');
  dom.repoReset = document.getElementById('repoReset');
  dom.lastSynced = document.getElementById('lastSynced');
  dom.langBars = document.getElementById('langBars');
  dom.footerYear = document.getElementById('footerYear');
  dom.themeToggle = document.getElementById('themeToggle');
  dom.menuToggle = document.getElementById('menuToggle');
  dom.mobileMenu = document.getElementById('mobileMenu');
  dom.statValues = {
    repos: document.querySelector('[data-stat="repos"]'),
    followers: document.querySelector('[data-stat="followers"]'),
    following: document.querySelector('[data-stat="following"]'),
    stars: document.querySelector('[data-stat="stars"]')
  };
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem('bl-theme', theme); } catch (error) { void error; }
  if (dom.themeToggle) {
    const toLight = theme === 'dark';
    dom.themeToggle.setAttribute('aria-pressed', String(!toLight));
    dom.themeToggle.setAttribute('aria-label', toLight ? 'Switch to light theme' : 'Switch to dark theme');
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#0A0A0A' : '#FAFAFA');
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem('bl-theme'); } catch (error) { void error; }
  setTheme(saved === 'light' ? 'light' : 'dark');
}

function initMobileMenu() {
  if (!dom.menuToggle || !dom.mobileMenu) return;
  const closeMenu = () => {
    dom.mobileMenu.hidden = true;
    dom.menuToggle.setAttribute('aria-expanded', 'false');
    dom.menuToggle.setAttribute('aria-label', 'Open menu');
    document.body.style.overflow = '';
  };
  const openMenu = () => {
    dom.mobileMenu.hidden = false;
    dom.menuToggle.setAttribute('aria-expanded', 'true');
    dom.menuToggle.setAttribute('aria-label', 'Close menu');
    document.body.style.overflow = 'hidden';
  };
  dom.menuToggle.addEventListener('click', () => {
    if (dom.mobileMenu.hidden) openMenu(); else closeMenu();
  });
  dom.mobileMenu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !dom.mobileMenu.hidden) {
      closeMenu();
      dom.menuToggle.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && !dom.mobileMenu.hidden) closeMenu();
  });
}

function initReveals() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealables = document.querySelectorAll('.reveal');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  revealables.forEach((el) => observer.observe(el));
}

function formatUpdated(isoDate) {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return 'Updated date unknown';
  return `Updated ${date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;
}

function updateFeaturedStars(repos) {
  const starsByRepo = new Map(repos.map((repo) => [repo.name, repo.stargazers_count || 0]));
  document.querySelectorAll('[data-stars-repo]').forEach((slot) => {
    const stars = starsByRepo.get(slot.getAttribute('data-stars-repo')) || 0;
    if (stars > 0) {
      const label = slot.querySelector('span');
      if (label) label.textContent = `${stars} star${stars === 1 ? '' : 's'}`;
      slot.hidden = false;
    } else {
      slot.hidden = true;
    }
  });
}

function renderStats(profile, repos) {
  const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
  if (dom.statValues.repos) dom.statValues.repos.textContent = profile.public_repos ?? repos.length;
  if (dom.statValues.followers) dom.statValues.followers.textContent = profile.followers ?? 0;
  if (dom.statValues.following) dom.statValues.following.textContent = profile.following ?? 0;
  if (dom.statValues.stars) dom.statValues.stars.textContent = totalStars;
}

function renderLanguageShare(repos) {
  if (!dom.langBars) return;
  const counts = new Map();
  repos.forEach((repo) => {
    const key = repo.language || 'No language';
    counts.set(key, (counts.get(key) || 0) + 1);
  });
  const total = repos.length || 1;
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  dom.langBars.replaceChildren();
  sorted.forEach(([language, count]) => {
    const pct = Math.round((count / total) * 100);
    const row = document.createElement('li');
    row.className = 'lang-share__row';
    const name = document.createElement('span');
    name.className = 'lang-share__name';
    name.textContent = language;
    const track = document.createElement('span');
    track.className = 'lang-share__track';
    const fill = document.createElement('span');
    fill.className = 'lang-share__fill';
    fill.style.width = `${pct}%`;
    track.appendChild(fill);
    const value = document.createElement('span');
    value.className = 'lang-share__pct';
    value.textContent = `${pct}%`;
    row.append(name, track, value);
    dom.langBars.appendChild(row);
  });
}

function renderSkeletons() {
  if (!dom.repoGrid) return;
  dom.repoGrid.replaceChildren();
  for (let i = 0; i < 6; i += 1) {
    const skeleton = document.createElement('div');
    skeleton.className = 'repo-skeleton';
    skeleton.setAttribute('aria-hidden', 'true');
    dom.repoGrid.appendChild(skeleton);
  }
}

function buildLanguageFilters(repos) {
  if (!dom.langFilters) return;
  const languages = [...new Set(repos.map((repo) => repo.language).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const options = ['All', ...languages, 'No language'];
  dom.langFilters.replaceChildren();
  options.forEach((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'filter-chip';
    button.textContent = option;
    button.setAttribute('aria-pressed', String(option === repoState.language));
    button.addEventListener('click', () => {
      repoState.language = option;
      dom.langFilters.querySelectorAll('.filter-chip').forEach((chip) => {
        chip.setAttribute('aria-pressed', String(chip.textContent === option));
      });
      renderRepoGrid();
    });
    dom.langFilters.appendChild(button);
  });
}

function applyRepoFilters(repos) {
  const query = repoState.query.trim().toLowerCase();
  let result = repos.filter((repo) => {
    const matchesLanguage =
      repoState.language === 'All' ||
      (repoState.language === 'No language' ? !repo.language : repo.language === repoState.language);
    if (!matchesLanguage) return false;
    if (!query) return true;
    const haystack = [repo.name, repo.description || '', repo.language || '', ...(repo.topics || [])].join(' ').toLowerCase();
    return haystack.includes(query);
  });
  switch (repoState.sort) {
    case 'stars':
      result = [...result].sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0) || new Date(b.updated_at) - new Date(a.updated_at));
      break;
    case 'name':
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'updated':
    default:
      result = [...result].sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      break;
  }
  return result;
}

function createRepoCard(repo) {
  const card = document.createElement('article');
  card.className = 'repo-card';

  const top = document.createElement('div');
  top.className = 'repo-card__top';
  const lang = document.createElement('span');
  lang.className = 'repo-card__lang';
  lang.textContent = repo.language || 'No language';
  const updated = document.createElement('span');
  updated.className = 'repo-card__updated';
  updated.textContent = formatUpdated(repo.updated_at);
  top.append(lang, updated);

  const title = document.createElement('h3');
  title.className = 'repo-card__name';
  const link = document.createElement('a');
  link.href = repo.html_url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = repo.name;
  link.setAttribute('aria-label', `${repo.name} on GitHub (opens in new tab)`);
  link.appendChild(createIcon('i-arrow-up-right'));
  title.appendChild(link);

  const description = document.createElement('p');
  description.className = 'repo-card__desc';
  description.textContent = repo.description || 'No description published. Public repository — verified metadata only.';

  const foot = document.createElement('div');
  foot.className = 'repo-card__foot';
  if (repo.stargazers_count > 0) {
    const stars = document.createElement('span');
    stars.className = 'repo-card__stars';
    stars.appendChild(createIcon('i-star'));
    stars.appendChild(document.createTextNode(String(repo.stargazers_count)));
    foot.appendChild(stars);
  }
  if (repo.forks_count > 0) {
    const forks = document.createElement('span');
    forks.appendChild(createIcon('i-git-fork'));
    forks.appendChild(document.createTextNode(String(repo.forks_count)));
    foot.appendChild(forks);
  }
  if (repo.fork) {
    const forkBadge = document.createElement('span');
    forkBadge.textContent = 'Fork';
    foot.appendChild(forkBadge);
  }
  if (foot.childNodes.length === 0) {
    const quiet = document.createElement('span');
    quiet.textContent = '0 stars · original work';
    foot.appendChild(quiet);
  }

  card.append(top, title, description, foot);
  return card;
}

function renderRepoGrid() {
  if (!dom.repoGrid) return;
  const filtered = applyRepoFilters(repoState.all);
  dom.repoGrid.replaceChildren();
  filtered.forEach((repo) => dom.repoGrid.appendChild(createRepoCard(repo)));
  if (dom.repoEmpty) dom.repoEmpty.hidden = filtered.length !== 0;
  if (dom.repoCount) dom.repoCount.textContent = String(filtered.length);
}

function wireRepoControls() {
  if (dom.repoSearch) {
    dom.repoSearch.addEventListener('input', (event) => {
      repoState.query = event.target.value;
      renderRepoGrid();
    });
  }
  if (dom.repoSort) {
    dom.repoSort.addEventListener('change', (event) => {
      repoState.sort = event.target.value;
      renderRepoGrid();
    });
  }
  if (dom.repoReset) {
    dom.repoReset.addEventListener('click', () => {
      repoState.query = '';
      repoState.language = 'All';
      repoState.sort = 'updated';
      if (dom.repoSearch) dom.repoSearch.value = '';
      if (dom.repoSort) dom.repoSort.value = 'updated';
      if (dom.langFilters) {
        dom.langFilters.querySelectorAll('.filter-chip').forEach((chip) => {
          chip.setAttribute('aria-pressed', String(chip.textContent === 'All'));
        });
      }
      renderRepoGrid();
      if (dom.repoSearch) dom.repoSearch.focus();
    });
  }
}

function normaliseRepos(repos) {
  return repos.map((repo) => ({
    name: repo.name,
    description: repo.description || LIVE_REPO_DESCRIPTIONS.get(repo.name) || null,
    language: repo.language || null,
    stargazers_count: repo.stargazers_count || 0,
    forks_count: repo.forks_count || 0,
    fork: Boolean(repo.fork),
    topics: Array.isArray(repo.topics) ? repo.topics : [],
    updated_at: repo.updated_at,
    html_url: repo.html_url
  }));
}

function setSyncedLabel(usedFallback) {
  if (dom.lastSynced) {
    dom.lastSynced.textContent = usedFallback
      ? 'Nov 18, 2026 (snapshot)'
      : new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' · live';
  }
  if (dom.repoStatus) {
    dom.repoStatus.textContent = usedFallback
      ? 'GitHub API unreachable — showing the verified snapshot captured on Nov 18, 2026.'
      : '';
  }
}

function hydrate(profile, repos, usedFallback) {
  repoState.all = normaliseRepos(repos);
  repoState.usingFallback = usedFallback;
  renderStats(profile, repos);
  renderLanguageShare(repoState.all);
  buildLanguageFilters(repoState.all);
  updateFeaturedStars(repoState.all);
  renderRepoGrid();
  setSyncedLabel(usedFallback);
}

async function fetchWithTimeout(url, timeoutMs) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!response.ok) throw new Error(`GitHub API responded with ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

async function loadGitHubData() {
  renderSkeletons();
  try {
    const [profile, repos] = await Promise.all([
      fetchWithTimeout('https://api.github.com/users/amblessly', 9000),
      fetchWithTimeout('https://api.github.com/users/amblessly/repos?per_page=100&sort=updated', 9000)
    ]);
    if (!profile || !Array.isArray(repos)) throw new Error('Unexpected GitHub API payload');
    hydrate(profile, repos, false);
  } catch (error) {
    void error;
    hydrate(FALLBACK_PROFILE, FALLBACK_REPOS, true);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  cacheDom();
  initTheme();
  initMobileMenu();
  initReveals();
  wireRepoControls();
  if (dom.footerYear) dom.footerYear.textContent = String(new Date().getFullYear());
  if (dom.themeToggle) {
    dom.themeToggle.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }
  loadGitHubData();
});

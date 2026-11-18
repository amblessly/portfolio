# amblessly — portfolio

Personal developer portfolio of Blessly Chris Hanz T. Luison ([@amblessly](https://github.com/amblessly)).

Live: https://amblessly.github.io/portfolio/

## Stack

HTML5, CSS3, vanilla JavaScript, GitHub REST API. No frameworks, no build step, no runtime dependencies. Icons are inline SVG.

## What it does

- Pulls real profile and repository data from the GitHub REST API on load (avatar, name, public repos, stars, followers, language share) with a verified offline snapshot as fallback.
- Searchable, filterable, sortable repository grid with language filters and keyboard-accessible controls.
- Featured project write-ups curated from the actual repositories (AERIS, Schedly, Project DELTA, SmartQueue for PLMun, Snapcrate Photobooth) — descriptions are grounded in each repo's README, not invented.
- Dark-first design with a light theme toggle (persisted), responsive layouts, `prefers-reduced-motion` support.

## Run locally

```sh
python3 -m http.server 8000
```

Open http://localhost:8000

## Deploy

GitHub Pages — Settings → Pages → Deploy from a branch → `main` / root.

## Structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    └── images/
```

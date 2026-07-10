# SVVST Website - Documentation
Welcome to the documentation for the Shri Veda Vyasa Seva Trust (SVVST) website. This readme/documentation collects implementation details, how to run and build the project, and notes for making changes without confusion.
- For live demo, check https://www.shrivedavyasatrust.in/

## Project overview
- This is a small static website built with React + Vite to showcase SVVST (Shri Veda Vyasa Seva Trust), Cherthala. The project uses modular React components (JSX files under `src/`) and lightweight CSS for styling.
- The initial version of this site was developed on 15 June 2025. It is continuously being updated and this is not the production repository. The production repository was created for deployment under the email account of Shri Veda Vyasa Seva Trust, Cherthala. So, this repository might not be up to date. This particular version is the website's state as of 11 July 2026.
- A single `index.css` (under `src/styles/`) is used for global styling; components are separated into individual JSX files for clarity and future extension.
- React was chosen to make future full-stack integration easier if/when required.
- Fonts used: Oswald, Inter, Titillium Web (Google Fonts linked in `index.html`).
- Theme colors: `#F27A1A`, `#161718`, `#1E2125`.
- Layout targets desktop by default; media queries are present to improve mobile/tablet responsiveness.
- Icons: `react-icons`.
- Images: optimized formats (AVIF/WEBP) for efficiency.

## Tech stack
- Vite (dev server + build)
- React (JSX)
- React Icons

## Scripts (from `package.json`)
- The `package.json` in this project exposes the following npm scripts:
  ```powershell
  npm run dev      # starts Vite dev server
  npm run build    # builds production files into /dist
  npm run preview  # preview the built site locally
  ```
- Run these commands from the project root (where `package.json` is).

## Local development
Requirements:
- Node.js (recommend LTS 18+) and npm installed.
- Quickstart (Windows PowerShell):
  ```powershell
  npm install # to install dependencies
  npm run dev # start dev server
  ```
- Open the dev server URL printed by Vite (usually http://localhost:5173) and edit files under `src/` - hot module replacement (HMR) will update the browser.

## Build & preview
- To produce production assets:
  ```powershell
  npm run build # This produces a `dist/` folder containing static files ready to be hosted 
  ```
- You can preview the production build locally with:
  ```powershell
  npm run preview
  ```

## Before hosting
- Change base to the repo name if hosting on GitHub Pages
  ```js
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  // https://vite.dev/config/
  export default defineConfig({
    plugins: [react()],
    server: {
      host: true,
    },
    base: '/your-repo-name/',
  })
  ```

## Project structure (key files & folders)
Top-level (important files):
- `index.html` - base HTML template, fonts linked here.
- `package.json` - scripts and dependencies.
- `vite.config.js` - Vite configuration (edit `base` for GH Pages if needed).
- `README.md` - this file.

`src/` (React app source):
- `main.jsx` - app entry.
- `App.jsx` - main layout and routing.
- `Hero.jsx`, `Events.jsx`, `Founders.jsx`, `ContactUs.jsx`, `MissionVisionValues.jsx` - component files.
- `styles/index.css` - global styles.
- `assets/` - images, `event_data.json`, and subfolders (event images, founders images). Keep images in `assets/`.
- Notes: Keep the `assets/event-images` naming consistent with how `event_data.json` references images. The components expect images to follow the existing naming conventions.

## Section-specific notes
### Hero section
- The hero contains scrolling background images. To add a new image:
  1. Add the image file under `src/assets/`.
  2. Import it in `Hero.jsx` or where backgrounds are defined.
  3. Add the imported image to the `backgrounds` array used for the scrolling animation.
- Initially, the main heading animation used `SplitText` from GSAP. This was removed as it caused a bug in which after the SplitText animation had been rendered, position of SplitText would change.

### Events section
- To add a new event:
  1. Add the required event metadata to `src/assets/event_data.json` following the existing format.
  2. Place the event images in `src/assets/event-images/` and import or map them consistently in the code.
  3. Ensure image filenames follow the same naming convention as existing entries so the `imageMap` lookup works correctly.
- Example JSON event entry:
  ```json
  {
    "title": "Vriddhi 2025",
    "date": "23-25 May 2025",
    "time": "9 AM - 5 PM",
    "term": "3 days",
    "description": "An interactive guidance program for children with fun games, activities, including meals",
    "thumbnail_img": "./event1_thumbnail.webp",
    "images": ["./event1_1.png", "./event1_2.png"],
    "galleryLink": "./"
  }
  ```

## Assets & images
- Images are stored under `src/assets/` and optimized (AVIF/WEBP).
- Keep using efficient formats when adding assets.

## Contact
- Project author: [Aravind A Kamath](https://github.com/aravindanirudh)

# Amber Roast Coffee & Café

A responsive single-page café website built with **React and Vite**. The website provides a modern digital experience for a café, featuring its story, menu, gallery, testimonials, visiting information, and reservation/catering enquiry interface.

## 🚀 Live Demo

**Live Website:** https://amber-roast.netlify.app/

## ✨ Features

* Responsive desktop and mobile layout
* Fixed navigation with smooth section scrolling
* Dismissible seasonal announcement
* Scroll progress indicator
* Back-to-top button
* Animated hero and reveal effects
* Count-up statistics
* Tab-based menu powered by centralized data
* Gallery and customer testimonials
* Café hours and amenities
* Google Maps directions link
* Controlled contact form with loading and success states
* Reduced-motion CSS support
* Component-based React architecture

## 🛠️ Tech Stack

* **React 18**
* **React DOM**
* **Vite**
* **JavaScript / JSX**
* **CSS**
* **IntersectionObserver API**
* **requestAnimationFrame**

## 📦 Getting Started

### Prerequisites

* Node.js 18 or newer
* npm

### Installation

```bash
git clone https://github.com/DivyanshMishra06/Amber_Roast.git
cd Amber_Roast
npm install
npm run dev
```

Vite will display the local development URL in the terminal.

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```text
.
├── index.html
├── style.css
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── data/
│   │   └── siteData.js
│   ├── hooks/
│   │   └── useCounter.js
│   └── components/
└── README.md
```

## ⚙️ How It Works

`App.jsx` composes the main single-page layout and manages shared scroll state.

The scroll position controls:

* Scroll progress bar
* Navbar scrolled appearance
* Back-to-top button visibility

`siteData.js` keeps reusable content separate from UI rendering. Menu items, gallery images, testimonials, statistics, and navigation items are rendered from centralized data.

The `Reveal` component and `useCounter` hook use `IntersectionObserver` to trigger animations when content enters the viewport.

The `useCounter` hook uses `requestAnimationFrame` to create smooth number animations.

## ⚠️ Limitations

* No backend or database is connected.
* The contact form currently simulates successful submission using `setTimeout`.
* Form data is not stored or emailed.
* Images are loaded from remote Unsplash URLs.
* Production accessibility improvements such as focus management and Escape-key handling can be added to the mobile navigation.

## 🔮 Future Improvements

* Connect the contact form to a secure backend or email service.
* Add client-side and server-side form validation.
* Add form error and retry states.
* Optimize and self-host responsive image assets.
* Add unit and end-to-end tests.
* Improve mobile navigation accessibility.
* Move static café content to a CMS or API for easier content management.

## 🚀 Deployment

The project is deployed on **Netlify**.

**Live URL:** https://amber-roast.netlify.app/

## 📜 Available Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Starts the Vite development server               |
| `npm run build`   | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally              |

## 📄 License

This project does not currently define a license.

# Amber Roast Coffee & Café

A responsive single-page café website built with React and Vite. It presents the café's story, menu, gallery, customer testimonials, visit information, and a reservation/catering enquiry experience.

> The contact form currently simulates a successful submission in the browser. No backend, database, authentication, or email service is connected.

## Features

- Responsive desktop and mobile layout
- Fixed navigation with smooth section scrolling
- Dismissible seasonal announcement
- Scroll progress indicator and back-to-top control
- Animated hero, reveal effects, and count-up statistics
- Tabbed menu driven by centralized data
- Gallery, testimonials, hours, amenities, and Google Maps directions link
- Controlled contact form with loading and success UI states
- Reduced-motion CSS support

## Tech Stack

- React 18
- React DOM
- Vite
- JavaScript / JSX
- Plain CSS

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install and run

    npm install
    npm run dev

Vite prints the local development URL in the terminal.

### Production build

    npm run build
    npm run preview

## Project Structure

    .
    ├── index.html                 # Document metadata, fonts, and React mount point
    ├── style.css                  # Global design system, layout, animations, responsiveness
    ├── vite.config.js             # Vite + React configuration
    ├── src/
    │   ├── main.jsx               # Mounts the React app with StrictMode
    │   ├── App.jsx                # Page composition and shared scroll state
    │   ├── data/siteData.js       # Menu, navigation, gallery, testimonial, and stat data
    │   ├── hooks/useCounter.js    # Viewport-triggered count-up animation hook
    │   └── components/            # Page sections and reusable UI components
    ├── pitch.html                 # Standalone proposal document

## How It Works

App.jsx composes the one-page layout and owns shared scroll state. The scroll position drives:

- ProgressBar width
- Navbar scrolled appearance
- BackToTop visibility

siteData.js keeps repeated content separate from UI rendering. Menu, Gallery, Testimonials, Stats, and Navbar map this data into components.

The Reveal component and useCounter hook use IntersectionObserver to start animations when content enters the viewport. useCounter uses requestAnimationFrame for smooth number animation.

## Important Limitations

- No real API calls or backend are implemented.
- The contact form uses setTimeout to simulate submission.
- Form data is not stored or emailed.
- Remote images are loaded from Unsplash URLs.
- The mobile navigation has aria-expanded and body scroll locking, but production accessibility should also include focus management and Escape-key handling.

## Suggested Production Improvements

- Connect the contact form to a secure backend endpoint.
- Add client-side and server-side validation with accessible error messages.
- Add form error and retry states.
- Use owned, optimized responsive image assets.
- Add unit and end-to-end tests.
- Add mobile-menu focus trapping, focus restoration, and keyboard support.
- Move static café content to a CMS or API if frequent editing is required.

## Available Scripts

| Command | Description |
| --- | --- |
| npm run dev | Starts the Vite development server |
| npm run build | Creates an optimized production build in dist/ |
| npm run preview | Serves the production build locally |

## License

This project does not currently define a license.

# Aminat Abesin — Customer Service Portfolio

Responsive **React + Vite** portfolio highlighting Aminat's customer service, client operations, language skills, and leadership experience.

## Features
- React component-based site with Framer Motion entrance and scroll animations
- Bright coral, purple, aqua, and yellow visual identity
- Light/dark theme switch with saved preference
- Responsive mobile navigation, active navigation state, and scroll progress
- Profile photo and custom favicon
- CV download as PDF (jsPDF) and editable Word-compatible document
- Customer experience highlights, language profile, work history, education, training, and contact links

## Stack
- React + Vite
- Framer Motion
- Lucide React icons
- jsPDF for browser-generated CV download
- Vanilla CSS with responsive breakpoints and theme variables

## Run locally
```bash
npm install
npm run dev
```

## Build for Firebase Hosting
```bash
npm run build
firebase login
firebase init hosting
firebase deploy
```
The repository includes `firebase.json` configured to publish the `dist` directory. During `firebase init hosting`, use `dist` as the public directory and choose not to overwrite the existing config if you want to preserve it.

## Notes before launch
- Confirm all CV details, dates, and professional claims with Aminat.
- Confirm she's comfortable publishing her photo, phone number, and email address publicly.
- Chinese is described as HSK 2 level / currently learning, not fluent.
- Review the generated CV before submitting applications.

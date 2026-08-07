English | [Русский](README.ru.md)

# CinemaVerse

CinemaVerse is a modern, responsive movie discovery application built with React. It helps users discover trending, popular, top-rated, and upcoming movies, search by title, and explore detailed information such as trailers, cast, reviews, and similar movies. The application features user authentication powered by Firebase Authentication and cloud data storage with Firebase Realtime Database, allowing registered users to manage personalized Watchlists and Favorites that are synchronized across devices. Movie information is powered by the TMDB API: <https://themoviedb.org/>.

[LIVE DEMO](https://react-cinema-verse-alpha.vercel.app/)

![picture](/public/demo.JPG)

## Features

- Search movies
- Trending movies
- Top Rated movies
- Upcoming movies
- Movie details
- Similar movies
- Cast
- Reviews
- Trailers
- Responsive design
- Dark/Light theme
- Localization (EN / RU / UK)
- Firebase Auth + Firebase Realtime Database

## Tech Stack

- React
- Vite
- React Router
- CSS Modules
- Axios
- TMDB API
- Swiper
- i18next
- Firebase Auth + Firebase Realtime Database

## Getting Started

```bash
git clone https://github.com/Andrgoit/react-CinemaVerse.git
```

```bash
cd react-CinemaVerse
```

```bash
npm install
```

## Run

```bash
npm run dev
```

## Environment Variables

Create `.env`

```env
VITE_TMDB_ACCESS_TOKEN=
VITE_FB_API_KEY=
VITE_FB_AUTH_DOMAIN=
VITE_FB_DATABASE_URL=
VITE_FB_PROJECT_ID=
VITE_FB_STORAGE_BUCKET=
VITE_FB_MESSAGING_SENDER_ID=
VITE_FB_APP_ID=
VITE_FB_MEASUREMENT_ID=

```

## Structure

```text
📦src
 ┣ 📂api
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂css
 ┣ 📂data
 ┣ 📂pages
 ┣ 📜App.jsx
 ┣ 📜i18n.js
 ┣ 📜index.css
 ┗ 📜main.jsx
```

## Author

Andrey

GitHub:
<https://github.com/Andrgoit>

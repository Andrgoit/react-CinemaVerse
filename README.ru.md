Русский | [English](README.md)

# CinemaVerse

CinemaVerse — это современное адаптивное приложение для поиска фильмов, созданное на React. Оно помогает пользователям находить популярные, востребованные, высокорейтинговые и предстоящие фильмы, искать по названию и изучать подробную информацию, такую ​​как трейлеры, актерский состав, отзывы и похожие фильмы. Приложение использует аутентификацию пользователей на основе Firebase Authentication и облачное хранилище данных с помощью Firebase Realtime Database, позволяя зарегистрированным пользователям управлять персонализированными списками просмотра и избранным, которые синхронизируются между устройствами. Информация о фильмах предоставляется через API TMDB: <https://themoviedb.org/>.

[LIVE DEMO](https://react-cinema-verse-alpha.vercel.app/)

![picture](/public/demo.JPG)

## Функции

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

## Стек технологий

- React
- Vite
- React Router
- CSS Modules
- Axios
- TMDB API
- Swiper
- i18next

## Установка

```bash
git clone https://github.com/Andrgoit/react-CinemaVerse.git
```

```bash
cd react-CinemaVerse
```

```bash
npm install
```

## Запуск

```bash
npm run dev
```

## Environment Variables

Create `.env`

```env
VITE_ACCESS_TOKEN=ваш_access_token
```

## Структура

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

## Автор

Andrey

GitHub:
<https://github.com/Andrgoit>

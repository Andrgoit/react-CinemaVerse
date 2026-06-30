# CinemaVerse

Сайт помогает в поиске популярных и новых фильмов . Используется API <https://themoviedb.org/> / The site helps you find popular and new movies. It uses an API <https://themoviedb.org/>

![picture](/public/demo.png)

## Установка / Installation

### Скопируйте репозиторий / Copy the repository

```bash
git clone https://github.com/Andrgoit/react-CinemaVerse.git
```

### Установите все зависимости / Install all dependencies

```bash
npm ci
```

### Создайте файл `.env` и заполните переменные, как указано в файле `.env.example` / Create a `.env` file and fill in the variables as specified in the file `.env.example`

## Запуск проекта / The project launch

```bash
npm run dev
```

## Структура / Structure

```text
src
┣ api
┣ assets
┃ ┣ icons
┃ ┗ img
┣ components
┃ ┣ BreadcrumbNavigation
┃ ┣ BurgerButton
┃ ┣ BurgerMenu
┃ ┣ Footer
┃ ┣ Header
┃ ┣ HeroBanner
┃ ┣ Layout
┃ ┣ Loader
┃ ┣ Logo
┃ ┣ Modal
┃ ┣ MoviesList
┃ ┣ Nav
┃ ┣ Pagination
┃ ┣ ProfileIcon
┃ ┣ SearchIcon
┃ ┣ SearchInput
┃ ┣ Section
┃ ┗ index.js
┣ css
┃ ┣ reset.css
┃ ┗ variables.css
┣ data
┃ ┣ category.js
┃ ┗ navItems.js
┣ pages
┃ ┣ DetailsPage
┃ ┣ HomePage
┃ ┣ ListPage
┃ ┗ NotFoundPage
┣ App.jsx
┣ index.css
┗ main.jsx
```

# CinemaVerse

Сайт помогает в поиске популярных и новых фильмов . Используется API <https://themoviedb.org/> / The site helps you find popular and new movies. It uses an API <https://themoviedb.org/>

![picture](/public/demo.JPG)

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
📦src
 ┣ 📂api
 ┃ ┣ 📜getMovieById.js
 ┃ ┣ 📜getMovieByQuery.js
 ┃ ┣ 📜getMovieCast.js
 ┃ ┣ 📜getMovieGenres.js
 ┃ ┣ 📜getMovieReviews.js
 ┃ ┣ 📜getMovieTrailers.js
 ┃ ┣ 📜getNowPlayingMovies.js
 ┃ ┣ 📜getSimilarMovies.js
 ┃ ┣ 📜getTopRatedMovies.js
 ┃ ┣ 📜getTrendingMovies.js
 ┃ ┣ 📜getUpcomingMovies.js
 ┃ ┗ 📜index.js
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┃ ┣ 📂Inter
 ┃ ┃ ┃ ┗ 📜InterVariable.woff2
 ┃ ┃ ┗ 📂Onest
 ┃ ┃ ┃ ┗ 📜OnestVariable.woff2
 ┃ ┣ 📂icons
 ┃ ┃ ┣ 📂langIcons
 ┃ ┃ ┃ ┣ 📜en.png
 ┃ ┃ ┃ ┣ 📜ru.png
 ┃ ┃ ┃ ┗ 📜uk.png
 ┃ ┃ ┣ 📜github.svg
 ┃ ┃ ┣ 📜logo.svg
 ┃ ┃ ┣ 📜playButton.png
 ┃ ┃ ┗ 📜star.png
 ┃ ┗ 📂img
 ┃ ┃ ┣ 📜hero_bg1_1280.jpg
 ┃ ┃ ┣ 📜hero_bg1_320.jpg
 ┃ ┃ ┣ 📜hero_bg1_640.jpg
 ┃ ┃ ┣ 📜hero_bg1_768.jpg
 ┃ ┃ ┣ 📜hero_bg2_1280.jpg
 ┃ ┃ ┣ 📜hero_bg2_320.jpg
 ┃ ┃ ┣ 📜hero_bg2_640.jpg
 ┃ ┃ ┣ 📜hero_bg2_768.jpg
 ┃ ┃ ┣ 📜hero_bg3_1280.jpg
 ┃ ┃ ┣ 📜hero_bg3_320.jpg
 ┃ ┃ ┣ 📜hero_bg3_640.jpg
 ┃ ┃ ┣ 📜hero_bg3_768.jpg
 ┃ ┃ ┣ 📜loader.png
 ┃ ┃ ┣ 📜noPhoto.svg
 ┃ ┃ ┗ 📜noPhotoUser.png
 ┣ 📂components
 ┃ ┣ 📂BreadcrumbNavigation
 ┃ ┃ ┣ 📜BreadcrumbNavigation.jsx
 ┃ ┃ ┗ 📜BreadcrumbNavigation.module.css
 ┃ ┣ 📂BurgerButton
 ┃ ┃ ┣ 📜BurgerButton.jsx
 ┃ ┃ ┗ 📜BurgerButton.module.css
 ┃ ┣ 📂BurgerMenu
 ┃ ┃ ┣ 📜BurgerMenu.jsx
 ┃ ┃ ┗ 📜BurgerMenu.module.css
 ┃ ┣ 📂ButtonBlock
 ┃ ┃ ┣ 📜ButtonBlock.jsx
 ┃ ┃ ┗ 📜ButtonBlock.module.css
 ┃ ┣ 📂CaseSwiperComponent
 ┃ ┃ ┣ 📜CaseSwiperComponent.jsx
 ┃ ┃ ┗ 📜CaseSwiperComponent.module.css
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜Footer.module.css
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜Header.module.css
 ┃ ┣ 📂HeroBanner
 ┃ ┃ ┣ 📜HeroBanner.jsx
 ┃ ┃ ┣ 📜HeroBanner.module.css
 ┃ ┃ ┣ 📜swiperNavigation.css
 ┃ ┃ ┗ 📜swiperPagination.css
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┗ 📜Layout.module.css
 ┃ ┣ 📂Loader
 ┃ ┃ ┣ 📜Loader.jsx
 ┃ ┃ ┗ 📜Loader.module.css
 ┃ ┣ 📂Logo
 ┃ ┃ ┣ 📜Logo.jsx
 ┃ ┃ ┗ 📜Logo.module.css
 ┃ ┣ 📂Modal
 ┃ ┃ ┣ 📜Modal.jsx
 ┃ ┃ ┗ 📜Modal.module.css
 ┃ ┣ 📂MovieDetails
 ┃ ┃ ┣ 📜MovieDetails.jsx
 ┃ ┃ ┗ 📜MovieDetails.module.css
 ┃ ┣ 📂MovieRuntime
 ┃ ┃ ┣ 📜MovieRuntime.jsx
 ┃ ┃ ┗ 📜MovieRuntime.module.css
 ┃ ┣ 📂MoviesList
 ┃ ┃ ┣ 📜MoviesList.jsx
 ┃ ┃ ┗ 📜MoviesList.module.css
 ┃ ┣ 📂Nav
 ┃ ┃ ┣ 📜Nav.jsx
 ┃ ┃ ┗ 📜Nav.module.css
 ┃ ┣ 📂OverviewsSwiperComponent
 ┃ ┃ ┣ 📜OverviewsSwiperComponent.jsx
 ┃ ┃ ┗ 📜OverviewsSwiperComponent.module.css
 ┃ ┣ 📂Pagination
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┣ 📜Pagination.jsx
 ┃ ┃ ┗ 📜Pagination.module.css
 ┃ ┣ 📂ProfileIcon
 ┃ ┃ ┣ 📜ProfileIcon.jsx
 ┃ ┃ ┗ 📜ProfileIcon.module.css
 ┃ ┣ 📂SearchBlock
 ┃ ┃ ┣ 📜SearchBlock.jsx
 ┃ ┃ ┗ 📜SearchBlock.module.css
 ┃ ┣ 📂SearchIcon
 ┃ ┃ ┣ 📜SearchIcon.jsx
 ┃ ┃ ┗ 📜SearchIcon.module.css
 ┃ ┣ 📂Section
 ┃ ┃ ┣ 📜Section.jsx
 ┃ ┃ ┗ 📜Section.module.css
 ┃ ┣ 📂SettingsBlock
 ┃ ┃ ┣ 📜SettingsBlock.jsx
 ┃ ┃ ┗ 📜SettingsBlock.module.css
 ┃ ┣ 📂SwiperComponent
 ┃ ┃ ┣ 📜SwiperComponent.jsx
 ┃ ┃ ┣ 📜SwiperComponent.module.css
 ┃ ┃ ┗ 📜swiperNavigation.css
 ┃ ┣ 📂TopRateSwipeComponent
 ┃ ┃ ┣ 📜swiperNavigation.css
 ┃ ┃ ┣ 📜TopRateSwipeComponent.jsx
 ┃ ┃ ┗ 📜TopRateSwipeComponent.module.css
 ┃ ┣ 📂TrailersSwiperComponent
 ┃ ┃ ┣ 📜TrailersSwiperComponent.jsx
 ┃ ┃ ┗ 📜TrailersSwiperComponent.module.css
 ┃ ┣ 📂VideoPlayer
 ┃ ┃ ┣ 📜VideoPlayer.jsx
 ┃ ┃ ┗ 📜VideoPlayer.module.css
 ┃ ┗ 📜index.js
 ┣ 📂css
 ┃ ┣ 📜reset.css
 ┃ ┗ 📜variables.css
 ┣ 📂data
 ┃ ┣ 📜baseURLs.js
 ┃ ┣ 📜category.js
 ┃ ┣ 📜imgSizes.js
 ┃ ┣ 📜langIcons.js
 ┃ ┣ 📜navItems.js
 ┃ ┣ 📜swiperSettings.js
 ┃ ┗ 📜timeWindowTrendingMovies.js
 ┣ 📂pages
 ┃ ┣ 📂DetailsPage
 ┃ ┃ ┣ 📜DetailsPage.jsx
 ┃ ┃ ┗ 📜DetailsPage.module.css
 ┃ ┣ 📂HomePage
 ┃ ┃ ┣ 📜HomePage.jsx
 ┃ ┃ ┗ 📜HomePage.module.css
 ┃ ┣ 📂LibraryPage
 ┃ ┃ ┣ 📜LibraryPage.jsx
 ┃ ┃ ┗ 📜LibraryPage.module.css
 ┃ ┣ 📂ListPage
 ┃ ┃ ┣ 📜ListPage.jsx
 ┃ ┃ ┗ 📜ListPage.module.css
 ┃ ┣ 📂NotFoundPage
 ┃ ┃ ┣ 📜NotFoundPage.jsx
 ┃ ┃ ┗ 📜NotFoundPage.module.css
 ┃ ┗ 📂SearchPage
 ┃ ┃ ┗ 📜SearchPage.jsx
 ┣ 📜App.jsx
 ┣ 📜i18n.js
 ┣ 📜index.css
 ┗ 📜main.jsx
```

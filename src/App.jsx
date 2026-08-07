import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer, Bounce } from "react-toastify";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const ListPage = lazy(() => import("@/pages/ListPage/ListPage"));
const SearchPage = lazy(() => import("@/pages/SearchPage/SearchPage"));
const DetailsPage = lazy(() => import("@/pages/DetailsPage/DetailsPage"));
const LibraryPage = lazy(() => import("@/pages/LibraryPage/LibraryPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));
const Layout = lazy(() => import("@/components/Layout/Layout"));

import { PrivateRoute, Loader } from "@/components";
import "./index.css";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:category" element={<ListPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/library" element={<LibraryPage />} />
          </Route>
          <Route path="/movie/:movie_id" element={<DetailsPage />} />
          <Route path="/movie/:movie_id/similar" element={<ListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </Suspense>
  );
}

export default App;

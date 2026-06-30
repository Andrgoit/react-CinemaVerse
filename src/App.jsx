import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const ListPage = lazy(() => import("@/pages/ListPage/ListPage"));
const DetailsPage = lazy(() => import("@/pages/DetailsPage/DetailsPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));
const Layout = lazy(() => import("@/components/Layout/Layout"));
import { Loader } from "@/components";

import "./index.css";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/:category" element={<ListPage />} />
          <Route path="/movie/:movie_id" element={<DetailsPage />} />
          <Route path="/movie/:movie_id/similar" element={<ListPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

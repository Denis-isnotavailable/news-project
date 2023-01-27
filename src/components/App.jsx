import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// import MainPage from "pages/MainPage/MainPage";
// import PostPage from "../pages/PostPage/PostPage";
import NavBar from "./NavBar/NavBar";

const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
const PostPage = lazy(() => import("../pages/PostPage/PostPage"));

export const App = () => {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        
          <Route path="/" element={<MainPage />} />
          <Route path="/:id" element={<PostPage />} />
          <Route path="*" element={<div>Page not found - 404</div>} />        

        </Routes>

      </Suspense>       
    </>
      
  );
};

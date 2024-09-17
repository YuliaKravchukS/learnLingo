import { Route, Routes } from "react-router-dom";
import "./App.css";

import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./components/Layout";
const Home = lazy(() => import("./pages/Home/Home"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  return (
    <Layout>
      <Toaster position='top-center' reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;

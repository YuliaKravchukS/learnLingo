import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layuot from "./components/Layuot";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";
const Home = lazy(() => import("./pages/Home/Home"));
const Teachers = lazy(() => import("./pages/Teachers/Teachers"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites"));

function App() {
  return (
    <Layuot>
      <Toaster position='top-center' reverseOrder={false} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </Layuot>
  );
}

export default App;

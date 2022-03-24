import LandingPage from "./pages/LandingPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import DetailProduct from "./pages/DetailProduct";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/detail" element={<DetailProduct />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

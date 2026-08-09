import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import DestinationsPage from "./pages/Destinationspage";
import ExperiencesPage from "./pages/ExperiencesPage";
import PropertiesPage from "./pages/PropertiesPage";
import ServicesPage from "./pages/ServicesPage";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
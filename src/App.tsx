import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import Header from "./components/headers/Header";
import Footer from "./components/footers/footer";
import { FavoriteProvider } from "./contexts/favoriteContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoritesPage from "./pages/favoritesPage"
import { ViewedProvider } from "./contexts/viewContexts";

function App() {
  return (
    <FavoriteProvider>
        <ViewedProvider>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      </>
      </ViewedProvider>
    </FavoriteProvider>
  );
}


export default App;

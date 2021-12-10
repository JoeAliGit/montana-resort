import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

//! Pages
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactsPage from './pages/ContactsPage';

//! Components
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';

//! Main Component
const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;

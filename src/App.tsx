import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CategoriesSection from './components/CategoriesSection';
import FeaturedDestinations from './components/FeaturedDestinations';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { colors, GlobalStyles } from './styles/globalStyles';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${colors.background.main};
`;

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      let currentActive = 'home';

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - navbarHeight;
        const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentActive = section.id;
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <section id="home"><HeroSection /></section>
      <section id="categories"><CategoriesSection /></section>
      <section id="destinations"><FeaturedDestinations /></section>
      <section id="about"><AboutSection /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><ContactUs /></section>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;

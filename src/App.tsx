import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PrintingPage from './pages/PrintingPage';
import ModelingPage from './pages/ModelingPage';
import AboutPrintingPage from './pages/AboutPrintingPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case '3d-printing':
        return <PrintingPage onPageChange={setCurrentPage} />;
      case '3d-modeling':
        return <ModelingPage onPageChange={setCurrentPage} />;
      case 'about-printing':
        return <AboutPrintingPage onPageChange={setCurrentPage} />;
      case 'about-us':
        return <AboutUsPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <Layout>
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </Layout>
  );
}

export default App;
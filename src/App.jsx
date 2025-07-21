import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './index.css';
import FeaturesSection from './components/FeaturesSection';
import SmartInvestment from './components/SmartInvestment';
import ZerodhaSectors from './components/ZerodhaSectors';
import NewArrivals from './components/NewArrivals';
import PastIpoPerformance from './components/PastIpoPerformance';
import HowToBuyShares from './components/HowToBuyShares';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <FeaturesSection/>
      <SmartInvestment/>
      <ZerodhaSectors/>
      <NewArrivals/>
      <PastIpoPerformance/>
      <HowToBuyShares/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default App;

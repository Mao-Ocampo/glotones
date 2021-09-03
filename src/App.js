import React from 'react';
import { Header } from './sections/Header';
import { FirstSection } from './sections/FirstSection';
import { SecondSection } from './sections/SecondSection';
import { ThirdSection } from './sections/ThirdSection';
import { FourthSection } from './sections/FourthSection';
import { Footer } from './sections/Footer';
import './assets/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}

export default App;

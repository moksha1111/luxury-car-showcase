import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhatDefines from './components/sections/WhatDefines';
import TypesOfCars from './components/sections/TypesOfCars';
import GlobalBrands from './components/sections/GlobalBrands';
import IconicModels from './components/sections/IconicModels';
import BeyondLuxury from './components/sections/BeyondLuxury';
import Testimonials from './components/sections/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <WhatDefines />
        <TypesOfCars />
        <GlobalBrands />
        <IconicModels />
        <BeyondLuxury />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;

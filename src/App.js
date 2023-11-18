import './App.scss';
import { Benefits } from './components/Benefits/Benefits';
import { FAQ } from './components/FAQ/FAQ';
import { FinalCTA } from './components/FinalCTA/FinalCTA';
import { Founder } from './components/Founder/Founder';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { HowToOrder } from './components/HowToOrder/HowToOrder';
import { Info } from './components/Info/Info';
import { Reviews } from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Benefits />
      <Founder />
      <HowToOrder />
      <Reviews />
      <FAQ />
      <Info />
      <FinalCTA />
    </div>
  );
}

export default App;

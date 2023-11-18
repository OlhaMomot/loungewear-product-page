import './App.scss';
import { Benefits } from './components/Benefits/Benefits';
import { Founder } from './components/Founder/Founder';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';
import { HowToOrder } from './components/HowToOrder/HowToOrder';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Benefits />
      <Founder />
      <HowToOrder />
    </div>
  );
}

export default App;

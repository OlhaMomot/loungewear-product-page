import './App.scss';
import { Benefits } from './components/Benefits/Benefits';
import { Header } from './components/Header/Header';
import { HeroSection } from './components/HeroSection/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Benefits />
    </div>
  );
}

export default App;

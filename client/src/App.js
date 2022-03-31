import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Components/Main/Main';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import AboutUs from './Components/AboutUs/AboutUs';
import Target from './Components/Target/Target';
import FAQ from './Components/FAQ/FAQ';
import Carousel from './Components/Carousel/ImageSlider';
import LearnMore from './Components/LearnMore/LearnMore';
import './Components/Main/main.css';
import './Components/AboutUs/aboutus.css';

function App() {
  return (
    <Router>
      <Main />
      <ScrollToTop />
      <AboutUs />
      <Target />
      <FAQ />
      <Carousel />
      <LearnMore />
    </Router>      
  );
} 

export default App;

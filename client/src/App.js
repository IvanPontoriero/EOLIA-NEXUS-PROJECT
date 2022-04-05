import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main/Main';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import AboutUs from './Components/AboutUs/AboutUs';
import Target from './Components/Roadmap/Target';
import FAQ from './Components/FAQ/FAQ';
import LearnMore from './Components/LearnMore/LearnMore';
import Carousel2 from './Components/Carousel/Carousel2';
import './Components/Main/main.css';
import './Components/AboutUs/aboutus.css';

function App() {
  return (
    <Router>
      <Main />
      <ScrollToTop />
      <AboutUs />
      <Target />
      <Carousel2 />
      <FAQ />
      <LearnMore />
    </Router>      
  );
} 

export default App;

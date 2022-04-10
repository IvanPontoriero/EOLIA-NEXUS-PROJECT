import {BrowserRouter as Router} from 'react-router-dom';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/js/uikit.min.js"; 
import Main from './Components/Main/Main';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import AboutUs from './Components/AboutUs/AboutUs';
import Target from './Components/Roadmap/Target';
import FAQ from './Components/FAQ/FAQ';
import LearnMore from './Components/LearnMore/LearnMore';
import Utility from './Components/Utility/Utility'
import Carousel from './Components/Carousel/Carousel'

function App() {
  return (
    <Router>
      <Main />
      <ScrollToTop />
      <AboutUs />
      <Utility />
      <Target />
      <Carousel />
      <FAQ />
      <LearnMore />
    </Router>      
  );
} 

export default App;

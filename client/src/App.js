import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Main from './Components/Main/Main';
import AboutUs from './Components/AboutUs/AboutUs';
import LearnMore from './Components/LearnMore/LearnMore';
import Target from './Components/Target/Target';
import './Components/Main/main.css';
import './Components/AboutUs/aboutus.css';

function App() {
  return (
    <Router>
      <Main />
      <AboutUs />
      <Target />
      <LearnMore />
      <Routes>
        {/* <Route path='/' exact element={<Main />} ></Route>
        <Route path='/about-us' exact element={ <AboutUs /> } /> */}
      </Routes>
    </Router>
  );
} 

export default App;

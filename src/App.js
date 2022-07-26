import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About.js';
import Contact from './components/pages/Contact.js';
import Footer from './components/Footer';
import CookBookHome from './components/pages/CookBookHome';
import CbOne from './components/pages/CbOne';
import CbTwo from './components/pages/CbTwo';
import CbThree from './components/pages/CbThree';
import CbFour from './components/pages/CbFour';
import CbFive from './components/pages/CbFive';
import Cb6 from './components/pages/Cb6';
import Cb7 from './components/pages/Cb7';
import Cb8 from './components/pages/Cb8';
import Cb9 from './components/pages/Cb9';
import Cb10 from './components/pages/Cb10';
import SciFiHome from './components/pages/SciFiHome';
import Sf1 from './components/pages/Sf1';
import Sf2 from './components/pages/Sf2';
import Sf3 from './components/pages/Sf3';
import Sf4 from './components/pages/Sf4';
import Sf5 from './components/pages/Sf5';
import Sf6 from './components/pages/Sf6';
import Sf7 from './components/pages/Sf7';
import Sf8 from './components/pages/Sf8';
import Sf9 from './components/pages/Sf9';
import Sf10 from './components/pages/Sf10';
import GeneralFictionHome from './components/pages/GeneralFictionHome';
import AllBooks from './components/AllBooks';
import GF1 from './components/pages/GF1';
import GF2 from './components/pages/GF2';
import GF3 from './components/pages/GF3';
import GF4 from './components/pages/GF4';
import GF5 from './components/pages/GF5';
import GF6 from './components/pages/GF6';
import GF7 from './components/pages/GF7';
import GF8 from './components/pages/GF8';
import GF9 from './components/pages/GF9';
import GF10 from './components/pages/GF10';


function App() {
  return (
    <>
    <Router>
      <Navbar />  
      <Routes> 
        <Route path='/' exact element={<Home/>} />    
        <Route path='/about' exact  element={<About/>} />   
        <Route path='/contact' exact  element={<Contact/>} /> 
        <Route path='/books' exact  element={<AllBooks/>} /> 
        <Route path='/cookbookhome' exact element={<CookBookHome/>} /> 
        <Route path='/cbone' exact element={<CbOne/>} /> 
        <Route path='/cbtwo' exact element={<CbTwo/>} /> 
        <Route path='/cbthree' exact element={<CbThree/>} /> 
        <Route path='/cbfour' exact element={<CbFour/>} /> 
        <Route path='/cbfive' exact element={<CbFive/>} /> 
        <Route path='/cb6' exact element={<Cb6/>} /> 
        <Route path='/cb7' exact element={<Cb7/>} /> 
        <Route path='/cb8' exact element={<Cb8/>} /> 
        <Route path='/cb9' exact element={<Cb9/>} /> 
        <Route path='/cb10' exact element={<Cb10/>} /> 
        <Route path='/scifihome' exact element={<SciFiHome/>} /> 
        <Route path='/sf1' exact element={<Sf1/>} /> 
        <Route path='/sf2' exact element={<Sf2/>} />
        <Route path='/sf3' exact element={<Sf3/>} />
        <Route path='/sf4' exact element={<Sf4/>} />
        <Route path='/sf5' exact element={<Sf5/>} />
        <Route path='/sf6' exact element={<Sf6/>} />
        <Route path='/sf7' exact element={<Sf7/>} />
        <Route path='/sf8' exact element={<Sf8/>} />
        <Route path='/sf9' exact element={<Sf9/>} />
        <Route path='/sf10' exact element={<Sf10/>} />
        <Route path='/fictionhome' exact element={<GeneralFictionHome />} /> 
        <Route path='/allthelight' exact element={<GF1/>} /> 
        <Route path='/candyhouse' exact element={<GF2/>} /> 
        <Route path='/americanah' exact element={<GF3/>} />
        <Route path='/windupbirdchronicle' exact element={<GF4/>} />
        <Route path='/oscarwao' exact element={<GF5/>} />
        <Route path='/littlefireseverywhere' exact element={<GF6/>} />
        <Route path='/whiteteeth' exact element={<GF7/>} />
        <Route path='/crawdads' exact element={<GF8/>} />
        <Route path='/goldfinch' exact element={<GF9/>} />
        <Route path='/salvagethebones' exact element={<GF10/>} />
        </Routes>   
        <Footer /> 
      </Router>  
    </>
  );
}

export default App;

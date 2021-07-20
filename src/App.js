import React from 'react'
import './App.css';
import NavBar from './Components/Navbar'
import TextSection  from './Components/TextSection'
import FeatureSection from './Components/FeatureSection'
import CardSection from './Components/CardSection';
import FooterSection from './Components/FooterSection';


import 'bootstrap/dist/css/bootstrap.css'
import "./index.css"


function App() {
  return (
    <div> 
      <NavBar /> 
      <FeatureSection />
      <TextSection />
      <CardSection />
      <FooterSection />
    </div>
  )  
}

export default App;

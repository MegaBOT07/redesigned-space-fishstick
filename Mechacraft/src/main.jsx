import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeroSection from './components/HeroSection.jsx'
import CardsSection from './components/CardsSection.jsx'
import Footer from './components/Footer.jsx'
import FeatureHighlight from './components/FeatureHighlight.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection/>
    <CardsSection/>
    <Footer/>
    <FeatureHighlight/>

  </StrictMode>,
)

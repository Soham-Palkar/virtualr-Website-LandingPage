import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import { Workflow } from 'lucide-react'
import WorkflowSection from './components/WorkflowSection'
import PricingSection from './components/PricingSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection/>
      <FeatureSection/>
      <WorkflowSection/>
      <PricingSection/>
      <TestimonialSection/>
      <Footer/>
      </div>
    </>
  )
}

export default App

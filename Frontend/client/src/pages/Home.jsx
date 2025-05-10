import React from 'react'
import Header from '../components/Header'
import BgRemovalSteps from '../components/BgRemovalSteps'
import BgSlider from '../components/BgSlider'

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 lg:px-8 py-16 font-["outfit"]'>
        {/* Hero Section */}
        <Header />

        {/* background removal steps section */}
        <BgRemovalSteps />

        {/* background removal slider section */}
        <BgSlider />

        {/* Buy Credits plan section */}

        {/* User testimonials section */}

        {/*Try now section */}
    </div>
  )
}

export default Home
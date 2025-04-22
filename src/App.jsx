import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './container/Header/Header'
import AboutUs from './container/Aboutus/Aboutus'
import SpecialMenu from './container/Menu/SpecialMenu'
import Chef from './container/Chef/Chef'
import Intro from './container/Intro/Intro'
import Leurels from './container/Laurels/Laurels'
import Gallery from './container/Gallery/Gallery'
import FindUs from './container/Findus/FindUs'
import Footer from './container/Footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <AboutUs />
        <SpecialMenu />
        <Chef />
        <Intro />
        <Leurels />
        <Gallery />
        <FindUs />
        <Footer />
      </div>
    </>
  )
}

export default App

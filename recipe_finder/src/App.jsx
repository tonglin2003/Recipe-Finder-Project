import { useState } from 'react'
import Header from './components/common/Header/Header'
import Footer from './components/common/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const imgUrl = "https://www.morganstanley.com/content/dam/msdotcom/ideas/pet-care/tw-pet-care.jpg";

  return (
    <>
    <Header />
    <div className='header-img'>
      <div style={{ height:"50vh" }}>
        <div className='header-text'>
          <div className='content'>
            <h2>Know more about your love</h2>
            <h1 className='underline-heading'>Today</h1>
            <br></br>
            <button className='button-74 mt-3'>Get Started</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default App


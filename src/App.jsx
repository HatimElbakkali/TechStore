import Header from './components/Header'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import './style/App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((prev) => prev + 1)
  }
  
  return (
    <>
      <Header />
      <Navbar  res={count} />
      <Body add={addCount} />
      <Footer />
    </>
  )
}

export default App

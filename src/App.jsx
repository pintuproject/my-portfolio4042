
import Navbar from './components/Navbar'
import Intorduction from './components/Intorduction'
import About from './components/About'
import Skillset from './components/Skillset'
import Projects from './components/Projects'
import Contact from './components/Contact'
import{BrowserRouter as Router, Routes,Route} from 'react-router-dom'

function App() {

  

  return (
    <>
     
        <Navbar/>
        <Intorduction/>
        <About/>
        <Skillset/>
        <Projects/>
        <Contact/>
        

    </>
  )
}

export default App

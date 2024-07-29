import './App.css'
import Collector from './Components/Collector/Collector'
import Dashboard from './Components/Dashboard/Dashboard'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import Stake from './Components/Stake/Stake'
import Utilities from './Components/Utilities/Utilities'

function App() {
 
  return (
    <>
      <Navbar/>
      {/* <Dashboard/>  */}
      {/* <Utilities/>        */}
      {/* <Collector/> */}
      <Stake/>
      <Footer/>
    </>
  )
}

export default App

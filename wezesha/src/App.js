import Landingpage  from "./Landing";
import Navbar from "./Navbar";
import Product from "./Product"
import About from './About'
import VisionAndMission from "./Vision-Mission";
import Team from './Team'
import Footer from './Footer'




const App =()=>{
  return(
    <div>
      <Navbar/>
      <Landingpage/>
      <About/>
      <VisionAndMission/>
      <Product/>      
      <Team/>
      <Footer/>
    </div>
  )
}
export default App;

import '../App.css';
import VintageRed from "../assets/VintageRed.jpg"
import Wings from "../assets/Wings.jpg"
import FutureBack from "../assets/FutureBack.jpg"
import Mentality from "../assets/Mentality.jpg"

export default function Men(){
  return(
    <div className= "Content">
      <img src={VintageRed} alt='VintageRed' width='300px' height='300px'/>
      <img src={Wings} alt='Wings' width='300px' height='300px'/>
      <img src={FutureBack} alt="FutureBack"  width='300px' height='300px'/>
      <img src={Mentality} alt="Mentality" width='300px' height='300px'/>
    
    
    
    </div>
  )

}
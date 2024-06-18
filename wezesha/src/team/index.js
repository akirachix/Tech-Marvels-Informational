

import pearl from '../images/pearl.png';
import nabacwa from '../images/nabacwa.png';
import gloria from '../images/gloria.png';
import karen from '../images/karen.png';
import kathure from '../images/kathure.png';

import './index.css';

const Team = () => {
    return(
<div id="team">
            <h1 id="team-title">Our Team</h1>
            
<div id="team-photos">

        <div>
     <figure id="team-figcap">
        <img id="pic" src={pearl} alt="Pearl Cheshari"/>
        <figcaption id="figcap-text">Pearl Cheshari</figcaption>
        <figcaption id="figcap-text">~Backend Developer</figcaption>
     </figure>
     </div>

     <div>
     <figure id="team-figcap">
        <img id="pic" src={nabacwa} alt="Nancy Nabacwa"/>
        <figcaption id="figcap-text">Nancy Nabacwa</figcaption>
      <figcaption id="figcap-text">~Product Manager</figcaption>

     </figure>
     </div>

     <div>
     <figure id="team-figcap">
        <img id="pic" src={gloria} alt="Gloria Nyaga"/>
        <figcaption id="figcap-text">Gloria Nyaga</figcaption>
        <figcaption id="figcap-text">~Frontend Developer</figcaption>
        
     </figure>
     </div>

     <div>
     <figure id="team-figcap">
        <img id="pic" src={karen} alt="Karen Philip"/>
        <figcaption id="figcap-text">Karen Philip</figcaption>
   <figcaption id="figcap-text">~Researcher</figcaption>
     </figure>
     </div>

     <div >
     <figure id="team-figcap">
        <img id="pic" src={kathure} alt="Bridget Kathure"/>
        <figcaption id="figcap-text">Bridget Kathure</figcaption>
        <figcaption id="figcap-text">~Designer</figcaption>
     </figure>
     </div>



</div>
</div>

    )
}
export default Team;
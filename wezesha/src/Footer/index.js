
import './index.css';
import logofooter from '../images/logofooter.png'
const Footer = () => {
    return(
        <div id="footer">
        <img id="logofooter" src={logofooter} alt="logo" />
    <div id="footer-text">

        <div >
          <h3>CONTACTS</h3>
          <p>+254793058550</p>
          <p>+254797985806</p>
          <p>wezesha@gmail.com</p>
     </div>

    <div >
        <h3>ABOUT</h3>
        <p>FAQ</p>
        <p>Our Team</p>
    </div>
    
    <div >
        <h3>SOCIALS</h3>
        <p>LinkedIn</p>
        <p>Instagram</p>
        <p>Twitter</p>
    </div>

    <div>
        <h3>PRODUCTS</h3>
        <p>Wezesha App</p>
        <p>Dashboard</p>
    </div>
    </div>
     </div>
    )
}
export default Footer;
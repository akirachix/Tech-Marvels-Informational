import './index.css'
import logo from '../images/logo.png'


const About = () =>{
    return(
        <div>
            <div className='container'>
                <div className='wezesha-img'><img src={logo} alt='wezesha logo'/></div>
                <h1 className='about-heading'>About Wezesha</h1>

                <div className='welcome-text'><p>Wezesha provides farmers with increased timely access to credit, 
            enabling them to <strong>grow their businesses.</strong> We foster a sense of community among farmers more effectively <strong>increasing profitability</strong></p></div>

            <h1 className='ourStory-heading'>Our Story</h1>

                <div className='ourStory-text'><p>We recognized that smallholder farmers face significant challenges in accessing credit and financial services due to a lack of access to their credit history. We set out to develop a solution that would address these issues and provide farmers with a secure and transparent way to manage their finances</p></div>
            
            </div>
           
            
        </div>
    )
}

export default About;
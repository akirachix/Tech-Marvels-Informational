
import "./index.css";
import farmer from '../images/farmer.jpg'




const Landingpage = () =>{
  return (
    <div className="landingpagecontent">
        <div className="wezeshawelcometext">
        <div className="wezeshatext">
          <strong className="wezeshatexts">Wezesha</strong> is a robust digital software solution that caters to the needs
          of <strong className="wezeshatexts">farmers, SACCOs </strong>and <strong className="wezeshatexts">cooperatives </strong>enhancing their financial
          management and record-keeping capabilities.
          <div className="buttons">
          <button className="downloadButton">Download the App</button> <button className="dashboardButton">Get the Dashboard</button>
          </div>
        </div>
        <div>
          <img src={farmer} alt="farmer" className="landingpic"/>
        </div>
        </div>
      </div>
  );
}
export default Landingpage;
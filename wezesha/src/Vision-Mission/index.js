import './index.css';
import mission from  '../images/mission.png';
import vision  from '../images/vision.png';


const VisionAndMission=()=>{
    return(
    <div  id="vision-about">
        <div className='mission'>
            <img id ="mission-image" src={mission}/>
            <div className='mission-text'>
                Our mission is to bring smart agriculture to
                smallholder farmers to transform their lives
                and enhance food security and easen their loans
                accessibility processes.
            </div>
        </div>

        <div className='vision'>
            <img id ="vision-image" src={vision}/>
            <div className='vision-text'>
                Our vision is to transform dairy farming
                through digital innovation and financial 
                empowerment.
            </div>
        </div>
    </div> 
    )
}
export default VisionAndMission;

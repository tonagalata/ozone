import TimelineComponent from './TimelineComponent';
import './component.css';

const LandingPage = (props) => {

    
    return ( 
        <div className="landingPage">
            <div className="container">
                <img className='mainvVdeo' src={props.videoBG} alt='main container'/>
            </div>
            <TimelineComponent />
        </div>

     );
}
 
export default LandingPage;
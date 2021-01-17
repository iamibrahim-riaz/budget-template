import { Container, Row, Col } from 'reactstrap';

import videoIcon from '../../assets/images/video-icon.svg';
import videoBg from '../../assets/images/bg/video-bg.png';

function Videos() {
	return(
	    <div id="tcd-video-area" className="tcd-video-area">
	        <div className="video-img">
	            <img 
	            	src={videoBg} 
	            	alt="Video Bg Image" 
	            />
	        </div>
	        <div className="video-icon">
	            <a 
	            	id="play-home-video" 
	            	className="video-play-button"
	            	href="#"
	            >
	    	        <img 
	    	        	src={videoIcon} 
	    	        	alt="Video Icon"
	    	        />
	            </a>
	            <p className="video-txt">Just as AMC Theaters took advantage</p>
	        </div>
	    </div>
	)
}

export default Videos
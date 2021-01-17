import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import teamImage1 from '../../assets/images/team/1.png'; 
import teamImage2 from '../../assets/images/team/2.png';
import teamImage3 from '../../assets/images/team/3.png';

function Team() {
	return(
	    <div id="tcd-team" className="tcd-team">
	        <Container>
	            <div className="sec-title top-border text-center pb-75 md-pb-50">
	                <h2 className="title">Developing Team</h2>
	                <p className="desc">There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum <br />passages of LoremIpsum available passages of LoremIpsum available...</p>
	            </div>
	            <Row className="team-slider">
	            	<Col> 
	            		<div className="single-team">
	            		    <div className="team-img">
	            		        <img 
	            		        	src={teamImage1}
	            		        	alt="Team Image"
	            		        />
	            		    </div>
	            		    <div className="team-text">
	            		        <a href="#" className="title">Herman Sheffield</a>
	            		        <span className="designation">Designer</span>
	            		        <div className="hidden-content">
	            		            <span className="desc">Aenean animi error sint iusto hynae</span>
	            		            <ul className="social-icon">
		            		            <li><a href="#"><FontAwesomeIcon icon={["fab", "google"]} /></a></li>
		            		            <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
		            		            <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]} /></a></li>
	            		            </ul>
	            		        </div>
	            		    </div>
	            		</div>
	            	</Col>
	            	<Col> 
	            		<div className="single-team">
	            		    <div className="team-img">
	            		        <img 
	            		        	src={teamImage2}
	            		        	alt="Team Image"
	            		        />
	            		    </div>
	            		    <div className="team-text">
	            		        <a href="#" className="title">Paul Walker</a>
	            		        <span className="designation">Designer</span>
	            		        <div className="hidden-content">
	            		            <span className="desc">Aenean animi error sint iusto hynae</span>
	            		            <ul className="social-icon">
	            		                <li><a href="#"><FontAwesomeIcon icon={["fab", "google"]} /></a></li>
		            		            <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
		            		            <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]} /></a></li>
	            		            </ul>
	            		        </div>
	            		    </div>
	            		</div>
	            	</Col>
	            	<Col> 
	            		<div className="single-team">
	            		    <div className="team-img">
	            		        <img 
	            		        	src={teamImage3}
	            		        	alt="Team Image"
	            		        />
	            		    </div>
	            		    <div className="team-text">
	            		        <a href="#" className="title">Kory Anderson</a>
	            		        <span className="designation">Designer</span>
	            		        <div className="hidden-content">
	            		            <span className="desc">Aenean animi error sint iusto hynae</span>
	            		            <ul className="social-icon">
	            		                <li><a href="#"><FontAwesomeIcon icon={["fab", "google"]} /></a></li>
		            		            <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
		            		            <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]} /></a></li>
	            		            </ul>
	            		        </div>
	            		    </div>
	            		</div>
	            	</Col>
	            </Row>
	        </Container>
	    </div>
	)
}

export default Team
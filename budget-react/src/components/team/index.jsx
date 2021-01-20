import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import SingleTeam from './single';

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
	            		<SingleTeam 
							img={teamImage1}
							name="Ibrahim Riaz" 
							designation="Web Developer" 
							description="Aenean animi error sint iusto hynae"
							googleLink="#"
							facebookLink="#"
							twitterLink="#"
						/>
	            	</Col>
	            	<Col> 
	            		<SingleTeam 
							img={teamImage2}
							name="Paul Walker"
							designation="Manager" 
							description="Aenean animi error sint iusto hynae"
							googleLink="#"
							facebookLink="#"
							twitterLink="#"
						/>	            		
	            	</Col>
	            	<Col> 
	            		<SingleTeam 
							img={teamImage3}
							name="Kory Anderson"
							designation="Designer" 
							description="Aenean animi error sint iusto hynae"
							googleLink="#"
							facebookLink="#"
							twitterLink="#"
						/>
	            	</Col>
	            </Row>
	        </Container>
	    </div>
	)
}

export default Team
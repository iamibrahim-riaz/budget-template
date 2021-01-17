import Header from '../header'

import { Container, Row, Col } from 'reactstrap';

import aboutImage1 from '../../assets/images/about/about.png';


function About() {
	return(
	    <div id="tcd-about" className="tcd-about sec-spacer">
		    <Row className="align-items-center margin-0">
		        <Col lg="6" className="padding-0 d-none d-xl-block d-lg-block d-xl-none">
		            <div className="about-img">
		                <img 
		                	src={aboutImage1}
		                	alt="About Image" 
		                />
		            </div>
		        </Col>
		        <Col lg="6" className="padding-0">
		            <div className="about-content">
		                <h2 className="mb-25">Learn About Us</h2>
		                <p className="mb-20">A collection of textile samples lay spread out on the table - Samsa was a travelling
		                    salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine
		                    and housed in a nice.</p>
		                <p className="mb-0">It showed a lady fitted out with a fur hat and fur boa who sat upright</p>
		            </div>
		        </Col>
		    </Row>
		</div>
	)
}

export default About
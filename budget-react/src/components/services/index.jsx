import { Container, Row, Col } from 'reactstrap';

import servicesIcon1 from '../../assets/images/services/1.svg';
import servicesIcon2 from '../../assets/images/services/2.svg';
import servicesIcon3 from '../../assets/images/services/3.svg';


function Services() {
	return(
	    <div id="tcd-services" className="tcd-services">
	        <Container>
	            <div className="sec-title top-border text-center pb-120">
	                <h2 className="title">Services We Provide</h2>
	                <p className="desc">There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum <br />passages of LoremIpsum available passages of LoremIpsum available...</p>
	            </div>
	            <Row>
	                <Col className="md-mt-80">
	                    <div className="single-service">
	                        <div className="service-icon">
	                            <img 
	                            	src={servicesIcon1} 
	                            	alt="Service Icon"
	                            />
	                        </div>
	                        <div className="service-text">
	                            <h4 className="title"><a href="#">Best Industry Leaders</a></h4>
	                            <p className="desc">There are many variation passages of sum passages available there are many variation passages take some moment available.</p>
	                        </div>
	                    </div>
	                </Col>
	                <Col className="md-mt-80">
	                    <div className="single-service">
	                        <div className="service-icon">
	                            <img 
	                            	src={servicesIcon2}
	                            	alt="Service Icon"
	                            />
	                        </div>
	                        <div className="service-text">
	                            <h4 className="title"><a href="#">Finance Management</a></h4>
	                            <p className="desc">There are many variation passages of sum passages available there are many variation passages take some moment available.</p>
	                        </div>
	                    </div>
	                </Col>
	                <Col>
	                    <div className="single-service">
	                        <div className="service-icon">
	                            <img 
	                            	src={servicesIcon3} 
	                            	alt="Service Icon"
	                            />
	                        </div>
	                        <div className="service-text">
	                            <h4 className="title"><a href="#">Business Insurance</a></h4>
	                            <p className="desc">There are many variation passages of sum passages available there are many variation passages take some moment available.</p>
	                        </div>
	                    </div>
	                </Col>
	            </Row>
	        </Container>
	    </div>
	)
}

export default Services
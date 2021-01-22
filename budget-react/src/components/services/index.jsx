import { Container, Row, Col } from 'reactstrap';
import SectionHeading from '../heading';
import SingleService from './single';

import servicesIcon1 from '../../assets/images/services/1.svg';
import servicesIcon2 from '../../assets/images/services/2.svg';
import servicesIcon3 from '../../assets/images/services/3.svg';


function Services() {
	return(
	    <div id="tcd-services" className="tcd-services">
	        <Container>
				<SectionHeading
					classes="sec-title top-border text-center pb-120"
					title="Services We Provide"
					description="There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum passages of LoremIpsum available passages of LoremIpsum available..."
				/>
	            <Row>
	                <Col className="md-mt-80">
						<SingleService 
							img={servicesIcon1}
							Link="#"
							title="Best Industry Leaders" 
							description="There are many variation passages of sum passages available there are many variation passages take some moment available."
						/>
	                </Col>
	                <Col className="md-mt-80">
						<SingleService 
							img={servicesIcon2}
							Link="#"
							title="Finance Management" 
							description="There are many variation passages of sum passages available there are many variation passages take some moment available."
						/>
	                </Col>
	                <Col>
						<SingleService 
							img={servicesIcon3}
							Link="#"
							title="Business Insurance" 
							description="There are many variation passages of sum passages available there are many variation passages take some moment available."
						/>
	                </Col>
	            </Row>
	        </Container>
	    </div>
	)
}

export default Services
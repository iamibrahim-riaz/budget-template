import { Container, Row, Col } from 'reactstrap';

import SingleTestimonial from './single';

import quoteImage from '../../assets/images/arrows/quote.png';
import teamImage1 from '../../assets/images/team/1.png'; 
import teamImage2 from '../../assets/images/team/2.png';

function Testimonial() {
	return(
	    <div id="tcd-testimonial" className="tcd-testimonial">
	        <Container>
	            <div className="testimonial-area testi-watermark-text">
	                <Row className="testi-slider">
	    	            <Col>
							<SingleTestimonial 
								img={teamImage1}
								imgClass="img"
								quote={quoteImage}
								name="Ibrahim Riaz" 
								designation="Web Developer" 
								description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
								ipsum..."
							/>
	    	            </Col>
	    	            <Col>
							<SingleTestimonial 
								img={teamImage2}
								imgClass="img"
								quote={quoteImage}
								name="Kori Anderson" 
								designation="Founder" 
								description="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
								ipsum..."
							/>
	    	            </Col>
	                </Row>
	            </div>
	        </Container>
	    </div>
	)
}

export default Testimonial
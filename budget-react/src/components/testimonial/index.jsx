import { Container, Row, Col } from 'reactstrap';

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
	    	            	<div className="testi-item">
	    	            	    <div className="testi-img">
	    	            	        <img 
	    	            	        	className="img" 
	    	            	        	src={teamImage1} 
	    	            	        	alt="Testimonial Image"
	    	            	        />
	    	            	        <div className="quote">
	    	            	            <img 
	    	            	            	src={quoteImage} 
	    	            	            	alt="Quote Icon"
	    	            	            />
	    	            	        </div>
	    	            	    </div>
	    	            	    <div className="testi-info">
	    	            	        <h6 className="title">Kori Anderson</h6>
	    	            	        <span className="designation">Founder</span>
	    	            	    </div>
	    	            	    <div className="testi-desc">
	    	            	        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
	    	            	            ipsum...</p>
	    	            	    </div>
	    	            	</div>
	    	            </Col>
	    	            <Col>
	    	            	<div className="testi-item">
	    	            	    <div className="testi-img">
	    	            	        <img 
	    	            	        	className="img" 
	    	            	        	src={teamImage2} 
	    	            	        	alt="Testimonial Image"
	    	            	        />
	    	            	        <div className="quote">
	    	            	            <img 
	    	            	            	src={quoteImage} 
	    	            	            	alt="Quote Icon"
	    	            	            />
	    	            	        </div>
	    	            	    </div>
	    	            	    <div className="testi-info">
	    	            	        <h6 className="title">Kori Anderson</h6>
	    	            	        <span className="designation">Founder</span>
	    	            	    </div>
	    	            	    <div className="testi-desc">
	    	            	        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt Neque porro quisquam est, qui dolorem
	    	            	            ipsum...</p>
	    	            	    </div>
	    	            	</div>
	    	            </Col>
	                </Row>
	            </div>
	        </Container>
	    </div>
	)
}

export default Testimonial
import { Container, Row, Col } from 'reactstrap';

import featureImage1 from '../../assets/images/features/1.jpg';
import featureImage2 from '../../assets/images/features/2.jpg';
import featureImage3 from '../../assets/images/features/3.jpg';

function Features() {
	return(
	    <div id="tcd-features" className="tcd-features sec-spacer">
	        <Container>
	            <div className="sec-title top-border text-center pb-75 md-pb-50">
	                <h2 className="title">Our Best Feature</h2>
	                <p className="desc">There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum <br />passages of LoremIpsum available passages of LoremIpsum available...</p>
	            </div>
	            <Row className="feature-slider">
	                <Col className="feature-item">
	                    <div className="feature-img">
	                        <img 
	                        	src={featureImage1} 
	                        	alt="Image Alt"
	                        />
	                    </div>
	                    <div className="feature-text">
	                        <span className="water-text">01</span>
	                        <h4 className="title"><a href="#">Materials Technology</a></h4>
	                        <span className="desc">Aliquet quia autem maecenas, digniss inceptos axime eveniet</span>
	                    </div>
	                </Col>
	                <Col className="feature-item">
	                    <div className="feature-img">
	                        <img 
	                        	src={featureImage2}
	                        	alt="Image Alt"
	                        />
	                    </div>
	                    <div className="feature-text">
	                        <span className="water-text">02</span>
	                        <h4 className="title"><a href="#">Startup Funding</a></h4>
	                        <span className="desc">Relique quia autem maecenas, digniss inceptos axime eveniet</span>
	                    </div>
	                </Col>
	                <Col className="feature-item">
	                    <div className="feature-img">
	                        <img 
	                        	src={featureImage3}
	                        	alt="Image Alt" 
	                        />
	                    </div>
	                    <div className="feature-text">
	                        <span className="water-text">03</span>
	                        <h4 className="title"><a href="#">Business Matching</a></h4>
	                        <span className="desc">Vermoes quia autem maecenas, digniss inceptos axime necto</span>
	                    </div>
	                </Col>
	            </Row>
	        </Container>
	    </div>
	)
}

export default Features
import { Container, Row, Col } from 'reactstrap';
import SectionHeading from '../heading';
import SingleFeature from './single';

import featureImage1 from '../../assets/images/features/1.jpg';
import featureImage2 from '../../assets/images/features/2.jpg';
import featureImage3 from '../../assets/images/features/3.jpg';

function Features() {
	return(
	    <div id="tcd-features" className="tcd-features sec-spacer">
	        <Container>
				<SectionHeading
					classes="sec-title top-border text-center pb-75 md-pb-50"
					title="Our Best Feature"
					description="There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum passages of LoremIpsum available passages of LoremIpsum available..."
				/>
	            <Row className="feature-slider">
					<Col> 
						<SingleFeature 
							img={featureImage1}
							Link="#"
							markText="01" 
							title="Materials Technology" 
							description="Aliquet quia autem maecenas, digniss inceptos axime eveniet"
						/>						
	                </Col>
	                <Col >
						<SingleFeature 
							img={featureImage2}
							Link="#"
							markText="02" 
							title="Startup Funding" 
							description="Relique quia autem maecenas, digniss inceptos axime eveniet"
						/>
	                </Col>
	                <Col>
						<SingleFeature 
							img={featureImage3}
							Link="#"
							markText="03" 
							title="Business Matching" 
							description="Vermoes quia autem maecenas, digniss inceptos axime necto"
						/>
	                </Col>
	            </Row>
	        </Container>
	    </div>
	)
}

export default Features
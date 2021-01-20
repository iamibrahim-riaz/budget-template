import { Container, Row, Col } from 'reactstrap';
import SectionHeading from '../heading';
import SingleBlog from './single';

import blogImage1 from '../../assets/images/blog/1.jpg';
import blogImage2 from '../../assets/images/blog/2.jpg';
import blogImage3 from '../../assets/images/blog/3.jpg';

function Blog() {
	return(
	    <div id="tcd-blog" className="tcd-blog sec-spacer">
	        <Container fluid={true}>
				<SectionHeading
					classes="sec-title top-border text-center pb-75 md-pb-50"
					title="Our Blog Post"
					description="There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum passages of LoremIpsum available passages of LoremIpsum available..."
				/>
	            <Row className="blog-slider">
	    	        <Col> 
						<SingleBlog
							img={blogImage1}
							Link="#"
							title="New Chicago school budget relies on the state
							pension"
							description="There are many variation passages of Lorem Ipsum There are many variation
							passages oform pasages of Ipsum available..."
							btnText="Read More"
							date="25"
							month="May"
							likesCount="08"
							commentsCount="10"
						/>
					</Col>
	    	        <Col>
						<SingleBlog
							img={blogImage2}
							Link="#"
							title="New Chicago school budget relies on the state
							pension"
							description="There are many variation passages of Lorem Ipsum There are many variation
							passages oform pasages of Ipsum available..."
							btnText="Read More"
							date="25"
							month="May"
							likesCount="08"
							commentsCount="10"
						/>
	    	        </Col>
	    	        <Col>
						<SingleBlog
							img={blogImage3}
							Link="#"
							title="New Chicago school budget relies on the state
							pension"
							description="There are many variation passages of Lorem Ipsum There are many variation
							passages oform pasages of Ipsum available..."
							btnText="Read More"
							date="25"
							month="May"
							likesCount="08"
							commentsCount="10"
						/>
	    	        </Col>
	            </Row>
	        </Container>
	    </div>
	)
}

export default Blog
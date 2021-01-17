import { Container, Row, Col } from 'reactstrap';

import blogImage1 from '../../assets/images/blog/1.jpg';
import blogImage2 from '../../assets/images/blog/2.jpg';
import blogImage3 from '../../assets/images/blog/3.jpg';

function Blog() {
	return(
	    <div id="tcd-blog" className="tcd-blog sec-spacer">
	        <Container fluid={true}>
	            <div className="sec-title top-border text-center pb-75 md-pb-50">
	                <h2 className="title">Our Blog Post</h2>
	                <p className="desc">There are many variation passages of Lorem Ipsum There are many variation passages of Lorem Ipsum <br />passages of LoremIpsum available passages of LoremIpsum available...</p>
	            </div>
	            <Row className="blog-slider">
	    	        <Col>
	    	        	<div className="blog-item">
	    	        	    <div className="blog-img">
	    	        	        <a href="#">
	    	        	        	<img 
	    	        	        		src={blogImage1} 
	    	        	        		alt="Blog Image"
	    	        	        	/>
	    	        	        </a>
	    	        	    </div>
	    	        	    <div className="blog-content">
	    	        	        <div className="left-part">
	    	        	            <div className="single-part">
	    	        	                <span className="date">25</span>
	    	        	                <span className="date">May</span>
	    	        	            </div>
	    	        	            <div className="single-part">
	    	        	                <span>Likes: 10</span>
	    	        	            </div>
	    	        	            <div className="single-part">
	    	        	                <span>08</span>
	    	        	                <span>Comments</span>
	    	        	            </div>
	    	        	        </div>
	    	        	        <div className="right-part">
	    	        	            <h4 className="title"><a href="#">New Chicago school budget relies on the state
	    	        	                pension</a></h4>
	    	        	            <p className="desc">There are many variation passages of Lorem Ipsum There are many variation
	    	        	                passages oform pasages of Ipsum available...</p>
	    	        	            <a className="blog-btn" href="#">Read More</a>
	    	        	        </div>
	    	        	    </div>
	    	        	</div>
	    	        </Col>
	    	        <Col>
	    	        	<div className="blog-item">
	    	        	    <div className="blog-img">
	    	        	        <a href="#">
	    	        	        	<img 
	    	        	        		src={blogImage2} 
	    	        	        		alt="Blog Image"
	    	        	        	/>
	    	        	        </a>
	    	        	    </div>
	    	        	    <div className="blog-content">
	    	        	        <div className="left-part">
	    	        	            <div className="single-part">
	    	        	                <span className="date">25</span>
	    	        	                <span className="date">May</span>
	    	        	            </div>
	    	        	            <div className="single-part">
	    	        	                <span>Likes: 10</span>
	    	        	            </div>
	    	        	            <div className="single-part">
	    	        	                <span>08</span>
	    	        	                <span>Comments</span>
	    	        	            </div>
	    	        	        </div>
	    	        	        <div className="right-part">
	    	        	            <h4 className="title"><a href="#">New Chicago school budget relies on the state
	    	        	                pension</a></h4>
	    	        	            <p className="desc">There are many variation passages of Lorem Ipsum There are many variation
	    	        	                passages oform pasages of Ipsum available...</p>
	    	        	            <a className="blog-btn" href="#">Read More</a>
	    	        	        </div>
	    	        	    </div>
	    	        	</div>
	    	        </Col>
	    	        <Col>
	    	        	<div className="blog-item">
	    	        	    <div className="blog-img">
	    	        	        <a href="#">
	    	        	        	<img 
	    	        	        		src={blogImage3}
	    	        	        		alt="Blog Image"
	    	        	        	/>
	    	        	        </a>
	    	        	    </div>
	    	        	    <div className="blog-content">
	    	        	        <div className="left-part">
	    	        	            <div className="single-part">
	    	        	                <span className="date">25</span>
	    	        	                <span className="date">May</span>
	    	        	            </div>
	    	        	            <div className="single-part">
	    	        	                <span>Likes: 10</span>
	    	        	            </div>
	    	        	            <div className="single-part">
	    	        	                <span>08</span>
	    	        	                <span>Comments</span>
	    	        	            </div>
	    	        	        </div>
	    	        	        <div className="right-part">
	    	        	            <h4 className="title"><a href="#">New Chicago school budget relies on the state
	    	        	                pension</a></h4>
	    	        	            <p className="desc">There are many variation passages of Lorem Ipsum There are many variation
	    	        	                passages oform pasages of Ipsum available...</p>
	    	        	            <a className="blog-btn" href="#">Read More</a>
	    	        	        </div>
	    	        	    </div>
	    	        	</div>
	    	        </Col>
	            </Row>
	        </Container>
	    </div>
	)
}

export default Blog
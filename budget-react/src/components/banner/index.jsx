import Header from '../header'

import { Container, Row, Col } from 'reactstrap';


function Banner() {
	return(
	    <div id="tcd-banner" className="tcd-banner">
			{/* Header Part */}
		    <Header />

			{/* Banner Wrapper Part */}
		    <div className="banner-wrapper">
		        <Container>
		            <div className="banner-slider">
		                <div className="banner-content text-center">
		                    <h2 className="banner-title uppercase">
		                        We are Financial Experts Boost Your Business! Right Now
		                    </h2>
		                    <h5 className="banner-desc">Over 24 years experience and knowledge international...</h5>
		                    <div className="banner-btn">
		                        <a 
		                        	href="#" 
		                        	className="primary-btn mr-30"
		                        >
		                        	Read More
		                        </a>
		                        <a 
		                        	href="#" 
		                        	className="primary-btn transparent"
		                        >
		                        	View Details
		                        </a>
		                    </div>
		                </div>
		            </div>
		        </Container>
		    </div>
		</div>
	)
}

export default Banner
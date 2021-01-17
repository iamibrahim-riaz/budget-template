import { Container, Row, Col } from 'reactstrap';

// Assets
import whiteLogo from '../../assets/images/logo-white.svg';
import callLogo from '../../assets/images/arrows/phone.svg';

function Header() {
	return(
	    <header id="tcd-header" className="tcd-header-1">
	        <div className="menu-bar menu-sticky">
	            <Container>
	                <Row>
	                    <Col lg="3">
	                        <div className="logo">
	                            <a href="#">
	                                <img 
	                                	src={whiteLogo} 
	                                	alt="White Logo" 
	                                />
	                            </a>
	                        </div>
	                        <button 
	                        	className="mobile-menu-icon" 
	                        	aria-label="Main Menu"
	                        >
	                            <span></span>
	                            <span></span>
	                            <span></span>
	                        </button>
	                    </Col>
	                    <Col lg="9">
	                        <div className="mainmenu">
	                            <ul className="nav-menu">
	                                <li><a href="#tcd-banner">Home</a></li>

	                                <li><a href="#tcd-about">About</a></li>

	                                <li><a href="#tcd-services">Services</a></li>

	                                <li><a href="#tcd-features">Features</a></li>

	                                <li><a href="#tcd-blog">Blog</a></li>

	                                <li><a href="#tcd-footer">Contact</a></li>
	                            </ul>
	                            <div className="contact-menu">
	                                <span className="icon">
	                                	<img 
	                                		src={callLogo} 
	                                		alt="Phone Icon" 
	                                	/> 
	                                </span>
	                                <div className="contact-number">
	                                    <span>
	                                    	<a 
		                                    	className="phone" 
		                                    	href="tel:01234567"
		                                    >
		                                    	(+1) 212-946-2707
	                                    	</a>
	                                    </span>
	                                    <span>
	                                    	Opening Hours 09-05
	                                    </span>
	                                </div>
	                            </div>
	                        </div>
	                    </Col>
	                </Row>
	            </Container>
	            <div className="menu-bg hidden-md"></div>
	        </div>
	    </header>
	)
}

export default Header
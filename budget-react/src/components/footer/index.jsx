import { Container, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import mainLogo from '../../assets/images/logo.svg';

function Footer() {
	return(
	    <div id="tcd-footer" className="tcd-footer">
	        <Container>
	            <Row className="footer-content">
	                <Col>
	                    <div className="footer-widget">
	                        <div className="footer-logo">
	                            <a href="#">
	                                <img 
	                                	src={mainLogo} 
	                                	alt="Logo"
	                                />
	                            </a>
	                        </div>
	                        <p className="copyright-text">© 2020 <a href="#">Budget.com</a>. All Rights Reserved.</p>
	                        <div className="footer-social">
	                            <ul className="social-icon">
	                                <li><a href="#"><FontAwesomeIcon icon={["fab", "instagram"]} /></a></li>
	                                <li><a href="#"><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
	                                <li><a href="#"><FontAwesomeIcon icon={["fab", "twitter"]} /></a></li>
	                            </ul>
	                        </div>
	                    </div>
	                </Col>
	                <Col>
	                    <div className="footer-widget">
	                        <h4 className="footer-title">Latest Information</h4>
	                        <p>Information Update</p>
	                        <ul className="footer-menu">
	                            <li><a href="#">Home</a></li>
	                            <li><a href="#">About Us</a></li>
	                            <li><a href="#">Departent</a></li>
	                            <li><a href="#">Event</a></li>
	                        </ul>
	                    </div>
	                </Col>
	                <Col>
	                    <div className="footer-widget">
	                        <h4 className="footer-title">Contact Us</h4>
	                        <p>Social Address</p>
	                        <div className="tcd-newsletter">
	                            <form className="mb-0">
	                                <div className="form-group">
	                                    <input type="email" name="your-email" placeholder="Your Email" />
	                                    <button className="btn-newsletter"><FontAwesomeIcon icon={["fas", "arrow-right"]} />
	                                    </button>
	                                </div>
	                            </form>
	                        </div>

	                        <div className="footer-address">
	                            <a className="phone" href="tel:01234567">(+1) 212-946-2707</a><a href="mailto:Hello@agency.com">Hello@agency.com</a>
	                            <span>12W 34th St, bangladesh</span>
	                        </div>
	                    </div>
	                </Col>
	            </Row>
	        </Container>
	    </div>
	)
}

export default Footer
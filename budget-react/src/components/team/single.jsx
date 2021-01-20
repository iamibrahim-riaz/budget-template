import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SingleTeam(props) {
	return( 
		<div className="single-team">
		    <div className="team-img">
		        <img 
		        	src={props.img}
		        	alt="Team Image"
		        />
		    </div>
		    <div className="team-text">
		        <a href="#" className="title">{props.name}</a>
		        <span className="designation">{props.designation}</span>
		        <div className="hidden-content">
		            <span className="desc">{props.description}</span>
		            <ul className="social-icon">
    		            <li><a href={props.googleLink}><FontAwesomeIcon icon={["fab", "google"]} /></a></li>
    		            <li><a href={props.facebookLink}><FontAwesomeIcon icon={["fab", "facebook"]} /></a></li>
    		            <li><a href={props.twitterLink}><FontAwesomeIcon icon={["fab", "twitter"]} /></a></li>
		            </ul>
		        </div>
		    </div>
		</div>
	)
}

export default SingleTeam
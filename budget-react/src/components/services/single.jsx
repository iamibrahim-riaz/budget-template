function SingleService(props) {
	return(
		<div className="single-service">
            <div className="service-icon">
                <img 
                    src={props.img} 
                    alt="Service Icon"
                />
            </div>
            <div className="service-text">
                <h4 className="title"><a href={props.Link}>{props.title}</a></h4>
                <p className="desc">{props.description}</p>
            </div>
        </div>
	)
}

export default SingleService
function SingleFeature(props) {
	return(
        <div className="feature-item">
            <div className="feature-img">
                <img 
                    src={props.img} 
                    alt="Feature Image"
                />
            </div>
            <div className="feature-text">
                <span className="water-text">{props.markText}</span>
                <h4 className="title"><a href={props.Link}>{props.title}</a></h4>
                <span className="desc">{props.description}</span>
            </div>
        </div>
	)
}

export default SingleFeature
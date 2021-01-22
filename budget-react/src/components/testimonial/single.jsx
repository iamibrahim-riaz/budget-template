function SingleTestimonial(props) {
	return(
		<div className="testi-item">
            <div className="testi-img">
                <img 
                    className={props.imgClass}
                    src={props.img} 
                    alt="Testimonial Image"
                />
                <div className="quote">
                    <img 
                        src={props.quote} 
                        alt="Quote Icon"
                    />
                </div>
            </div>
            <div className="testi-info">
                <h6 className="title">{props.name}</h6>
                <span className="designation">{props.designation}</span>
            </div>
            <div className="testi-desc">
                <p>{props.description}</p>
            </div>
        </div>
	)
}

export default SingleTestimonial
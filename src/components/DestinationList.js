import React from "react";

const DestinationList = ({destination}) => {
	return (
		<div className="col-3">
			<div className="destinations__card animation">
				<div className="destinations__card__img">
					<img
						src={destination.image}
						alt={destination.image}
					/>
					{/* <LazyLoadImage src={destination.image} alt={destination.image} /> */}
				</div>
			</div>
		</div>
	);
};

export default DestinationList;

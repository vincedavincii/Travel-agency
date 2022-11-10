import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {GiPositionMarker} from "react-icons/gi";
import {Link} from "react-router-dom";

const DestinationList = ({destination}) => {
	return (
		<div className="col-3 p-15">
			<div className="destinations_card animation">
				<div className="destinations_card_img">
					<LazyLoadImage
						src={destination.image}
						alt={destination.image}
					/>
				</div>
				<div className="destinations_card_layer">
					<div className="destinations_card_layer_content">
						<GiPositionMarker size={20} />
						<div className="destinations_card_layer_content_country">
							{destination.name}
						</div>
					</div>
				</div>
				<div className="destinations_card_info">
					<div className="destinations_card_info_text">
						<Link
							className="btn-white"
							to={`/details/${destination.id}`}
						>
							Explore
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DestinationList;

import React, {useContext, useState} from "react";
import DestinationContext from "../context/DestinationContext";
import DestinationList from "./DestinationList";

const Destinations = () => {
	const {
		destinationData: {destinations},
	} = useContext(DestinationContext);

	const [state] = useState({
		heading:
			"Discover the most engaging places in the world with Travel Friends",
		paragraph:
			"Travel is a brutality. It forces you to trust strangers and to lose sight of all that familiar comforts of home and friends.You are constantly of balance. Nothing is yours except the essential things Air, Sleep, Dream, the sea, the sky-all things tending towards the eternal or what we imagine of it.",
	});
	return (
		<div className="destinations">
			<div className="container">
				<div className="row ml-minus-15 mr-minus-15">
					<div className="col-6 p-15">
						<h3 className="destinations_heading animation">{state.heading}</h3>
					</div>
					<div className="col-6 p-15">
						<p className="destinations_paragraph animation">
							{state.paragraph}
						</p>
					</div>
				</div>
				<div className="destinations_block">
					<div className="row ml-minus-15 mr-minus-15">
						{destinations.map((destination) => (
							<DestinationList
								destination={destination}
								key={destination.id}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destinations;

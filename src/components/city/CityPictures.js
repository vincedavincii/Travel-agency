import {LazyLoadImage} from "react-lazy-load-image-component";
const CityPictures = ({img, status}) => {
	return (
		<div className="cities__body__image">
			<LazyLoadImage
				src={img}
				alt={img}
			/>
			<div
				className={
					status === "Bestselling"
						? "bestselling"
						: status === "New"
						? "new"
						: status === "Hot"
						? "hot"
						: ""
				}
			>
				{status}
			</div>
		</div>
	);
};
export default CityPictures;

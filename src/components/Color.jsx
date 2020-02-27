import React from 'react';
import StarRating from './StarRating';

const Color = ({title, color, rating = 0, onRemove = f=>f, onRate = f=>f}) => {
	return (
		<section className="color">
			<h2>{title}</h2>
			<button onClick={onRemove}>Delete</button>
			<div className="color" style={{backgroundColor: color, width : '100%', height : '15px'}}></div>
			<div>
				<StarRating onRate={onRate} starsSelected={rating} />
			</div>
		</section>
	)
}

export default Color;
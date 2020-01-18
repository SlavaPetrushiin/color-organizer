import React from 'react';
import Star from "./Star"

const StarRating = ({starsSelected = 0, totalStars = 5, onRate = f=>f }) =>{
	return (
		<div className="star-rating">
			{
				[...Array(totalStars)].map((star, i) => {
					return (
						<Star
							key = {i}
							selected = {i<starsSelected}
							onClick={() => onRate(i+1)}
						/>
					)
				})
			}
			<p>{starsSelected} of {totalStars}</p>
		</div>
		)		
}

export default StarRating;
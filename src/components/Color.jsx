import React from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';

const Color = ({title, color, rating = 0}) => {
	return (
		<div className="color">
			<h2>{title}</h2>
			<div className="color" style={{backgroundColor: color}}></div>
			<div>
				<StarRating />
			</div>
		</div>
	)
}





export default Color;
import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

const ColorsList = ({colors = []}) => {
	return (
		<div className="color-list">
			{
				(colors.length === 0)
					? <p>No Colors Listed. Add a Color</p> 
					: colors.map(color => <Color key={color.id} {...color}/>)
			}
		</div>
	)
}

export default ColorsList;
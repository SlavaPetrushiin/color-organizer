import React from 'react';
import Color from './Color';
import PropTypes from "prop-types";

const ColorsList = (props) => {
	let { colors, onRemove, onRate } = props;
    return (
        <div className="color-list">
            {
                (colors.length === 0)
                    ? <p>No Colors Listed. Add a Color</p>
                    : colors.map(color => {
                        return <Color
                            key={color.id}
                            {...color}
                            onRemove={()=> onRemove(color.id)}
                            onRate = {(rating) => onRate(color.id, rating)}
                        />})
            }
        </div>
    )
}

ColorsList.propTypes = {
    colors: PropTypes.array,
    onRemove : PropTypes.func,
    onRate : PropTypes.func
}

ColorsList.defaultProps = {
    colors: [],
    onRemove : f=>f,
    onRate: f=>f
}
export default ColorsList;
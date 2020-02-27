import React from 'react';
import PropTypes from "prop-types";

const AddColorForm = (props) => {
	let _title, _color;
	let { onNewColor } = props;
	const submit = (e) => {
		e.preventDefault();
		onNewColor(_title.value, _color.value);
		_title.value = "";
		_color.value = "#000000";
	}

	return (
		<form onSubmit={submit}>
			<input
				type="text"
				ref={input => _title = input}
				placeholder="color title..."
				required/>
			<input type="color" ref={input => _color = input}/>
			<button>ADD</button>
		</form>
	)
};

AddColorForm.propTypes = {
	onNewColor :  PropTypes.func
};

AddColorForm.defaultProps = {
	onNewColor :  f=>f
}


export default AddColorForm;
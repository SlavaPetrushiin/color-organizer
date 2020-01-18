import React from 'react';

const AddColorForm = ({onNewColor = f=>f}) => {
	let _title, _color;

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
}

export default AddColorForm;
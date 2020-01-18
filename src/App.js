import React from 'react';
import {v4} from 'uuid';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorsList from './components/ColorsList';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			colors : []
		}
	}
  render(){
		let {colors} = this.state;
		return (
			<div className="App">
				<AddColorForm />
				<ColorsList colors={colors}/>
			</div>
		);
	}
}

export default App;

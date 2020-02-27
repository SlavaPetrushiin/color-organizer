import React from 'react';
import {v4} from 'uuid';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorsList from './components/ColorsList';
import {connect} from "react-redux";
import {addColor, rateColor, removeColor} from "./store/reducer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.addColor = this.addColor.bind(this);
		this.removeColor = this.removeColor.bind(this);
		this.rateColor = this.rateColor.bind(this);
    };

    addColor(title, color) {
        const newColor = {
            id: v4(),
            title,
            color,
            rating: 0
        };
        this.props.addNewColor(newColor);
    };

    removeColor(colorId){
        this.props.deletedColor(colorId);
    };

	rateColor(colorId, rating){
        this.props.newRateColor(colorId, rating);
	};

    render() {
        let {colors} = this.props;
        return (
            <div className="App">
                <AddColorForm onNewColor={this.addColor}/>
                <ColorsList
                    colors={colors}
					onRate = {this.rateColor}
                    onRemove={this.removeColor}/>
            </div>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        colors: state.data.colors
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewColor: (color) => {dispatch(addColor(color))},
        deletedColor: (id) => {dispatch(removeColor(id))},
        newRateColor: (id, rating) => {dispatch(rateColor(id, rating))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



import React from 'react';
import PropTypes from "prop-types";
import { getFunName } from "../helpers"

class StorePicker extends React.Component {

	storeTyped = React.createRef()

	static propTypes = {
		history: PropTypes.object
	}

	render() {
		return (
			<form className="store-selector">
				<h2>Please enter a store</h2>
				<input
					type="text"
					required placeholder="Store Name"
					defaultValue={getFunName()}
					ref={this.storeTyped}
				/>
				<button type="submit" onClick={this.visitStoreButton}>Visit Store</button>
			</form>
		)
	}

	visitStoreButton = event => {
		event.preventDefault();
		const storeName = this.storeTyped.current.value;
		console.log(storeName);
		this.props.history.push(`/store/${storeName}`);
	}
}

export default StorePicker;
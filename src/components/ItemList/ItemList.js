import React from "react";
import ItemForm from "../ItemForm/ItemForm";

function ItemList(props) {
	const items = props.searchedRestaurant;
	let itemsToDisplay = "Loading...";
	if (props.searchedRestaurant[0]) {
		itemsToDisplay = items.map((item) => {
			return (
				<div>
					<p>Item name: {item.items[0].name}</p>
					<p>Item type: {item.items[0].type}</p>
					<img src={item.items[0].img} />
					<hr />
				</div>
			);
		});
	}
	return (
		<>
			<h2>This is the ItemList Component</h2>
			{itemsToDisplay}
			<ItemForm />
		</>
	);
}
export default ItemList;

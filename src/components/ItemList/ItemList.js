import React from "react";
import ItemForm from "../ItemForm/ItemForm";
import { Route, Switch } from "react-router-dom";

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

	const url = "https://aa-palate-backend.herokuapp.com/";

	const [resItems, setResItems] = React.useState([]);

	// const [itemId, setItemId] = React.useState([])

	//EMPTY ITEM
	const emptyItem = {
		name: "",
		type: "",
		img: "",
	};

	const [form, setForm] = React.useState(emptyItem);

	// GET LIST OF ITEMS FUNCTION
	const getItems = () => {
		fetch(url + "items/")
			.then((response) => response.json())
			.then((data) => {
				setResItems(data);
			});
	};

	// React.useEffect(() => getDogs(), []);

	//handleCreate function for creating new items
	const handleCreate = (newItem) => {
		let payload = {newItem, restId: props.match.params._id}

		fetch(url + "items", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		}).then(()=> {
			//   itemId = res.json()
			//   return itemId
			  getItems();
		  })
		
		// console.log("new item", newItem);

		// console.log("checking itemId variable", itemId)

			// fetch to add item to restaurant
		// fetch(url + "restaurants/" + props.searchedRestaurant._id + "/addItem/" + itemId, {
		// 	method: "put",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(newItem),
		// }).then(() => {
		// 	// don't need the response from the post but will be using the .then to update the list of dogs

			
		// });
	};

	//.then((response) => response.json())
		//	.then((data) => {

		// let rest = props.searchedRestaurant;
		// 	console.log("looking for restaurant in itemList", rest);
		// 	rest.map((r) => {
		// 			if (newItem.name) {
		// 				setItemId([r]);
		// 			} else {
		// 				console.log("Something didn't work", r.name);
		// 			}
		// 		})
		// 	console.log("itemId", itemId)

		// fetch to add item to restaurant
		// fetch(url + "restaurants/" + props.searchedRestaurant._id + "/addItem/" + newItem._id, {
		// 	method: "put",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(newItem),
		// }).then(() => {
		// 	// don't need the response from the post but will be using the .then to update the list of dogs

		// 	setResItems(emptyItem);
		// 	getItems();
		// });
		


	//handleUpdate function for updating items
	const handleUpdate = (newItem) => {
		fetch(url + "items/" + newItem._id, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newItem),
		}).then(() => {
			// don't need the response from the post but will be using the .then to update the list of dogs
			getItems();
		});
	};

	//deleteItemto delete an item
	const deleteItem = (item) => {
		fetch(url + "/:id/" + item._id, {
			method: "delete",
		}).then((response) => getItems());
	};

	return (
		<>
			<h2>This is the ItemList Component</h2>
			{itemsToDisplay}
			<Switch>
			<Route
				path="/restaurant/:id"
				render={(routerprops) => (
					<ItemForm
						{...routerprops}
						handleSubmit={handleCreate}
						item={form}
					/>
				)}
			/>

			<Route
				path="/restaurant"
				render={(routerprops) => (
					<ItemForm
						{...routerprops}
						handleSubmit={handleUpdate}
						item={form}
					/>
				)}
			/>
		</Switch>
		</>
	);
}
export default ItemList;

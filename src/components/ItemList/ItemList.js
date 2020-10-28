import React from "react";
import ItemForm from "../ItemForm/ItemForm";
import Item from "../Item/Item";
import { Route, Redirect } from "react-router-dom";

function ItemList(props) {
	const items = props.searchedRestaurant;
	let itemsToDisplay = "Loading...";
	if (props.searchedRestaurant[0]) {
		itemsToDisplay = items.map((item) => {
			return (
				<div>
					<p>Item name: {item.items[0].name}</p>
					<p>Item type: {item.items[0].type}</p>
					<img src={item.items[0].img} style={{ height: "8em" }} />
					<hr />
				</div>
			);
		});
	}

	console.log("testing routerprops in ItemList", props.match.params);
	const id = props.match.params.id;
	console.log("testing routerprops in ItemList - exampleId", id);

	const url = "https://aa-palate-backend.herokuapp.com/";

	const [resItems, setResItems] = React.useState([]);

	const [newItemState, setNewItemState] = React.useState([]);

	//EMPTY ITEM
	const emptyItem = {
		name: "",
		type: "",
		img: "",
	};

	const [selectedItem, setSelectedItem] = React.useState(emptyItem);

	const [form, setForm] = React.useState(emptyItem);

	const [isDeleted, setIsDeleted] = React.useState(false);

	// GET LIST OF ITEMS FUNCTION
	const getItems = () => {
		fetch(url + "items/")
			.then((response) => response.json())
			.then((data) => {
				setResItems(data);
			});
	};

	const getRestaurantItems = () => {
		fetch(url + "restaurants/")
			.then((response) => response.json())
			.then((data) => {
				console.log("data - items", props.searchedRestaurant);
				setNewItemState(props.searchedRestaurant);
			});
	};

	// React.useEffect(() => getDogs(), []);

	//handleCreate function for creating new items
	const handleCreate = (newItem) => {
		let payload = { newItem, restId: props.match.params.id };

		fetch(url + "items", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		}).then(() => {
			//   itemId = res.json()
			//   return itemId

			//   getItems();
			getRestaurantItems();
		});

		console.log("payload", payload);
	};

	// fetch to add item to restaurant
	// fetch(url + "restaurants/" + props.searchedRestaurant._id + "/addItem/" + newItem._id, {
	// 	method: "put",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	body: JSON.stringify(newItem),
	// }).then(() => {

	// 	setResItems(emptyItem);
	// 	getItems();
	// });

	//handleUpdate function for updating items
	const handleUpdate = (newItem) => {
		fetch(url + "items/" + id, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newItem),
		}).then(() => {
			getItems();
		});
	};

	// deleteItemto delete an item
	const deleteItem = (resItems) => {
		fetch(url + "items/" + resItems._id, {
			method: "delete",
		}).then(() => setIsDeleted(true));
	};

	if (!resItems) {
		return <p>Loading...</p>;
	}

	if (isDeleted) {
		console.log("ITEM DELETED");
		return getItems();
	}

	// // deleteItemto delete an item
	// const deleteItem = (resItems) => {
	// 	fetch(url + "items/" + resItems._id, {
	// 		method: "delete",
	// 	}).then((response) => getItems());
	// };

	// // const selectItem = (item) => {
	// // 	setSelectedItem(item);
	// // };

	return (
		<>
			<h2>This is the ItemList Component</h2>
			{itemsToDisplay}

			<Route
				exact
				path="/restaurant/:id"
				render={(routerprops) => (
					<ItemForm
						{...routerprops}
						handleSubmit={handleCreate}
						item={form}
					/>
				)}
			/>

			<Item
				newItemState={newItemState}
				selectItem={selectedItem}
				deleteItem={deleteItem}
			/>

			{/* <Route
				exact path="/restaurant"
				render={(routerprops) => (
					<ItemForm
						{...routerprops}
						handleSubmit={handleUpdate}
						item={form}
					/>
				)}
			/> */}
		</>
	);
}
export default ItemList;

import React from "react";
import ItemForm from "../ItemForm/ItemForm";
import Item from "../Item/Item";
import { Route, Switch, Link } from "react-router-dom";
import "./ItemList.css";

function ItemList(props) {
	const id = props.match.params.id;

	const url = "https://aa-palate-backend.herokuapp.com/";

	// const url = "http://localhost:3000/"

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

	// GET LIST OF ITEMS FUNCTION
	const getItems = () => {
		fetch(url + "items/")
			.then((response) => response.json())
			.then((data) => {
				setResItems(data);
			});
	};

	const getRestaurantItems = () => {
		fetch(url + "restaurants/" + props.match.params.id)
			.then((response) => response.json())
			.then((data) => {
				console.log("data from updateRest function", data);
				setNewItemState([data.restaurants]);
			});
	};

	React.useEffect(() => getRestaurantItems(), []);

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
			getRestaurantItems();
		});
	};

	//handleUpdate function for updating items
	const handleUpdate = (newItem) => {
		fetch(url + "items/" + newItem._id, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newItem),
		}).then(() => {
			getRestaurantItems();
		});
	};

	// deleteItemto delete an item
	const deleteItem = (resItems) => {
		fetch(url + "items/" + resItems._id, {
			method: "delete",
		}).then(() => {
			getRestaurantItems();
		});
	};

	//return updateRestaurantList();
	if (!resItems) {
		return <p>Loading...</p>;
	}

	const selectItem = (item) => {
		setSelectedItem(item);
	};

	// Adding the Restuarant Name to top of page
	let rName = props.searchedRestaurants;
	let restaurantName = "loading...";
	if (props.searchedRestaurants[0]) {
		const test = props.searchedRestaurants[0].restaurants;

		restaurantName = test.map((restaurant) => {
			if (restaurant._id === id) {
				return (
					<div className="Form">
						<h1 className="Header">Top Reviewed Items At:</h1>
						<p className="RestName">{restaurant.name}</p>
					</div>
				);
			}
		});
	}

	return (
		<>
			<div className="Form">
				{restaurantName}
				<Link to={props.match.url + "/add"}>
					<button className="BiggerItemBut">Add an Item</button>
				</Link>

				<Switch>
					<Route
						exact
						path={props.match.url + "/add"}
						render={(routerprops) => (
							<ItemForm
								{...routerprops}
								handleSubmit={handleCreate}
								item={form}
								id={props.match.params.id}
							/>
						)}
					/>

					<Route
						exact
						path={props.match.url}
						render={(routerprops) => (
							<Item
								{...routerprops}
								newItemState={newItemState}
								selectItem={selectItem}
								deleteItem={deleteItem}
							/>
						)}
					/>

					<Route
						exact
						path={props.match.url + "/edit"}
						render={(routerprops) => (
							<ItemForm
								{...routerprops}
								handleSubmit={handleUpdate}
								item={selectedItem}
								id={props.match.params.id}
							/>
						)}
					/>
				</Switch>
			</div>
		</>
	);
}
export default ItemList;

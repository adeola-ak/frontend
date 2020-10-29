import React from "react";
import { Route, Link, Redirect } from "react-router-dom";

function Item(props) {
	console.log("props in Item", props.newItemState);

	// props.newItemState.items.map(item, index)
	// {item[index].name}

	let example = props.newItemState;
	let renderItems = "Loading...";
	let renderSubArray = "";
	if (props.newItemState[0]) {
		// example = props.newItemState[0]
		renderItems = example.map((subarray) => {
			renderSubArray = subarray.items.map((item, index) => {
				console.log("testing the subarray.items.map", item, index);
				return (
					<div>
						<p>Item name: {item.name}</p>
						<p>Item type: {item.type}</p>
						<img src={item.img} style={{ height: "8em" }} />

					
						<button
							onClick={() => {
								props.selectItem(item)  // added
								props.history.push(`${props.match.url}/edit`);
							}}
						>
							Edit
						</button>
					

						<button
							onClick={() => {
								props.deleteItem(item);
								// props.history.push("/items");
							}}
						>
							Delete
						</button>

						<hr />
					</div>
				);
			});

			return [renderSubArray];

			// return <h1>2nd return</h1>
		});

		let info = example[0].items[0].name;
		console.log("example array", example);
		console.log("testing", info);
	}
	return (
		<>
			<h1>Item Component</h1>
			{renderItems}
		</>
	);
}

export default Item;

/// save

// let example = props.newItemState[0]
// 	let renderItems = "Loading...";
// 	if (props.newItemState[0]) {
//         example = props.newItemState[0].items
// 		renderItems = example.map((item, index) => {
// 			return (
// 				<div>
// 					<p>Item name: {item[index].name}</p>
// 					<p>Item type: {item[index].type}</p>
// 					<img src={item[index].img} />

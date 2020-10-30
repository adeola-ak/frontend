import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import "./Item.css";

function Item(props) {
	let example = props.newItemState;
	let renderItems = "Loading...";
	let renderSubArray = "";
	if (props.newItemState[0]) {
		renderItems = example.map((subarray) => {
			renderSubArray = subarray.items.map((item, index) => {
				console.log("testing the subarray.items.map", item, index);
				return (
					<div>
						<p className="ItemDesc">The {item.name}</p>
						<p className="ItemDesc">Type: {item.type}</p>
						<img
							src={item.img}
							style={{ height: "12em", borderRadius: "10px" }}
						/>
						<br></br>
						<Link to={`/item/${item._id}`}>
							<button className="RatingButs">Ratings</button>
						</Link>{" "}
						<br></br>
						<button
							className="ItemButs"
							onClick={() => {
								props.selectItem(item);
								props.history.push(`${props.match.url}/edit`);
							}}
						>
							Edit
						</button>
						<button
							className="ItemButs"
							onClick={() => {
								props.deleteItem(item);
							}}
						>
							Delete
						</button>
						<hr />
					</div>
				);
			});

			return [renderSubArray];
		});
	}
	return <>{renderItems}</>;
}

export default Item;

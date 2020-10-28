import React from "react";

function Item(props) {
    console.log("props in Item", props.newItemState)

    // props.newItemState.items.map(item, index) 
    // {item[index].name}
   
	let example = props.newItemState[0]
	let renderItems = "Loading...";
	if (props.newItemState[0]) {
        example = props.newItemState[0].items
		renderItems = example.map((item, index) => {
			return (
				<div>
					<p>Item name: {item[index].name}</p>
					<p>Item type: {item[index].type}</p>
					<img src={item[index].img} />
					<hr />
				</div>
			)
		})

		let info = example[0].items[0].name
		console.log("example array", example)
		console.log("testing", info)
	}
    return (
        <>
        <h1>Item Component</h1>
            {renderItems}
         </>   
    )

}

export default Item;
import React from "react";

function Item(props) {
    console.log("props in Item", props.newItemState)

    // props.newItemState.items.map(item, index) 
    // {item[index].name}
   
	let example = props.newItemState
	let renderItems = "Loading...";
	if (props.newItemState[0]) {
        // example = props.newItemState[0]
		renderItems = example.map((subarray) => {
				subarray.items.map((item, index) => {
					console.log("testing the subarray.items.map", item, index)
					return (
						
						<div>
							<p>Item name: {item.name}</p>
							<p>Item type: {item.type}</p>
							<img src={item.img} />

							<button onClick={() => {
								props.selectItem(item)        
								// props.history.push(`/restaurant/${props.match.params.id}`)
							}}>
								Edit
							</button>

							<button onClick={() => {
								props.deleteItem(item)        
							}}>
								Delete
							</button>

							<hr />
						</div>
					)
				})
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
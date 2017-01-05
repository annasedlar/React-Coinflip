function ProductCategoryRow(props){
	return(
		<tr>
			<td>Sporting Goods</td>
		</tr>
	)
}

function ProductRow(props){
	return(
		<tr>
			<td>Football</td>
			<td>$19.99</td>
		</tr>
	)
}

function ProductTable(props){
	return(
		<div>
			<ProductCategoryRow />
			<ProductRow />
		</div>
	)
}

function SearchBar(props){
	return(
		<input type="text" />)
}

// ^ same as class SearchBar extends React.Component{
// 	render(){
// 		return
// 	}
// } this way is much more powerful

function FilterableProductTable(props){
	return(
		<div>
			<SearchBar />
			<ProductTable />
		</div>)
}

// We aren't using a class *yet). So we have to include props as a parameter because there is no 'this'.

function Application(props){
	//must return a virtual DOM element
	return(
		<FilterableProductTable />
	)
}
//2 args, the what and the where
ReactDOM.render(
	<Application />,
	document.getElementById('container')
)
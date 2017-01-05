var products = [
	{
		category: 'Sporting Goods',
		price: '$49.99',
		name: 'Football',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},

	{
		category: 'Electronics',
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	}
]

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
			<td>{props.name}</td>
			<td>${props.price}</td>
		</tr>
	)
}

function ProductTable(props){

	//init a local var to hold all our rows
	var rows = [];
	//init a local var to keep track of what category we are on
	var lastCategory = "";
	products.forEach(function(product, index){
		console.log(index);
		if(product.category !== lastCategory){
			//we need to add this to our rows array because it is a new category
			rows.push(<ProductCategoryRow key={product.category} category={product.category} />)
			lastCategory = product.category;
		}
		rows.push(<ProductRow key={index} product={product} />)
	});
console.log(rows);

	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}

function SearchBar(props){
	return(
		<form class="search-bar">
			<input type="text" placeholder="Search..." />
			<div>
			<input type="checkbox" />&nbsp;Only show products in stock
			</div>
		</form>
	)
}

// ^ same as class SearchBar extends React.Component{
// 	render(){
// 		return
// 	}
// } this way is much more powerful

function FilterableProductTable(props){
	return(
		<div className="filterable-product-table">
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



































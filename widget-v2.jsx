 
// var Orange = React.createClass({
// 	// render: function(){   render is a property
// 		return(
// 			// stuff here 
// 			)
// 	}
// })
//^ this way you can use state


// ES5 way below! 
// var Red = React.creatClass({
// 	render: function(){
// 		return(
// 			)
// 	}
// })

// class Red extends React.Component{
// 	constructor(){
// 		super()
// 		this.state.number = 3
// 	}
// }

function Blue(props){
	return(<h1>"blue"</h1>)
}


//this way doesn't use STATE at all. IT IS NOT A CLASS. only job is to return a virtual DOM element 
function Orange(props){
	var text = "Hello";
	return(
		<Blue />
		)
}

ReactDOM.render(
	<Orange name="Anna" last="Sedlar"/>,
	document.getElementById('container')

	)
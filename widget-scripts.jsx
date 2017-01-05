// We aren't using a class *yet). So we have to include props as a parameter because there is no 'this'.

function Application(props){
	//must return a virtual DOM element
	return(
		<h1>Test</h1>
		)
}
//2 args, the what and the where
ReactDOM.render(
	<Application />,
	document.getElementById('container')
)
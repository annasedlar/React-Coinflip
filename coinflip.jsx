
var Coin = React.createClass({
	sides: [
		'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
		'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'		
	],
	getInitialState: function() {
		let x = Math.round(Math.random())
		return{
			image: this.sides[x],
			flipped: false
		}		
	},
	flipCoin: function(){
		var checkState;
		let x = Math.round(Math.random()); //down to 0, up to 1
		if(x == 0){
			checkState = this.sides[x];
			console.log("Tails");
		}else{
			checkState = this.sides[x];
			console.log("Heads");
		}

		this.setState({
			image: checkState
		});
	},
	render: function(){
		return(
			<div>
				<button onClick={this.flipCoin}>Click to Flip</button>
				<div><img src={this.state.image} /></div>
			</div>
		)		
	}
})

var Application = React.createClass({
	render: function(){
		return(
			<div className="application">
				<Coin />
				<Coin />
			</div>
		)
	}
});

ReactDOM.render(
	<Application />, 
	document.getElementById('container')
);



var myObj = {
	prop1: 1,
	prop2: [1,2],
	prop3: {value: "value"},
	prop4: "String",
	prop5: function(){
		console.log("Hello") 
	}
};
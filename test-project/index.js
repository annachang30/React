const helloReact = React.createElement("h1", {style: {color: "red"}, className:"header"}, "Hello React");

ReactDOM.render(helloReact, document.getElementById("root"));
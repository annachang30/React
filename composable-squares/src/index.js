import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'; //don't have to put .js extension

const props = {
    title: "React-Composable Squares",
    description: "JS library for building user interfaces"
}
ReactDOM.render(App(props), document.getElementById("root"));


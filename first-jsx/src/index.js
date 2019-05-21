import React from 'react';
import ReactDOM from 'react-dom';

import HelloJS from './components/HelloJS'; //don't have to put .js extension

const props = {
    title: "React",
    description: "JS library for building user interfaces"
}
ReactDOM.render(HelloJS(props), document.getElementById("root"));


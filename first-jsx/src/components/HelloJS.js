import React from 'react';

const HelloJS = (props) => {
    console.log(props);
    return (
        <div className="jumbotron">
            <h1>Hello {props.title}</h1>
            <p>{props.title} is {props.description}</p>
        </div>
    );
}

export default HelloJS; //must be put at the bottom. this makes your component code a javscript module that can be imported to another file
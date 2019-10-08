import React from 'react';
import './Person.css'
import Radium from 'radium'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> My Name is {props.name} and my age is {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    );
}

export default Radium(person);
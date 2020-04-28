import React from 'react';
import styles from './Cockpit.css';

const cockpit = (props) => {
    
    const style = {
        backgroundColor:'green',
        color:'white',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer',
    };
    if(props.showPersons){
        style.backgroundColor = 'red';
    }

    const assignedclasses = [];
    if (props.persons.length <= 2) {
      assignedclasses.push('red'); //classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedclasses.push('bold'); //classes = ['red','bold']
    }


    return(
    <div className = "Cockpit">
        <h1>Hi, I'am a React App</h1>
        <p className={assignedclasses.join(' ')}>This is really working</p>
        <button
           style={style} //bind style
           onClick={props.clicked}>Toggle Persons</button>
    </div>
    );
}

export default cockpit;

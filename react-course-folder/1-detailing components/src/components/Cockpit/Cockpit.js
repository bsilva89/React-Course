import React, { useEffect } from "react";
import classesCSS from "./Cockpit.css";

const cockpit = (props) => {
    useEffect(() => {
        console.log("Message from cockpit");

        setTimeout(() =>{
            alert("Saved data to cloud!")
        }, 1000);
    }, [])


    let assignedClasses = [classesCSS.green]
    if (props.persons.length <= 1) {
      assignedClasses = [classesCSS.bold, classesCSS.red].join(' ')
    }
    else if (props.persons.length <= 2) {
      assignedClasses = [classesCSS.red].join(' ')
    }

    let btnClass = ""
    if (props.showPersons) {
        btnClass=classesCSS.Red
    }

    return(
        <div className={classesCSS.Cockpit}>
            <h1>Hello world react app</h1>
            <p className={assignedClasses}>Demo text</p>
            <p>{btnClass}</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Mostrar: {String(props.showPersons)}
            </button>
        </div>
    );
};

export default cockpit
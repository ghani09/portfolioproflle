import React from 'react';
import './list.css'


const Note = (props) => {

    const deleteIt =() => {

        props.deleted(props.id)
    }


    return (
        <div className="note">
            <h1> {props.title} </h1>
            <br/>
            <p> {props.note}</p>
            <br/>
            <button onClick = {deleteIt}> delete </button>

        </div>


    )
}
export default Note;
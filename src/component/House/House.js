import React from 'react';

export default function House(props){
    const {id, name, address, city, state, zip} = props;
    return(
        <div className="housePage">
            House
            <span>{id}{name}{address}{city}{state}{zip}</span>
            <button>Delete</button>
        </div>
    )
}
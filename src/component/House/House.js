import React from 'react';

export default function House(props){
    const {id, name, address, city, state, zip, deletePost} = props;
    return(
        <div className="housePage">
            House
            <span>{id}{name}{address}{city}{state}{zip}</span>
            <button className='deleteButton' onClick={()=>deletePost(id)}>Delete</button>
        </div>
    )
}
import React from 'react';

function SmurfCard(props){
    return(
        <div className="smurf-card">
            <li className="name">{props.smurf.name}</li>
            <li><span>Age: </span>{props.smurf.age}</li>
            <li><span>Height: </span>{props.smurf.height}</li>
            <li><span>Id: </span>{props.smurf.id}</li>
            <li onClick={(e) => props.deleteSmurf(e, props.smurf.id)}>
            <button className="dlt-btn" onClick={e => props.deleteSmurf(e,props.id)}>X</button>
                <i className="fas fa-pencil-alt"></i>
                <i className="far fa-trash-alt"></i>
            </li>
        </div>
    )
}

export default SmurfCard;

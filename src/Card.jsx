import React from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" style={{ "width": "18rem" }}>
                    <img src={props.imgSrc} className="card-img-top" alt="images" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.content}</p>
                        <NavLink to={props.link} className="btn btn-primary">Go Read</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
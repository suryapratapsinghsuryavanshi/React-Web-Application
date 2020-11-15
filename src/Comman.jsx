import React from 'react';
import { NavLink } from 'react-router-dom';

function Comman(props) {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h2 >{props.uperOne} <br/> {props.uperTwo} <strong className="work-head">{props.uperThree}</strong></h2>
                                    <p className="my-3 worker-pera"> {props.code} </p>
                                    <div className="mt-3"><NavLink to={props.btnLink} className="btn-get-started">{props.btnText}</NavLink></div>
                                </div>
                                <div className="col-lg-6 order-lg-2 header-img">
                                    <img className="img-fluid animated" src={props.imgSrc} alt="img" draggable="false"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comman;
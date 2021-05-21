import React from "react";
import { NavLink } from "react-router-dom";


const Card = (props) => {
    return (<>
        <div className="container-fluid mb-5">
            <div className='row'>
                <div className="col-10-mx-auto">
                    <div className="row gy-4">
                        <div className="col-md-4 col-10 mx-auto">
                            <div className="card">
                                <img src={props.imgsrc} className="card-img-top" alt={props.imgsrs} />
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                                    <p className="card-text">VISUDH AJIVAM PVT LTD is one of the best digital platform for health care services integrated with pharmacies, doctors, labtests, diagnosis centres across India to provide world class Healthcare facilities to individuals across the country.</p>
                                    <NavLink to="/service" className="btn btn-primary">Go somewhere</NavLink>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </div>


    </>
    );

};

export default Card;

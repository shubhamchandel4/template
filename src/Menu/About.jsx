import React from "react";
import { NavLink} from "react-router-dom";

const About=()=>{
    return(<>
    <section id ="header" className="">
    <div className="hero1">
        
            <div className='container'>
                <div className="col-10-mx-auto">
                    <div className="container">

                    
                    <div className="container mt-5">
                        <h1> 
                            <strong className="brand-name1"> About Us </strong> 
                        </h1>

                        <h3 className="my-3">
                        VISUDH AJIVAM PVT LTD is one of the best digital platform for health care services integrated with pharmacies, doctors, labtests, diagnosis centres across India to provide world class Healthcare facilities to individuals across the country
                        </h3>

                        <div className="mt-3">
                        < NavLink activeClassName='.menu_active' to="/contact" class="appointment-btn scrollto">Contact Us</ NavLink>


                        </div>
                        

                    </div>

                    
                    </div>

                </div>

            </div>

        </div>

    </section>



    </>
    );
   
};

export default About;

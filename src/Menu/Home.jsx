import React from "react";
import { NavLink} from "react-router-dom";

const Home=()=>{
    return(<>
    <section id ="header" className="">
    <div className="hero">
        
            <div className='container'>
                <div className="col-10-mx-auto">
                    <div className="container">

                    
                    <div className="container mt-5">
                        <h1> 
                            WELCOME TO <strong className="brand-name1"> VISUDH </strong> <strong className="brand-name">AJIVAM </strong>
                        </h1>

                        <h3 className="my-3">
                            We Provide You High Quality Services
                        </h3>

                        <div className="mt-3">
                        < NavLink activeClassName='.menu_active' to="/contact" class="appointment-btn scrollto">CONTACT US</ NavLink>


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

export default Home;

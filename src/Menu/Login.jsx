import React, { useState } from "react";
import { NavLink} from "react-router-dom";

const Login = () => {
const [data,setData] =useState({
    email:"",
    password:"",

});
const InputEvent = (event) =>{
    const {name,value} = event.target;

    setData ((preVal)=> {
        return{
            ...preVal,
            [name]: value,
        }
    })
};
const formSubmit=(e)=>{
    e.preventDefault();
    alert(`There are some issue to login try after some time `);
    
}

    return (<>


        <div className="input">
            <h1 className="App">LogIn</h1>
        </div>
        <div className="App">
            <div className="row">
                <div className="Input">
                    <form onSubmit={formSubmit}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"  
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"  
                            name="password"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter password" />
                        </div>
                        
                        <div class="row">
                            <button class="btn btn-outline-primary" type="submit">SignIn</button>
                        </div>
                        
                        <div class="row">
                        <NavLink to="/registration" class="btn btn-outline-primary">Create a new Account</NavLink>
                        </div>


                    </form>
                    

                </div>

            </div>

        </div>


    </>
    );

};

export default Login;

import React, { useState } from "react";

const Contact = () => {
const [data,setData] =useState({
    fullname: "",
    phone:"",
    email:"",
    message:"",

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
    alert(`My name is ${data.fullname}. My Mobile number is ${data.phone}, Here is what I want to say ${data.message} `);
    
}

    return (<>


        <div className="input">
            <h1 className="App">Contact US</h1>
        </div>
        <div className="App">
            <div className="row">
                <div className="Input">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"  
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter Your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"  
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="mobile number" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"  
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" 
                            name="message"
                            value={data.message}
                            onChange={InputEvent}
                            ></textarea>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>


                    </form>

                </div>

            </div>

        </div>


    </>
    );

};

export default Contact;

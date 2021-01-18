import React, { useState } from "react";
function Contact() {
    const [data,setdata]=useState({
        fullname:'',
        phone:'',
        email:'',
        message:''

    });
    function inputevent(event) {
        const{name,value}=event.target;
        setdata((preval)=>{
            return{
                ...preval,[name]:value,
            }
        })
    }
    function formsubmit(e) {
        e.preventDefault();
        alert(`my name is ${data.fullname}. my number is ${data.phone}. my email is ${data.email}. my messsage is ${data.message}.`)
    }
    return (
        <>
            <div className="my-4">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formsubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={inputevent} placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={inputevent} placeholder="mobile number" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={inputevent} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" name='message' value={data.message} onChange={inputevent} rows="3"></textarea>
                        </div>
                        <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;
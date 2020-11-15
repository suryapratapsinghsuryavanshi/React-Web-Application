import React, { useState } from 'react';

function Contact() {
    const [data,setData] = useState({
        name:'',
        phone:'',
        email:'',
        msg:''
    });
    function inputEvent(e){
        const {name,value} = e.target;
        setData((pVal)=>{
            return{
                ...pVal,
                [name]:value
            }
        })
    }
    function formSubmit(e){
        e.preventDefault();
        alert(`Your Name is ${data.name} and email is ${data.email} or phone number is ${data.phone} and message is ${data.msg}`)
    }


    return (
        <>
            <div className="my-5">
                <h2 className="text-center">Contact Us</h2>
            </div>
            <div className="container contact-div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Name</span>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputEvent} placeholder="Enter Your Name" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Email</span>
                                <input type="text" className="form-control" name="email" value={data.email} onChange={inputEvent} placeholder="Enter Your Email" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Phone</span>
                                <input type="number" className="form-control" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Your Phone" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>

                            <div className="input-group">
                                <span className="input-group-text">Message</span>
                                <textarea name="msg" value={data.msg} onChange={inputEvent} className="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <div className="col-12 my-3">
                                <button className="btn btn-outline-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;
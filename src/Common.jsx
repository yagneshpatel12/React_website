import React from "react";
import { NavLink } from "react-router-dom";
function Common(props){
return (
    <>
    <section id='header' className='d-flex align-items-center'>
    <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row" style={{height:'525px'}}>
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{props.hname} <strong className='brand-name'>YagneshPatel</strong>
                    </h1>
                    <h2 className='my-3'>
                        we are the team of talented developer making websites
                    </h2>
                    <div className="mt-3">
                        <NavLink to={props.link} className='editbtn'>{props.btnname} </NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2  animation">
                    <img src={props.imgsrc} style={{width:'520px'}} alt="home img"/>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>
</>
)
}
export default Common;
import React from "react";
import Common from './Common'
import img from '../src/img/main2.jpg'
function About( ){
    return (
        <>
         <Common hname='Welcome to About page' btnname='Contact Now' link='/contact' imgsrc={img}/>
        </>
    )
}
export default About;
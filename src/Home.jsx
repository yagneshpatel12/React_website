import React from "react";
import Common from './Common'

import img from '../src/img/main1.png'

function Home() {
    return (
        <>
            <Common hname='Grow your business with' btnname='Get Started' link='/service' imgsrc={img}/>
        </>
    )
}
export default Home;
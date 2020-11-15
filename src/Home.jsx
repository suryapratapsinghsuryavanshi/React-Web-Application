import React from 'react';
import wokr from '../src/Images/work.png';
import Comman from "./Comman";

function Home() {
    return (
        <>
            <Comman 
            uperOne="Grow your business" 
            uperTwo="with" 
            uperThree="localworker" 
            code="We are the team of talented workers." 
            btnText="Get Started"
            btnLink="/service"
            imgSrc={wokr}
            />
        </>
    )
}

export default Home;
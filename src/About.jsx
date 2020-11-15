import React from 'react';
import wokr from '../src/Images/about.jpg';
import Comman from "./Comman";

function About(){
    return(
        <>
            <Comman 
            uperOne="Welcome to about" 
            uperTwo="with" 
            uperThree="localworker" 
            code="We are allwase halp you to do more." 
            btnText="Contact Now"
            btnLink="/contact"
            imgSrc={wokr}
            />
        </>
    )
}

export default About;
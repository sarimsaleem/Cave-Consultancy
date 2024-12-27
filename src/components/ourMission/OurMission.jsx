import React from 'react'
import "./ourMission.css"
import bgi from "../../assets/ourmission.jpg"
const OurMission = () => {
    return (
        <div className='mision-parent'>
            <div className='mision-subparent'>
                <img src={bgi} alt="" />
                <div className="mission-text-parent">
                    <h3 className='component-heading' style={{color:"white"}}>Our Mission</h3>
                    <p>
                        Our mission is to provide tailored consulting services that drive meaningful impact.
                        Our vision is to become a trusted partner for businesses navigating complex challenges.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurMission
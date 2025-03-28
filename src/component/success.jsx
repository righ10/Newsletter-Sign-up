import React from "react"
import Check from "../assets/image/icon-success.svg"


export default function Success({emailSharing, setEmailSharing}){
    const handleEmail = () => {
        setEmailSharing ("")
    }
    
    return <>            
    <div className="subscribed">
    <img src={Check} alt="check icon"/>
    <h2>Thanks for Subscribing!</h2>
    <p>A confirmation email has been sent to {""}<span id="sharedEmail">{emailSharing}</span>. 
    Please open it and click the button inside to confirm your subscription.</p>
    <button onClick={handleEmail}>Dissmiss Message</button>
    </div>
    </>
}
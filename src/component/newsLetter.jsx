import { useState } from "react";


import Image from "./image";
import Success from "./success";
import SubCard from "./subCard";

 const NewsLetter = () => {

    
  

    const [emailSharing, setEmailSharing]=useState("false")
  
    return(
        <>
        {emailSharing === ""?(
            
            <Success emailSharing={emailSharing} setEmailSharing={setEmailSharing}/>
      ):
      (<SubCard emailSharing={emailSharing} setEmailSharing={setEmailSharing}/>)}
          
        </>
    )

}


export default NewsLetter

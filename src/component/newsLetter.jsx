import { useState } from "react";


import Image from "./image";
import Success from "./success";
import SubCard from "./subCard";

 const NewsLetter = () => {

    
  

    const [emailSharing, setEmailSharing]=useState("false")
  
    return(
        <>
        {emailSharing === ""?(
            
            <SubCard emailSharing={emailSharing} setEmailSharing={setEmailSharing}/>
      ):
      (<Success emailSharing={emailSharing} setEmailSharing={setEmailSharing}/>)}
          
        </>
    )

}


export default NewsLetter

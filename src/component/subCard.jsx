import Email from "./email";
import Image from "./image";
import offer from "../offer";
import Check from "../assets/image/icon-list.svg"
import Offers from "./offers";
import { useForm } from "react-hook-form";




const SubCard= ({emailSharing, setEmailSharing}) => {


    const lists=offer.map((updates) => {
        return(
          <Offers
    
          key = {updates.id}
          updates = {updates}
          />
        )
})

const{register,handleSubmit,formState:{errors}} = useForm()

const emailInfo=(info) =>{
setEmailSharing(info.email)

}

        
        
    return ( 
<div className="container">
    

    <div className="details">
        <div className="header">
            <h1 >Stay Updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
        </div>
        
        {lists}
        <form onSubmit={handleSubmit(emailInfo)} method="get" >
            <div className="formEl">
            <label htmlFor="email" className="emailLabel">Email Address </label>
            {!!errors?.email ?(<p>Valid Email Required</p>):null}
            </div>
            <input 
            type="email" 
            name="email"  
            id="email" 
            className="email" 
            placeholder="Email@yahoo.com" 
            {...register('email',{required:true,pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, })}
            error={!!errors?.email}
            style={errors.email&& {backgroundColor:"#ff000054", color:"red",fontWeight:"500"}}
            />
            
        
        <button type="submit" className="formBtn" onClick={() => emailSharing(!emailSharing) }>Subscribe to monthly newsletter</button>
        </form>
        
    </div>
        <Image className="image"/>

    
    </div>
    )
}
export default SubCard

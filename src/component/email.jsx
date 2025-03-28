import React, { useState } from "react"
import Check from "../assets/image/icon-success.svg"
import {useForm} from "react-hook-form"


export default function Email({emailSharing, setEmailSharing}){
    
    const{register,handleSubmit,formState:{errors}} = useForm()
    const emailInfo=(info) =>{
    setEmailSharing(info.email)
    
}


    return (
    
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
            
        
        <button type="submit" className="formBtn">Subscribe to monthly newsletter</button>
        </form>
        
    )
}
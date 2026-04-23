import React from "react";
export default function Condition({isStudent,name}){
    // is studetn naem is props
   
        if(isStudent){
            return(
                <>
                <h1>{name} is student</h1>
                <h2>{`${name} is student`}</h2>
                
                </>
            )
        }
        else{
        return(
            // Without else also it executes 
            <>
            <h1>{name} is not a student</h1>
            </>

        )
    }
}
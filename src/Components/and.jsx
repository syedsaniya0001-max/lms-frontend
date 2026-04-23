import React from "react";
export default function Condition2({isStudent}){
    return(
         <>
        <h1>{isStudent ?"is student" : "Not a student"}</h1>
        {/* <h1>{isStudent ?<h1>"is student"</h1> : <h1>"Not a student"</h1>}</h1> */}

       
        
        </>
    )

}
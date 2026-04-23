import React from "react";
import {useState,useEffect} from "react";
export default function Effects(){
    const[increase, setincrease]=useState(0)
    const[decrease, setdecrease]=useState(0)

    const setfunction=() => setincrease(increase+1)
    const setfunction1=() => setdecrease(decrease-1)

    useEffect(()=>{
        console.log("rendering")
    },[increase])
    return(
        <>
        <button onClick={setfunction}>count is {increase}</button>
         <button onClick={setfunction1}>count is {decrease}</button>
         <br></br>
        
        </>
    )
}
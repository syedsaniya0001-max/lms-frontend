import React from "react";
import { useState } from "react";
export default function Controlled1(){
    const[data, setdata]=useState({
        name:"",
        email:""

    })
    const handledata=(e)=>{
        setdata({
            ...data,
            [e.target.name]:e.target.value
        })
    }
    return(
        <>
        <form action="">
            <label htmlFor="">NAME</label>
            <input type="text" name="name" value={data.name} onChange={(handledata)}></input>
            <label htmlFor="">email</label>
            <input type="email" name="email" value={data.email} onChange={handledata}></input>
            <input type="submit"/>

            

        </form>
        <h1>name is :{data.name}</h1>
        </>
    )
}
// e ->to handle particular field
// to handle multiple i/p's we use{}
// spread operatoro...->take all state variables present in all data variables...
import React from "react";
import {useState,useEffect} from "react";
export default function Effects1(){
    const[users,setusers]=useState([])
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json()) //converts to js syntax and res is variable stores link o/p
        .then(data=>setusers(data))//data variable , data stores in setusers

    },[])

    return(
        <>
        {users.map((user)=>(//users.map means iterates through all objects
            <h1 key={user.id}>{user.name}</h1>
            // <h1>{user.name}</h1>//give error in console, so we check them with id
        ))}
        
        
        </>
    )
}
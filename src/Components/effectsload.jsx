import React from "react";
import {useState,useEffect} from "react";
export default function Effects1load(){
    const[users,setusers]=useState([])
    const[load,setload]=useState(true)
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json()) //converts to js syntax and res is variable stores link o/p
        .then(data=>{setusers(data)
            setload(false)//as data gets here, if netwrok there datacomes, otherwise not
        })//data variable , data stores in setusers

    },[])
    if(load){
        return( 
            <h1>Loading</h1>
        )

    }

    return(
        <>
        {users.map((user)=>(//users.map means iterates through all objects
            <h1 key={user.id}>{user.name}</h1>
            // <h1>{user.name}</h1>//give error in console, so we check them with id
        ))}
        
        
        </>
    )
}
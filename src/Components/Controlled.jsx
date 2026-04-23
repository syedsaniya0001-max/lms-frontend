import React from "react";
import { useState } from "react";
export default function Controlled(){
    const[name, setname]=useState("")
    return(
        <>
        <form action="">
            <label>NAME</label>
            <input type="text" name="name" value={name}
            onChange={(e)=>setname(e.target.value)}></input>
            <label htmlFor="">EMail</label>
            <input type="email" name="email" />
            <input type="submit"></input>

        </form>
        <h1>name is :{name}</h1>
        {/* <h2>Email is :{email}</h2> */}
        </>
    )

}
// const [email, setEmail] = useState("");
// if we want email to be use like these <input type="email" name="email" value={email}
    //    onChange={(e) => setEmail(e.target.value)} />

// We cannot see the data which we submitted
// Only if we give name="" we can see details in url, when we not write action method links in from 
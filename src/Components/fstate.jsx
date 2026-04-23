import React, { useState } from "react";
export default function New(){
    const[count,setstate]=useState(0)
    const increase=() => setstate(count+1)
    return(
        <>
          <button onClick={increase}>count is:{count}</button>
          <button>{count}</button>
          <br></br>
        </>

    )
}
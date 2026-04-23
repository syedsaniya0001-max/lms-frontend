import { useState } from "react";
export default function State(){
    const[count,setCount]=useState(0)
    const increase=() => setCount(count+1)
    return(
        <>
          <button onClick={increase}>count is:{count}</button>
          <button>{count}</button>
          <br></br>
        </>

    )
}
import React from "react";

export default function Iterative(){
    const obj = {
        name : "priya",
        age : 24,
        course : "ai"
    }
    const arr = ["madhavi","saniya","somu","lakshmidhar","charan"]

    const obj2 = [
        {id:1,name:"madhavi",course:"a"},
        {id:2,name:"charan",course:"b"},
        {id:3,name:"madhavi",course:"c"}
    ]
    return(
        <>
        {obj2.map((data) =>(
            <h1 key={data.id}>{data.id}-{data.name}-{data.course}</h1>
        ))}
        {arr.map((names,index) => (
            <h1 key={index}>{index}.{names}</h1>
        ))}
        <h1>{arr}</h1>
        <h1>{obj.course}</h1>
        </>
    )
}
import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [descriptions, setDescriptions] = useState("");
    return <div>
        <input id="title" style={{padding: 10, margin: 10 }} type="text" placeholder="Title" onChange={
            function(e) {
                const value = e.target.value;
                setTitle(value)
            }
        }/><br />
        
        <input id="desc" style={{padding: 10, margin: 10 }}  type="text" placeholder="description" 
        onChange={
            function(e) {
                const value = e.target.value;
                setDescriptions(value)
            }
        }/><br/>

        <button style={{padding: 10, margin: 10 }} onClick={
            () => {
                fetch("http://localhost:3000/todo",{
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        descriptions: descriptions
                }), 
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("todo added");
                })
        }}>Add a todo</button>
    </div>
}


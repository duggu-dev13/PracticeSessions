export function Todos({ todos }) {
    return <>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h1>{todo.descriptions}</h1>
                <button onClick={() => {
                    fetch('http://localhost:3000/completed', {
                        method: 'PUT',
                        body: JSON.stringify({
                            _id: todo._id,
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                        })
                    }}
                    >{todo.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </>
}
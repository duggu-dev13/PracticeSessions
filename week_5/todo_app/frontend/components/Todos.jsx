export function Todos({ todos }) {
    return <>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h1>{todo.descriptions}</h1>
                <button>{todo.completed == true ? "Completed" : "Mark as completed"}</button>
            </div>
        })}
    </>
}
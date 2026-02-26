import { SubHeading } from "../SubHeading"
import { ToDoItem } from "../ToDoItem"
import { ToDoList } from "../ToDoList"
import { useContext } from "react"
import TodoContex from "../TodoProvider/TodoContext"

export function TodoGroup({ items, heading }) {
    const { toggleTodoCompleted, deleteTodo } = useContext(TodoContex)

    return (
        <>
            <SubHeading>{heading}</SubHeading>
            <ToDoList>
                {items.map(function (t) {
                    return <ToDoItem
                        key={t.id}
                        item={t}
                        onToggleCompleted={toggleTodoCompleted}
                        onDeleteTodo={deleteTodo}
                    />
                })}
            </ToDoList>
        </>
    )
}
import { TextInput } from "../TextInput"
import { SaveButton } from "../SaveButton"

import './todo-form.style.css'

export function ToDoForm({ onSubmit }) {
    return (
         <form className="todo-form"  action={onSubmit} >
            <TextInput placeholder="Digite o item que deseja adicionar" 
            required
            name="description"
            />
                
            <SaveButton>
                Salvar item
            </SaveButton>
        </form>
    )
}
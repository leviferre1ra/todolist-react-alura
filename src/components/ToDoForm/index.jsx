import { TextInput } from "../TextInput"
import { SaveButton } from "../SaveButton"

import './todo-form.style.css'

export function ToDoForm({ onSubmit, defaultValue }) {
    return (
         <form className="todo-form"  action={onSubmit} >
            <TextInput
            placeholder="Digite o item que deseja adicionar" 
            required
            name="description"
            defaultValue={defaultValue}
            />
                
            <SaveButton>
                Salvar item
            </SaveButton>
        </form>
    )
}
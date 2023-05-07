import { useState } from "react"
import { todoList } from "../../mockData.js"
import Button from "../Button/Button.jsx";
import TodoItem from "../TodoItem/TodoItem.jsx";
import styles from './Todo.module.scss'

const TodoWrap = () => {
    const [todoListData, setTodoList] = useState(todoList);

    const handleCheckTodo = (completed, id) => {
        console.log(completed);
        console.log(id);  
        const copyList=[...todoListData];
        console.log(copyList); 
        copyList.forEach((todo)=>{
            if(todo.id===id){
                todo.completed==completed;
            }
        })
        setTodoList(copyList);
    }

    return (
        <>
            <div>
                <div className={styles.todo}>
                    {todoListData.map((todo) => {
                        return <TodoItem
                            key={todo.id} 
                            id={todo.id} 
                            title={todo.title} 
                            completed={todo.completed}
                            handleCheckTodo={handleCheckTodo}
                        />
                    })
                    }
                </div>

            </div>
        </>
    )
}

export default TodoWrap 
import { useState } from "react"
import { todoList } from "../../mockData.js"
import Button from "../Button/Button.jsx";
import TodoItem from "../TodoItem/TodoItem.jsx";
import styles from './Todo.module.scss'
import CreateTodoPopup from "../CreateTodoPopup/CreateTodoPopup.jsx";

const TodoWrap = () => {
    const [todoListData, setTodoList] = useState(todoList);

    const handleCheckTodo = (completed, id) => {
        const copyList = [...todoListData];

        copyList.forEach((todo) => {
            if (todo.id === id) {
                todo.completed = completed;
            }
        })
        setTodoList(copyList);
    }

    const handleCreateTodoItem = (title) => {
        const copyList = [...todoListData];
        const todo = {
            "userId": 1,
            "id": (`${title}${((Math.floor(Math.random() * 100) + 1)) }`),
            "title": title,
            "completed": false
        }
        copyList.push(todo);
        setTodoList(copyList);
    }

    const handleDeleteTodo=(id)=>{
        setTodoList(todoListData.filter(el=>el.id!==id));
    }


    return (
        <>
            <div>
                <div className={styles.todo}>
                    {
                        todoListData.map(
                            (todo) => {
                                return <TodoItem
                                    key={todo.id}
                                    id={todo.id}
                                    title={todo.title}
                                    completed={todo.completed}
                                    handleCheckTodo={handleCheckTodo}
                                    handleDeleteTodo={handleDeleteTodo}
                                />
                            }
                        )
                    }
                </div>
                <CreateTodoPopup handleCreateTodoItem={handleCreateTodoItem} />
            </div>
        </>
    )
}

export default TodoWrap 
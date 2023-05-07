import styles from './TodoItem.module.scss'

const TodoItem = ({ id, title, completed, handleCheckTodo }) => {
    return (
        <div className={styles.wrap}>
            <input
                type="checkbox"
                checked={completed}
                onChange={
                    (e) => {
                        handleCheckTodo(e.target.checked, id)
                    }
                }
            />
            {title}
        </div>
    )
}

export default TodoItem
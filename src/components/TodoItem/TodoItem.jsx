import styles from './TodoItem.module.scss'
import Button from '../Button/Button'

const TodoItem = ({ id, title, completed, handleCheckTodo, handleDeleteTodo }) => {
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
            <p className={styles.inputItem}>{title}</p>
          
            <Button className={styles.button} title={'Удалить задание'} handleClick={()=>handleDeleteTodo(id)}/>
        </div>
    )
}

export default TodoItem
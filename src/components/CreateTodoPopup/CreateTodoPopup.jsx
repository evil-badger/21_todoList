import { useState } from 'react'
import styles from './CreateTodoPopup.module.scss'
import Button from '../Button/Button';


const CreateTodoPopup = ({handleCreateTodoItem}) => {
    const [value, setValue] = useState('');

    const handleGetValue=()=>{
        if(!value) return
        handleCreateTodoItem(value)
        setValue('');
    }

    return (
        <>
            <div>
                <input type="text" value={value} onChange={
                    (e) => setValue(e.target.value)
                }
                />
                <Button title={`СОЗДАТЬ ЗАДАНИЕ`} handleClick={()=>handleGetValue(value)}></Button>
            </div>
        </>

    )
}

export default CreateTodoPopup
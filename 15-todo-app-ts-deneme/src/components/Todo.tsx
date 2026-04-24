import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import type { TodoType } from '../types/types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';


interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps // gelen todoyu object destructing ile açtık 


    const dispatch = useDispatch();

    // todo silme
    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }


    // todo güncelleme 
    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewtodo] = useState<string>(content)

    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))
        setEditable(false);
    }




    return (
        <div className='todo'>
            <div>
                {editable ? <input type='text'
                    style={{ width: '300px', border: 'none', borderBottom: '1px solid lightgrey', outline: 'none' }}
                    value={newTodo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewtodo(e.target.value)} />
                    : <div> {content} </div>}
            </div>
            <div>


                <IoMdRemoveCircleOutline className='icons' onClick={handleRemoveTodo} />

                {
                    editable ? <FaCheck className='icons' onClick={handleUpdateTodo} />
                        : <FaRegEdit onClick={() => setEditable(true)} className='icons' />
                }

            </div>
        </div>

    )
}

export default Todo
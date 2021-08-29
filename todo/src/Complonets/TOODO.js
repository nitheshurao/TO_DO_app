import React, { useState } from 'react'
import data from '../data.json';
import TodoList from './TOODOC/TodoList';



const TOODO = () => {

    const [list, setList] = useState(data);
    return (
        <div>
            <TodoList list={list} />
            {/* <h1>list</h1> */}

        </div>
    )
}

export default TOODO

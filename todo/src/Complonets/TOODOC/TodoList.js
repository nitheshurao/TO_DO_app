import React from 'react'
import Todo from '../Todo'

const TodoList = (props) => {
    return (
        <div>




            <h2>{props.list.map(todo => {
                return (
                    <Todo todo={todo} />
                )
            })}</h2>

        </div>
    )
}

export default TodoList

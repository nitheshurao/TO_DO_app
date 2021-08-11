import React, { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//get data
const getlocaldata = () => {
    let list = localStorage.getItem('lists');
    console.log(list)
    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}
function Todo() {
    const [inputData, setInputData] = useState('');
    // const [item, setItem] = useState([]);


    const [item, setItem] = useState(getlocaldata());




    const [toggelsubmt, setToggelsubmt] = useState(true);

    const [editedItem, setEditedItem] = useState(null);
    const AddItems = (event) => {

        if (!inputData) {


            alert("plz fill");
        }
        else if (inputData && !toggelsubmt) {
            setItem(
                item.map((elemt) => {
                    if (elemt.id === editedItem) {
                        return { ...elemt, name: inputData }
                    }
                    return elemt;
                })
            )
            setToggelsubmt(true);
            setInputData('');
            setEditedItem(null);
        }

        else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItem([...item, allInputData]);
            setInputData('');
        }

    }
    const DeleteItem = (index) => {
        console.log(index)
        const UpdatedItem = item.filter((elemt, i) => {
            return index !== elemt.id;

        })
        setItem(UpdatedItem);
    }
    const RemoveAll = () => {
        setItem([]);
    }

    const editItem = (ind) => {
        let newItemE = item.find((elemt) => {
            return elemt.id === ind;
        });
        // setInputData(newItem);
        console.log(newItemE.name);
        setToggelsubmt(false);
        setInputData(newItemE.name);
        setEditedItem(ind);
    }
    // local storage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(item))

    }, [item])
    return (
        <div className="main-div">
            <div className="child-div">
                {/* <figure> */}
                {/* <figcaption>Add Item</figcaption> */}
                {/* </figure> */}
                <h3>Todo Items</h3>
                <div className="addItems">
                    <input type="text" placeholder="Add Items ..."

                        value={inputData}

                        onChange={(e) => setInputData(e.target.value)}


                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                { AddItems(event) }
                            }
                        }}

                    />{

                        toggelsubmt ?

                            <i className="fa fa-plus-square add-btn" title="Add item"
                                onClick={AddItems}

                            > </i>
                            :
                            <i className="far fa-edit add-btn" title="Edit Item"
                                onClick={AddItems}
                            > </i>
                    }
                </div>
                <div className="showItems">

                    {item.map((elemt) => {
                        return (
                            <div className="eachItem" key={elemt.id}>
                                <h3>
                                    {elemt.name}
                                </h3>
                                <div className="todo-btn">

                                    <i className="far fa-edit add-btn" title="Edit" onClick={() => editItem(elemt.id)}></i>
                                    <i className="far fa-trash-alt" title="Deleteitem" onClick={() => DeleteItem(elemt.id)}> </i>
                                </div>

                            </div>)
                    })}
                </div>

                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={
                        RemoveAll
                    }><span> Check List
                        </span></button>

                </div>
            </div>
        </div >
    )
}

export default Todo

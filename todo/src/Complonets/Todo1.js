import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Todo1() {
    const [inputData, setInputData] = useState('');
    const [item, setItem] = useState([]);
    const AddItems = () => {

        if (!inputData) {

        } else {
            setItem([...item, inputData]);
            setInputData('');
        }

    }
    const DeleteItem = (ind) => {
        console.log(ind)
        const UpdatedItem = item.filter((elemt, i) => {
            return ind !== i;

        })
        setItem(UpdatedItem);
    }
    const RemoveAll = () => {
        setItem([]);
    }
    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <figcaption>Add Item</figcaption>
                </figure>
                <div className="addItems">
                    <input type="text" placeholder="Add Items ..."

                        value={inputData}
                        onChange={(e) => setInputData(e.target.value)} />
                    <i className="fa fa-plus-square add-btn" title="Add item"
                        onClick={AddItems}
                    > </i>
                </div>
                <div className="showItems">

                    {item.map((elemt, ind) => {
                        return (
                            <div className="eachItem" key={ind}>
                                <h3>
                                    {elemt}
                                </h3>
                                <i className=" fa fa-trash-alt " title="Deleteitem" onClick={() => DeleteItem(ind)}> </i>
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
        </div>
    )
}

export default Todo1

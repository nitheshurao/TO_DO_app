import { useEffect, useState } from "react";
import React from 'react'
import '../Componts2/Page.css'


const renderData = (data) => {
    return (
        <ul>
            {data.map((todo, index) => {
                return <li >{todo.index} {todo.title}</li>;
            })}
        </ul>
    );
};



function Pages() {
    const [data, setData] = useState([]);
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

    //how many page to display
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const pages = [];
    for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const IndexofLastItem = currentPage * itemsPerPage;
    const indexofFirstItem = IndexofLastItem - itemsPerPage;

    const curentItem = data.slice(indexofFirstItem, IndexofLastItem);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    const handleClick = (event) => {
        setcurrentPage(Number(event.target.id));
    };

    const renderPageNumbers = pages.map((number) => {

        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage == number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null
        }


    });



    // const handleNextbtn = () => {
    //     setcurrentPage(currentPage + 1);

    //     if (currentPage + 1 > maxPageNumberLimit) {
    //         setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
    //         setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    //     }
    // };

    // /

    // let pageIncrementBtn = null;
    // if (pages.length > maxPageNumberLimit) {
    //     pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    // }

    // let pageDecrementBtn = null;
    // if (minPageNumberLimit >= 1) {
    //     pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    // }


    return (
        <div>

            <ul className="pageNumbers">
                {renderPageNumbers}
            </ul>

            {renderData(curentItem)}
            <ul className="pageNumbers">

            </ul>
        </div>
    )
}

export default Pages

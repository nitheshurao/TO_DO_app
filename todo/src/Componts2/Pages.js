import { useEffect, useState } from "react";
import React from 'react'
import '../Componts2/Page.css'






function Pages() {
    const [users, setUsers] = React.useState([]);
    const [page, setPAge] = React.useState(1);



    const userch = () => {

        setPAge(2)
        // console.log(inc)


    }
    const userch2 = () => {
        setPAge(1)
    }

    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${page}`)
            .then(res => res.json())
            .then(json => {
                setUsers(json.data);
            });
    }, [page]);
    return (
        <div className="App">
            <h1>Hello!</h1>
            <div className="flex">
                <div className="btn">
                    <button onClick={userch}>Page1</button>
                    <button onClick={userch2}>Page 2</button>
                </div>
                {/* <div> */}
                {users.length &&

                    users.map((user) => {
                        return (
                            // <div key={user.id}>
                            <div>
                                <p>
                                    <strong>{user.first_name}</strong>
                                </p>
                                <p>{user.email}</p>
                                <img key={user.avatar} src={user.avatar} />
                            </div>
                        );
                    })
                }
            </div>


        </div>
    );
}


export default Pages

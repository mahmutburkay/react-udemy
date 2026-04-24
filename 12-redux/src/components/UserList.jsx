import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from '../redux/userSlice';
import User from './User';

const UserList = () => {
    const dispatch = useDispatch();

    const { users } = useSelector(store => store.user); // verileri user dan çek 
    console.log(users);

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])


    return (
        <div>
            {
                users && users.map((user) => (
                    <User key={user.id} user={user} /> // user ları User.jsx e props geçme
                ))
            }
        </div>
    )
}

export default UserList


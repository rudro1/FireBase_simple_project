import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router';
const Root = () => {
    return (
        <div>
            <Header></Header>
            HELLO
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
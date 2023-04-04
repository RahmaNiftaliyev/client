// @ts-nocheck
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './../features/Main/Home/Home';
import NotFound from './../features/errors/NotFound';
import Register from '../features/Main/Form/Register';
import ContactUs from '../features/Main/Form/ContactUs';

const Dashboard = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/contactus' element={<ContactUs/>}/>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Dashboard;

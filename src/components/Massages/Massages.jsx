import React from 'react';
import classes from './Massages.module.css'
import Persons from './persons/Persons';
const Massages = () => {
    return (
        <div className={classes.wrapper}>
            <Persons />
        </div>
    )
};

export default Massages;
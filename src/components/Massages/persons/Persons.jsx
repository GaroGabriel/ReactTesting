import React, { Component } from 'react';
import Person from './person/Person';
import './Persons.css'


class Persons extends Component {
    constructor(props) {
        super(props)
    };
    render() {
        return (
            <div className='persons__wrapper'>
                <div className='persons__inner'>
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                    <Person />
                </div>
            </div>
        )
    }
}


export default Persons;

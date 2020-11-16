
import React, { Component } from 'react';
import './person.css'

class Person extends Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div className='person__wrapper'>
                <div className='person__img'>
                    <img src="https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg" alt="" />
                </div>
                <div className='person__info'>
                    <div className='person__info_name'>
                        <span>name: John</span>
                    </div>
                    <div className='person__info_Job'>
                        <span>job: Meneger</span>
                    </div>
                    <div className='person__info_age'>
                        <span>age: 40 year</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Person
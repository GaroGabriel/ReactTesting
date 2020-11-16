
import React, { Component } from 'react';
import './person.css'

class Person extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='person__wrapper'>
                <div className='person__img'>
                    <img src={this.props.img} alt={this.props.alt} />
                </div>
                <div className='person__info'>
                    <div className='person__info_name'>
                        <span>name: {this.props.name}</span>
                    </div>
                    <div className='person__info_Job'>
                        <span>job: {this.props.job}</span>
                    </div>
                    <div className='person__info_age'>
                        <span>age: {this.props.age} year</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Person
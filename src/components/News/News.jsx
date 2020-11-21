
import React, { Component } from 'react';
import './News.css'



class News extends Component {
    constructor() {
        super()
        this.plus = this.plus.bind(this)
        this.minus = this.minus.bind(this)
    }

    state = {
        num: 0,
    }


    plus = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    minus = () => {
        this.setState({
            num: this.state.num - 1
        })
    }

    render() {
        return (
            <div className='news__wrapper'>
                <div className='news__counter'>
                    <button onClick={this.minus}>minus</button>
                    <span>{this.state.num}</span>
                    <button onClick={this.plus}>plus</button>
                </div>
            </div>
        )
    }
}

export default News;

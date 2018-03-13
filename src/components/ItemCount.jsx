import React, { Component } from 'react'
import '../css/components/ItemCount.css'

class ItemCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            score: 0
    }

        this.onCounter = this.onCounter.bind(this)
    }

    render() {
        let className = 'Item';
            if(this.state.score >= this.props.textNumber) {
                className += 'Done'
            }
        return(
            <div className='count'>
                <div className='score'>{this.state.score}</div> 
                <button className={className} onClick={this.onCounter}>Up</button>
            </div>
        )
    }


    onCounter() {
        if(this.state.score < this.props.textNumber) {
            this.setState({score: this.state.score + 1})
        }
    }
}

export default ItemCount
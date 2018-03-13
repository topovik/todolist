import React, { Component } from 'react'
import '../css/components/RemoveCount.css'

class RemoveCount extends Component {
    constructor(props) {
        super(props)


    }
    render() {
        return(
            <section>           
                <button className='button1' onClick={() => this.props.delete(this.props.todo.id)}>Remove</button> 
            </section>
        )     
    }


}
export default RemoveCount
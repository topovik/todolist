import React, { Component } from 'react'

class RemoveCount extends Component {
    constructor(props) {
        super(props)

        this.onRemove = this.onRemove.bind(this)
    }


    render() {
        return(
            <React.Fragment>

                <button onClick={this.onRemove}>remove
              </button>

            </React.Fragment>
        )
    
  
       
}
onRemove(item, i) {
    this.props.delete(item, i)
}
}

export default RemoveCount
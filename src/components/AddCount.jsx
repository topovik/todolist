import React, { Component } from 'react'

class AddCount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textName: '',
            textNumber: 0
        }

            this.onChangeName = this.onChangeName.bind(this)
            this.onChangeNumber = this.onChangeNumber.bind(this)
            this.onClickAddCount = this.onClickAddCount.bind(this)
    }

    render() {
        return(
            <React.Fragment>
                <input value={this.state.textName} onChange={this.onChangeName} type="text"/>
                <input value={this.state.textNumber} onChange={this.onChangeNumber} type="number"/>
                <button onClick={this.onClickAddCount}>Add</button>
            </React.Fragment>
        )
    }

        onChangeName(event) {
            this.setState({textName: event.target.value})
        }

        onChangeNumber(event) {
            this.setState({textNumber: event.target.value})
        }

        onClickAddCount() {
            this.props.onClickTodoList(this.state.textName, this.state.textNumber)
        }
}

export default AddCount
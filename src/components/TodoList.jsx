import React, { Component } from 'react'
import AddCount from './AddCount'
import RemoveCount from './RemoveCount'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }

        this.onClickCount = this.onClickCount.bind(this)
        this.onRemoveCount = this.onRemoveCount.bind(this)
    }

        render() {
            const TodoItems = this.state.items.map((element, index) => 
                <p>
                    {element.textName + element.textNumber}
                    <RemoveCount delete={this.onRemoveCount} todo={this.state.items}/>
                </p>
            )

            return(
                <React.Fragment>
                    <AddCount onClickTodoList={this.onClickCount}/>
                    {TodoItems}
                </React.Fragment>
            )
        }

onClickCount(textName, textNumber) {
    const copy = [...this.state.items]
    copy.push({textName, textNumber})
    this.setState({items: copy})
} 

onRemoveCount(name, i) {
    const copy2 = [...this.state.items]
    copy2.splice(i, 1)
    this.setState({items: copy2})
}

}

export default TodoList
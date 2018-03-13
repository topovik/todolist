import React, { Component } from 'react'
import AddCount from './AddCount'
import RemoveCount from './RemoveCount'
import ItemCount from './ItemCount'
import '../css/components/TodoList.css'



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
            const TodoItems = this.state.items.map(t => 
                <section className='section' key={t.id}>
                    <div className='name'>{t.textName}</div>
                    <div><ItemCount textNumber={t.textNumber}/></div>
                    <div className='number'>{t.textNumber}</div>
                    <RemoveCount delete={this.onRemoveCount} todo={t}/>                 
                </section>
            )


            return(
                <React.Fragment>
                    <div className='header'>
                        <AddCount onClickTodoList={this.onClickCount}/>
                    </div>
                    {TodoItems}
                </React.Fragment>
            )
        }

onClickCount(textName, textNumber) {
    const copy = [...this.state.items]
    copy.push({id: this.state.items.length + 1, textName, textNumber})
    this.setState({items: copy})
} 

onRemoveCount(id) {
    const index = this.state.items.findIndex(t => t.id === id)
    const copy2 = [...this.state.items]
    copy2.splice(index, 1)
    this.setState({items: copy2})
}


}

export default TodoList
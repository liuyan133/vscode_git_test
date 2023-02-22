import React, { Component } from 'react'
import PropType from 'prop-types'
import Item from '../Item'
import './index.css'

export default class List extends Component {
  static PropType ={
    Todos: PropType.array.isRequired,
    update: PropType.func.isRequired
  }

  render() {
    const {todos,update,deleteObj} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map( todo =>{
            return <Item key={todo.id} {...todo} update={update} deleteObj={deleteObj}/>
          }) 
        }
      </ul>
    )
  }
}

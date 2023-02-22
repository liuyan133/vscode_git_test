import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  handleCheckAll = (event)=>{
    this.props.checkAll(event.target.checked)
  }

  handleAllDone =()=>{
    this.props.checkAllDone()
  }

  render() {
    const {todos} = this.props
    const doneTotal = todos.reduce((pre,todo)=> pre + (todo.done ? 1:0),0)
    const Total = todos.length

    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked = {Total !== 0 && Total === doneTotal ? true : false} onChange={this.handleCheckAll}/>
        </label>
        <span>
          <span>已完成{doneTotal}</span> / 全部{Total}
        </span>
        <button onClick={this.handleAllDone} className="btn btn-danger">清除已完成任务</button>
      </div>
    )
  }
}

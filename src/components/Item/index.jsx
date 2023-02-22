import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {mouse:false}

  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  handleCheck = (id)=>{
    return (event)=>{
      this.props.update(id,event.target.checked)
    }
  }

  handleDelete = (id)=>{
    if(window.confirm('确定删除吗？')){
      this.props.deleteObj(id)
    }
  }

  render() {
    const {id,done,name} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={()=>{this.handleDelete(id)}} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>
    )
  }
}

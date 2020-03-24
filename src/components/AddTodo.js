import React, { Component } from "react";
import { connect } from 'react-redux'
import { addTodo } from '../actions/actionCreators';


class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        if(text!==""){
        this.props.addTodo(text)
        this.setState({ text: '' })
    }
}

    render() {
        return (
            
          <div className='todo-form'>
          <h1 className='titles'>Todo App</h1>
            <input className='inputt' placeholder="Add Todo" onChange={(e) => this.setState({ text : e.target.value })} value={this.state.text}></input>
            <button className='submit-btn' onClick={() => this.addTodo(this.state.text)}> Add</button> 
           </div>
        );
    }
}

const mapDispatchToProps = (dispatch)=>({
    addTodo:(text)=>{
       dispatch(addTodo(text))
     }
  })
  


export default connect(null,mapDispatchToProps)(AddTodo);

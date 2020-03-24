import React, { Component } from "react";
import { connect } from 'react-redux'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import {editTodo,deleteTodo, toggle } from '../actions/actionCreators';



class TodoApp extends Component {

    state={
        edit:false,
        text:"",
    }
 
    editTodo=(id,edit_text)=>{
        if(edit_text!==""){
    
            this.props.editTodo(id,edit_text)
            this.setState({
              edit:false,
            })
          }
         }
    

         toggle=(id)=>{
         
      
              this.props.toggle(id)
             
           }
      
         
       editstate=(index)=>{
         this.setState({
             edit:true, 
             text:this.props.todos.text
    
        })
       }
       



    render() {
        return (
            <div>
            <AddTodo/>
                {this.props.todos.map(el =>
                  <div>
                  { this.state.edit=== false?
                    
                       <div>

                     <p key={el.id} style={{  textDecoration : el.completed ? "line-through":  "" }}>{el.text}</p>
        
                        <button onClick={()=> this.props.deleteTodo(el.id)} className='delete-btn'> delete</button>               
        
                     <button onClick={(id)=>this.editstate(id)} className='done-btn'>edit</button>
                     <button onClick={(id)=>this.toggle(el.id)} className='done-btn'> {el.completed ? "Undo": "Completed"}</button>
        
                     </div>
        :
                   <div>
                     <input value={this.state.text} className='input'  onChange={(e) => this.setState({ text: e.target.value })} />
                     <button onClick={ ()=>this.editTodo(el.id,this.state.text) }className='done-btn'>save edit</button> 
                    </div>
                }
                </div>   
                 )}
              
            </div>
        );
    }
}


const mapStateToProps = state => ({
   
    todos: state.todos
})

const mapDispatchToProps =(dispatch)=>({
    editTodo:(id,edit_text)=>{
      dispatch(editTodo(id,edit_text))
     },
     
    deleteTodo:(id) => {
       dispatch(deleteTodo(id))
     },
 
    toggle:(id) => {
        dispatch(toggle(id))
      }
  })



export default connect( mapStateToProps,mapDispatchToProps)(TodoApp)
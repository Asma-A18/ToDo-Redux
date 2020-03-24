import * as actionTypes from "./actionTypes";


export const addTodo = text => ({
  type: actionTypes.ADD_TODO,
    text: text
  
});

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  payload: {id: id }
});

export const editTodo = (id,edit_text) => ({
  type: actionTypes.EDIT_TODO,
  payload: {id: id, edit_text: edit_text}
});
export const toggle = (id) => ({
  type: actionTypes.TOGGLE_TODO,
id
});

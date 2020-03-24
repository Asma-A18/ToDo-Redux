import * as actionTypes from "../actions/actionTypes";



const initialState = []
let nextId = 0

const todos = (state = initialState,action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [
        ...state, {
            id: nextId++,
            text: action.text,
            completed: false
        }
    ]
                                 

    case actionTypes.DELETE_TODO:
      return state.filter(el=> el.id !== action.payload.id)
  
      case actionTypes.EDIT_TODO:
        for (var i = 0; i < state.length; i++) {
          if (state[i].id === action.payload.id) {
            state[i].text = action.payload.edit_text;
            break;
          }
        }
        return [...state];


        case actionTypes.TOGGLE_TODO:
          return state.map(todo =>
            (todo.id === action.id)
                ? { ...todo, completed: !todo.completed } :
                todo)
    default:
      return state;
  }
};

export default todos
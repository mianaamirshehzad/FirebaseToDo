// import { act } from 'react-test-renderer';
import { ADD_NEW_TASK, DELETE_ALL, DELETE_TASK, UPDATE_TASK } from './Constants';

const initialState = [
  {id: 1, task: 'Buy Mobile', completed: false, favourite: false, archived: false},
  {id: 2, task: 'Turn the Machine', completed: false, favourite: false, archived: false},
  {id: 3, task: 'Buy Noodles', completed: false, favourite: false, archived: false},
  {id: 4, task: 'Restore Mobile', completed: false, favourite: false, archived: false},
  
 ];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return [...state, action.payload]; 


    case DELETE_ALL: 
      return [];


    case DELETE_TASK:
      let i = action.payload;
      let newState = [...state];
      newState.splice(i, 1);
      return newState;

    // Alternative method for deleting 
    // return [...state.slice(0, i), ...state.slice(i + 1)];
    case UPDATE_TASK:
      let { id, editedTask } = action.payload;
      let temp = [...state];
      let item = { ...action.payload }
      item.task = editedTask;
      let index = state.findIndex((item) => item.id === id)
      temp[index] = item;
      return temp;
    default:
      return state;
  }
}
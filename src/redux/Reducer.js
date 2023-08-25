// import { act } from 'react-test-renderer';
import {
  ADD_NEW_TASK,
  DELETE_ALL,
  DELETE_TASK,
  MARK_COMPLETE,
  UPDATE_TASK,
} from './Constants';

const initialState = [

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
      let {editTask, selected, isFavouriteEnabled, isArchivedEnabled, index} = action.payload;
      let temp = [...state];
      // let indexOfTask = temp.findIndex((i) => i.index === index )
      console.log('indexOfTask' + index)

      if (index !== -1) {
        temp[index].task = editTask,
        temp[index].dueDate = selected,
        temp[index].favourite = isFavouriteEnabled,
        temp[index].archived = isArchivedEnabled
      }
      console.log('Task edited successfully');
      return temp;

    case MARK_COMPLETE:
      let markId = action.payload;
      let markCopy = [...state];
      markCopy[markId].isDone = true;
      return markCopy;
    default:
      return state;
  }
};

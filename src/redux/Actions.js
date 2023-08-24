import { ADD_NEW_TASK, DELETE_ALL, DELETE_TASK, UPDATE_TASK } from "./Constants";


export const addNewTask = (payload) => {
  return {
    type: ADD_NEW_TASK,
    payload
  }
};

export const deleteAllTasks = () => {
  return {
    type: DELETE_ALL
  }
};

export const deleleTask = (id)=> {
  return {
    type: DELETE_TASK,
    payload: id
  }
};

export const updateTask = (id, editedTask) => {
  return {
    type: UPDATE_TASK,
    payload: {id, editedTask}
  }
}

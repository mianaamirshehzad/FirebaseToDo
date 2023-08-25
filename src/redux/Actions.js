import { ADD_NEW_TASK, DELETE_ALL, DELETE_TASK, UPDATE_TASK, MARK_COMPLETE } from "./Constants";


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

export const updateTask = (payload) => {
  return {
    type: UPDATE_TASK,
    payload
  }
}

export const markComplete = (id) => {
  return {
    type: MARK_COMPLETE,
    payload: id
  }
}

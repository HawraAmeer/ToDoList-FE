import axios from "axios";

export const CREATE_TASK = "CREATE_TASK";
export const FETCH_TASKS = "FETCH_TASKS";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";

export const createTask = (newTask) => async (dispatch) => {
  try {
    await axios.post(`http://localhost:8000/tasks`, newTask);
    dispatch({ type: CREATE_TASK, payload: { newTask } });
  } catch (error) {
    console.error(error);
  }
};

export const fetchTasks = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/tasks");
    res.tasks = res;
    dispatch({ type: FETCH_TASKS, payload: res.data });
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = (updatedTask) => async (dispatch) => {
  try {
    await axios.put(
      `http://localhost:8000/tasks/${updatedTask.id}`,
      updatedTask
    );
    dispatch({ type: UPDATE_TASK, payload: { updatedTask } });
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:8000/tasks/${taskId}`);
    dispatch({ type: DELETE_TASK, payload: { taskId } });
  } catch (error) {
    console.error(error);
  }
};

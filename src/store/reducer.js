import { CREATE_TASK, DELETE_TASK, FETCH_TASKS, UPDATE_TASK } from "./actions";

const initialState = {
  tasks: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.newTask],
      };

    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
        loading: false,
      };

    case UPDATE_TASK:
      const { updatedTask } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.taskId),
      };
    default:
      return state;
  }
};

export default reducer;

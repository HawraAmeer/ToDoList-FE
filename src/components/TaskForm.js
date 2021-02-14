import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../store/actions";

const TaskForm = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    name: "",
    status: false,
    priority: "middle",
    deadline: "",
  });

  const handleChange = (event) =>
    setTask({ ...task, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (foundProduct) dispatch(updateProduct(product));
    // else
    dispatch(createTask(task));
    // history.push("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Task</h1>
      <div>
        <label>Task Name</label>
        <input
          type="text"
          value={task.name}
          onChange={handleChange}
          name="name"
          placeholder="What's your Task?"
        />
      </div>
      <div>
        <label>Priority</label>
        <input
          type="text"
          value={task.priority}
          onChange={handleChange}
          name="priority"
          className="form-control"
        />
      </div>
      <div>
        <label>Deadline</label>
        <input
          type="text"
          value={task.deadline}
          onChange={handleChange}
          name="deadline"
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default TaskForm;

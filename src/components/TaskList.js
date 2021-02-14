import TaskItem from "./TaskItem";
// Data
import _tasks from "../data";
import { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";

const TaskList = () => {
  const [tasks, setTasks] = useState(_tasks);

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  //unFinished task
  const taskRows = tasks
    .filter((task) => task.done !== true)
    .map((item) => (
      <TaskItem item={item} deleteTask={deleteTask} key={item.id} />
    ));

  return (
    <table className="table">
      <thead>
        <BiPlusCircle color="#d29200"></BiPlusCircle>

        <tr className="headerRow">
          <th>STATUS</th>
          <th>TASK</th>
          <th>PRIORITY</th>
          <th>DELETE</th>
          <th>DEADLINE</th>
        </tr>
      </thead>
      <tbody>{taskRows}</tbody>
    </table>
  );
};

export default TaskList;

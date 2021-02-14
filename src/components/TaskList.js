import TaskItem from "./TaskItem";
import { BiPlusCircle } from "react-icons/bi";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);

  // const deleteTask = (taskId) => {
  //   const filteredTasks = tasks.filter((task) => task.id !== taskId);
  //   setTasks(filteredTasks);
  // };

  console.log(tasks);

  // Not Done Tasks
  const notDoneTasks = tasks
    .filter((task) => task.status !== true)
    .map((task) => <TaskItem key={task.id} task={task} />);

  // Done Tasks
  const doneTasks = tasks
    .filter((task) => task.status !== false)
    .map((task) => <TaskItem key={task.id} task={task} />);

  return (
    <>
      <table className="table">
        <thead>
          <BiPlusCircle color="#d29200"></BiPlusCircle>

          <tr className="headerRow">
            <td>STATUS</td>
            <td>TASK</td>
            <td>PRIORITY</td>
            {/* <td>DELETE</td> */}
            <td>DEADLINE</td>
          </tr>
        </thead>
        <tbody>{notDoneTasks}</tbody>
      </table>
      <table className="table">
        <thead>
          <tr className="headerRow">
            <td>STATUS</td>
            <td>TASK</td>
            <td>PRIORITY</td>
            {/* <td>DELETE</td> */}
            <td>DEADLINE</td>
          </tr>
        </thead>
        <tbody>{doneTasks}</tbody>
      </table>
    </>
  );
};

export default TaskList;

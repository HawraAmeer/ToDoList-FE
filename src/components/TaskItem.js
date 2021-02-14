import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../store/actions";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const statusIcon = task.status ? (
    <FaCheckCircle color="green" />
  ) : (
    <FaTimesCircle color="red" />
  );

  const markTask = () => {
    dispatch(updateTask({ ...task, status: !task.status }));
  };

  const changePriority = () => {
    if (task.priority === "low")
      dispatch(updateTask({ ...task, priority: "middle" }));
    else if (task.priority === "high")
      dispatch(updateTask({ ...task, priority: "low" }));
    else dispatch(updateTask({ ...task, priority: "high" }));
  };

  let today = moment().format();
  today = today.slice(0, today.indexOf("T"));
  // console.log(moment(today));

  const deadline = task.deadline.slice(0, task.deadline.indexOf("T"));
  // console.log(deadline);

  const viewDeadline = () =>
    task.status
      ? deadline
      : Math.abs(moment(today).diff(moment(deadline), "days"));

  return (
    <tr className="row" aria-disabled="true">
      <td onClick={markTask}>{statusIcon}</td>
      <td>{task.name}</td>
      <td onClick={changePriority}>{task.priority}</td>
      <td>{viewDeadline()}</td>
      <td>
        <BsFillTrashFill onClick={() => dispatch(deleteTask(task.id))} />
      </td>
    </tr>
  );
};

export default TaskItem;

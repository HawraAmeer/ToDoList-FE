import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";

const TaskItem = (props) => {
  const item = props.item;
  const [done, setDone] = useState(item.done);

  const statusIcon = done ? (
    <FaCheckCircle color="green" />
  ) : (
    <FaTimesCircle color="red" />
  );

  const toggleStatus = () => setDone(!done);

  return (
    <tr className="row">
      <td onClick={toggleStatus}>{statusIcon}</td>
      <td>{item.task}</td>
      <td className={item.priority}>{item.priority.toUpperCase()}</td>
      <td>
        <BsFillTrashFill onClick={() => props.deleteTask(item.id)} />
      </td>
    </tr>
  );
};

export default TaskItem;

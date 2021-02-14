import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";

const TaskItem = ({ task }) => {
  // const statusIcon = done ? (
  //   <FaCheckCircle color="green" />
  // ) : (
  //   <FaTimesCircle color="red" />
  // );

  // const toggleStatus = () => setDone(!done);

  return (
    <tr className="row">
      <td>{task.status.toString()}</td>
      <td>{task.name}</td>
      <td>{task.priority}</td>
      <td>{task.deadline}</td>
      {/* <td>
        <BsFillTrashFill onClick={() => props.deleteTask(item.id)} />
      </td> */}
    </tr>
  );
};

export default TaskItem;

import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import { useSelector } from "react-redux";
import { Container, Grid, Paper } from "@material-ui/core";

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
      <TaskForm />
      <Grid item xs={12}>
        <Grid container justify="center" spacing={6}>
          <Grid key={0} item>
            <Paper />
            <table className="table">
              <thead>
                <tr className="headerRow">
                  <td>STATUS</td>
                  <td>TASK</td>
                  <td>PRIORITY</td>
                  <td>DEADLINE</td>
                </tr>
              </thead>
              <tbody>{notDoneTasks}</tbody>
            </table>
          </Grid>
          <Grid key={1} item>
            <Paper />
            <table className="table">
              <thead>
                <tr className="headerRow">
                  <td>STATUS</td>
                  <td>TASK</td>
                  <td>PRIORITY</td>
                  <td>DEADLINE</td>
                </tr>
              </thead>
              <tbody>{doneTasks}</tbody>
            </table>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TaskList;

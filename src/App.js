import { useSelector } from "react-redux";
import "./App.css";
import Loading from "./components/Loading";

import TaskList from "./components/TaskList";

function App() {
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loading />;

  return (
    <div className="rectangle">
      <p className="title">TO DO LIST</p>
      <TaskList />
    </div>
  );
}

export default App;

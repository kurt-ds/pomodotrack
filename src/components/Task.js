import { useState } from "react";

function Task() {

  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [noOfSessions, setNoOfSessions] = useState(1);

  const addTask =() => {
    if (taskName.trim() !== '' && noOfSessions > 0) {
      setTasks([...tasks, {
        taskName: taskName,
        noOfSessions: noOfSessions
      }]);
      setTaskName("");
      setNoOfSessions(1);
    }
  }

  return (
    <div className="Task">
      <div>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="Task Name"/>
        <br/>
        <input type="Number" value={noOfSessions} onChange={((e) => setNoOfSessions(e.target.value))}/>
        <br/>
        <button onClick={addTask} >Add</button>
      </div>

      <ul>
      {tasks.map((task, index) => (
        <li key={index} >
          {task.taskName} - {task.noOfSessions}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Task;
import { useState } from "react";
import TaskList from "./TaskList";
import { useEffect } from "react";
import TaskCard from "./TaskCard";

function Task() {
  const [taskItems, setTaskItems] = useState([]);
  const [taskdes, settaskdes] = useState("");

  const updateTask = (name, namenew) => {
    taskItems.map((task) => {
      if (task.name === name) {
        task.name = namenew;
      }
    });
    localStorage.setItem("titulo", JSON.stringify(taskItems));
    window.location.reload();
  };
  const handleDelete = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
  };

  const handleSubmit = (value) => {
    localStorage.setItem("titulo", JSON.stringify(value));
  };

  const deleteTask = () => {
    if (window.confirm("Quieres Eliminar esta Tarea?")) {
      handleDelete();
    }
  };

  const tareaHecha = (e) => {
    const arr = JSON.parse(localStorage.getItem("titulo"));
    arr.forEach((task) => {
      if (task.name === e) {
        if (task.done === false) {
          task.done = true;
          task.label = "label-underline";
        } else {
          task.done = false;
          task.label = "label";
        }
      }
    });
    localStorage.setItem("titulo", JSON.stringify(arr));
    window.location.reload();
  };

  function createNewTask(taskName, taskDescription) {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([
        ...taskItems,
        {
          name: taskName,
          description: taskDescription,
          done: false,
          label: "",
        },
      ]);
    }
  }

  /*   function createDescription(taskDescription) {
    if (!taskdes.find((task)=> task.description === taskDescription)) {
      settaskdes([
        ...taskdes,
        {
          name: taskDescription,
          done: false,
          label: ""
        }
      ]);
      
    }
    
  } */

  const toggeletask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("titulo"));
    if (arr) {
      setTaskItems(arr);
    }
  }, []);
  useEffect(() => {
    handleSubmit(taskItems);
  }, [taskItems]);

  return (
    <div className="task">
      <TaskList
        createNewTask={createNewTask}
        /*         createDescription={createDescription} */
        toggeletask={toggeletask}
        taskItems={taskItems}
      />

      <div>
        {taskItems.map((task, i) => (
          <TaskCard
            key={i}
            tareaHecha={tareaHecha}
            task={task}
            updateTask={updateTask}
          />
        ))}
        <div>
          <button id="Clear" onClick={deleteTask}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default Task;

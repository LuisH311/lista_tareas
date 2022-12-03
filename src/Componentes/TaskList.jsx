import { GrAdd } from "react-icons/gr";
import { useState } from "react";

function TaskList({ createNewTask /* createDescription */ }) {
  const [tarea, setTarea] = useState("");
  const [nota, setnota] = useState("");
  return (
    <>
      <div className="Container1">
        <form
          onSubmit={(e) => {
            createNewTask(tarea, nota);
            /*             createDescription(nota); */
            setTarea("");
            setnota("");
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="text"
            placeholder="Add your new todo"
            onChange={(e) => setTarea(e.target.value)}
          />
          <input
            type="text"
            className="text"
            placeholder="Add description"
            onChange={(e) => setnota(e.target.value)}
          />
          <button id="add">
            <GrAdd />
          </button>
        </form>
      </div>
    </>
  );
}

export default TaskList;

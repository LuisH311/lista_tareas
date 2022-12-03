import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineCloudUpload } from "react-icons/ai";
import React from "react";
import { useState } from "react";

function TaskCard({ tareaHecha, task, updateTask }) {
  const [upDateValidate, setUpDateValidate] = useState(false);
  const [newName, setNewName] = useState("");

  return (
    <div>
      <label className={task.label}>{task.name}</label>
      <input
        type="checkbox"
        onClick={(e) => {
          /* toggeletask(task) */
          tareaHecha(task.name);
        }}
        checked={task.done}
        readOnly
        />
      <button
        id="editar"
        onClick={(e) => {
          /* e.preventDefault(); */
          
          if (!upDateValidate) {
            setUpDateValidate(true);
          } else {
            setUpDateValidate(false);
          }
        }}
        >
        <AiOutlineEdit />
      </button>
      <div className="input">
      <p >{task.description}</p>
      <div className="btn">
          </div>
      </div>
      {upDateValidate ? (
        <form>
          <input
            type="text"
            defaultValue={task.name}
            onChange={(e) => {
              /* e.preventDefault(); */
              setNewName(e.target.value);
              console.log(e.target.value);
            }}
          />
          <button
            id="update"
            onClick={(e) => {
             /*  e.preventDefault(); */
              updateTask(task.name, newName);
            }}
          >
            <AiOutlineCloudUpload />
          </button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default TaskCard;

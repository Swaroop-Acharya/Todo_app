import React, { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ol className="max-w-md  divide-y divide-gray-200 ">
      {tasks.map((task) => {
        return (
          <li className="pb-3  pt-5 pl-5  sm:pb-8" key={task.id}>
            <Task task={task} onEdit={onChangeTask} onDelete={onDeleteTask} />
          </li>
        );
      })}
    </ol>
  );
}

function Task({ task, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let textContent;
  if (isEditing) {
    textContent = (
      <>
        <input
        className=" shadow appearance-none border rounded pl-3 w-2/4 py-2 px-3 mr-4 text-grey-darker"
          value={task.text}
          onChange={(e) => {
            onEdit({
              ...task,
              text: e.target.value,
            });
          }}
          
        />
        <button className="float-right text-white bg-gradient-to-br from-blue-500 to-green-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2" onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    textContent = (
      <>
        {task.text}
        <button className=" float-right text-white bg-gradient-to-br from-blue-500 to-yellow-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2" onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label className=" text-2xl">
      <input
     className= " pr-30 w-7 cursor-pointer  h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600 p-8"
        type="checkbox"
        value={task.done}
        onChange={(e) => {
          onEdit({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {textContent}
      <button className=" float-right text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-3 text-center mr-2 mb-2" onClick={()=>onDelete(task.id)}>Delete</button>
    </label>
  );
}

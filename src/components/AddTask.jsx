import React, { useState } from "react";

export default function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  return (
    <div className="flex mt-4">
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={() => {
          setText("");
          onAdd(text);
        }}
      >
        Add Task
      </button>
    </div>
  );
}

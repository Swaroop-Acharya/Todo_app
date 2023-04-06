import { useReducer } from "react";
import "./App.css";
import "./index.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

let nextId = 1;
const initialState = [];

const ACTIVITY = {
  ADD_TASK: "add",
  EDIT_TASK: "change",
  DELETE_TASK: "delete",
};

function reducer(tasks, action) {
  switch (action.type) {
    case ACTIVITY.ADD_TASK: {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case ACTIVITY.EDIT_TASK: {
      //compares the previous state with the new one
      //if the id matches , it replaces the tasks array elment with the new one
      return tasks.map((t) => {
        if (t.id === action.tasks.id) {
          return action.tasks;
        } else {
          return t;
        }
      });
    }

    case ACTIVITY.DELETE_TASK: {
      return tasks.filter((t) => {
        return t.id !== action.id;
      });
    }
    default:
      throw Error("Unknown errro:" + action.type);
  }
}

function App() {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  function handleAdd(text) {
    dispatch({
      type: ACTIVITY.ADD_TASK,
      id: nextId++,
      text: text,
    });
  }

  function handleChange(task) {
    dispatch({
      type: ACTIVITY.EDIT_TASK,
      tasks: task,
    });
  }

  function handleDelete(taskId) {
    dispatch({
      type: ACTIVITY.DELETE_TASK,
      id: taskId,
    });
  }

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-full ">
    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Todo <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Application</mark> using Hooks</h1>
    <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Tailwind</span>
        <AddTask onAdd={handleAdd} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChange}
          onDeleteTask={handleDelete}
        />
        {console.log(tasks)}
      </div>
    </div>
  );
}

export default App;

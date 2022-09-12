import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
import { FcTodoList } from "react-icons/fc";
import {
  MdOutlineDeleteForever,
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
} from "react-icons/md";

const Task = ({ check, content }) => {
  return (
    <div className="task">
      {check ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
      <MdOutlineDeleteForever /> {content}
    </div>
  );
};

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, [
    {
      check: false,
      content: "riakt",
      id: 1,
    },
  ]);
  return (
    <div className="container">
      <div className="title">To-Do Application</div>
      <div className="input">
        <input
          type="text"
          name="input-task"
          id="input-task"
          placeholder="Text your task here..."
        />
        <button>Add</button>
      </div>
      <div className="tasks">
        {tasks.map((task) => {
          return <Task {...task} />;
        })}
      </div>
    </div>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {};
  }
};

export default App;

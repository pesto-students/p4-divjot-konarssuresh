import {NavBar, AddToDo, ToDoList} from "./components";
import common from "./index.module.css";
import {useReducer} from "react";
import {STATUS} from "./constants";

const toDoReducer = (state, {type = "", data = ""}) => {
  let updatedTaskList;
  switch (type) {
    case "Add":
      const newToDo = {taskDescription: data, status: STATUS.NOT_COMPLETE};
      return {...state, taskList: [...state.taskList, newToDo]};
    case "Remove":
      const indexToRemove = data;
      updatedTaskList = state.taskList.filter(
        (_d, index) => index !== indexToRemove
      );
      console.log({updatedTaskList});
      return {...state, taskList: updatedTaskList};
    case "markCompleted":
      const indexToMarkComplete = data;
      updatedTaskList = [...state.taskList];
      updatedTaskList[indexToMarkComplete].status = STATUS.COMPLETED;
      return {...state, taskList: updatedTaskList};
    case "notCompleted":
      const indexToMarkNotComplete = data;
      updatedTaskList = [...state.taskList];
      updatedTaskList[indexToMarkNotComplete].status = STATUS.NOT_COMPLETE;
      return {...state, taskList: updatedTaskList};
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(toDoReducer, {
    taskList: [
      {taskDescription: "Test Task 1 ", status: STATUS.NOT_COMPLETE},
      {taskDescription: "Test Task 2 ", status: STATUS.COMPLETED},
    ],
  });
  const changeStatusHandler = (index) => {
    const task = state.taskList[index];
    if (task.status === STATUS.COMPLETED) {
      dispatch({type: "notCompleted", data: index});
    } else if (task.status === STATUS.NOT_COMPLETE) {
      dispatch({type: "markCompleted", data: index});
    }
  };

  const deleteTaskHandler = (index) => {
    dispatch({type: "Remove", data: index});
  };

  const addTaskHandler = ({inputValue}) => {
    dispatch({type: "Add", data: inputValue});
  };
  return (
    <>
      <NavBar />
      <section className={common.container}>
        <AddToDo onAddToDo={addTaskHandler} />
        <ToDoList
          taskList={state.taskList}
          onStatusChange={changeStatusHandler}
          onRemoveTask={deleteTaskHandler}
        />
      </section>
    </>
  );
}

export default App;

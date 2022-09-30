import PropTypes from "prop-types";
import styled from "styled-components";
import {STATUS} from "../constants";
import common from "../index.module.css";

const TaskListContainer = styled.div`
  max-height: 60rem;
  overflow: auto;
`;

const TaskContainer = styled.div`
  margin: 0.5rem auto;
  padding: 0.5rem;
  border: 1px solid lightgrey;
  border-radius: 0.25rem;
  width: 80%;
  display: flex;
  column-gap: 1.5rem;
  align-items: center;
  label {
    font-size: 2rem;
    color: ${(props) =>
      props.status === STATUS.COMPLETED ? "lightgrey" : "#000"};
    text-decoration: ${(props) =>
      props.status === STATUS.COMPLETED ? "line-through" : "none"};
    cursor: pointer;
    margin-bottom: 0.5rem;
  }
  input {
    display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
    height: 1.5rem;
  }

  button {
    visibility: hidden;
  }

  :hover {
    button {
      visibility: visible;
    }
  }
`;

const ActionsContainer = styled.div`
  ${({showActionButton}) => (!showActionButton ? "visibility:hidden;" : "")}
`;

const DescriptionContainer = styled.div`
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
`;

const ToDoList = ({taskList, onStatusChange, onRemoveTask}) => {
  return (
    <TaskListContainer>
      {taskList.map((task, index) => {
        return (
          <TaskContainer key={index} status={task.status}>
            <span>{index + 1}</span>
            <DescriptionContainer>
              <input
                id={`task${index}`}
                type="checkbox"
                checked={task.status === STATUS.COMPLETED}
                onChange={(e) => {
                  onStatusChange(index);
                }}
              />
              <label for={`task${index}`}>{task.taskDescription}</label>
            </DescriptionContainer>
            <ActionsContainer showActionButton={true}>
              <button
                className={`${common.button} ${common["button-danger"]}`}
                onClick={() => {
                  onRemoveTask(index);
                }}
              >
                Delete
              </button>
            </ActionsContainer>
          </TaskContainer>
        );
      })}
    </TaskListContainer>
  );
};

ToDoList.propTypes = {
  taskList: PropTypes.arrayOf(
    PropTypes.shape({
      taskDescription: PropTypes.string,
      status: PropTypes.oneOf(["completed", "not-completed"]),
    })
  ),
  onStatusChange: PropTypes.func,
  onRemoveTask: PropTypes.func,
};

export {ToDoList};

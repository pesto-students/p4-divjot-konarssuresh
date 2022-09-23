import common from "../index.module.css";
import {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 80vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Input = styled.input`
  width: 88%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
  }
`;
const AddToDo = ({onAddToDo}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Container>
      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        className={`${common.button} ${common["button-primary"]}`}
        disabled={inputValue?.length === 0}
        onClick={() => {
          onAddToDo && onAddToDo({inputValue});
          setInputValue("");
        }}
      >
        Add
      </button>
    </Container>
  );
};

AddToDo.propTypes = {
  onAddToDo: PropTypes.func,
};

export {AddToDo};

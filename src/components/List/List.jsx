import React from "react";
import "./List.css";
import { Flex } from "./Styled-comps/Flex";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      inputEditVal: "",
      editId: null,
      isDone: false,
    };
  }

  handleChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        inputEditVal: e.target.value,
      };
    });
  };

  handleComplete = () => {
    const { handleToDoEdit } = this.props;
    const { inputEditVal, editId } = this.state;

    this.setState((prevState) => {
      return {
        ...prevState,
        editId: null,
        inputEditVal: "",
      };
    });

    handleToDoEdit(inputEditVal, editId);
  };

  handleEdit = (id, name) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        editId: id,
        inputEditVal: name,
      };
    });
  };

  handleDone = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isDone: !this.state.isDone,
      };
    });
  };

  render() {
    // console.log(this.props);

    const { name, id, handleDelete } = this.props;
    const { editId, inputEditVal, isDone } = this.state;
    const { handleComplete, handleEdit, handleChange, handleDone } = this;
    // const { isEditable } = this.state

    return (
      <li className="List">
        {/* <p  contentEditable={isEditable ? true : false}>{name}</p>
    
                <div className='todo-actions'>
                    <button onClick={() => handleDelete(id)}>
                        <i className="fa fa-trash" style={{ fontSize: "16px" }}></i>
                    </button>

                    <button  onClick={handleEdit}>
                        <i className={isEditable ? "fa fa-check" : "fa fa-pencil"} style={{ fontSize: "16px" }}></i>
                    </button>
                </div> */}

        {editId !== null && editId === id ? (
          <input type="text" value={inputEditVal} onChange={handleChange} />
        ) : (
          <p
            style={
              isDone
                ? { textDecorationLine: "line-through" }
                : { textDecorationLine: "none" }
            }
          >
            {name}
          </p>
        )}

        <Flex>
          <button onClick={handleDone}>
            <i className="fa fa-ballot-check">{isDone ? "undo" : "complete"}</i>
          </button>
          {editId !== null && editId === id ? (
            <button onClick={handleComplete}>
              <i className="fa fa-check" style={{ fontSize: "16px" }}></i>
            </button>
          ) : (
            <button onClick={() => handleEdit(id, name)}>
              <i className="fa fa-pencil" style={{ fontSize: "16px" }}></i>
            </button>
          )}
          <button onClick={() => handleDelete(id)}>
            <i className="fa fa-trash" style={{ fontSize: "16px" }}></i>
          </button>
        </Flex>
      </li>
    );
  }
}

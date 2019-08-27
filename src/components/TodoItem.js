import React from "react";

export default function TodoItem(props) {
  const completedStyle = {
    color: "red",
    fontStyle: "italics",
    textDecoration: "line-through"
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

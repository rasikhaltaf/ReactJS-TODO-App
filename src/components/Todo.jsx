import React, { useEffect, useState } from "react";
import Task from "./Task";

const Todo = () => {
  const initialArr = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [tasks, setTask] = useState(initialArr);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setTask([
      ...tasks,
      {
        title,
        description,
      },
    ]);
    setTitle("")
    setDescription("")
    
  };

  useEffect(() =>{

    localStorage.setItem("tasks", JSON.stringify(tasks));

  },[tasks])

  const deleteTask = (index) => {
    const filteredArrr = tasks.filter((val, i) => {
      return index !== i;
    });
    setTask(filteredArrr);
    console.log(filteredArrr);
  };

  return (
    <>
      <div className="container">
        <h1>Daily Goals</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button type="submit">ADD</button>
        </form>

        {tasks.map((item, index) => {
          return (
            <Task
              key={index}
              title={item.title}
              description={item.description}
              deleteTask={deleteTask}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Todo;

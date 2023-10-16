import React from "react";
import Header from "./components/Header";
import './App.css'
import Home from "./components/Home";
import Todo from "./components/Todo";

const App = () => {
  return (
    <>
     <Header />
     <Home />
     <Todo />
    </>
  );
};

export default App;

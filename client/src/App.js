import React, { Fragment } from "react"; 

import './App.css';

//components

import InputStudent from "./components/inputStudent";
import ListStudents from "./components/listStudent";

function App() {
  return (
  <Fragment>
    <InputStudent/>
    <ListStudents/>
  </Fragment>
  ); 
}

export default App;

import React, {Fragment, useEffect, useState } from "react";

import EditStudent from "./editStudent";

const ListStudents = () => {
    const [names, setNames] = useState([]);

    // delete Student
    const deleteStudent = async (id) => {
        try {
            const deleteStudent = await fetch(`http://localhost:3033/students2/${id}`,{
                method: "DELETE"
            });
            setNames(names.filter(names => names.id !== id))
        } catch (err) {
            console.error(err.message);
        }
        
    }

    const getNames = async() => {
        try {
            const response = await fetch("http://localhost:3033/students2");
            const jsonData = await response.json();
            console.log(jsonData);
            setNames(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getNames();
    },[]);
    
    return (
    <table className="table m5-5 text-center">
    <thead>
      <tr>
        <th scope="col">Student name</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      {names.map(names =>(
        <tr key={names.id}>
            <td>{names.name}</td>
            <td><EditStudent name = {names} /></td>
            <td><button className="btn btn-danger" onClick={()=> deleteStudent(names.id)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
    );
};

export default ListStudents;
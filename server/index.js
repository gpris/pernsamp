const express = require("express");
const app = express(); 
const cors = require("cors");
const pool = require("./db")
app.use(cors());

app.use(express.json());
// ROUTES

// create a student{
app.post("/students2", async (req, res) => {
    try{
        // console.log(req.body);
        const { name } = req.body;
        const  newStudent = await pool.query("INSERT INTO students2 (name) VALUES ($1)", 
        [name]);
        res.json(newStudent.rows);
        console.log(newStudent.rows[0]);
        

    } catch (err) {
        console.error(err.message);
    }
});
// get all
app.get("/students2", async (req, res) => {
    try {
        const allStudent = await pool.query("SELECT * FROM students2");
        res.json(allStudent.rows)
    } catch (err) {
        console.error(err.message);
    }
    
});

// get an item
app.get("/students2/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const oneStudent = await pool.query("SELECT * FROM students2 WHERE ID = $1",[id]);
        res.json(oneStudent.rows[0])
    } catch (err) {
        console.error(err.message);
    }
    
});



// uopdate a student
app.put("/students2/:id", async (req, res) => {
    try {
        const {name} = req.body;
        const {id} = req.params;
        const updateStudent = await pool.query("UPDATE students2 SET name = $1 WHERE ID =$2",[name, id]);
        res.json("Student updated")
    } catch (err) {
        console.error(err.message);
    }
    
});
// delete a student

app.delete("/students2/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteStudent = await pool.query("DELETE FROM students2 WHERE id = $1",[id]);
        res.json("Student deleted")
    } catch (err) {
        console.error(err.message);
    }
    
});

app.listen(3033, () => {
  console.log("server has started on port 3033");
    
});


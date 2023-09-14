const express = require("express");
const app = express(); 
const cors = require("cors");
const pool = require("./db")
app.use(cors());

app.use(express.json());
// ROUTES

// create a student{
app.post("/students", async (req, res) => {
    try{
        // console.log(req.body);
        const { name, email, age, dob } = req.body;
        const  newStudent = await pool.query("INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)", 
        [name, email, age, dob]);
        res.json(newStudent.rows[0]);

    } catch (err) {
        console.error(err.message);
    }
});
// get all
app.get("/students", async (req, res) => {
    try {
        const allStudent = await pool.query("SELECT * FROM students");
        res.json(allStudent.rows)
    } catch (err) {
        console.error(err.message);
    }
    
});

// get an item
app.get("/students/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const oneStudent = await pool.query("SELECT * FROM students WHERE ID = $1",[id]);
        res.json(oneStudent.rows[0])
    } catch (err) {
        console.error(err.message);
    }
    
});



// uopdate a student
app.put("/students/:id", async (req, res) => {
    try {
        const {name} = req.body;
        const {id} = req.params;
        const updateStudent = await pool.query("UPDATE students SET name = $1 WHERE ID =$2",[name, id]);
        res.json("Student updated")
    } catch (err) {
        console.error(err.message);
    }
    
});
// delete a student

app.delete("/students/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const deleteStudent = await pool.query("DELETE FROM students WHERE id = $1",[id]);
        res.json("Student deleted")
    } catch (err) {
        console.error(err.message);
    }
    
});

app.listen(3033, () => {
  console.log("server has started on port 3033");
    
});


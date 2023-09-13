import React, {Fragment, useState} from "react"

const InputStudent = () => {
    const [name, setName] = useState("");

    //onChange={e => setName(e.target.value)}
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { name };
            const response = await fetch("http://localhost:3033/students2",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });

            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
        
        
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5"> PERN Input Student</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <label className="fs-3 text-center ms-5">Name</label>
                <input type="text" className="form-control" value={name} onChange = {e => setName(e.target.value)}/>
                <button className="btn btn-success">Add student</button> 
            </form> 
        </Fragment>
    )
};

export default InputStudent;
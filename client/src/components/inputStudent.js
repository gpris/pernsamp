import React, {Fragment, useState} from "react"

const inputStudent = () => {
    const [name, setName] = useState("")

    return (
        <Fragment>
            <h1 className="text-center mt-5"> PERN Input Student</h1>
            <form className="d-flex mt-5">
                <label className="text-center mt-5">Name</label>
                <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}

export default inputStudent
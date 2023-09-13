import React, { Fragment, useState } from "react";

const EditStudent = ({ename}) => {
    const [name, setName] = useState(ename.name);
    
    const updateStudent = async e => {
        e.preventDefault();
        try {
          const body = { name };
          const response = await fetch(
            `http://localhost:3033/students2/${name.id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );
          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <Fragment>
        <button
          type="button"
          class="btn btn-warning"
          data-toggle="modal"
          data-target={`#id${name.id}`}
        >
          Edit
        </button>
  
        {/* 
          id = id10
        */}
        <div
          class="modal"
          id={`id${names.id}`}
          onClick={() => setName(name.name)}
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Edit Todo</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  onClick={() => setName(name.name)}
                >
                  &times;
                </button>
              </div>
  
              <div class="modal-body">
                <input
                  type="text"
                  className="form-control"
                  value={names}
                  onChange={e => setName(e.target.value)}
                />
              </div>
  
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-dismiss="modal"
                  onClick={e => updateStudent(e)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => setName(name.name)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default EditStudent;
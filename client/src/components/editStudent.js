import React, { Fragment, useState } from "react";

const EditStudent = ({names}) => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
    const [name, setName] = useState([]);
    var tempid = names.id;
    // console.log('EditStudent:updateStudent:tempid:'+tempid);

    const updateStudent = async (e) => {
        e.preventDefault();
        try {
          const body = { name };
          const response = await fetch(
            `http://localhost:3033/students2/${tempid}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
            }
          );

          console.log('EditStudent:updateStudent:body:'+body);

          window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
      };

    return (
        <Fragment>
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target={`#id${tempid}`}
        >
          Edit
        </button>
  
        {/* 
          id = id10
        */}
        <div
          className="modal"
          id={`id${tempid}`}
          onClick={() => setName({names})}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit Student</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => setName({names})}
                >
                  &times;
                </button>
              </div>
  
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={names.name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
  
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={e => updateStudent(e)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => setName(names.name)}
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
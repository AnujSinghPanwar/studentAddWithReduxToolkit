import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../../Redux/State/authSlice";

const User = ({ student, i }) => {
  const { name, id, email, username } = student;
  const dispatch = useDispatch();

  const delStudent = (i) => {
    dispatch(deleteStudent(i));
  };
  return (
    <tr className="table-primary">
      <th scope="row">{i + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{username}</td>
      <td>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
          />
          <Link className="btn btn-success" to={`/user/${id}`}>
            Details
          </Link>
          <Link className="btn btn-primary" to={`/edit-user/${id}`}>
            Edit
          </Link>
          <input type="radio" className="btn-check" name="btnradio" />
          <label
            className="btn btn-danger"
            htmlFor="btnradio3"
            onClick={() => delStudent(id)}
          >
            Delete
          </label>
        </div>
      </td>
    </tr>
  );
};

export default User;

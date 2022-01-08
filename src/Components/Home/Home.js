import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../Redux/State/authSlice";
import Filter from "../Filter/Filter";
import Loader from "../Loader/Loader";
import User from "../users/User";

const Home = () => {
  const dispatch = useDispatch();
  const { users, loader, userContainer } = useSelector(
    (state) => state.students
  );

  return (
    <div className="container mt-5">
      <Filter />
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Username</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((student, i) => (
            <User key={i} i={i} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

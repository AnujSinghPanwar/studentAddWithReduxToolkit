import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { clearStudent, clearUser, getStudent, getUser } from "../../Redux/State/authSlice";
import Loader from "../Loader/Loader";

const Details = ({ match }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user, loader } = useSelector((state) => state.students);
  console.log(user)

  useEffect(() => {
    dispatch(getStudent(id));
    return () => {
      dispatch(clearStudent());
    };
  }, []);
  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="container mt-5 ">
            <Link to="/" className="btn btn-dark mb-3">
              Go Back
            </Link>
            <div className="card border mb-3" style={{ maxWidth: "100rem" }}>
              <div className="card-header">{user.name}</div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-3">Name</div>
                  <div className="col-9 text-end">{user.name}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-3">Email</div>
                  <div className="col-9 text-end">{user.email}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-3">Username</div>
                  <div className="col-9 text-end">{user.username}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-3">Address</div>
                  <div className="col-9 text-end">{user.address}</div>
                </div>
                <div className="row mb-3">
                  <div className="col-3">Contact</div>
                  <div className="col-9 text-end">{user.phone}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;

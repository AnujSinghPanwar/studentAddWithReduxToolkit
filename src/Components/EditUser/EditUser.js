import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  addStudent,
  clearStudent,
  findStudent,
  updateStudent,
} from "../../Redux/State/authSlice";

const EditUser = ({ match }) => {
  //   const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const student = useSelector((state) => state.students.user);
  console.log(student);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { id: uuidv4() },
  });

  useEffect(() => {
    dispatch(findStudent(match.params.id));
    return ()=>{
      dispatch(clearStudent())
    }
  }, []);

  useEffect(() => {
    reset(student);
  }, [student]);

  const onSubmit = (data) => {
    dispatch(updateStudent(data));
    reset();
    history.push("/");
  };
  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-dark mb-3">
        Go Back
      </Link>

      <div className="card border" style={{ maxWidth: "100rem" }}>
        <div className="card-header">Edit Student</div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="form-label ">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                {...register("name")}
                // placeholder="Enter Student Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="form-label mt-4">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                name="email"
                {...register("email")}
                // placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label mt-4"
              >
                Username
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                {...register("username")}
                // placeholder="Enter Your Name"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label mt-4"
              >
                Address
              </label>
              <input
                type="text"
                className="form-control"
                name="address"
                {...register("address")}
                // placeholder="Enter Your Address"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label mt-4"
              >
                Contact
              </label>
              <input
                type="text"
                className="form-control"
                name="phone"
                {...register("phone")}
                // placeholder="Enter Your Contact"
              />
            </div>

            <div className="form-group">
              <div className="d-grid mt-5">
                <button className="btn btn-lg btn-dark" type="submit">
                  Update Student
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

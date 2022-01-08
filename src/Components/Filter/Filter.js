import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { filterUser } from "../../Redux/State/authSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const inputRef = useRef("");

  const filterUsers = () => {
    dispatch(filterUser(inputRef.current.value));
  };
  return (
    <>
      <input
        type="text"
        name=""
        className="form-control mb-3"
        placeholder="Search"
        ref={inputRef}
        onChange={filterUsers}
      />
    </>
  );
};

export default Filter;

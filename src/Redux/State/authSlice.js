import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

// ACTION start
export const getUsers = createAsyncThunk("student", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const getUser = createAsyncThunk("user", async (id) => {
  const respose = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return respose.data;
});
export const clearUser = createAsyncThunk("clear", () => {});

// ACTION end
const initialState = {
  users: [
    {
      name: "Anuj Panwar",
      email: "Anuj@gmail.com",
      username: "Ravan",
      address: "delhi",
      phone: "9898569856",
    },
    {
      name: "Deepak Verma",
      email: "Deepak@gmail.com",
      username: "SIn",
      address: "delhi",
      phone: "1236547896",
    },
    {
      name: "Dheeraj Kumar",
      email: "Dheeraj@gmail.com",
      username: "Kaalu",
      address: "delhi",
      phone: "7896541232",
    },
    {
      name: "Bhoopal",
      email: "Bhoopal@gmail.com",
      username: "Bhoopal",
      address: "delhi",
      phone: "8985698569",
    },
    {
      name: "Shiksha",
      email: "Shiksha@gmail.com",
      username: "Shiksha",
      address: "delhi",
      phone: "7896523696",
    },
    {
      name: "Neha",
      email: "Neha@gmail.com",
      username: "Neha",
      address: "delhi",
      phone: "9856748999",
    },
    {
      name: "Priyanka",
      email: "Priyanka@gmail.com",
      username: "Pri",
      address: "delhi",
      phone: "8988888888",
    },
  ],
  userContainer: [],
  loader: false,
  errors: {},
  user: {},
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    filterUser: (state, action) => {
      state.users = state.userContainer.filter((user) =>
        user.name.toLowerCase().includes(action.payload)
      );
    },
    getStudent: (state, action) => {
      state.loader = false;
      state.user = state.users.find((std) => std.id == action.payload);
    },
    clearStudent: (state) => {
      state.user = {};
    },
    deleteStudent: (state, action) => {
      state.users = state.users.filter((std) => std.id !== action.payload);
      toast.success("Student Has Been Deleted", {
        position: "top-right",
      });
    },
    addStudent: (state, action) => {
      state.users = [...state.users, action.payload];
      state.userContainer = [...state.userContainer, action.payload];
      toast.success("Student Has Been Added", {
        position: "top-right",
      });
    },
    findStudent: (state, action) => {
      state.user = state.users.find((std) => std.id == action.payload);
    },
    updateStudent: (state, action) => {
      state.users = state.users.map((std) =>
        std.id == action.payload.id ? action.payload : std
      );
      toast.info("Student Updated Successfully", { position: "top-right" });
    },
  },
});

// Actions
export const {
  filterUser,
  getStudent,
  clearStudent,
  deleteStudent,
  addStudent,
  findStudent,
  updateStudent,
} = studentSlice.actions;
// reducers
export default studentSlice.reducer;

// extraReducers: {
//   [getUsers.pending]: (state, action) => {
//     state.loader = true;
//   },
//   [getUsers.fulfilled]: (state, action) => {
//     state.loader = false;
//     state.users = action.payload;
//     state.userContainer = action.payload;
//   },
//   [getUsers.rejected]: (state, action) => {
//     state.loader = false;
//     state.errors = action.payload;
//   },
//   [getUser.pending]: (state, action) => {
//     state.loader = true;
//   },
//   [getUser.fulfilled]: (state, action) => {
//     state.loader = false;
//     state.user = action.payload;
//   },
//   [getUser.rejected]: (state, action) => {
//     state.loader = false;
//     state.errors = action.payload;
//   },
//   [clearUser.fulfilled]: (state, action) => {
//     state.loader = false;
//     state.user = {};
//   },
// },

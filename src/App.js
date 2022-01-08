import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar, Home, Details, AddUser, EditUser } from "./Components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/user/:id" component={Details} />
          <Route exact path="/add-user" component={AddUser} />
          <Route exact path="/edit-user/:id" component={EditUser} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

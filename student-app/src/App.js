import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Student from './views/student/Student.js';
import Parent from './views/parent/Parent.js';
import Add from './views/student/Add.js';
import Edit from './views/student/Edit.js';
import EditParent from './views/parent/EditParent.js';
import React from 'react';
import Home from './views/Home.js';
import AboutUs from './views/AboutUs.js';
import Login from './views/authenticate/Login.js';
import Signup from './views/authenticate/Signup.js';
import Admin from './views/Admin.js';
import AdminLogin from './views/authenticate/AdminLogin.js';
import StudentProfile from './views/studentprofile/StudentProfile.js';
import AddParent from "./views/parent/AddParent.js";
import './App.css';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },
    {
      path:"/aboutUs",
      element:<AboutUs/>,
    },
    {
      path:"/dashboard",
      element:<Home/>,
    },
    {
      path:"/list",
      element:<Student/>,
    },
    {
      path:"/parentList",
      element:<Parent/>,
    },
    {
      path:"/Add",
      element:<Add />,
    },
    {
      path:"/AddParent",
      element:<AddParent/>,
    },
    {
      path:"/update/:id",
      element:<Edit/>,
    },
    {
      path:"/updateParent/:id",
      element:<EditParent/>,
    },
    {
      path:"/Login",
      element:<Login/>,
    },
    {
      path:"/StudentProfile/:email",
      element:<StudentProfile/>,
    },
    {
      path:"/Signup",
      element:<Signup />,
    },
    {
      path:"/adminlogin",
      element:<AdminLogin />,
    },
    {
      path:"/admin",
      element:<Admin />,
    },
  ])
  return (
    <div className="App">
    <RouterProvider router={route}></RouterProvider>
    </div>
  );
}
export default App;

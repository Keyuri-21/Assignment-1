import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Student from './crudoperations/student/Student.js';
import Parent from './crudoperations/parent/Parent.js';
import Add from './crudoperations/student/Add.js';
import Edit from './crudoperations/student/Edit.js';
import EditParent from './crudoperations/parent/EditParent.js';
import React from 'react';
import Home from './views/Home.js';
import AboutUs from './views/AboutUs.js';
import Login from './views/Login.js';
import Signup from './views/Signup.js';
import Admin from './views/Admin.js';
import AdminLogin from './views/AdminLogin.js';
import StudentProfile from './studentprofile/StudentProfile.js';
import AddParent from "./crudoperations/parent/AddParent.js";
import './App.css';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/aboutUs",
      element:<AboutUs/>,
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

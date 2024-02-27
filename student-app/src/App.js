import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Student from './liststudent/Student.js';
import Parent from './listparent/Parent.js';
import Add from './addstudent/Add.js';
import Edit from './updatestudent/Edit.js';
import EditParent from './updateparent/EditParent.js';
import React from 'react';
import Home from './pages/homepage/Home.js';
import AboutUs from './pages/AboutUs.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Admin from './pages/Admin.js';
import AdminLogin from './pages/AdminLogin.js';
import StudentProfile from './studentprofile/StudentProfile.js';
import AddParent from "./addparent/AddParent.js";
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
      path:"/admin/login",
      element:<AdminLogin />,
    },
    {
      path:"/Admin",
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

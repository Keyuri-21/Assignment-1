import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Student from './components/liststudent/Student';
import Parent from './components/listparent/Parent';
import Add from './components/addstudent/Add';
import AddParent from './components/addparent/AddParent';
import Edit from './components/updatestudent/Edit';
import EditParent from './components/updateparent/EditParent';
import React from 'react';
import Home from './pages/homepage/Home';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import StudentProfile from './components/studentprofile/StudentProfile';

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
      element:<AddParent />,
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

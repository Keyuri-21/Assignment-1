
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Student from './components/liststudent/Student';
import Add from './components/addstudent/Add';
import Edit from './components/updatestudent/Edit';
import React from 'react';
import Home from './pages/homepage/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';




function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/List",
      element:<Student/>,
    },
    {
      path:"/Add",
      element:<Add />,
    },
    {
      path:"/Edit/:id",
      element:<Edit/>,
    },
    {
      path:"/Login",
      element:<Login/>,
    },
    {
      path:"/Signup",
      element:<Signup />,
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

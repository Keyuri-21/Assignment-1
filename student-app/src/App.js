
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Student from './components/getstudent/Student';
import Add from './components/addstudent/Add';
import Edit from './components/updatestudent/Edit';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
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
  ])
  return (
    <div className="App">
    <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;

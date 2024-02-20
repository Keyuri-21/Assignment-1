
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Student from './components/getstudent/Student';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<Student/>,
    },
    {
      path:"/add",
      element:"Add Student Page",
    },
    {
      path:"/edit",
      element:"Update Student details",
    },
  ])
  return (
    <div className="App">
    <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;

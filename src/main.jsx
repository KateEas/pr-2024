import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//Закомментировала то, что относится к react router
// import Root from "./routes/root";
// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Root/>,
//     },
//   ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>
//   );
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
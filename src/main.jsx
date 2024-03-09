import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Gallery from './components/gallery.jsx';
import Teachers from './components/Teachers.jsx';
import About from './components/About.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/gallery/",
    element: <Gallery />,
  },
  {
    path: "/teachers/",
    element: <Teachers />,
  },
  {
    path: "/About/",
    element: <About />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

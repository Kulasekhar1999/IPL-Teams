import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


import Mi from './pages/mi';
import Csk from './pages/csk';
import Rcb from './pages/rcb';
import Home from './pages/Home';

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={< Home />} />
      <Route path="mi" element={<Mi />} />
      <Route path="csk" element={<Csk />} />
      <Route path="rcb" element={<Rcb />} />
     
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


import Nav from "./components/Nav";
import './styles.css'
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div>
      <Nav />
      <Outlet />
   </div>
  );
}

export default App;


import {BrowserRouter,Routes,Route}  from "react-router-dom";
import Home from "./pages/Home.js";
import Adduser from "./pages/Adduser.js";
import Detail from "./pages/Detail.js";

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/adduser" element={<Adduser/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;

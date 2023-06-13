import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <div className="w-fit h-fit font-raleway">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login"  element={<SignIn/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

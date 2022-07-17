import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
function App() {
  const acount = {
    name: "admin@gmail.com",
    pass: "letmein",
  };
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm acount={acount} />} />
            <Route path="home" element={<Home acount={acount} />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

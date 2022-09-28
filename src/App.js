// CSS
import "./App.css";
//Components
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/Sign-Up";
import Product from "./pages/Product"
import Books from "./pages/Books";
//React Router
import { Routes, route, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/product">
          Products
        </Link>
        <Link className="nav-link" to="/books">
          Books
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/login">
          Login
        </Link>
        <Link className="nav-link" to="/sign-up">
          Sign-Up
        </Link>
      </div>
      <h1 className="main-title">React Router</h1>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/product/:productID" element={<Product />}></Route>
          <Route path="/books/:bookID" element={<Books />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

import "../styling/App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <a href="/">
        <h1>Let's Do This Event Management</h1>
      </a>
      <Routes></Routes>
    </Router>
  );
};

export default App;

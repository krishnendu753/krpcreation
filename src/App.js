import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';  

function App() {
  return (
    <div className="App main-container">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

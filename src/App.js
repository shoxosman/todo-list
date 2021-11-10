import "./App.css";

import { NavLink, Route, Routes } from "react-router-dom";
import Todo from "./Pages/Todo";
import QuoteGenerator from "./Pages/QuoteGenerator";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Todo</NavLink>
          </li>

          <li>
            <NavLink to="/QuoteGenerator">Quote Generator</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/QuoteGenerator" element={<QuoteGenerator />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

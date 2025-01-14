import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Diplomas from "./Diplomas";
import Diploma from "./Diploma";
import Module from "./Module";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
      <Route path="/" element={<Home title="Republic Polytechnic SOI" />}/>
        <Route path="about" element={<About />}/>
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":diplomaId" element={<Diploma />}>
            <Route path=":moduleId" element={<Module />} />
          </Route>
          <Route index element={<h3>Choose any diploma from above of your choice</h3>}/>
        </Route>
        <Route path="register" element={<Register />}/>
        <Route path="confirmed" element={<Confirmation />}/>
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2025 | <a href="https://www.rp.edu.sg/soi">RP SOI</a>
      </footer>
    </div>
  );
}

export default App;

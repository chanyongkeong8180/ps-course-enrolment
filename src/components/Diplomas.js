import { Outlet, NavLink } from "react-router-dom";
import { getDiplomas } from "../api";

export default function Diplomas() {
  const diplomas = getDiplomas();
  return (
    <div className="container">
      <h1>SOI Diplomas</h1>

      <ul className="diplomas">
        {diplomas.map(diplomas => (
          <li key={diplomas.id}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "diploma-active" : null
              }
              to={diplomas.id}
            >
              {diplomas.name}
            </NavLink>
          </li>
        ))}
      </ul>
      
      <Outlet />
    </div>
  );
}

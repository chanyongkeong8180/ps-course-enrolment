import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { getCategories } from "../api";


export default function Register() {
  const navigate = useNavigate();
  const categories = getCategories();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const catRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", {state: 
      {email: emailRef.current.value,
      name: nameRef.current.value,
      category: catRef.current.value}});
  }

  return (
    <div className="container">
      <h1>Register for RP SOI Course</h1>
      <form className="container" onSubmit={handleSubmit}>
        <label>
          Email:
        </label>
        <input type="text" name="email" ref={emailRef} required/>
        <label>
          Full Name:
        </label>
        <input type="text" name="email" ref={nameRef} required/>
        <label>
          Categories:
        </label>
        <select className="categories" ref={catRef}>
          {categories.map(cat => (
            <option>
              {cat.name}
            </option>
          ))}
          </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

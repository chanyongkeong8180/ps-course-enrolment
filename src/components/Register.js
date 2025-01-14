import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { getDiplomas } from "../api";


export default function Register() {
  const navigate = useNavigate();
  const diplomas = getDiplomas();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const diplomaRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", {state: 
      {email: emailRef.current.value,
      name: nameRef.current.value,
      diploma: diplomaRef.current.value}});
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
          Name:
        </label>
        <input type="text" name="name" ref={nameRef} required/>
        <label>
          Diploma:
        </label>
        <select className="diplomas" ref={diplomaRef}>
          {diplomas.map(diploma => (
            <option>
              {diploma.name}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

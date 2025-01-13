import { useLocation } from 'react-router-dom';
export default function Confirmation() {
  const { state } = useLocation();
  return (
    <div className="container">
      <h1>Thank You!</h1>
      <p>Dear {state.name}, you are now registered for {state.diploma}.</p>
      {state && (
        <p>
          We have sent more details to <strong>{state.email}</strong>.
        </p>
      )}
    </div>
  );
}

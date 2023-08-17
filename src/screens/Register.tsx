import {ChangeEvent, FormEvent, useState} from 'react';
import {Credentials, useAuth} from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";


type CredentialsKeys = keyof Credentials;

export default function RegisterPage() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: ''
  });
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await auth.signUp(credentials);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const {
      name,
      value
    } = event.target;

    const key = name as CredentialsKeys;
    setCredentials({
      ...credentials,
      [key]: value,
    });
  }

  const gotoLoginPage = () => navigate("/login");    

  return (
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
              required
          />
        </label>
        <label>Password:
          <input
              name="password"
              type="password"
              value={credentials.password}
              onChange={handleInputChange}
              required
          />
        </label>
        <button type="submit">Register</button>
        <p>
            Already have an account?{" "}
            <span className='link' onClick={gotoLoginPage}>
                Login
            </span>
        </p>
      </form>
  );
}
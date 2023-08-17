import {ChangeEvent, FormEvent, useState} from 'react';
import {Credentials, useAuth} from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";


type CredentialsKeys = keyof Credentials;

export default function LoginPage() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: ''
  });
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await auth.logIn(credentials);
    navigate("/");
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

  const gotoSignUpPage = () => navigate("/register");    

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
        <button type="submit">Log in</button>
        <p>
            Don't have an account?{" "}
            <span className='link' onClick={gotoSignUpPage}>
                Sign up
            </span>
        </p>
      </form>
  );
}
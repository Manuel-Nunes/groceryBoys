import {ChangeEvent, FormEvent, useState} from 'react';
import {Credentials, useAuth} from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";


type CredentialsKeys = keyof Credentials;

export default function RegisterPage() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: ''
  });
  const [OTP, setOTP] = useState("");
  const [verifyProcess, setVerifyProcess] = useState(false);


  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
        await auth.signUp(credentials);
        setVerifyProcess(true);
    } catch (err) {
        console.group(err);
    }
  }

  async function verifyAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
      await auth.verifyEmail(credentials.email, OTP);
      navigate("/login");
  };

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
    verifyProcess == false ? (
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
    ) : (
        <form onSubmit={verifyAccount}>
          Enter the OTP:
          <input
            type="text"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
          />
          <br />
          <button type="submit">Verify</button>
        </form>
    )
  );
}
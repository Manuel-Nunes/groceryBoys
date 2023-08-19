import { ChangeEvent, FormEvent, useState } from 'react';
import { Credentials, useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


type CredentialsKeys = keyof Credentials;

export default function RegisterPage() {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: ''
  });
  const [OTP, setOTP] = useState('');
  const [verifyProcess, setVerifyProcess] = useState(false);
  const [error, setError] = useState('');
  const [enabled, setDisabled] = useState(true);

  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await auth.signUp(credentials);
      setError('');
      setVerifyProcess(true);
    } catch (err: any) {
      if(err.name === 'InvalidParameterException') {
        setError('Password must have at least 8 characters, 1  number and 1 special character');
      } else if (err.name === 'UsernameExistsException') {
        setError('An account with this email already exists.');
      }
    }
  }

  async function verifyAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try{
      await auth.verifyEmail(credentials.email, OTP);
      navigate('/login');
    } catch (err: any) {
      if(err.name === 'CodeMismatchException') {
        setError('Invalid OTP');
      }
    }
      
  }

  function checkSpecialCharacters(password: string): boolean {
    const specialCharacters = RegExp('[!-/:-@[-`{-~]');
    return specialCharacters.test(password);
  }

  function checkLength(password: string): boolean {
    return password.length >= 8;
  }

  function checkCapitals(password: string): boolean {
    const specialCharacters = RegExp('[A-Z]');
    return specialCharacters.test(password);
  }

  function validatePassword(event: ChangeEvent<HTMLInputElement>) {
    const {
      name,
      value
    } = event.target;
    const key = name as CredentialsKeys;
    setCredentials({
      ...credentials,
      [key]: value,
    });
    const hasSpecial: boolean = checkSpecialCharacters(value);
    const hasLength: boolean = checkLength(value);
    const hasCapitals: boolean  = checkCapitals(value);
    let errorMessage = 'Password must contain';
    errorMessage += !hasLength ? ' at least 8 characters,' : '';
    errorMessage += !hasCapitals ? ' at least 1 uppercase,' : '';
    errorMessage += !hasSpecial ? ' at least 1 special character,' : '';
    if (!hasSpecial || !hasCapitals || !hasLength) {
      setError(errorMessage.slice(0, -1));
    } else {
      if (credentials.email.length !== 0) 
        setDisabled(false);
      setError('');
    }

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

  const gotoLoginPage = () => navigate('/login');    

  return (
    verifyProcess == false ? (
      <section>
        <img src={require('./shopping-basket.png')} style={{ width:100 }}/>
        <h1>Register</h1>
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
              onChange={validatePassword}
              required
            />
          </label>
          <button disabled={enabled} type="submit">Register</button>
        </form>
        <label className="errorLabel">{error}</label>
        <p>
            Already have an account?{' '}
          <span className='link' onClick={gotoLoginPage}>
                Login
          </span>
        </p>
      </section>
      
    ) : (
      <form onSubmit={verifyAccount}>
          Enter the OTP sent to your email:
        <input
          type="text"
          value={OTP}
          onChange={(e) => setOTP(e.target.value)}
        />
        <br />
        <button type="submit">Verify</button>
        <label className="errorLabel">{error}</label>
      </form>
    )
  );
}
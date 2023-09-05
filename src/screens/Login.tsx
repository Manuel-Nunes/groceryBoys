// import './App.css'
import '../global.css';
import {
  ChangeEvent, FormEvent, useState 
} from 'react';
import {
  Credentials, useAuth 
} from '../hooks/useAuth';
import {
  useNavigate 
} from 'react-router-dom';


type CredentialsKeys = keyof Credentials;

export default function LoginPage() {
  const [
    credentials,
    setCredentials
  ] = useState<Credentials>( {
    email: '',
    password: ''
  } );
  const [
    error,
    setError
  ] = useState( '' );
  const auth = useAuth();
  const navigate = useNavigate();

  async function handleSubmit( event: FormEvent<HTMLFormElement> ) {
    event.preventDefault();
    try{
      await auth.logIn( credentials );
      navigate( '/' );
    } catch ( err ) {
      setError( 'Incorrect username/password' );
    }
    
  }

  function handleInputChange( event: ChangeEvent<HTMLInputElement> ) {
    const {
      name,
      value
    } = event.target;

    const key = name as CredentialsKeys;
    setCredentials( {
      ...credentials,
      [key]: value,
    } );
  }

  const gotoSignUpPage = () => navigate( '/register' );    

  return (
    <section>
      {/* <img src={require( '../Resources/shoppingBasket.png' )} style={{
        width:100 
      }}/> */}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            required />
        </label>
        <label>Password:
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleInputChange}
            required />
        </label>
        <button className='DefaultButton' type="submit">Log in</button>
        <label className="errorLabel">{error}</label>
        <p>
          Don't have an account?{' '}
          <span className='link' onClick={gotoSignUpPage}>
            Sign up
          </span>
        </p>
      </form>
    </section>
  );
}
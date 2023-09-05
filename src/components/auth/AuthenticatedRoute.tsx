import {
  Navigate 
} from 'react-router-dom';
import {
  useAuth 
} from '../../hooks/useAuth';

interface Props {
    children: JSX.Element
}


export default function AuthenticatedRoute( { children }: Props ) {
  const auth = useAuth();
  if ( auth.user != null ) {
    return children;
  } else {
    return <Navigate to="/login" replace />;
  }
}
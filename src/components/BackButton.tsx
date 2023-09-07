import { useNavigate } from 'react-router-dom';

import '../global.css';

export function BackButton () {
  const navigate = useNavigate();

  return (
    <button className={'BackButton'} onClick={() => navigate( -1 )}>&larr;</button>
  );
}

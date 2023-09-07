import { useNavigate } from 'react-router-dom';

import '../global.css';
import { styled } from 'styled-components';

export function BackButton () {
  const navigate = useNavigate();

  return (
    <button className='NavButton' onClick={() => navigate( -1 )}>&lt;</button>
  );
}

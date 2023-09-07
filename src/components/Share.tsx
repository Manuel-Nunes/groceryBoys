import {
  useContext 
} from 'react';
import {
  GLContext 
} from './ContextHandler';
import '../global.css';

export function Share () {
  const { context } = useContext( GLContext );

  async function handleShare() {
    const data = {
      files: [
        new File( [JSON.stringify( context )], 'list.txt', {
          type: 'text/plain',
        } ),
      ],
      title: 'Your list',
      text: 'Enjoy the list!',
    };
    navigator.share( data );
  }

  return (
    <button className={'NavButton'} onClick={handleShare}>Share File</button>
  );
}

import '../global.css';

import {
  useContext
} from 'react';

import {
  SaveGroceryListFile
} from '../utils/FileUtils';

import {
  GLContext
} from './ContextHandler';

interface SaveFileProps {
  className?: string;
}

function SaveFile(
  {
    className = 'NavButton'
  }: SaveFileProps
): JSX.Element {

  const {context} = useContext( GLContext );

  const SaveButtonClick = (): void=>{
    if ( context.ListItems.length === 0 ) {
      alert( 'Nothing to save' );

      return ;
    }

    SaveGroceryListFile( context );
  };

  return (
    <button
      className={className}
      onClick={ SaveButtonClick }
    >
      Save Grocery List
    </button>
  );
}

export default SaveFile;

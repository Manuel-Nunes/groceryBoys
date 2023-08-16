import React, { useState } from 'react';

const tempLook = {
  context: {
    Value:0
  },
  setContext: (value:any)=>{ console.log(value);}
};

export const GLContext = React.createContext(tempLook);

interface PropTypes {
  children?: JSX.Element | JSX.Element[]
}

export const ContextHandler: React.FC<PropTypes> = ({children}) =>{

  const [context,setContext] = useState({Value:0});

  return (
    <GLContext.Provider value={{context, setContext}}>
      {children}
    </GLContext.Provider>
  );
};
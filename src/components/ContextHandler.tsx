import React, { useState } from 'react';
import { AllData } from '../types/types';

const defaultValue:AllData ={

  GroceryList:{
    ListItems: []
  }
};

const tempLook = {
  context: defaultValue,
  setContext: (value: AllData) => { console.warn('this is bad if you see this', value);}
};

export const GLContext = React.createContext(tempLook);

interface PropTypes {
  children?: JSX.Element | JSX.Element[]
}

export const ContextHandler: React.FC<PropTypes> = ({ children }) =>{

  const [context, setContext] = useState(defaultValue);

  return (
    <GLContext.Provider value={{ context, setContext }}>
      {children}
    </GLContext.Provider>
  );
};

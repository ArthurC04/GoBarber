import React from 'react';

import GlobalStyle from './styles/global';

import AuthContext from './context/AuthContext';
//import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';


const  App: React.FC = () => {
  return (
    <>
    <AuthContext.Provider value={{name: 'Arthur'}}>
      <SignIn />
    </AuthContext.Provider>

    <GlobalStyle />
    </>
    )
};

export default App;

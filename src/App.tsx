import React, { useState } from 'react';
import TestComponent from './components/TestComponent';
import { useTranslation } from './hooks/useTranslation';

export const UserContext = React.createContext("en");

const App = () => {

  const [language, setLanguage] = useState("en");
  const T = useTranslation(language);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  }

  return (
    <UserContext.Provider value={language}>
      <div>
        <button onClick={toggleLanguage}>{T.button}</button>
        <TestComponent />
      </div>
    </UserContext.Provider>
  )
}

export default App

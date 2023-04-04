// @ts-nocheck
import { createContext, useState } from 'react';
import Dashboard from './Dashboard';
import { lightTheme, darkTheme } from './theme';



export const ThemeContext = createContext({
    theme: lightTheme,
    toggleTheme: () => {},
});




const App = () => {

    const [theme, setTheme] = useState(lightTheme);

    return (
      <ThemeContext.Provider value={theme}>
        <Dashboard/>
      </ThemeContext.Provider>
    );
};

export default App;

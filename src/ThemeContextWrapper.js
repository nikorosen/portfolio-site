
import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './ThemeContext';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add('white-context');
        console.log('turn on white mode')
        break;
      case themes.dark:
      default:
        document.body.classList.remove('white-context');
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
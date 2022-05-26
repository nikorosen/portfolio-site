import React, { useState, useEffect } from 'react';
import {ThemeContext, themes} from './ThemeContext';

const ThemeContextWrapper = (props) => {
const [theme, setTheme] = useState(themes.dark);
    const changeTheme = (theme) => {
        setTheme(theme);
    }

    useEffect(() => {
        switch (theme){
            case themes.light:
            document.body.classList.add('white-context');
            break;
        case themes.dark:
        
        default:
            document.body.classList.remove('white-context');
            break;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextWrapper;
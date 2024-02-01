import React, { useContext } from 'react';
import ThemeContext from './context';

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ backgroundColor: theme === 'dark' ? '#333' : '#ccc', color: theme === 'dark' ? '#fff' : '#000' }}>
      {theme === 'dark' ? 'Dark' : 'Light'} Theme
    </button>
  );
}

export default ThemedButton;
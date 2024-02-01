import React from 'react';
import ThemeContext from './context';
import ThemedButton from './useThemeContext;

function App() {
  return (
    <div>
      <h1>Theme Example</h1>
      <ThemeContext.Provider value="dark">
        <ThemedButton />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
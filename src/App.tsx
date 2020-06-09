import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import doctorsData from './assets/doctors.json';
const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  return (
    <div>
      <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>
      </ThemeProvider>
    </div>
  );
};

export default App;

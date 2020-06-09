import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { ThemeProvider } from 'styled-components';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import theme from './theme';
import doctorsData from './assets/doctors.json';
import { PageButtons, themeSwitchIcon, ThemeSwitcher } from './components/controls';
import { AppContainer, ContentContainer, HeaderContainer, NavContainer, PageContainer } from './components/structure';
const App = () => {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  return (
    <div>
      <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>
        <AppContainer>
          <ContentContainer>
            <NavContainer>
              <ThemeSwitcher>
                <Switch
                  onChange={(checked) => setThemeMode(checked ? 'light' : 'dark')}
                  checked={themeMode === 'light'}
                  onColor='#febd11'
                  offColor='#0a004a'
                  uncheckedIcon={themeSwitchIcon(faMoon)}
                  checkedIcon={themeSwitchIcon(faSun)}
                />
              </ThemeSwitcher>
            </NavContainer>
            <HeaderContainer>
            </HeaderContainer>
            <PageContainer>
            </PageContainer>
          </ContentContainer>
        </AppContainer>
      </ThemeProvider>
    </div>
  );
};

export default App;

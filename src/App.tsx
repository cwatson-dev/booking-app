import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';
import { ThemeProvider } from 'styled-components';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import theme from './theme';
import doctorsData from './assets/doctors.json';
import { PageButtons, themeSwitchIcon, ThemeSwitcher } from './components/controls';
import { AppContainer, ContentContainer, HeaderContainer, NavContainer, PageContainer } from './components/structure';
import { Header, PageDetails, SwitchText } from './components/text';
const App = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(doctorsData);
  const [page, setPage] = useState(0);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  return (
    <div>
      <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>
        <AppContainer>
          <ContentContainer>
            <NavContainer>
              <ThemeSwitcher>
                <SwitchText>Set theme:&nbsp;&nbsp;</SwitchText>
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
              <Header>Nearest Doctors</Header>
              <PageDetails>({page * 9 + 1} to {(page + 1) * 9} of {doctors.length})</PageDetails>
              <PageButtons
                setPage={setPage}
                currentPage={page}
                maxPage={Math.ceil(doctors.length / 9)}
                locationEnabled={currentLocationEnabled}
                setLocationEnabled={setCurrentLocationEnabled}
              />
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

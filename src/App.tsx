import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Switch from 'react-switch';
import { ThemeProvider } from 'styled-components';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import theme from './theme';
import doctorsData from './assets/doctors.json';
import { Button, ButtonsContainer, PageButtons, themeSwitchIcon, ThemeSwitcher } from './components/controls';
import { AppContainer, ContentContainer, HeaderContainer, NavContainer, PageContainer } from './components/structure';
import { Header, PageDetails, SwitchText } from './components/text';
import { usePosition } from './helpers/hooks';
import { renderDoctorCardsRow, renderDoctorDetails } from './helpers/renderers';
import { sortArrayByLatLongNearest } from './helpers/sorters';

const App = () => {
  const [appointmentDateTime, setAppointmentDateTime] = useState<Date>(new Date());
  const [currentLocation, setCurrentLocation] = useState<[number, number]>([55.860916, -4.251433]); // default to center of Glasgow
  const [currentLocationEnabled, setCurrentLocationEnabled] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>(doctorsData);
  const [page, setPage] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(doctorsData[0]);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const [userDetails, setUserDetails] = useState({ name: '', email: '' });

  const {
    latitude,
    longitude,
    error: locationError,
  } = usePosition(currentLocationEnabled);

  useEffect(() => {
    // on current location change, use effect sorts the array of docs, this also (re)calculates distance prop on each
    const sortedDoctors = sortArrayByLatLongNearest(doctors, currentLocation);
    setDoctors(sortedDoctors);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  useEffect(() => {
    if (locationError) console.error(locationError);
    else if (latitude && longitude) setCurrentLocation([latitude, longitude]);
    return;
  }, [latitude, longitude, locationError]);

  const bookAppointment = async (doctor: Doctor, date: Date) => {
    const data = {
      name: '',
      email: '',
      subject: `Booking confirmed with ${doctor.name} on ${dayjs(date).format('DD-MM-YYYY HH:mm')}`,
      text: '',
      textHtml: '',
    };
    console.log({ data });
    // const response = await fetch('http://localhost:8081/confirm-booking', {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(data), // body data type must match "Content-Type" header
    // });
    // return response.json();
    console.log('booked!');
  };

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
            {!selectedDoctor && (
              <>
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
                  {doctors && doctors.length > 0 &&
                    // need to clean up this slice method of getting a sample of 9 docs
                    (renderDoctorCardsRow(doctors.slice(page * 9, page * 9 + 9), setSelectedDoctor))}
                </PageContainer>
              </>
            )}
            {selectedDoctor && (
              <>
                <HeaderContainer>
                  <Header flex={2}>{selectedDoctor.name} ({selectedDoctor.company})</Header>
                  <ButtonsContainer>
                    <Button
                      color={'#c22323'}
                      onClick={() => setSelectedDoctor(null)}
                    >Cancel</Button>
                  </ButtonsContainer>
                </HeaderContainer>
                <PageContainer>
                  {renderDoctorDetails(
                    selectedDoctor,
                    appointmentDateTime,
                    setAppointmentDateTime,
                    userDetails,
                    setUserDetails,
                  )}
                </PageContainer>
              </>
            )}
          </ContentContainer>
        </AppContainer>
      </ThemeProvider>
    </div>
  );
};

export default App;

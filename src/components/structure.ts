import styled from 'styled-components';

interface DoctorProfileContainerProps {
  width?: string
}

export const AppContainer = styled.div`
  background-color: ${(props) => props.theme.background === '#fff' ? '#666' : '#222'};
  width: 60%;
  height: 100vh;
  padding-left: 20%;
  padding-right: 20%;
`;

export const ContentContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  height: 100vh;
  flex: 1;
  box-shadow: ${(props) => props.theme.containerShadow};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
`;

export const NavContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const PageContainer = styled.div`
  flex: 15;
  display: flex;
  padding-left: 10%;
  padding-right: 10%;
  justify-content: flex-end;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
`;

export const DoctorProfileContainer = styled.div<DoctorProfileContainerProps>`
  flex: 1;
  display: flex;
  flex-direction: row;
  ${(props) => props.width ? `width: ${props.width}` :''}
`;

export const AppointmentContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  margin-left: 20%;
  margin-right: 20%;
`;

export const AppointmentRowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

import styled from 'styled-components';

interface HeaderProps {
  flex?: number
}

interface DoctorDetailProps {
  width?: string
}

export const SwitchText = styled.p`
  font-family: 'Roboto Mono';
`;

export const Header = styled.h2<HeaderProps>`
  flex: ${(props) => props.flex || 1};
`;

export const PageDetails = styled.p`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DoctorAbout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DoctorDetail = styled.p<DoctorDetailProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto Mono';
  ${(props) => props.width ? `width: ${props.width}` :''}
`;

export const AppointmentInput = styled.input`
  font-family: 'Roboto Mono';
  font-size: medium;
  flex: 1;
  height: 40px;
  width: 300px;
  display: flex;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid lightgrey;
  border-left: 0;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  margin-left: 5px;
  margin-right: 5px;
  outline: 0;
  &:focus: {
    border-right: 0;
    border-bottom: 1px solid lightgrey;
    border-left: 0;
  }
`;

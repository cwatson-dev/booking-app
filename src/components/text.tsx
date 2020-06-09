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
  ${(props) => props.width ? `width: ${props.width}` :''}
`;

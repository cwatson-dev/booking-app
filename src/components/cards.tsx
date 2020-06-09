import React, { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faStar, faUserMd } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { getRandomHSLColor } from '../helpers/generators';

type DoctorCardProps = {
  docKey: string
  doctor: Doctor
  setSelectedDoctor: Dispatch<SetStateAction<Doctor | null>>
}

const HighlightSpan = styled.span`
  background-color: ${(props) => props.theme.primary};
  border: none;
  border-radius: 5px;
  color: ${(props) => props.theme.whiteText};
  padding: 3px;
`;

const RatingSpan = styled(HighlightSpan)`
  background-color: ${(props) => props.theme.primary};
`;

const DistanceSpan = styled(HighlightSpan)`
  background-color: ${(props) => props.theme.secondary};
`;

export const CardRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 2%;
`;

const CardContainer = styled.div`
  flex: 1;
  border: solid 1px ${(props) => props.theme.background === '#fff' ? '#999' : '#222'};
  border-radius: 5px;
  margin-left: 2%;
  margin-right: 2%;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.cardShadow};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileIconContainer = styled.div`
  background-color: ${getRandomHSLColor};
  border-radius: 5px;
  margin-top: 5%;
  margin-bottom: 5%;
  padding: 5%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardText = styled.p`
  margin-top: 1%;
  margin-bottom: 1%;
`;

export const DoctorCard = (props: DoctorCardProps) => {
  const { doctor, docKey, setSelectedDoctor } = props;
  const { name, company, rating, distance = 0 } = doctor;

  return (
    <CardContainer key={docKey} onClick={() => setSelectedDoctor(doctor)}>
      <ProfileIconContainer>
        <FontAwesomeIcon icon={faUserMd} color={'#fff'} size="5x" />
      </ProfileIconContainer>
      <CardText>{name} <RatingSpan><FontAwesomeIcon icon={faStar} /> {rating.toFixed(1)}</RatingSpan></CardText>
      <CardText>{company}</CardText>
      <CardText>
        <DistanceSpan><FontAwesomeIcon icon={faMapMarkedAlt} /> {distance.toFixed(2)} km</DistanceSpan>
      </CardText>
    </CardContainer>
  );
};

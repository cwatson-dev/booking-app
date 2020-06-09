import React, { Dispatch, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faStar, faUserMd } from '@fortawesome/free-solid-svg-icons';

import { CardRow, DistanceSpan, DoctorCard, RatingSpan, ProfileIconContainer } from '../components/cards';
import { DoctorProfileContainer } from '../components/structure';
import { DoctorAbout, DoctorDetail } from '../components/text';

// both renderers could be improved
// passing `setSelectedDoctor` directly through both funcs to the underlying <DoctorCard> feels wrong

const renderDoctorCards = (
  doctors: Doctor[],
  row: number,
  setSelectedDoctor: Dispatch<SetStateAction<Doctor | null>>,
) => {
  return doctors.map((doctor, docIdx) =>
    <DoctorCard
      key={`doctor_${row}_${docIdx}`}
      docKey={`doctor_${row}_${docIdx}`}
      doctor={doctor}
      setSelectedDoctor={setSelectedDoctor}
    />);
};

export const renderDoctorCardsRow = (
  doctors: Doctor[],
  setSelectedDoctor: Dispatch<SetStateAction<Doctor | null>>,
) => {
  const doctorCardsRows = [];
  for (let docRowIdx = 0; docRowIdx < 3; docRowIdx += 1) {
    doctorCardsRows.push(
      <CardRow key={`doctorRow_${docRowIdx}`}>
        {renderDoctorCards(doctors.slice(docRowIdx * 3, docRowIdx * 3 + 3), docRowIdx, setSelectedDoctor)}
      </CardRow>,
    );
  }
  return doctorCardsRows;
};

// this renderer should be changed to use components with proper spacing css, not `&nbsp;`
export const renderDoctorDetails = (selectedDoctor: Doctor) => {
  return (
    <>
      <DoctorProfileContainer>
        <ProfileIconContainer>
          <FontAwesomeIcon icon={faUserMd} color={'#fff'} size="5x" />
        </ProfileIconContainer>
        <DoctorAbout>
          <DoctorProfileContainer width={'100%'}>
            <DoctorDetail>
              Rating:&nbsp;&nbsp;
              <RatingSpan><FontAwesomeIcon icon={faStar} /> {selectedDoctor.rating}</RatingSpan>
            </DoctorDetail>
            <DoctorDetail>
              Distance:&nbsp;&nbsp;
              <DistanceSpan><FontAwesomeIcon icon={faMapMarkedAlt} /> {selectedDoctor.distance?.toFixed(2)} km</DistanceSpan>
            </DoctorDetail>
          </DoctorProfileContainer>
          <DoctorDetail width={'80%'}>{selectedDoctor.about}</DoctorDetail>
        </DoctorAbout>
      </DoctorProfileContainer>
      <DoctorDetail>{selectedDoctor.address}</DoctorDetail>
      <DoctorDetail><a href={`mailto:${selectedDoctor.email}`}>{selectedDoctor.email}</a></DoctorDetail>
      <DoctorDetail><a href={`tel:${selectedDoctor.phone}`}>{selectedDoctor.phone}</a></DoctorDetail>
      <DoctorDetail>{selectedDoctor.registered}</DoctorDetail>
    </>
  );
};

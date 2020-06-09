import React, { Dispatch, SetStateAction } from 'react';

import { DoctorCard, CardRow } from '../components/cards';

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

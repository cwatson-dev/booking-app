import React from 'react';

import { DoctorCard, CardRow } from '../components/cards';

const renderDoctorCards = (doctors: Doctor[], row: number) => {
  return doctors.map((doctor, docIdx) =>
    <DoctorCard key={`doctor_${row}_${docIdx}`} docKey={`doctor_${row}_${docIdx}`} doctor={doctor} />);
};

export const renderDoctorCardsRow = (doctors: Doctor[]) => {
  const doctorCardsRows = [];
  for (let docRowIdx = 0; docRowIdx < 3; docRowIdx += 1) {
    doctorCardsRows.push(
      <CardRow key={`doctorRow_${docRowIdx}`}>
        {renderDoctorCards(doctors.slice(docRowIdx * 3, docRowIdx * 3 + 3), docRowIdx)}
      </CardRow>,
    );
  }
  return doctorCardsRows;
};

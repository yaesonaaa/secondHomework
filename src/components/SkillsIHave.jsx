import React from 'react';

export const CompetencyCard = ({ competency, sometext }) => {
  return (
    <div className="competency-card">
      <h2>{competency}</h2>
      <h3>{sometext}</h3>
    </div>
  );
};

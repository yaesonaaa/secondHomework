import React from 'react';

export const BigCard = ({name, telegram, ps, photo}) => {
    return (
        <div className="big-card">
            <h1>Моя очень большая карточка</h1>
            <img src={photo} alt="mememe" />
          <h2>{name}</h2>
          <h3>{telegram}</h3>
          <h3>{ps}</h3>
        </div>
      );
};
import React from 'react';

import arrowIcon from '../assets/icons/icon-arrow.svg';

function Input() {
  return (
    <section className="input">
      <input className="input__input" type="text" />
      <button className="input__button">
        <img src={arrowIcon} alt="Arrow Icon" />
      </button>
    </section>
  );
}

export default Input;

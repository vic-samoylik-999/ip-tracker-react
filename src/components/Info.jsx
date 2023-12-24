import React from 'react';
import { data } from '../assets/dumbdata';

function Info() {
  return (
    <section className="info">
      <div className="info__row">
        <div className="info__item">
          <h3>ip address</h3>
          <h2>{data.ip}</h2>
        </div>
        <div className="info__item">
          <h3>location</h3>
          <h2>{data.location}</h2>
        </div>
        <div className="info__item">
          <h3>timezone</h3>
          <h2>{data.timezone}</h2>
        </div>
        <div className="info__item">
          <h3>isp</h3>
          <h2>{data.isp}</h2>
        </div>
      </div>
    </section>
  );
}

export default Info;

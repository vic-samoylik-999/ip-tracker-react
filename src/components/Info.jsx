import React, { useContext } from 'react';
import { IPDATA } from '../App';

function Info() {
  const data = useContext(IPDATA);
  return (
    <section className="info">
      <div className="info__row">
        <div className="info__item">
          <h3>ip address</h3>
          <h2>{data?.ip}</h2>
        </div>
        <div className="info__item">
          <h3>location</h3>
          <h2>
            {data?.location?.city}, {data?.location?.country}{' '}
            {data ? data?.location?.postalCode && ',' && data.location.postalCode : '-'}
          </h2>
        </div>
        <div className="info__item">
          <h3>timezone</h3>
          <h2>UTC {data?.location?.timezone}</h2>
        </div>
        <div className="info__item">
          <h3>isp</h3>
          <h2>{data?.as?.name}</h2>
        </div>
      </div>
    </section>
  );
}

export default Info;

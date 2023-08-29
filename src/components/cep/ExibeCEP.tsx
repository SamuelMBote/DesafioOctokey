import React from 'react';

import ICEP from '@/interfaces/ICep';

const ExibeCEP = (cep: ICEP) => {
  return (
    <div className=" p-6 bg-gray-800 border border-gray-200 rounded-lg shadow w-full">
      {Object.entries(cep).map((item) => {
        return (
          <p key={cep.cep} className="text-white">
            {`${item[0].charAt(0).toUpperCase()}${item[0].slice(1)}`}: {item[1]}
          </p>
        );
      })}
    </div>
  );
};

export default ExibeCEP;

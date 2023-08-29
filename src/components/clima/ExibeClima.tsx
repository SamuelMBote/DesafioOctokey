import IClima from '@/interfaces/IClima';
import Image from 'next/image';
import React from 'react';

const ExibeClima = ({current, location}: IClima) => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className=" bg-gray-800 border border-gray-200  rounded-lg p-8 md:p-12 mb-8">
          <Image
            className="text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-transparent mb-2"
            width={100}
            height={100}
            src={`https:${current.condition.icon}`}
            alt={current.condition.text}
          />

          <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">
            Condições do Clima em {location.name}
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="m-6">
              <p className="text-lg font-normal text-gray-400  mb-2">
                Region: <span>{location.region}</span>
              </p>
              <p className="text-lg font-normal text-gray-400 mb-2">
                Country: <span>{location.country}</span>
              </p>
            </div>
            <div className="m-6">
              <p className="text-lg font-normal text-gray-400 mb-2">
                Temperature Celsius ºC <span>{current.temp_c}</span>
              </p>
              <p className="text-lg font-normal text-gray-400  mb-2">
                Temperature Fahrenheit ºF <span>{current.temp_f}</span>
              </p>
              <p className="text-lg font-normal text-gray-400  mb-2">
                {current.condition.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExibeClima;

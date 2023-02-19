import React from "react";

const Cards = ({price, name, location, property , type, feet, img}) => {
  return (
    <>
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
              href=""
              className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={img}
                  alt=""
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {type}
                </span>
                <h2 className="mt-2 mb-2  font-bold">
                  {name}
                </h2>
                <p className="text-sm bold">
                  {feet} Sq.ft
                </p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-semibold">$ </span>&nbsp;
                  <span className="font-bold text-xl">{price}</span>
                </div>
              </div>
              <div className="p-4 border-t border-b text-xs text-gray-700">
                <span className="flex items-center">
                  <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z"></path></svg>&nbsp; {" "}
                    {location}
                </span>
              </div>
            </a>
          </div>
    </>
  );
};

export default Cards;

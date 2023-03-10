import React, { useState } from "react";
import CardContainer from "./CardContainer";

const Filter = ({data}) => {
  const [searchQuery, setSearchQuery] = useState('');
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState({ min: 0, max: Infinity });
    const [selectedValue4, setSelectedValue4] = useState('');
    const [pricebtn, setPriceBtn] = useState('');

    function resetSelect() {
      setSelectedValue1('')
      setSelectedValue2('')
      setSelectedValue3({ min: 0, max: Infinity })
      setSelectedValue4('')
      setPriceBtn('')
    }

    const handleSelectChange1 = (event) => {
      setSelectedValue1(event.target.value);
    };
  
    const handleSelectChange2 = (event) => {
      setSelectedValue2(event.target.value);
    };
  
    const handleSelectChange3 = (event) => {
      const min = Number(event.target.value.split('-')[0]);
      const max = Number(event.target.value.split('-')[1]);
      setSelectedValue3({ min, max });
      setPriceBtn(event.target.value)
    };
  
    const handleSelectChange4 = (event) => {
      setSelectedValue4(event.target.value);
    }
    const handleSelectQuery = (event) => {
      setSearchQuery(event.target.value);
    }
  return (
    <>
      <div className="w-full  shadow p-5 rounded-lg bg-white">
        <div className="md:flex md:justify-between ">
          <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
            Search properties to rent
          </h1>

          <div class="flex items-center ">
            <label for="simple-search" class="sr-only">
              Search
            </label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSelectQuery}
                required
              />
            </div>
           
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="font-medium">Filters</p>

          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" onClick={resetSelect}>
            Reset Filter
          </button>
        </div>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select id="select-1" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" value={selectedValue1} onChange={handleSelectChange1}>
              <option value="">All Type</option>
              <option value="Rent">For Rent</option>
              <option value="Sale">For Sale</option>
            </select>

            <select id="select-1" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" value={selectedValue2} onChange={handleSelectChange2}>
              <option value="">All</option>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="Germany">Germany</option>
            </select>

            <select id="select-1" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            value={pricebtn} onChange={handleSelectChange3}>
              <option value="0-Infinity">Any Price</option>
              <option value="0-1000">$0-$1000</option>
              <option value="1000-2000">$1000-$2000</option>
              <option value="2000-3000">$2000-$3000</option>
              <option value="3000-4000">$3000-$4000</option>
              <option value="4000-Infinity">$4000+</option>
            </select>

            <select id="select-1" className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" value={selectedValue4} onChange={handleSelectChange4}>
              <option value="">Floor Area</option>
              <option value="200">200 sq.ft</option>
              <option value="400">400 sq.ft</option>
              <option value="600">600 sq.ft</option>
              <option value="800">800</option>
              <option value="1000">1000</option>
            </select>
          </div>
        </div>
      </div>
      <CardContainer type={selectedValue1} location={selectedValue2} price={selectedValue3} feet={selectedValue4} search={searchQuery}/>
    </>
  );
};

export default Filter;

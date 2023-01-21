import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "./api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const searchandler = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

//   const loadOptions = (inputValue) => {
//     return fetch(
//       `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
//       getAPIOptions
//     )
//       .then((response) => response.json())
//       .then((response) => {
//         return {
//           options: response.data.map((city) => {
//             return {
//               value: `${city.latitude} ${city.longitude}`,
//               labele: `${city.name}, ${city.countryCode}`,
//             };
//           }),
//         };
//       });
//   };

const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };
  return (
    <div className="container">
      <label htmlFor="">Enter a city name : </label>
      <AsyncPaginate
        style={{ borderRadius: "2px" }}
        type="text"
        placeholder="Search for a city"
        debouncetimeout={600}
        value={search}
        onChange={searchandler}
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default Search;

// return {
//     options: response.data.map((city)=>{
//         return {
//             value: `${city.latitude} ${city.longitude}`,
//             label: `${city.name}, ${city.countryCode}`,
//         };
//     }),
// };

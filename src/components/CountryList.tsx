"use client"

import { useFilter } from "@/lib/store";

export const CountryList = ({ country }: any) => {
  const filterBySearch = useFilter((state) => state.filterBySearch);
  const filterByRegion = useFilter((state) => state.filterByRegion);

  const filteredCountries = country
    .filter((country: any) => {
      if (filterByRegion === "All") {
        return country.name.common.toLowerCase().includes(filterBySearch.toLowerCase());
      }

      return (
        country.name.common.toLowerCase().includes(filterBySearch.toLowerCase()) &&
        country.region === filterByRegion
      );
    })
    .sort((a: any, b: any) => b.population - a.population); // Sort by population

  return (
    <div className="max-w-screen-2xl mx-auto flex flex-wrap gap-8 justify-center sm:justify-between">
      {filteredCountries.map((country: any) => (
        <div
          key={country.name.common}
          className="border w-[320px] cursor-pointer hover:scale-105 transition-transform duration-300 transform hover:translate-x-0 sm:hover:translate-x-5"
        >
          <div className="h-48">
            <img src={country.flags.png} alt={country.name.common} className="w-full h-full object-cover" />
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{country.name.common}</h2>
            <p className="p-1">Capital: {country.capital}</p>
            <p className="p-1">Region: {country.region}</p>
            <p className="p-1">Subregion: {country.subregion}</p>
            <p className="p-1">Population: {country.population.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
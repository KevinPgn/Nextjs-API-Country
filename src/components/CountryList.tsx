"use client"

import { useFilter } from "@/lib/store";
import { motion } from "framer-motion";
import { HeartIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const CountryList = ({ country }: any) => {
  const router = useRouter();
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


  const addToFavorite = (e: any) => {
    e.stopPropagation();
  }

  return (
    <div className="max-w-screen-2xl mt-16 mx-auto flex flex-wrap gap-8 justify-center sm:justify-between">
      {filteredCountries.map((country: any) => (
        <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }} key={country.name.common} className="border w-[320px] cursor-pointer"
        onClick={() => router.push(`/country/${country.cca2}`)}
        >
          <motion.div
            whileHover={{ scale: 1.05, y:-20 }}
            className="h-48 relative">
            <div className="absolute top-2 right-2">
              <HeartIcon className="cursor-pointer fill-yellow-500 text-slate-800"
              size={32} onClick={addToFavorite} />
            </div>
            <img src={country.flags.png} alt={country.name.common} className="w-full h-full object-cover" />
          </motion.div>

          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">{country.name.common}</h2>
            <p className="p-1">Capital: {country.capital}</p>
            <p className="p-1">Region: {country.region}</p>
            <p className="p-1">Subregion: {country.subregion}</p>
            <p className="p-1">Population: {country.population.toLocaleString()}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
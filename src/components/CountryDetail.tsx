"use client"

import { useRouter } from "next/navigation";
import { Button } from "./ui/button"


export const CountryDetail = ({country}: any) => {
  const router = useRouter();
  
  return <>
  <Button
  className="mt-4 ml-5"
  onClick={() => router.push('/')}>Back</Button>
   {
    country.map((country: any) => (
      <div key={country.name.common} className="max-w-[1200px] border shadow-md shadow-black p-10 pt-20 pb-20 mt-16 mx-auto flex flex-wrap gap-8 justify-center sm:justify-around">
          <div className="h-48 relative">
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
  </>
}
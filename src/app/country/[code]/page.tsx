import { CountryDetail } from '@/components/CountryDetail'
import React from 'react'


const Countryinfos = async ({params}: any) => {
  async function getCountry() {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.code}`)
    const country = await res.json()
    return country
  }
  const country = await getCountry()
  
  return (
    <div>
      <CountryDetail country={country}/>
    </div>
  )
}

export default Countryinfos
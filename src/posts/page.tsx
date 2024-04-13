import { CountryList } from "@/components/CountryList"

async function getCountry() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const data = await response.json()
  return data
}

export const CountryAPIList = async () => {
  const country = await getCountry()

  return <>
    <CountryList country={country}/>
  </>
}
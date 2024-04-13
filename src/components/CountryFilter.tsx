import { InputFilter } from "./ui/InputFilter"
import { InputFilterByRegion } from "./ui/InputFilterByRegion"

export const CountryFilter = () => {
  return <>
    <div className="mt-12 mb-10 max-w-screen-2xl mx-auto sm:flex-row flex flex-col items-center justify-between">
      <InputFilter />
      <InputFilterByRegion />
    </div>
  </>
}
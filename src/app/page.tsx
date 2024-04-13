import { CountryFilter } from "@/components/CountryFilter";
import { CountryAPIList } from "@/posts/page";

export default function Home() {
  return (
  <>
    <CountryFilter />
    <CountryAPIList />
  </>
  );
}

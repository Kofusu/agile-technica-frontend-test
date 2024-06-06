import { Suspense } from "react";
import { HeroSection } from "../components/organisms/HeroSection";
import { CountryListSection } from "../components/organisms";
import { useQuery } from "@tanstack/react-query";
import { TCountries } from "../types";
import { getCountriesRequest } from "../api";

const HomePage = () => {
  const { data } = useQuery({
    queryKey: ["countryList"],
    queryFn: getCountriesRequest,
  }) as { data: TCountries[] };

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <CountryListSection countries={data} />
      </Suspense>
    </main>
  );
};

export default HomePage;

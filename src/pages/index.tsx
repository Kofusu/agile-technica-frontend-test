import { Suspense } from "react";
import { HeroSection } from "../components/organisms/HeroSection";
import { CountryListSection } from "../components/organisms";
import { useQuery } from "@tanstack/react-query";
import { TCountries } from "../types";
import { getCountriesRequest } from "../api";

const HomePage = () => {
  const { data, isLoading } = useQuery({
    initialData: {
      data: [],
    },
    queryKey: ["countryList"],
    queryFn: getCountriesRequest,
  }) as {
    data: {
      data: TCountries[];
    };
    isLoading: boolean;
  };

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <CountryListSection
          countries={data?.data as TCountries[]}
          isLoading={isLoading}
        />
      </Suspense>
    </main>
  );
};

export default HomePage;

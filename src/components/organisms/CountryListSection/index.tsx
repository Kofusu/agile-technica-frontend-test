import { BsSearch } from "react-icons/bs";
import { ScreenSection } from "../../layouts";
import { CountryCard, TextInput } from "../../molecules";
import { FC, useEffect, useRef, useState } from "react";
import { TCountries } from "../../../types";
import { Header } from "../../atoms";

type TProps = {
  countries?: TCountries[];
};

export const CountryListSection: FC<TProps> = ({ countries = [] }) => {
  const [displayedData, setDisplayedData] = useState<TCountries[]>(countries);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setDisplayedData(countries);
  }, [countries]);

  const searchHandler = () => {
    const searchValue = searchRef.current?.value;

    setDisplayedData(
      countries?.filter((country: TCountries) => {
        return country.name.common
          ?.toLowerCase()
          .includes(searchValue?.toLowerCase() || "");
      })
    );
  };

  return (
    <ScreenSection
      id="countryList"
      justify="start"
      items="start"
      direction="vertical"
      bg="bg-main-100"
      className="gap-4 text-neutral-700"
    >
      <TextInput
        onChange={searchHandler}
        ref={searchRef}
        placeholder="Search by Name"
        iconElement={<BsSearch />}
        className="w-full"
      />
      <Header level={2} className="text-neutral-700" bold>
        Country List
      </Header>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full">
        {displayedData?.map((country) => (
          <CountryCard key={`country-${country?.name}`} country={country} />
        ))}
      </div>
    </ScreenSection>
  );
};

import { BsSearch } from "react-icons/bs";
import { Flex, ScreenSection } from "../../layouts";
import { CountryCard, TextInput } from "../../molecules";
import { FC, useEffect, useRef, useState } from "react";
import { TCountries } from "../../../types";
import { Header } from "../../atoms";
import { VscLoading } from "react-icons/vsc";

type TProps = {
  countries?: TCountries[];
  isLoading?: boolean;
};

export const CountryListSection: FC<TProps> = ({
  countries = [],
  isLoading,
}) => {
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
      justify={isLoading ? "center" : "start"}
      items={isLoading ? "center" : "start"}
      direction="vertical"
      bg="bg-main-100"
      className="gap-4 text-neutral-700"
    >
      {isLoading ? (
        <Flex direction="vertical" className="gap-4">
          <VscLoading className="animate-spin duration-50 text-main-800" size={"15rem"} />
          <Header level={3} className="text-main-800">Loading...</Header>
        </Flex>
      ) : (
        <>
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
        </>
      )}
    </ScreenSection>
  );
};

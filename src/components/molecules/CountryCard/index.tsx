import { FC } from "react";
import { TCountries } from "../../../types";
import { BodyText, Header, Image } from "../../atoms";
import { cn } from "../../../utils";
import { Flex } from "../../layouts";

type TProps = {
  country: TCountries;
};

type TCurrencies = {
  name: string;
  symbol: string;
};

export const CountryCard: FC<TProps> = ({ country }) => {
  const currenciesKeys: string[] = Object.keys(country?.currencies);
  const currenciesValues: TCurrencies[] = Object.values(country?.currencies);

  return (
    <Flex
      direction="vertical"
      justify="start"
      items="start"
      className="shadow-xl bg-main-500 text-main-800 p-2 pb-4 overflow-hidden rounded-2xl gap-2 hover:scale-105 cursor-pointer group"
    >
      <Image
        src={cn(country?.flags?.svg)}
        alt={country?.flags?.alt}
        className="flex-1 rounded-2xl group-hover:animate-pulse group-hover:scale-125 cursor-pointer"
      />
      <Flex
        direction="vertical"
        justify="start"
        items="start"
        className="flex-[2] gap-2 group-hover:translate-y-4"
      >
        <Flex items="start" justify="start" direction="vertical">
          <Header className="text-inherit text-xl" level={3}>
            {country?.name?.common}
          </Header>
          <BodyText className="text-inherit transition-none">
            ({country?.region})
          </BodyText>
        </Flex>

        <BodyText className="text-inherit transition-none">
          <span className="font-bold">Population:</span>{" "}
          {country?.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </BodyText>

        <BodyText className="text-inherit transition-none">
          <span className="font-bold">Currencies:</span>
          {currenciesKeys?.map((currency, index) => (
            <Flex
              items="start"
              justify="start"
              key={`country-currency-${currency}-${index}`}
              className="gap-2"
            >
              <span className="font-bold">
                {currency} {currenciesValues[index]?.symbol}
              </span>
              <span>{currenciesValues[index]?.name}</span>
            </Flex>
          ))}
        </BodyText>
      </Flex>
    </Flex>
  );
};

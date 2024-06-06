import { FC, useState } from "react";
import { TCountries } from "../../../types";
import { BodyText, Button, Header, Image } from "../../atoms";
import { cn } from "../../../utils";
import { Flex } from "../../layouts";
import { DialogPopupCountry } from "../DialogPopupCountry";

type TProps = {
  country: TCountries;
};

export const CountryCard: FC<TProps> = ({ country }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Flex
        direction="vertical"
        justify="start"
        items="start"
        className="shadow-xl bg-main-500 text-main-800 p-2 pb-6 overflow-hidden rounded-2xl gap-2 hover:scale-105 cursor-pointer group"
      >
        <Image
          src={cn(country?.href?.flag)}
          alt={`${country?.full_name}-flag`}
          className="flex-1 rounded-2xl w-full group-hover:animate-pulse group-hover:scale-125 cursor-pointer min-h-40"
        />
        <Flex
          direction="vertical"
          justify="start"
          items="start"
          className="flex-[2] gap-2 group-hover:translate-y-4 w-full"
        >
          <Flex
            items="start"
            justify="start"
            direction="vertical"
            className="w-full"
          >
            <Header className="text-inherit text-xl" level={3}>
              {country?.name}
            </Header>
            <BodyText className="text-inherit transition-none">
              ({country?.continent})
            </BodyText>
          </Flex>

          <BodyText className="text-inherit transition-none text-sm ">
            <Header level={3} className="text-xl text-inherit">
              Population:
            </Header>
            {country?.population}
            People
          </BodyText>

          <BodyText className="text-inherit transition-none">
            <Header level={3} className="text-xl text-inherit">
              Currencies:
            </Header>
            <Flex
              items="start"
              justify="start"
              key={`country-currency-${country?.full_name}`}
              className="gap-2 text-sm text-[0.75rem]"
            >
              <span>{country?.currency}</span>
            </Flex>
          </BodyText>
          <a onClick={() => setIsOpen(true)} className="flex justify-end w-full">
            <Button className="w- cursor-pointer">Detail</Button>
          </a>
        </Flex>
      </Flex>
      <DialogPopupCountry
        country={country}
        isOpen={isOpen}
        toggleOpen={() => setIsOpen((prev) => !prev)}
      />
    </>
  );
};

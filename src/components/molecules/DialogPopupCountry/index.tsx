import { FC } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { TCountries } from "../../../types";
import { BodyText, Button, Header } from "../../atoms";
import { Flex } from "../../layouts";
import { BsArrowLeft } from "react-icons/bs";

type TProps = {
  country?: TCountries;
  isOpen?: boolean;
  toggleOpen: () => void;
};

export const DialogPopupCountry: FC<TProps> = ({ country, isOpen, toggleOpen }) => {
  return (
    <Dialog open={isOpen} onClose={toggleOpen} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-main-900 bg-opacity-75">
        <DialogPanel className="container space-y-4 bg-main-900 text-main-100 p-12 rounded-3xl">
          <DialogTitle className="font-bold">
            <Header level={3} className="text-inherit text-2xl">{country?.full_name} | {country?.iso3}</Header>
          </DialogTitle>
          <Description>
            <Flex justify="start" items="start" direction="vertical" className="gap-4">
              <Flex justify="start" items="start" direction="vertical">
                <Header className="text-inherit text-xl" level={4}>Continent:</Header>
                <BodyText className="text-inherit">{country?.continent}</BodyText>
              </Flex>

              <Flex justify="start" items="start" direction="vertical">
                <Header className="text-inherit text-xl" level={4}>Capital:</Header>
                <BodyText className="text-inherit">{country?.capital}</BodyText>
              </Flex>

              <Flex justify="start" items="start" direction="vertical">
                <Header className="text-inherit text-xl" level={4}>Population:</Header>
                <BodyText className="text-inherit">{country?.population}</BodyText>
              </Flex>

              <Flex justify="start" items="start" direction="vertical">
                <Header className="text-inherit text-xl" level={4}>Currency:</Header>
                <BodyText className="text-inherit">{country?.currency}</BodyText>
              </Flex>

              <Flex justify="start" items="start" direction="vertical">
                <Header className="text-inherit text-xl" level={4}>Size:</Header>
                <BodyText className="text-inherit">{country?.size}</BodyText>
              </Flex>
            </Flex>
          </Description>
          <a onClick={toggleOpen}>
            <Button iconElement={<BsArrowLeft />} className="mt-4 w-full">Back</Button>
          </a>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

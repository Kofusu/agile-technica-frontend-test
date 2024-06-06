import { Image } from "../../atoms";
import { HeroText } from "../../molecules";
import { Flex, ScreenSection } from "../../layouts";

export const HeroSection = () => {
  return (
    <ScreenSection
      justify="around"
      direction="vertical"
      className="md:flex-row"
    >
      <HeroText
        titleDesc="by Hendratara Pratama"
        headTitle="Country List"
        buttonText="Show List"
        buttonLink="#countryList"
      />
      <Flex className="flex-1">
        <Image
          src="/images/world-map.png"
          alt="worldMap"
          className="h-96 w-96 md:h-[100%] md:w-[100%] hover:scale-105"
        />
      </Flex>
    </ScreenSection>
  );
};

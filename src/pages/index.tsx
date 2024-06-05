import { BsArrowRight } from "react-icons/bs";
import {
  BodyText,
  Button,
  Header,
  Image,
  ScreenSection,
} from "../components/atoms";
import { Flex } from "../components/layouts";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <ScreenSection
        justify="around"
        direction="vertical"
        className="md:flex-row"
      >
        <Flex direction="vertical" items="start" justify='end' className="flex-1 gap-6">
          <Flex direction="vertical" items="start">
            <Header level={1}>Countries List</Header>
            <BodyText>by Hendratara Pratama</BodyText>
          </Flex>
          <Link to="#countryList">
            <Button
              size="md"
              iconPosition="right"
              iconElement={<BsArrowRight />}
            >
              Country List
            </Button>
          </Link>
        </Flex>
        <Flex className="flex-1">
          <Image
            src="/images/world-map.png"
            alt="worldMap"
            className="h-96 w-96 hover:scale-105"
          />
        </Flex>
      </ScreenSection>
    </main>
  );
};

export default HomePage;

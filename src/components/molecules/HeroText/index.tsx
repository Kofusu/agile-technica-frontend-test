import { FC } from "react";
import { Flex } from "../../layouts";
import { BodyText, Button, Header } from "../../atoms";
import { BsArrowRight } from "react-icons/bs";

type TProps = {
  headTitle?: string;
  titleDesc?: string;
  buttonLink?: string;
  buttonText?: string;
};

export const HeroText: FC<TProps> = ({
  buttonLink = "#",
  buttonText,
  titleDesc,
  headTitle,
}) => {
  return (
    <Flex
      direction="vertical"
      items="start"
      justify="end"
      className="flex-1 gap-6"
    >
      <Flex direction="vertical" items="start">
        <Header level={1}>{headTitle}</Header>
        <BodyText>{titleDesc}</BodyText>
      </Flex>
      <a href={buttonLink}>
        <Button btnSize="md" iconPosition="right" iconElement={<BsArrowRight />}>
          {buttonText}
        </Button>
      </a>
    </Flex>
  );
};


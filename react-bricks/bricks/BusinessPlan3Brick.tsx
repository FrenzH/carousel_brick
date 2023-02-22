import React from "react";
import { types } from "react-bricks/frontend";
import { Repeater } from "react-bricks/frontend";
import Container, { Size } from "./layout/Container";
import Section from "./layout/Section";
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from "./layout/LayoutSideProps";
import blockNames from "./layout/blockNames";

interface BusinessPlan3BrickProps {
  bg?: { color: string; className: string };
  width?: Size;
}

const BusinessPlan3Brick: types.Brick<BusinessPlan3BrickProps> = ({
  bg,
  width,
}) => {
  //auto-cols-min grid-flow-dense xl:grid-cols-${colNumber} 2xl:grid-cols-${colNumber} lg:grid-cols-${colNumber} md:grid-cols-2 sm:grid-cols-1
  return (
    <Section bg={bg}>
      <Container>
        <div
          className={`flex flex-1 grow flex-wrap justify-center 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap`}
        >
          <Repeater
            propName="plan-brick"
            renderItemWrapper={(items) => <div>{items}</div>}
          />
        </div>
      </Container>
    </Section>
  );
};

BusinessPlan3Brick.schema = {
  name: blockNames.BusinessPlan3Brick,
  label: "3 business plan",
  category: "rb-ui website",
  getDefaultProps: () => ({}),
  repeaterItems: [
    {
      name: "plan-brick",
      itemType: blockNames.PlanBrick,
      itemLabel: "plan brick",
      min: 3,
      max: 3,
    },
  ],
  sideEditProps: [
    {
      groupName: "layout",
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
  ],
};

export default BusinessPlan3Brick;

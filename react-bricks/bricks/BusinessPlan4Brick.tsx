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

interface BusinessPlan4BrickProps {
  bg?: { color: string; className: string };
  width?: Size;
}

const BusinessPlan4Brick: types.Brick<BusinessPlan4BrickProps> = ({
  bg,
  width,
}) => {
  //2xl:flex-nowrap  at className line 26 to try
  return (
    <Section bg={bg}>
      <Container>
        <div
          className={`flex flex-1 grow flex-wrap justify-center 2xl:flex-nowrap  `}
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

BusinessPlan4Brick.schema = {
  name: blockNames.BusinessPlan4Brick,
  label: "4 business plan ",
  category: "rb-ui website",
  getDefaultProps: () => ({}),
  repeaterItems: [
    {
      name: "plan-brick",
      itemType: blockNames.PlanBrick,
      itemLabel: "plan brick",
      min: 0,
      max: 5,
    },
  ],
  sideEditProps: [
    {
      groupName: "layout",
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
  ],
};

export default BusinessPlan4Brick;

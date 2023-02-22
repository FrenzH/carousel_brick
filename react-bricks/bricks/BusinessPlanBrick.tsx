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

interface BusinessPlanBrickProps {
  bg?: { color: string; className: string };
  width?: Size;
}

const BusinessPlanBrick: types.Brick<BusinessPlanBrickProps> = ({
  bg,
  width,
}) => {
  return (
    <Section bg={bg}>
      <Container size={width}>
        <div className={`flex flex-1 grow flex-wrap justify-center`}>
          <Repeater
            propName="plan-brick"
            renderItemWrapper={(items) => <div>{items}</div>}
          />
        </div>
      </Container>
    </Section>
  );
};

BusinessPlanBrick.schema = {
  name: blockNames.BusinessPlanBrick,
  label: "business plan",
  category: "rb-ui website",
  getDefaultProps: () => ({
    colNumber: 2,
  }),
  repeaterItems: [
    {
      name: "plan-brick",
      itemType: blockNames.PlanBrick,
      itemLabel: "plan brick",
      min: 0,
      max: 6,
    },
  ],
  sideEditProps: [
    {
      groupName: "layout",
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
  ],
};

export default BusinessPlanBrick;

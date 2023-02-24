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

interface ThumbBrickContainerProps {
  bg?: { color: string; className: string };
  width?: Size;
  colNumber: string;
}

const ThumbLinkContainer: types.Brick<ThumbBrickContainerProps> = ({
  bg,
  width,
  colNumber,
}) => {
  return (
    <Section bg={bg} className={`pt-1`}>
      <Container
        size={width}
        className={`grid lg:grid-cols-${colNumber} xl:grid-cols-${colNumber} 2xl:grid-cols-${colNumber}  gap-3 grid-cols-1 md:grid-cols-2`}
      >
        <Repeater
          propName="thumbLink"
          renderItemWrapper={(items) => <div>{items}</div>}
        />
      </Container>
    </Section>
  );
};

ThumbLinkContainer.schema = {
  name: blockNames.ThumbLinkContainer,
  label: "thumb link container",
  category: "rb-ui website",
  getDefaultProps: () => ({
    colNumber: 2,
  }),
  repeaterItems: [
    {
      name: "thumbLink",
      itemType: blockNames.ThumbLink,
      itemLabel: "ThumbLink",
      min: 0,
      max: 6,
    },
  ],
  sideEditProps: [
    {
      groupName: "layout",
      props: [
        BackgroundColorsSideEditProps,
        ContainerSizeSideEditProps,
        {
          name: "colNumber",
          label: "column number",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: "1" },
              { value: 2, label: "2" },
              { value: 3, label: "3" },
            ],
          },
        },
      ],
    },
  ],
};

export default ThumbLinkContainer;

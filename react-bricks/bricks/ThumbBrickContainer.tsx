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

const ThumbBrickContainer: types.Brick<ThumbBrickContainerProps> = ({
  bg,
  width,
  colNumber,
}) => {
  console.log("qui");
  return (
    <Section bg={bg}>
      <Container size={width} className={`grid grid-cols-${colNumber} gap-3`}>
        <Repeater
          propName="thumb-brick"
          renderItemWrapper={(item) => <div className="">{item}</div>}
          itemProps={{}}
        />
      </Container>
    </Section>
  );
};

ThumbBrickContainer.schema = {
  name: blockNames.ThumbBrickContainer,
  label: "thumb container",
  category: "rb-ui website",
  getDefaultProps: () => ({
    colNumber: 2,
  }),
  repeaterItems: [
    {
      name: "thumb-brick",
      itemType: blockNames.ThumbBrick,
      itemLabel: "ThumbBrick",
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

export default ThumbBrickContainer;

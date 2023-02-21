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
  href: string;
  withIcon: boolean;
  withTitle: boolean;
}

const ThumbLinkContainer: types.Brick<ThumbBrickContainerProps> = ({
  bg,
  width,
  href,
  withIcon,
  withTitle,
  colNumber,
}) => {
  return (
    <Section bg={bg}>
      <Container size={width} className={`grid grid-cols-${colNumber} gap-y-3`}>
        <Repeater
          propName="thumb-link"
          renderItemWrapper={(item) => <div className="">{item}</div>}
          itemProps={{ href: href, withIcon: withIcon, withTitle: withTitle }}
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
    href: "",
    colNumber: 2,
    withIcon: true,
    withTitle: true,
  }),
  repeaterItems: [
    {
      name: "thumb-link",
      itemType: blockNames.ThumbLink,
      itemLabel: "ThumbLink",
      min: 0,
      max: 6,
    },
  ],
  sideEditProps: [
    {
      groupName: "thumb-link",
      props: [
        {
          name: "href",
          label: "link",
          type: types.SideEditPropType.Text,
          validate: (value) =>
            value && value.length > 10 && String(value).startsWith("https://"),
        },
        {
          name: "withIcon",
          label: "with icon ?",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "withTitle",
          label: "With Title",
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
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

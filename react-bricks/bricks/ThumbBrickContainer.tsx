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
  withIcon: boolean;
  withTitle: boolean;
  withLink: boolean;
  href: string;
  linkText: string;
  colNumber: string;
}

const ThumbBrickContainer: types.Brick<ThumbBrickContainerProps> = ({
  bg,
  width,
  withIcon,
  withTitle,
  withLink,
  linkText,
  href,
  colNumber,
}) => {
  return (
    <Section bg={bg}>
      <Container size={width} className={`grid grid-cols-${colNumber} gap-y-3`}>
        <Repeater
          propName="thumb-brick"
          renderItemWrapper={(item) => <div className="">{item}</div>}
          itemProps={{
            width: width,
            withIcon: withIcon,
            withLink: withLink,
            withTitle: withTitle,
            href: href,
            linkText: linkText,
          }}
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
    href: "",
    linkText: "type a text...",
    withIcon: true,
    withTitle: true,
    withLink: true,
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
      groupName: "thumb-brick",
      props: [
        {
          name: "withIcon",
          label: "with icon ?",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "withTitle",
          label: "with title ?",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "withLink",
          label: "with link ?",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "href",
          label: "link",
          type: types.SideEditPropType.Text,
          validate: (value) =>
            value && value.length > 10 && String(value).startsWith("https://"),
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

export default ThumbBrickContainer;

import React from "react";
import { types } from "react-bricks/frontend";
import { RichText, Text, Image, Link, Repeater } from "react-bricks/frontend";
import { FaArrowRight } from "react-icons/fa";
import Container, { Size } from "./layout/Container";
import Section from "./layout/Section";
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from "./layout/LayoutSideProps";
import blockNames from "./layout/blockNames";
import ThumbBrick from "./ThumbBrick";

interface ThumbBrickContainerProps {
  bg?: { color: string; className: string };
  width?: Size;
}

const ThumbBrickContainer: types.Brick<ThumbBrickContainerProps> = ({
  bg,
  width,
}) => {
  return (
    <Section bg={bg}>
      <Container size={width} className={`grid grid-cols-2`}>
        <Repeater
          propName="ThumbBrick"
          renderWrapper={(items) => <div className="">{items}</div>}
        />
      </Container>
    </Section>
  );
};

ThumbBrickContainer.schema = {
  name: "ThumbBrickContainer",
  label: "thumb container",
  category: "rb-ui website",
  getDefaultProps: () => ({}),
  repeaterItems: [
    {
      name: "ThumbBrick",
      itemType: blockNames.ThumbBrick,
      itemLabel: "ThumbBrick",
      min: 0,
      max: 4,
    },
  ],
  sideEditProps: [],
};

export default ThumbBrickContainer;

import classNames from "classnames";
import React from "react";
import { Repeater, types } from "react-bricks/frontend";
//import blockNames from '../blockNames'
import Container from "../shared/components/Container";
import Section from "../shared/components/Section";
import {
  backgroundSideGroup,
  containerSizeEditProps,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
} from "../shared/LayoutSideProps";
export interface DocumentsProps extends LayoutProps {}

const Documents: types.Brick<DocumentsProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        size={width}
        className={classNames(
          "grid gap-[30px] grid-cols-1",
          width === "small" ? "lg:grid-cols-2" : "md:grid-cols-2"
        )}
      >
        <Repeater propName="Document" />
      </Container>
    </Section>
  );
};

Documents.schema = {
  name: "Documents",
  label: "Documents",
  category: "rb-ui website",
  playgroundLinkLabel: "View source code on Github",
  playgroundLinkUrl:
    "https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Documents/Documents.tsx",
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: "medium",
    Document: [
      {
        file: {
          name: "React Bricks Website.pdf",
          size: 521.929,
          url: "https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf",
        },
      },
      { file: {} },
      {
        file: {
          name: "React Bricks Website.pdf",
          size: 521.929,
          url: "https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf",
        },
      },
    ],
  }),
  sideEditProps: [
    backgroundSideGroup,
    paddingBordersSideGroup,
    containerSizeEditProps,
  ],
  repeaterItems: [
    {
      name: "Document",
      itemType: "Document",
      itemLabel: "Document",
    },
  ],
};

export default Documents;

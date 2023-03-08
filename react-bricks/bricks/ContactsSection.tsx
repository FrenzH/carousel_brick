import React from "react";
import classNames from "classnames";
import { Repeater, types, Text } from "react-bricks/frontend";
//import blockNames from '../blockNames'
import TitleSubtitle from "../shared/components/TitleSubtitle";
import Container from "../shared/components/Container";
import Section from "../shared/components/Section";
import { textColors } from "../shared/colors";
import {
  backgroundSideGroup,
  containerSizeEditProps,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
} from "../shared/LayoutSideProps";
export interface ContactsProps extends LayoutProps {
  withTitle: boolean;
  bigCentered?: boolean;
  extraboldTitle?: boolean;
}

const ContactSection: types.Brick<ContactsProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  withTitle,
  bigCentered = false,
  extraboldTitle = false,
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
      >
        {withTitle && (
          <div className="mb-16 mx-auto max-w-2xl lg:mx-0">
            <TitleSubtitle
              bigCentered={bigCentered}
              extraboldTitle={extraboldTitle}
            />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-y-16 justify-start">
          <Repeater propName="ContactItem" />
        </div>
      </Container>
    </Section>
  );
};

ContactSection.schema = {
  name: "ContactsSection",
  label: "contacts section",
  category: "rb-ui website",
  hideFromAddMenu: false,
  playgroundLinkLabel: "View source code on Github",
  playgroundLinkUrl: "",
  getDefaultProps: () => ({
    withTitle: false,
    ...sectionDefaults,
    title: "Our offices",
    subtitle:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
    ContactItem: [
      {
        contactTitle: "Los Angeles",
        contactAddress: "4377 Koontz Lane\nLos Angeles, CA 90014",
      },
      {
        contactTitle: "New York",
        contactAddress: "2153 Shinn Street\nNew York, NY 10003",
      },
      {
        contactTitle: "Toronto",
        contactAddress: "2071 Irving Road\nToronto, ON N3Y 43964",
      },
      {
        contactTitle: "London",
        contactAddress: "1272 Old House Drive\nLondon N1 2EF",
      },
    ],
  }),
  sideEditProps: [
    backgroundSideGroup,
    paddingBordersSideGroup,
    containerSizeEditProps,
    {
      name: "withTitle",
      label: "with title",
      type: types.SideEditPropType.Boolean,
    },
    {
      name: "bigCentered",
      label: "centered title",
      type: types.SideEditPropType.Boolean,
    },
    {
      name: "extraboldTitle",
      label: "extra bold title",
      type: types.SideEditPropType.Boolean,
    },
  ],
  repeaterItems: [
    {
      name: "ContactItem",
      itemType: "ContactItem",
      itemLabel: "contact",
    },
  ],
};
export default ContactSection;

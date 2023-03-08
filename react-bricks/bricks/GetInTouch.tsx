import React from "react";
import classNames from "classnames";
import { Repeater, types, Text } from "react-bricks/frontend";
import blockNames from "../shared/blockNames";
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
export interface GetInTouchProps extends LayoutProps {}

const GetInTouch: types.Brick<GetInTouchProps> = ({
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
      >
        <div>
          <div></div>
          <Repeater propName="form" />
        </div>
      </Container>
    </Section>
  );
};

GetInTouch.schema = {
  name: "GetInTouch",
  label: "get in touch",
  category: "",
  hideFromAddMenu: false,
  getDefaultProps: () => ({
    ...sectionDefaults,
    form: [
      {
        "form-elements": [
          {
            type: blockNames.FormInput,
            props: {
              fieldName: "name",
              isRequired: false,
              inputType: "text",
              columns: "one",
              label: "name",
              requiredError: "",
              pattern: "",
              patternError: "",
            },
          },
          {
            type: blockNames.FormInput,
            props: {
              fieldName: "surname",
              isRequired: false,
              inputType: "text",
              columns: "one",
              label: "surname",
              requiredError: "",
              pattern: "",
              patternError: "",
            },
          },
          {
            type: blockNames.FormInput,
            props: {
              fieldName: "email",
              isRequired: false,
              inputType: "text",
              columns: "two",
              label: "name",
              requiredError: "",
              pattern: "",
              patternError: "",
            },
          },
          {
            type: blockNames.FormInput,
            props: {
              fieldName: "company",
              isRequired: false,
              inputType: "text",
              columns: "two",
              label: "company",
              requiredError: "",
              pattern: "",
              patternError: "",
            },
          },
          {
            type: blockNames.FormTextArea,
            props: {
              fieldName: "message",
              isRequired: false,
              columns: "two",
              label: "message",
              requiredError: "",
              pattern: "",
              patternError: "",
            },
          },
        ],
        "form-buttons": [
          {
            type: blockNames.FormButton,
            props: {
              type: "submit",
              color: {
                color: "#0ea5e9",
                className:
                  "bg-sky-500 text-white hover:bg-sky-600 hover:text-white",
              },
            },
          },
        ],
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
      name: "form",
      itemType: blockNames.FormBuilder,
      itemLabel: "form",
      min: 1,
      max: 1,
    },
  ],
};

export default GetInTouch;

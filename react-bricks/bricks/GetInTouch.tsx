import React from "react";
import classNames from "classnames";
import { Repeater, types, Text, Link } from "react-bricks/frontend";
import blockNames from "../shared/blockNames";
import Container from "../shared/components/Container";
import Section from "../shared/components/Section";
import { FcDepartment } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { textColors } from "../shared/colors";
import {
  backgroundSideGroup,
  containerSizeEditProps,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
} from "../shared/LayoutSideProps";
import TitleSubtitle from "../shared/components/TitleSubtitle";
export interface GetInTouchProps extends LayoutProps {
  bigCentered?: boolean;
  extraboldTitle?: boolean;
  telephoneNumberHref: string;
  emailHref: string;
}

const GetInTouch: types.Brick<GetInTouchProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  bigCentered = false,
  extraboldTitle = false,
  telephoneNumberHref,
  emailHref,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="pb-12 lg:pb-20 sm:text-left lg:px-8 px-5">
            <TitleSubtitle
              bigCentered={bigCentered}
              extraboldTitle={extraboldTitle}
            />
            <ul className="mt-10 space-y-4 text-base leading-7 text-gray-600 list-none dark:text-white/60">
              <li className="flex gap-x-4">
                <FcDepartment size={"28px"} />
                <div>
                  <Text
                    propName="address"
                    placeholder="address..."
                    multiline={true}
                    renderBlock={(props) => (
                      <span
                        className="block min-w-[70px]"
                        {...props.attributes}
                      >
                        {props.children}
                      </span>
                    )}
                  />
                </div>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-white/90 flex gap-x-4"
                  href={`tel:${telephoneNumberHref}`}
                >
                  <FcPhone size={"28px"} />
                  {telephoneNumberHref}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-gray-900 dark:hover:text-white/90 flex gap-x-4"
                  href={`mailto:${emailHref}`}
                >
                  <FcContacts size={"28px"} />
                  {emailHref}
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <Repeater propName="form" />
          </div>
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
    address: "4556 Brendan Ferry\nLos Angeles, CA 90210",
    telephoneNumberHref: "+1 (555) 234-5678",
    emailHref: "hello@example.com",
    title: "Get in touch",
    subtitle:
      "Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.",
    form: [
      {
        buttonPosition: "justify-end",
        paddingTop: "0",
        paddingBottom: "0",
        width: "full",
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
              label: "email",
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
                  "bg-indigo-600 text-white hover:bg-indigo-500 hover:text-white",
              },
              buttonLabel: [
                {
                  type: "paragraph",
                  children: [
                    {
                      text: "Send message",
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  }),
  sideEditProps: [
    {
      groupName: "titleSubtitle",
      label: "title & subtitle",
      props: [
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
    },
    backgroundSideGroup,
    paddingBordersSideGroup,
    containerSizeEditProps,
    {
      name: "telephoneNumberHref",
      label: "telephone number",
      type: types.SideEditPropType.Text,
    },
    {
      name: "emailHref",
      label: "email",
      type: types.SideEditPropType.Text,
    },
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

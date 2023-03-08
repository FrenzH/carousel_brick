import React from "react";
import classNames from "classnames";
import { Repeater, types, Text } from "react-bricks/frontend";
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
export interface GetInTouchProps extends LayoutProps {
  bigCentered?: boolean;
  extraboldTitle?: boolean;
  telephoneNumber: string;
  email: string;
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
  telephoneNumber,
  email,
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
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto">
          <div className="px-6 pt-24 pb-20 sm:pt-32 lg:py-48 lg:px-8">
            <Text
              propName="title"
              placeholder="Title..."
              renderBlock={(props) => (
                <h2
                  className={classNames(
                    "text-2xl leading-7",
                    extraboldTitle ? "font-extrabold" : "font-bold",
                    textColors.GRAY_900,
                    { "lg:text-[32px] lg:leading-9 text-center": bigCentered }
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </h2>
              )}
            />
            <Text
              propName="subtitle"
              placeholder="Subtitle..."
              renderBlock={(props) => (
                <p
                  className={classNames(
                    { "sm:text-lg leading-7": bigCentered },
                    textColors.GRAY_600,
                    bigCentered ? "mt-3 text-center" : "mt-2"
                  )}
                  {...props.attributes}
                >
                  {props.children}
                </p>
              )}
            />
            <ul className="mt-10 space-y-4 text-base leading-7 text-gray-600 list-none dark:text-white/60">
              <li className="flex gap-x-4 items-center">
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
                <a
                  className="hover:text-gray-900 dark:hover:text-white/90 flex gap-x-4 items-center"
                  href={`tel:${telephoneNumber}`}
                >
                  <FcPhone size={"28px"} />

                  <Text
                    propName="telephoneNumber"
                    placeholder="telephone number..."
                    renderBlock={(props) => (
                      <span
                        className="block min-w-[150px]"
                        {...props.attributes}
                      >
                        {props.children}
                      </span>
                    )}
                  />
                </a>
              </li>

              <li>
                <a
                  className="hover:text-gray-900 dark:hover:text-white/90 flex gap-x-4 items-center"
                  href={`mailto:${email}`}
                >
                  <FcContacts size={"28px"} />

                  <Text
                    propName="email"
                    placeholder="email..."
                    renderBlock={(props) => (
                      <div>
                        <span
                          className="block min-w-[70px]"
                          {...props.attributes}
                        >
                          {props.children}
                        </span>
                      </div>
                    )}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="pb-20 sm:pt-24 ">
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
    telephoneNumber: "+1 (555) 234-5678",
    email: "hello@example.com",
    title: "Get in touch",
    subtitle:
      "Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu. Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.",
    form: [
      {
        buttonPosition: "justify-end",
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
    backgroundSideGroup,
    paddingBordersSideGroup,
    containerSizeEditProps,
    {
      name: "telephoneNumber",
      label: "telephone number",
      type: types.SideEditPropType.Text,
    },
    {
      name: "email",
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

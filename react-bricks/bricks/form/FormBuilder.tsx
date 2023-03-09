import classNames from "classnames";
import * as React from "react";
import { Repeater, Text, types } from "react-bricks/frontend";
import { useForm } from "react-hook-form";
import { bgColors } from "../../shared/colors";
import blockNames from "../../shared/blockNames";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import {
  backgroundSideGroup,
  containerSizeEditProps,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
} from "../../shared/LayoutSideProps";

export interface FormBuilderProps extends LayoutProps {
  buttonPosition: string;
}

const FormBuilder: types.Brick<FormBuilderProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  buttonPosition,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          size={width} /*p-12px*/
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto grid grid-cols-2 gap-4 px-6 py-6"
          >
            <Repeater
              propName="form-elements"
              itemProps={{ register, errors }}
            />
            <Repeater
              propName="form-buttons"
              renderWrapper={(items) => (
                <div
                  className={classNames(
                    "w-full flex space-x-6 col-span-2",
                    buttonPosition
                  )}
                >
                  {items}
                </div>
              )}
            />
          </form>
        </Container>
      </Section>
    </div>
  );
};
const onSubmit = (values: any) => console.log(values);

FormBuilder.schema = {
  name: blockNames.FormBuilder,
  label: "Form",
  category: "contact",

  repeaterItems: [
    {
      name: "form-elements",
      positionLabel: "Form elements",
      items: [
        { type: blockNames.FormInput },
        { type: blockNames.FormTextArea },
        { type: blockNames.FormCheckbox },
        { type: blockNames.FormSelect },
        { type: blockNames.FormRadiobuttons },
      ],
    },
    {
      name: "form-buttons",
      itemLabel: "Form Buttons",
      items: [{ type: blockNames.FormButton }],
    },
  ],

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    buttonPosition: "justify-center",
    formTitle: [
      {
        type: "paragraph",
        children: [
          {
            text: "Form Title",
          },
        ],
      },
    ],
    "form-elements": [
      {
        type: blockNames.FormInput,
        props: {
          fieldName: "name",
          isRequired: false,
          inputType: "text",
          columns: "one",
          label: "Name",
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
          label: "Surname",
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
          inputType: "email",
          columns: "two",
          label: "Email",
          requiredError: "",
          pattern: "",
          patternError: "",
        },
      },
      {
        type: blockNames.FormSelect,
        props: {
          fieldName: "radio",
          isRequired: false,
          columns: "two",
          label: "Select",
          values: "value1:value\nvalue2:value2\nvalue3:value3",
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
          label: "Message",
          requiredError: "",
          pattern: "",
          patternError: "",
        },
      },
      {
        type: blockNames.FormCheckbox,
        props: {
          fieldName: "value",
          isRequired: false,

          columns: "one",
          label: "Value",
          requiredError: "",
          pattern: "",
          patternError: "",
        },
      },
      {
        type: blockNames.FormCheckbox,
        props: {
          fieldName: "value1",
          isRequired: false,

          columns: "one",
          label: "Value1",
          requiredError: "",
          pattern: "",
          patternError: "",
        },
      },
      {
        type: blockNames.FormRadiobuttons,
        props: {
          fieldName: "radio",
          isRequired: false,

          columns: "one",
          label: "Radio",
          requiredError: "",
          pattern: "",
          patternError: "",
        },
      },
    ],
  }),

  sideEditProps: [
    backgroundSideGroup,
    paddingBordersSideGroup,
    containerSizeEditProps,
    {
      groupName: "Layout",
      defaultOpen: false,
      props: [],
    },
    {
      name: "buttonPosition",
      label: "button position",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: "justify-center", label: "center" },
          { value: "justify-start", label: "start" },
          { value: "justify-end", label: "end" },
        ],
      },
    },
  ],
};

export default FormBuilder;

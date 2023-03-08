import classNames from "classnames";
import * as React from "react";
import { Repeater, Text, types } from "react-bricks/frontend";
import { useForm } from "react-hook-form";
import { bgColors } from "../../shared/colors";
import blockNames from "../../shared/blockNames";
import Container from "../../shared/components/Container";
import Section from "../../shared/components/Section";
import { backgroundColorsEditProps } from "../../shared/LayoutSideProps";

export interface FormBuilderProps {
  backgroundColor?: { color: string; className: string };
  buttonPosition: string;
}

const FormBuilder: types.Brick<FormBuilderProps> = ({
  backgroundColor,
  buttonPosition,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="py-4 max-w-2xl mx-auto px-8 grid grid-cols-2 gap-4"
        >
          <Repeater propName="form-elements" itemProps={{ register, errors }} />
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
          fieldName: "inputField",
          isRequired: false,
          inputType: "text",
          columns: "two",
          label: "Input Field",
          requiredError: "",
          pattern: "",
          patternError: "",
        },
      },
    ],
  }),

  sideEditProps: [
    {
      groupName: "Layout",
      defaultOpen: false,
      props: [backgroundColorsEditProps],
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
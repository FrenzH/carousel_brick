import classNames from "classnames";
import * as React from "react";
import { Repeater, types, Plain, Text } from "react-bricks/frontend";
import { UseFormRegister } from "react-hook-form";
import blockNames from "../../shared/blockNames";

export interface FormRadiobuttonsProps {
  register?: UseFormRegister<any>;
  fieldName?: string;
  fieldLabel?: string;
  isRequired: boolean;
  columns: "one" | "two";
}

const FormRadiobuttons: types.Brick<FormRadiobuttonsProps> = ({
  register,
  fieldName,
  fieldLabel,
  isRequired,
  columns,
}) => {
  const labelTextContent =
    typeof fieldLabel === "string" ? fieldLabel : Plain.serialize(fieldLabel);
  return (
    <div
      className={classNames(
        "w-full px-2 py-1 col-span-2",
        columns === "one" && "sm:col-span-1"
      )}
    >
      <div
        className={classNames(
          "mb-1",
          isRequired
            ? labelTextContent === ""
              ? "block w-full"
              : "flex gap-x-1"
            : "block w-full"
        )}
      >
        <Text
          propName="fieldLabel"
          placeholder="label..."
          renderBlock={(props) => (
            <span
              className=" text-gray-400 font-medium uppercase tracking-widest text-sm"
              {...props.attributes}
            >
              {props.children}
            </span>
          )}
        />

        {isRequired &&
          (labelTextContent === "" ? null : (
            <span className="text-red-600">*</span>
          ))}
      </div>
      <Repeater
        propName="radiobuttons"
        itemProps={{
          fieldName,
          register,
          isRequired,
        }}
      />
    </div>
  );
};

FormRadiobuttons.schema = {
  name: blockNames.FormRadiobuttons,
  label: "Form Radiobuttons",
  category: "Tailblock Form",
  hideFromAddMenu: true,

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    columns: "one",
    fieldName: "radiobuttonsField",
    fieldLabel: "Radiobuttons Label",
    radiobuttons: [
      {
        label: "Label single radio",
        value: "value",
      },
    ],
    isRequired: false,
  }),

  repeaterItems: [
    {
      name: "radiobuttons",
      itemType: blockNames.FormSingleRadio,
      min: 1,
    },
  ],

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: "columns",
      label: "Columns",
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: "one", label: "One" },
          { value: "two", label: "Two" },
        ],
      },
    },
    {
      name: "fieldName",
      type: types.SideEditPropType.Text,
      label: "Field Name",
    },

    {
      name: "isRequired",
      type: types.SideEditPropType.Boolean,
      label: "Field required",
    },
    {
      name: "requiredError",
      type: types.SideEditPropType.Text,
      label: "Error required",
    },
  ],
};

export default FormRadiobuttons;

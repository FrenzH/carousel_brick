import * as React from "react";
import clsx from "clsx";
import { types, Text, Plain } from "react-bricks/frontend";
import { UseFormRegister } from "react-hook-form";
import blockNames from "../../shared/blockNames";

export interface FormSingleRadioProps {
  register: UseFormRegister<any>;
  fieldName?: string;
  label: string;
  value: string;
  isRequired: boolean;
  key: string;
}

const FormSingleRadio: types.Brick<FormSingleRadioProps> = ({
  register,
  fieldName,
  label,
  value,
  isRequired,
  key,
}) => {
  console.log(fieldName);
  const labelTextContent =
    typeof label === "string" ? label : Plain.serialize(label);
  return (
    <label htmlFor={fieldName} className="flex items-center">
      <input
        id={fieldName}
        className="border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm rounded-full mr-2 text-blue-500 focus:ring-offset-0"
        {...register(fieldName?.replace(/\s/g, "").toLowerCase() || key)}
        type="radio"
        value={value}
      />
      <label
        className={clsx(
          "ml-1",
          isRequired
            ? labelTextContent === ""
              ? "block w-full"
              : "flex gap-x-1"
            : "block w-full"
        )}
      >
        <Text
          propName="label"
          placeholder="label..."
          renderBlock={(props) => (
            <span
              className="ml-2 text-gray-600 dark:text-gray-50 font-medium"
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
      </label>
    </label>
  );
};

FormSingleRadio.schema = {
  name: blockNames.FormSingleRadio,
  label: "Form Single Radio",
  category: "Tailblock Form",
  hideFromAddMenu: true,
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    label: "Label single radio",
    value: "value",
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    { name: "value", type: types.SideEditPropType.Text, label: "Value" },
  ],
};

export default FormSingleRadio;

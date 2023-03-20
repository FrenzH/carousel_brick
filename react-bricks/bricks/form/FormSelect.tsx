import * as React from "react";
import { types, Plain, Text } from "react-bricks/frontend";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import classNames from "classnames";
import blockNames from "../../shared/blockNames";
import { useAdminContext } from "react-bricks/frontend";
import { textColors } from "../../shared/colors";

export interface FormSelectProps {
  register: UseFormRegister<any>;
  fieldName?: string;
  label: string;
  values?: string;
  isRequired: boolean;
  key: string;
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  requiredError?: string;
  columns: "one" | "two";
}

const FormSelect: types.Brick<FormSelectProps> = ({
  values,
  isRequired,
  register,
  fieldName = "select",
  label,
  key,
  errors,
  requiredError,
  columns,
}) => {
  const labelTextContent =
    typeof label === "string" ? label : Plain.serialize(label);
  const { isAdmin } = useAdminContext();
  return (
    <div
      className={classNames(
        "px-2 py-1 group block",
        columns === "two" && "col-span-2"
      )}
    >
      <label htmlFor={isAdmin ? "" : fieldName}>
        <span
          className={classNames(
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
                className={classNames(textColors.GRAY_600, " mb-1 text-sm")}
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
        </span>
      </label>
      <select
        id={fieldName}
        className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 ring-sky-500 focus:shadow-sky-200 dark:focus:shadow-sky-900 focus:shadow-lg"
        {...register(fieldName?.replace(/\s/g, "").toLowerCase() || key)}
      >
        {values?.split("\n").map((valuelabel, index) => {
          const [value, label] = valuelabel.trim().split(":");
          if (label) {
            return (
              <option key={index} value={value}>
                {label.trim()}
              </option>
            );
          }
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
      {errors[fieldName] && (
        <span className="block mt-2 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === "required" && requiredError}
        </span>
      )}
    </div>
  );
};

FormSelect.schema = {
  name: blockNames.FormSelect,
  label: "Form Select",
  category: "Tailblock Select",
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    fieldName: "selectField",
    label: "Select Field Label",
    columns: "two",
    values: "value : Value",
    isRequired: false,
  }),

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
      name: "values",
      label: "Value : Label",
      type: types.SideEditPropType.Textarea,
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

export default FormSelect;

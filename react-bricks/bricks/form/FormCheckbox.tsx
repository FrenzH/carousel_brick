import classNames from "classnames";
import * as React from "react";
import { types, Text, Plain } from "react-bricks/frontend";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import blockNames from "../../shared/blockNames";
import { useAdminContext } from "react-bricks/frontend";
export interface FormCheckboxProps {
  register: UseFormRegister<any>;
  fieldName: string;
  label: string;
  isRequired: boolean;
  key: string;
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  requiredError?: string;
  columns: "one" | "two";
}

const FormCheckbox: types.Brick<FormCheckboxProps> = ({
  register,
  isRequired = true,
  fieldName,
  label,
  errors,
  requiredError,
  key,
  columns,
}) => {
  const labelTextContent =
    typeof label === "string" ? label : Plain.serialize(label);
  const { isAdmin } = useAdminContext();
  return (
    <div
      className={classNames(
        "col-span-2 px-2 py-1 flex items-center",
        columns === "one" && "sm:col-span-1"
      )}
    >
      <input
        id={fieldName}
        type="checkbox"
        className="border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm rounded-sm mr-2 text-blue-500 focus:ring-offset-0"
        {...register(fieldName?.replace(/\s/g, "") || key, {
          required: isRequired,
        })}
      />
      <label
        htmlFor={isAdmin ? "" : fieldName}
        className={classNames(
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

      <span className="block px-2 mt-2 text-xs text-red-500 font-bold">
        {errors[fieldName]?.type === "required" && requiredError}
      </span>
    </div>
  );
};

FormCheckbox.schema = {
  name: blockNames.FormCheckbox,
  label: "Form Checkbox",
  category: "Tailblock Form",
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    label: "Checkbox Field",
    columns: "two",
    isRequired: false,
    fieldName: "checkboxField",
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

export default FormCheckbox;

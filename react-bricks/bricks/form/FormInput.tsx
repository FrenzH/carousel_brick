import * as React from "react";
import classNames from "classnames";
import { types, Plain, Text } from "react-bricks/frontend";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import blockNames from "../../shared/blockNames";
import { useAdminContext } from "react-bricks/frontend";
import { textColors } from "../../shared/colors";
export interface FormInputProps {
  register: UseFormRegister<any>;
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  fieldName?: string;
  label?: any;
  isRequired: boolean;
  inputType: "text" | "number" | "date" | "email";
  key: string;
  pattern?: string;
  patternError?: string;
  requiredError?: string;
  columns: "one" | "two";
}

const isRegex = (strRegex: string): boolean => {
  try {
    const testRegex = new RegExp(strRegex);
    return true;
  } catch {
    return false;
  }
};

const strToRegex = (strRegex: string | undefined): RegExp | undefined => {
  try {
    const testRegex = strRegex ? new RegExp(strRegex) : undefined;
    return testRegex;
  } catch {
    return undefined;
  }
};

const FormInput: types.Brick<FormInputProps> = ({
  register,
  isRequired = true,
  fieldName,
  label,
  inputType,
  key,
  pattern,
  errors,
  patternError,
  requiredError,
  columns,
}) => {
  const labelTextContent =
    typeof label === "string" ? label : Plain.serialize(label);
  const { isAdmin } = useAdminContext();
  return (
    <div
      className={classNames(
        "px-2 py-1 group block col-span-2",
        columns === "one" && "sm:col-span-1"
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
                className={classNames(textColors.GRAY_600, "mb-1 text-sm")}
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

      <input
        id={fieldName}
        type={inputType}
        className={classNames(
          "w-full px-[15px] py-[10px] border rounded outline-none peer  focus:shadow-sky-200 dark:focus:shadow-sky-900 focus:shadow-lg",
          errors[fieldName]
            ? "border-red-500"
            : "border-gray-300 focus:border-sky-500"
        )}
        {...register(fieldName?.replace(/\s/g, "").toLowerCase() || key, {
          required: isRequired,
          //@ts-ignore
          valueAsNumber: inputType === "number",
          //@ts-ignore
          valueAsDate: inputType === "date",
          //@ts-ignore
          pattern: strToRegex(pattern),
        })}
      />

      {errors[fieldName] && (
        <span className="block mt-1 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === "required" && requiredError}
          {errors[fieldName]?.type === "pattern" && patternError}
        </span>
      )}
    </div>
  );
};

FormInput.schema = {
  name: blockNames.FormInput,
  label: "Form Input",
  category: "Tailblock Form",
  hideFromAddMenu: true,
  // tags: [],

  getDefaultProps: () => ({
    fieldName: "inputField",
    isRequired: false,
    inputType: "text",
    columns: "two",
    label: "Input Field Label",
    requiredError: "",
    pattern: "",
    patternError: "",
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
      name: "inputType",
      type: types.SideEditPropType.Select,
      label: "Input type",
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: "text", label: "Text" },
          { value: "number", label: "Number" },
          { value: "date", label: "Date" },
          { value: "password", label: "Password" },
          { value: "email", label: "Email" },
        ],
      },
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
    {
      name: "pattern",
      type: types.SideEditPropType.Text,
      label: "Pattern",
      validate: (value: string) => isRegex(value) || "Invalid RegEx",
    },
    {
      name: "patternError",
      type: types.SideEditPropType.Text,
      label: "Error pattern",
    },
  ],
};

export default FormInput;

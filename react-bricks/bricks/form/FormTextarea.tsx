import classNames from "classnames";
import * as React from "react";
import { types, Text, Plain } from "react-bricks/frontend";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import blockNames from "../../shared/blockNames";
import { useAdminContext } from "react-bricks/frontend";
import { textColors } from "../../shared/colors";
export interface FormTextareaProps {
  register: UseFormRegister<any>;
  isRequired: boolean;
  fieldName?: string;
  key: string;
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  requiredError?: string;
  columns: "one" | "two";
  label: any;
}

const FormTextarea: types.Brick<FormTextareaProps> = ({
  fieldName = "text area",
  isRequired = true,
  key,
  label,
  register,
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

      <textarea
        id={fieldName}
        className={classNames(
          "w-full px-[15px] py-[10px] caret:sky-500 border rounded outline-none peer focus:shadow-sky-200 dark:focus:shadow-sky-900 focus:shadow-lg",
          errors[fieldName]
            ? "border-red-500"
            : "border-gray-300 focus:border-sky-500"
        )}
        {...register(fieldName.toLowerCase() || key, {
          required: isRequired,
        })}
      />

      {errors[fieldName] && (
        <span className="block mt-2 text-xs text-red-500 font-bold">
          {errors[fieldName]?.type === "required" && requiredError}
        </span>
      )}
    </div>
  );
};

FormTextarea.schema = {
  name: blockNames.FormTextArea,
  label: "Form Textarea",
  category: "Tailblock Form",
  hideFromAddMenu: true,

  getDefaultProps: () => ({
    columns: "two",
    fieldName: "textareaField",
    label: "Textarea Field",
    isRequired: false,
    requiredError: "",
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

export default FormTextarea;

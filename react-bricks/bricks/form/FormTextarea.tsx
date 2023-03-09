import clsx from "clsx";
import * as React from "react";
import { types, Text } from "react-bricks/frontend";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import blockNames from "../../shared/blockNames";

export interface FormTextareaProps {
  register: UseFormRegister<any>;
  isRequired: boolean;
  fieldName?: string;
  label: string;
  key: string;
  errors: FieldErrorsImpl<{
    [x: string]: any;
  }>;
  requiredError?: string;
  columns: "one" | "two";
}

const FormTextarea: types.Brick<FormTextareaProps> = ({
  fieldName = "text area",
  label,
  isRequired = true,
  key,
  register,
  errors,
  requiredError,
  columns,
}) => {
  return (
    <div
      className={clsx(
        "px-2 py-1 group block",
        columns === "two" ? "col-span-2" : ""
      )}
    >
      <Text
        propName="label"
        placeholder="label..."
        renderBlock={(props) => (
          <label
            className="block text-gray-600 mb-1 text-sm"
            {...props.attributes}
          >
            {props.children}
          </label>
        )}
      />

      {isRequired && <span className="text-red-600">*</span>}

      <textarea
        className={clsx(
          "w-full px-[15px] py-[10px] border rounded outline-none peer",
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

import * as React from "react";
import classNames from "classnames";
import { types, Text } from "react-bricks/frontend";
import { UseFormRegister } from "react-hook-form";
import blockNames from "../../shared/blockNames";
import { useAdminContext } from "react-bricks/frontend";
import { textColors } from "../../shared/colors";
export interface FormSingleRadioProps {
  index: number;
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

  key,
}) => {
  const { isAdmin } = useAdminContext();

  return (
    <div className="flex items-center">
      <input
        id={value}
        className="border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-sm rounded-full mr-2 text-blue-500 focus:ring-offset-0"
        {...register(fieldName?.replace(/\s/g, "").toLowerCase() || key)}
        type="radio"
        value={value}
      />
      <label htmlFor={isAdmin ? "" : value}>
        <span className={classNames("ml-2 block w-full min-w-[70px]")}>
          <Text
            propName="label"
            placeholder="label..."
            renderBlock={(props) => (
              <span
                className={classNames(textColors.GRAY_600)}
                {...props.attributes}
              >
                {props.children}
              </span>
            )}
          />
        </span>
      </label>
    </div>
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

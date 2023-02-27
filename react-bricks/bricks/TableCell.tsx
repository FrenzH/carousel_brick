import React from "react";
import classNames from "classnames";
import { Text, types } from "react-bricks/frontend";
import blockNames from "./layout/blockNames";

export interface TableCellProps {
  isHeader: boolean;
  textAlign: string;
  border?: boolean;
}

const TableCell: types.Brick<TableCellProps> = ({
  isHeader,
  textAlign,
  border,
}) => {
  return isHeader ? (
    <th
      className={classNames(
        "px-4 py-3 border-gray-300",
        `text-${textAlign}`,
        border ? "" : "border"
      )}
      /*
      className={` px-4 py-3  border-gray-300 text-${textAlign} ${
        border ? `` : `border`
      }`}*/
    >
      <Text
        propName="cellText"
        placeholder="Insert text"
        renderBlock={({ children }) => (
          <span className="text-gray-900 ">{children}</span>
        )}
      />
    </th>
  ) : (
    <td
      className={classNames(
        "text-slate-700 border-gray-300 px-4 py-3",
        `text-${textAlign}`,
        border ? "" : "border"
      )}

      /*
      className={` text-slate-700 border-gray-300 px-4 py-3 ${
        border ? `` : `border`
      } text-${textAlign}`}*/
    >
      <Text
        propName="cellText"
        placeholder="Insert text"
        renderBlock={({ children }) => <span>{children}</span>}
      />
    </td>
  );
};

TableCell.schema = {
  name: blockNames.TableCell,
  label: "Cell",
  category: "Multilevel",
  hideFromAddMenu: true,

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    cellText: "Cell text default",
    textAlign: "left",
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      groupName: "cell layout",
      props: [
        {
          name: "textAlign",
          label: "text align",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: "left", label: "left" },
              { value: "center", label: "center" },
            ],
          },
        },
      ],
    },
  ],
};

export default TableCell;

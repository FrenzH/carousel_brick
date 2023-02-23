import { parse } from "path";
import React from "react";
import { Repeater, types } from "react-bricks/frontend";
import blockNames from "./layout/blockNames";

export interface TableRowProps {
  index: number;

  oddOrEven?: string;
  thColor: Boolean;
  borderLayout?: Boolean;
}

const TableRow: types.Brick<TableRowProps> = ({
  index,

  thColor,
  oddOrEven,
  borderLayout,
}) => {
  {
    return index === 0 ? (
      <thead
        className={`align-middle  ${
          thColor ? `bg-gray-100 dark:bg-gray-800` : `bg-white`
        }`}
      >
        <tr className={`align-middle`}>
          <Repeater
            propName="cells"
            itemProps={{
              isHeader: true,
              border: borderLayout,
            }}
          />
        </tr>
      </thead>
    ) : (
      <tbody className="align-middle">
        {index % 2 === parseInt(oddOrEven) ? (
          <tr className={`align-middle bg-gray-100  `}>
            <Repeater
              propName="cells"
              itemProps={{
                border: borderLayout,
              }}
            />
          </tr>
        ) : (
          <tr className={`align-middle bg-white`}>
            <Repeater
              propName="cells"
              itemProps={{
                border: borderLayout,
              }}
            />
          </tr>
        )}
      </tbody>
    );
  }
};

TableRow.schema = {
  name: blockNames.TableRow,
  label: "Row",
  category: "Multilevel",
  hideFromAddMenu: true,

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    textAlign: "left",
    thColor: false,
    cells: [
      {
        text: "Cell",
      },
      {
        text: "Cell",
      },
    ],
  }),

  repeaterItems: [
    {
      name: "cells",
      itemType: blockNames.TableCell,
      min: 1,
    },
  ],

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      groupName: "row layout",
      defaultOpen: true,
      props: [
        {
          name: "thColor",
          label: "head row color",
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
  ],
};

export default TableRow;

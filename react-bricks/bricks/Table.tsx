import React, { useEffect, useState } from "react";
import { Repeater, types } from "react-bricks/frontend";
import blockNames from "./layout/blockNames";
import Container from "./layout/Container";
import Section from "./layout/Section";
import { BackgroundColorsSideEditProps } from "./layout/LayoutSideProps";

export interface TableProps {
  bg?: { color: string; className: string };
  rowStyle: number;
  border: boolean;
  thColor: boolean;
}

const Table: types.Brick<TableProps> = ({
  bg,
  rowStyle = 0,
  border,
  thColor,
}) => {
  return (
    <Section bg={bg}>
      <Container size="lg" className="py-12 xl:py-20">
        <table className=" w-full text-sm border-collapse border-spacing-0.5 sm:overflow-x-auto">
          <Repeater
            propName="rows"
            itemProps={{
              oddOrEven: rowStyle,
              borderLayout: border,
              thColor: thColor,
            }}
          />
        </table>
      </Container>
    </Section>
  );
};

Table.schema = {
  name: blockNames.Table,
  label: "Table",
  category: "rb-ui website",

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    border: false,
    thColor: false,
    rows: [
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
      {
        cells: [
          {
            cellText: "Cell text default",
            text: "Cell",
          },
          {
            cellText: "Cell text default",
            text: "Cell",
          },
        ],
      },
    ],
  }),

  repeaterItems: [
    {
      name: "rows",
      itemType: blockNames.TableRow,
      min: 1,
    },
  ],

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      groupName: "Layout",
      defaultOpen: true,
      props: [
        BackgroundColorsSideEditProps,
        {
          name: "rowStyle",
          label: "row layout",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 0, label: "even" },
              { value: 1, label: "odd" },
              { value: -1, label: "none" },
            ],
          },
        },
        {
          name: "thColor",
          label: "head row color",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "border",
          label: "border layout",
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
  ],
};

export default Table;

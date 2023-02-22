import React from "react";
import { types } from "react-bricks/frontend";
import { RichText, Text, Image, Link, Repeater } from "react-bricks/frontend";
import blockNames from "./layout/blockNames";

interface ColumnBrickProps {}

const ColumnBrick: types.Brick<ColumnBrickProps> = ({}) => {
  return <div></div>;
};

ColumnBrick.schema = {
  name: blockNames.PlanBrick,
  label: "plan brick",
  category: "rb-ui website",
  hideFromAddMenu: false,
  getDefaultProps: () => ({
    planExtraTag: "MOST POPULAR",
    extraTag: false,
    planTitle: "custom",
    planParagraph: "For startups and teams starting using React Bricks.",
    planPrice: "$ 99",
    planDuration: "per app / month",
    href: "",
    linkText: "get started",
    featuresTitle: "Everything in Community, plus:",
  }),
  repeaterItems: [
    {
      name: "plan-feature",
      itemType: blockNames.PlanFeatureBrick,
      itemLabel: "feature",
      min: 0,
      max: 14,
    },
  ],
  sideEditProps: [
    {
      groupName: "plan",
      props: [
        {
          name: "extraTag",
          label: "With extra tag",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "href",
          label: "redirect plan link",
          type: types.SideEditPropType.Text,
          validate: (value) =>
            value && value.length > 10 && String(value).startsWith("https://"),
        },
      ],
    },
  ],
};

export default ColumnBrick;

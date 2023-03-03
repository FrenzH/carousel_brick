import React, { useState, useEffect } from "react";
import { types } from "react-bricks/frontend";
import { RichText, Text, Link, Repeater } from "react-bricks/frontend";
import blockNames from "../shared/blockNames";
import {
  backgroundColorsEditProps,
  badgeColorsEditProps,
  buttonColorsEditProps,
} from "../shared/LayoutSideProps";
import classNames from "classnames";
import { bgColors } from "../shared/colors";

interface PricingPlanProps {
  withPopularTag: boolean;
  buttonLinkPath: string;
  withSecondButton: boolean;
  seconButtonLinkPath: string;
  backgroundColor: { color: string; className: string };
  badgeColor: { color: string; className: string };
  buttonColor: {
    color: string;
    classNameSolid: string;
    classNameOutline: string;
  };
  highlightTextColor: { color: string; className: string };
  colorPlan: { color: string; className: string };
}

const PricingPlan: types.Brick<PricingPlanProps> = ({
  withPopularTag,
  buttonLinkPath,
  withSecondButton,
  seconButtonLinkPath,
  colorPlan = { color: "#06b6d4", className: "bg-cyan-500" },
}) => {
  console.log(colorPlan.color);
  return (
    <div>
      <div
        className={classNames(
          `border-t-[${colorPlan.color}]`,
          "m-4 p-5 border border-t-4  rounded flex-1 min-w-[250px] max-w-[350px] text-center flex flex-col sm:w-[250px] md:w-[270px] lg:w-[300px]"
        )}
      >
        <div className="h-6 self-center">
          {withPopularTag ? (
            <Text
              renderBlock={(props) => (
                <div
                  className={`px-2 pt-px pb-1 rounded-b text-xs font-bold uppercase text-white bg-[#50d71e] -mt-5`}
                >
                  {props.children}
                </div>
              )}
              placeholder="Tag"
              propName="popularTagText"
            />
          ) : null}
        </div>
        <div>
          <Text
            renderBlock={(props) => (
              <h2
                className={`text-2xl text-[${colorPlan.color}] font-bold mb-4`}
              >
                {props.children}
              </h2>
            )}
            placeholder="Plan name..."
            propName="planName"
          />

          <RichText
            renderBlock={(props) => (
              <p className={`text-lg text-[${colorPlan.color}]`}>
                {props.children}
              </p>
            )}
            placeholder="Description..."
            propName="planDescription"
          />
        </div>
        <div className="text-center mb-4">
          <Text
            renderBlock={(props) => (
              <strong className="block text-3xl font-bold pt-4">
                {props.children}
              </strong>
            )}
            placeholder="Price"
            propName="planPrice"
          />

          <Text
            renderBlock={(props) => (
              <p className={`text-[${colorPlan.color}] mb-2`}>
                {props.children}
              </p>
            )}
            placeholder="per user / per month..."
            propName="planConditions"
          />
        </div>
        <Link
          href={buttonLinkPath}
          className={`cursor-pointer block ${
            withSecondButton ? `mb-4` : `mb-8`
          } text-center text-lg py-2 px-3 sm:px-5 rounded text-[${
            colorPlan.color
          }] hover:text-white font-medium border-2 border-[${
            colorPlan.color
          }] hover:bg-[${
            colorPlan.color
          }] hover:shadow-lg transition duration-200`}
        >
          <Text
            renderBlock={(props) => <div>{props.children}</div>}
            placeholder="Action"
            propName="buttonText"
          />
        </Link>
        {withSecondButton ? (
          <Link
            href={seconButtonLinkPath}
            className="cursor-pointer block mb-8 text-center text-sm py-1 px-3 sm:px-5 rounded text-white bg-purple-500 hover:bg-indigo-500 font-medium hover:shadow-lg transition duration-200"
          >
            <Text
              renderBlock={(props) => <div>{props.children}</div>}
              placeholder="Second action"
              propName="secondButtonText"
            />
          </Link>
        ) : null}
        <div className="flex-1 flex flex-col ">
          <Text
            renderBlock={(props) => (
              <p className="text-sm text-gray-500 text-left mb-4">
                {props.children}
              </p>
            )}
            placeholder="type a text"
            propName="featuresTitle"
          />

          <ul className="text-lg text-gray-700 text-left">
            <Repeater
              propName="features"
              renderItemWrapper={(items) => (
                <li className="flex items-center space-x-2 mb-2">{items}</li>
              )}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

PricingPlan.schema = {
  name: blockNames.PricingPlan,
  label: "Plan",
  category: "pricing",
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    popularTagText: "Most popular",
    withPopularTag: false,
    planName: "custom",
    planDescription: "For startups and teams starting using React Bricks.",
    planPrice: "$ 99",
    planConditions: "per app / month",
    buttonTextText: "get started",
    buttonLinkPath: "",
    withSecondButton: false,
    featuresTitle: "Everything in Community, plus:",
    backgroundColor: { color: "#06b6d4", className: "bg-cyan-500" },
  }),
  repeaterItems: [
    {
      name: "features",
      itemType: blockNames.PlanFeature,
      itemLabel: "feature",
      min: 0,
      max: 15,
    },
  ],
  sideEditProps: [
    {
      groupName: "plan",
      props: [
        backgroundColorsEditProps,
        badgeColorsEditProps,
        buttonColorsEditProps,

        {
          name: "withPopularTag",
          label: "Popular tag",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "buttonLinkPath",
          label: "Button link",
          type: types.SideEditPropType.Text,
        },
        {
          name: "withSecondButton",
          label: "Second button?",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "seconButtonLinkPath",
          label: "Second button link",
          type: types.SideEditPropType.Text,
          show: (props) => !!props.withSecondButton,
        },
        {
          name: "colorPlan",
          label: "color plan",
          type: types.SideEditPropType.Select,
          shouldRefreshText: true,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              bgColors.WHITE,
              bgColors.GRAY,
              bgColors.AMBER,
              bgColors.ORANGE,
            ],
          },
        },
      ],
    },
  ],
};

export default PricingPlan;

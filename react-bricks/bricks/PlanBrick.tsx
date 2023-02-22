import React from "react";
import { types } from "react-bricks/frontend";
import { RichText, Text, Link, Repeater } from "react-bricks/frontend";
import blockNames from "./layout/blockNames";

interface PlanBrickProps {
  extraTag: boolean;
  href: string;
  hrefExtra: string;
  extraButton: boolean;
}

const PlanBrick: types.Brick<PlanBrickProps> = ({
  extraTag,
  href,
  hrefExtra,
  extraButton,
}) => {
  return (
    <div>
      <div className="m-4 p-5 border border-t-4 border-t-cyan-500 rounded flex-1 min-w-[250px] max-w-[350px] text-center flex flex-col sm:w-[250px] md:w-[270px] lg:w-[300px]">
        <div className="h-6 self-center">
          {extraTag ? (
            <Text
              renderBlock={(props) => (
                <div className="px-2 pt-px pb-1 rounded-b text-xs font-bold uppercase text-white bg-purple-600 -mt-5">
                  {props.children}
                </div>
              )}
              placeholder="type a title..."
              propName="planExtraTag"
            />
          ) : null}
        </div>
        <div className="">
          <Text
            renderBlock={(props) => (
              <h2 className="text-2xl text-cyan-500 font-bold mb-4">
                {props.children}
              </h2>
            )}
            placeholder="type a title..."
            propName="planTitle"
          />

          <RichText
            renderBlock={(props) => (
              <p className="text-lg text-gray-600">{props.children}</p>
            )}
            placeholder="paragraph"
            propName="planParagraph"
          />
        </div>
        <div className="text-center mb-4">
          <Text
            renderBlock={(props) => (
              <strong className="block text-3xl font-bold pt-4">
                {props.children}
              </strong>
            )}
            placeholder="type a title..."
            propName="planPrice"
          />

          <Text
            renderBlock={(props) => (
              <p className="text-gray-500 mb-2">{props.children}</p>
            )}
            placeholder="type a title..."
            propName="planDuration"
          />
        </div>
        <Link
          propName="planLinkButton"
          href={href}
          className={`cursor-pointer block ${
            extraButton ? `mb-4` : `mb-8`
          } text-center text-lg py-2 px-3 sm:px-5 rounded text-cyan-600 hover:text-white font-medium border-2 border-cyan-500 hover:bg-cyan-500 hover:shadow-lg transition duration-200`}
        >
          <Text
            renderBlock={(props) => <div>{props.children}</div>}
            placeholder="type a link text..."
            propName="linkText"
          />
        </Link>
        {extraButton ? (
          <Link
            propName="extraButtonLink"
            href={hrefExtra}
            className="cursor-pointer block mb-8 text-center text-sm py-1 px-3 sm:px-5 rounded text-white bg-purple-500 hover:bg-indigo-500 font-medium hover:shadow-lg transition duration-200"
          >
            <Text
              renderBlock={(props) => <div>{props.children}</div>}
              placeholder="type a link text..."
              propName="linkText"
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

          <ul className="text-lg text-gray-700 text-left mt-3">
            <Repeater
              propName="plan-feature"
              renderItemWrapper={(items) => (
                <li className="flex items-center space-x-2 mb-2">{items}</li>
              )}
              itemProps={{}}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

PlanBrick.schema = {
  name: blockNames.PlanBrick,
  label: "plan brick",
  category: "rb-ui website",
  hideFromAddMenu: true,
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
    extraButton: false,
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
        {
          name: "extraButton",
          label: "with extra button",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "hrefExtra",
          label: "redirect extra button link",
          type: types.SideEditPropType.Text,
          validate: (value) =>
            value && value.length > 10 && String(value).startsWith("https://"),
        },
      ],
    },
  ],
};

export default PlanBrick;

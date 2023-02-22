import React from "react";
import { types } from "react-bricks/frontend";
import { RichText, Text, Image, Link, Repeater } from "react-bricks/frontend";
import blockNames from "./layout/blockNames";

interface PlanBrickProps {
  extraTag: boolean;
  href: string;
}

const PlanBrick: types.Brick<PlanBrickProps> = ({ extraTag, href }) => {
  return (
    <div className="flex justify-center">
      <div className="m-4 p-5 border border-t-4 border-t-cyan-500 rounded flex-1 min-w-[250px] max-w-[300px] text-center flex flex-col">
        <div className="self-center">
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
        <div className="mb-3">
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
            placeholder="Role"
            propName="planParagraph"
          />
        </div>
        <div className="mb-2 flex flex-col justify-center gap-y-1.5">
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
              <p className="text-gray-500">{props.children}</p>
            )}
            placeholder="type a title..."
            propName="planDuration"
          />

          <Link
            propName="planLinkButton"
            href={href}
            className="cursor-pointer block mb-8 text-center text-lg py-2 px-3 sm:px-5 rounded text-cyan-600 hover:text-white font-medium border-2 border-cyan-500 hover:bg-cyan-500 hover:shadow-lg transition duration-200"
          >
            <Text
              renderBlock={(props) => <div>{props.children}</div>}
              placeholder="type a link text..."
              propName="linkText"
            />
          </Link>
        </div>
        <div className="flex-1 flex flex-col mt-3">
          <Text
            renderBlock={(props) => <p>{props.children}</p>}
            placeholder="type a text"
            propName="featuresTitle"
          />

          <ul className="text-lg text-gray-700 text-left">
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

export default PlanBrick;

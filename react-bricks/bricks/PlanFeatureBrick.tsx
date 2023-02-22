import React from "react";
import { types } from "react-bricks/frontend";
import { Text } from "react-bricks/frontend";
import blockNames from "./layout/blockNames";

interface PlanFeatureBrickProps {
  extraTag?: boolean;
}

const PlanFeatureBrick: types.Brick<PlanFeatureBrickProps> = ({ extraTag }) => {
  return (
    <div>
      <Text
        renderBlock={(props) => (
          <span>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="inline-block align-middle flex-shrink-0 text-lg text-lime-500 mr-2"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <span className="align-middle">{props.children}</span>
            {extraTag ? (
              <div className="inline-block align-middle ml-1.5">
                <Text
                  renderBlock={(props) => (
                    <span className="align-middle text-sm px-1 py-1 leading-none rounded bg-cyan-200 font-medium text-cyan-800">
                      {props.children}
                    </span>
                  )}
                  placeholder="type a title..."
                  propName="featureExtraTag"
                />
              </div>
            ) : null}
          </span>
        )}
        placeholder="type a text"
        propName="featureText"
      />
    </div>
    //add extra tag for feature <span class="text-sm px-1 py-1 leading-none rounded bg-cyan-200 font-medium text-cyan-800">soon</span>
  );
};

PlanFeatureBrick.schema = {
  name: blockNames.PlanFeatureBrick,
  label: "feature",
  category: "rb-ui website",
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    featureText: "Hi , i'm a feature!",
    featureExtraTag: "Soon",
    extraTag: false,
  }),
  sideEditProps: [
    {
      groupName: "feature",
      props: [
        {
          name: "extraTag",
          label: "With extra tag",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "featureExtraTag",
          label: "extra tag text",
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
};

export default PlanFeatureBrick;

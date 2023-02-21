import React from "react";
import { types } from "react-bricks/frontend";
import { RichText, Text, Image, Link } from "react-bricks/frontend";
import blockNames from "./layout/blockNames";

interface ThumbBrickProps {
  withIcon: boolean;
  withTitle: boolean;
  withLink: boolean;
  href: string;
}

const ThumbBrick: types.Brick<ThumbBrickProps> = ({
  withIcon,
  withTitle,
  withLink,
  href,
}) => {
  return (
    <div className={`p-7 flex border border-slate-200 rounded`}>
      {withIcon ? (
        <Image
          propName="icon"
          alt="logo"
          imageClassName={`text-left object-contain w-10 h-10 mr-5`}
        />
      ) : null}

      <div className="w-full">
        {withTitle ? (
          <Text
            renderBlock={(props) => (
              <div className="font-bold mb-1">{props.children}</div>
            )}
            placeholder="type a title..."
            propName="title"
          />
        ) : null}
        <RichText
          renderBlock={(props) => (
            <div className="text-base text-gray-600 font-normal ">
              {props.children}
            </div>
          )}
          placeholder="Role"
          propName="text"
        />
        <div className="w-full mt-2 flex">
          {withLink ? (
            <Link
              propName="link"
              href={href}
              className="w-full cursor-pointer inline-block text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
            >
              <Text
                renderBlock={(props) => <div>{props.children}</div>}
                placeholder="type a link text..."
                propName="linkText"
              />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};

ThumbBrick.schema = {
  name: blockNames.ThumbBrick,
  label: "thumb",
  category: "rb-ui website",
  getDefaultProps: () => ({
    linkText: "type a link text",
  }),
  sideEditProps: [
    {
      groupName: "thumb",
      props: [
        {
          name: "withIcon",
          label: "With Icon",
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
    {
      groupName: "title",
      props: [
        {
          name: "withTitle",
          label: "With Title",
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
    {
      groupName: "link",
      props: [
        {
          name: "withLink",
          label: "With Link",
          type: types.SideEditPropType.Boolean,
        },
        {
          name: "href",
          label: "link",
          type: types.SideEditPropType.Text,
          validate: (value) =>
            value && value.length > 10 && String(value).startsWith("https://"),
        },
      ],
    },
  ],
};

export default ThumbBrick;

import React from "react";
import { types } from "react-bricks/frontend";
import { RichText, Text, Image, Link } from "react-bricks/frontend";
import Container from "./layout/Container";

import blockNames from "./layout/blockNames";

interface ThumbLinkProps {
  href: string;
  withIcon: boolean;
  withTitle: boolean;
}

const ThumbLink: types.Brick<ThumbLinkProps> = ({
  href,
  withIcon,
  withTitle,
}) => {
  return (
    <Container>
      <Link
        propName="link"
        href={href}
        className="flex cursor-pointer group border border-slate-200 p-4 rounded hover:-translate-y-px hover:border-sky-500 hover:shadow-md transition-all ease-out duration-150"
      >
        {withIcon ? (
          <Image
            propName="icon"
            alt="logo"
            imageClassName={`text-left object-contain w-10 h-10 mr-4`}
          />
        ) : null}

        <div className="w-full hover:text-sky-500">
          {withTitle ? (
            <Text
              renderBlock={(props) => (
                <div className="font-bold mb-1 group-hover:text-sky-500  transition-all ease-out duration-150">
                  {props.children}
                </div>
              )}
              placeholder="type a title..."
              propName="title"
            />
          ) : null}

          <RichText
            renderBlock={(props) => (
              <div className="text-gray-600 group-hover:text-sky-500  transition-all ease-out duration-150">
                {props.children}
              </div>
            )}
            placeholder="type a text..."
            propName="text"
          />
        </div>
      </Link>
    </Container>
  );
};

ThumbLink.schema = {
  name: blockNames.ThumbLink,
  label: "thumb link",
  category: "rb-ui website",
  getDefaultProps: () => ({
    title: "type a title",
  }),
  repeaterItems: [],
  sideEditProps: [
    {
      groupName: "icon",
      props: [
        {
          name: "withIcon",
          label: "With Icon",
          type: types.SideEditPropType.Boolean,
        },
      ],
    },

    {
      groupName: "link",
      props: [
        {
          name: "href",
          label: "link ref",
          type: types.SideEditPropType.Text,
          validate: (value) =>
            value && value.length > 10 && String(value).startsWith("https://"),
        },
      ],
    },
    {
      groupName: "title",
      props: [
        {
          name: "withTitle",
          label: "with title?",
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
  ],
};

export default ThumbLink;

import React from "react";
import { types } from "react-bricks/frontend";
import { RichText, Text, Image, Link } from "react-bricks/frontend";
import Container, { Size } from "./layout/Container";
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from "./layout/LayoutSideProps";
import blockNames from "./layout/blockNames";

interface ThumbBrickProps {
  width?: Size;
  withIcon: boolean;
  withTitle: boolean;
  withLink: boolean;
  href: string;
}

const ThumbBrick: types.Brick<ThumbBrickProps> = ({
  width,
  withIcon,
  withTitle,
  withLink,
  href,
}) => {
  return (
    <Container size={width} className={`flex border border-slate-200 rounded`}>
      {withIcon ? (
        <div className={`flex mr-5`}>
          <Image
            propName="icon"
            alt="logo"
            imageClassName={`object-contain w-10 h-10`}
          />
        </div>
      ) : null}

      <div className="w-full">
        {withTitle ? (
          <Text
            renderBlock={(props) => (
              <div className="text-base font-bold mb-1">{props.children}</div>
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
        <div className="w-full">
          {withLink ? (
            <Link
              propName="link"
              href={href}
              className="cursor-pointer inline-block text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
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
    </Container>
  );
};

ThumbBrick.schema = {
  name: blockNames.ThumbBrick,
  label: "thumb",
  category: "rb-ui website",
  getDefaultProps: () => ({
    href: "",
    linkText: "type a text...",
    withIcon: true,
    withTitle: true,
    withLink: true,
    width: "lg",
  }),
  repeaterItems: [],
  sideEditProps: [
    {
      groupName: "Layout",
      defaultOpen: true,
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
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

import React from "react";
import { types } from "react-bricks/frontend";
import { RichText, Text, Image, Link } from "react-bricks/frontend";
import { FaArrowRight } from "react-icons/fa";
import Container, { Size } from "./layout/Container";
import Section from "./layout/Section";
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from "./layout/LayoutSideProps";
import blockNames from "./layout/blockNames";

interface ThumbBrickProps {
  bg?: { color: string; className: string };
  width?: Size;
  withIcon: boolean;
  withTitle: boolean;
  withLink: boolean;
  linkProps: { href: string; target: string; className: string };
  iconSize: string;
  iconPosition: string;
  linkText:string;
}

const ThumbBrick: types.Brick<ThumbBrickProps> = ({
  bg,
  width,
  withIcon,
  withTitle,
  withLink,
  linkProps,
  iconSize,
  iconPosition,
  linkText
}) => {
  console.log(iconSize, "ciao");
  return (
    <Section bg={bg}>
      <Container size={width} className={`grid grid-cols-2`}>
        {withIcon === true ? (
          <div className={`flex justify-${iconPosition}`}>
            <Image
              propName="icon"
              alt="logo"
              imageClassName={`w-${iconSize} h-${iconSize}`}
            />
          </div>
        ) : null}

        <div>
          {withTitle === true ? (
            <div>
              <Text
                renderBlock={(props) => (
                  <div className="text-xs">{props.children}</div>
                )}
                placeholder="Role"
                propName="title"
              />
            </div>
          ) : null}
          <RichText
            renderBlock={(props) => <div className="">{props.children}</div>}
            placeholder="Role"
            propName="text"
          />
          {withLink === true ? (
            <div>
              <Link
                propName="link"
                href={linkProps?.href}
                className="inline-block text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
                renderLink={(props) => <div className="">{props.children}</div>}
              
              >
              {linkText}
                
              
              
              </Link>
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
};

ThumbBrick.schema = {
  name: "ThumbBrick",
  label: "thumb",
  category: "rb-ui website",
  getDefaultProps: () => ({
    href: "",
    iconSize: 6,
    iconPosition: "end",
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

        {
          name: "iconSize",
          label: "icon size",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 4 /* 16px*/, label: "small" },
              { value: 6 /* 24px*/, label: "medium" },
              { value: 8 /* 32px*/, label: "big" },
            ],
          },
        },

        {
          name: "iconPosition",
          label: "icon position",
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: "center", label: "center" },
              { value: "end", label: "end" },
              { value: "start", label: "start" },
            ],
          },
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
        {
          name: "linkText",
          label: "link text",
          type: types.SideEditPropType.Text,
         
        },
      ],
    },
  ],
};

export default ThumbBrick;

//import classNames from "classnames";
import React from "react";
import { types, Text } from "react-bricks/frontend";
//import blockNames from '../blockNames'

export interface ContactItemProps {}

const ContactItem: types.Brick<ContactItemProps> = ({}) => {
  return (
    <div className="">
      <Text
        propName="contactTitle"
        placeholder="contact title..."
        renderBlock={(props) => (
          <h3
            className="font-semibold text-gray-900 dark:text-white"
            {...props.attributes}
          >
            {props.children}
          </h3>
        )}
      />
      <Text
        propName="contactAddress"
        multiline={true}
        placeholder="address..."
        renderBlock={(props) => (
          <address
            className="pt-2 text-gray-600 leading-5 not-italic dark:text-white/60"
            {...props.attributes}
          >
            {props.children}
          </address>
        )}
      />
    </div>
  );
};

ContactItem.schema = {
  name: "ContactItem",
  label: "contact item",
  category: "rb-ui website",
  hideFromAddMenu: true,
  playgroundLinkLabel: "View source code on Github",
  playgroundLinkUrl: "",
  getDefaultProps: () => ({
    contactTitle: "Los Angeles",
    contactAddress: "4556 Brendan Ferry\nLos Angeles, CA 90210",
  }),
  sideEditProps: [],
};
export default ContactItem;

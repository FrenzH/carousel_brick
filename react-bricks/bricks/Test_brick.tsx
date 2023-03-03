import React from "react";

import { Plain, types } from "react-bricks/frontend";

interface ThumbBrickProps {}

const Test_brick: types.Brick<ThumbBrickProps> = ({}) => {
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

Test_brick.schema = {
  name: "test_brick",
  label: "thumb",
  category: "rb-ui website",
  hideFromAddMenu: true,
  getDefaultProps: () => ({}),
  sideEditProps: [],
};

export default Test_brick;

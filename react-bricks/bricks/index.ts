import { types } from "react-bricks/frontend";
import website from "react-bricks-ui/website";
import blog from "react-bricks-ui/blog";
import ThumbBrick from "./ThumbBrick";
import CarouselBrick from "./CarouselBrick";
import ThumbBrickContainer from "./ThumbBrickContainer";
import ThumbLink from "./ThumbLink";
import ThumbLinkContainer from "./ThumbLinkContainer";
import PricingPlan from "./PlanBrick";
import Pricing from "./BusinessPlanBrick";
import PlanFeature from "./PlanFeatureBrick";

import Table from "./Table";
import TableCell from "./TableCell";
import TableRow from "./TableRow";

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  CarouselBrick,
  ThumbBrick,
  ThumbBrickContainer,
  ThumbLink,
  ThumbLinkContainer,
  PricingPlan,
  Pricing,
  PlanFeature,

  Table,
  TableCell,
  TableRow,
  // Example custom brick
  // Put here your other bricks...
];

export default bricks;

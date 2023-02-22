import { types } from "react-bricks/frontend";
import website from "react-bricks-ui/website";
import blog from "react-bricks-ui/blog";
import ThumbBrick from "./ThumbBrick";
import CarouselBrick from "./CarouselBrick";
import ThumbBrickContainer from "./ThumbBrickContainer";
import ThumbLink from "./ThumbLink";
import ThumbLinkContainer from "./ThumbLinkContainer";
import PlanBrick from "./PlanBrick";
import BusinessPlan4Brick from "./BusinessPlan4Brick";
import PlanFeatureBrick from "./PlanFeatureBrick";
import BusinessPlan3Brick from "./BusinessPlan3Brick";

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  CarouselBrick,
  ThumbBrick,
  ThumbBrickContainer,
  ThumbLink,
  ThumbLinkContainer,
  PlanBrick,
  BusinessPlan4Brick,
  PlanFeatureBrick,
  BusinessPlan3Brick,
  // Example custom brick
  // Put here your other bricks...
];

export default bricks;

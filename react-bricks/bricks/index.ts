import { types } from "react-bricks/frontend";
import website from "react-bricks-ui/website";
import blog from "react-bricks-ui/blog";
import ThumbBrick from "./ThumbBrick";
import CarouselBrick from "./CarouselBrick";
import ThumbBrickContainer from "./ThumbBrickContainer";
import ThumbLink from "./ThumbLink";
import ThumbLinkContainer from "./ThumbLinkContainer";
import PricingPlan from "./PricingPlan";
import Pricing from "./Pricing";
import PlanFeature from "./PlanFeature";
import NewsLetter from "./newsLetter";
import Table from "./Table";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import CallToAction2 from "./newsLetter2";
import TeamList from "./Team";
import TeamListItem from "./TeamListItem";
import Document from "./document";
import Documents from "./documents";
import ContactSection from "./ContactsSection";
import ContactItem from "./ContactItem";
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
  NewsLetter,
  Table,
  TableCell,
  TableRow,
  CallToAction2,
  TeamList,
  TeamListItem,
  Document,
  Documents,
  ContactItem,
  ContactSection,
  // Example custom brick
  // Put here your other bricks...
];

export default bricks;

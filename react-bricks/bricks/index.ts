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
import FormBuilder from "./form/FormBuilder";
import FormButton from "./form/FormButton";
import FormCheckbox from "./form/FormCheckbox";
import FormInput from "./form/FormInput";
import FormRadiobuttons from "./form/FormRadiobuttons";
import FormSelect from "./form/FormSelect";
import FormSingleRadio from "./form/FormSingleRadio";
import FormTextarea from "./form/FormTextarea";
import GetInTouch from "./GetInTouch";

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
  FormBuilder,
  FormButton,
  FormCheckbox,
  FormInput,
  FormRadiobuttons,
  FormSelect,
  FormSingleRadio,
  FormTextarea,
  GetInTouch,

  // Example custom brick
  // Put here your other bricks...
];

export default bricks;

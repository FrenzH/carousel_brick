import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import ThumbBrick from './ThumbBrick'
import CarouselBrick from './CarouselBrick'
import ThumbBrickContainer from './ThumbBrickContainer'
import ThumbLink from './ThumbLink'
import ThumbLinkContainer from './ThumbLinkContainer'
import PlanBrick from './PlanBrick'
import BusinessPlanBrick from './BusinessPlanBrick'
import PlanFeatureBrick from './PlanFeatureBrick'
import BusinessPlan3Brick from './BusinessPlan3Brick'
import Table from './Table'
import TableCell from './TableCell'
import TableRow from './TableRow'
import XlsxBrick from './XlsxBrick'

const bricks: types.Brick<any>[] = [
  ...website, // React Bricks UI
  ...blog,
  CarouselBrick,
  ThumbBrick,
  ThumbBrickContainer,
  ThumbLink,
  ThumbLinkContainer,
  PlanBrick,
  BusinessPlanBrick,
  PlanFeatureBrick,
  BusinessPlan3Brick,
  Table,
  TableCell,
  TableRow,
  XlsxBrick,
  // Example custom brick
  // Put here your other bricks...
]

export default bricks

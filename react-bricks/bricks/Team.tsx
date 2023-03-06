import React from 'react'
import { types } from 'react-bricks/frontend'
import { RichText, Text } from 'react-bricks/frontend'
import blockNames from '../shared/blockNames'
import Container, { Size } from '../shared/components/Container'
import Section from '../shared/components/Section'
import {
  containerSizeEditProps,
  neutralBackgroundColorsEditProps,
} from '../shared/LayoutSideProps'

export interface TeamListProps {
  backgroundColor?: { color: string; className: string }
  width?: Size
}

const TeamList: types.Brick<TeamListProps> = ({ backgroundColor, width }) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container size={width}></Container>
    </Section>
  )
}

TeamList.schema = {
  name: 'TeamList',
  label: 'team list',
  category: '',
  hideFromAddMenu: false,
  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default TeamList

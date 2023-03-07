import classNames from 'classnames'
import React from 'react'
import { types } from 'react-bricks/frontend'
import { Repeater } from 'react-bricks/frontend'
import blockNames from '../shared/blockNames'
import Container from '../shared/components/Container'
import Section from '../shared/components/Section'
import {
  backgroundSideGroup,
  containerSizeEditProps,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../shared/LayoutSideProps'
export interface TeamListItemProps extends LayoutProps {}

const TeamList: types.Brick<TeamListItemProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        size={width}
      >
        <div
          className={classNames(
            'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5',
            { 'xl:grid-cols-6': width === 'medium' }
          )}
        >
          <Repeater propName="teamListItem" />
        </div>
      </Container>
    </Section>
  )
}

TeamList.schema = {
  name: 'TeamList',
  label: 'team list',
  category: '',
  hideFromAddMenu: false,
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    teamListItem: [
      {
        memberName: 'Matteo Frana',
        role: 'Frontend Designer',

        picture: {
          src: 'https://images.reactbricks.com/original/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-200.jpg 200w',
        },
      },
      {
        memberName: 'Dario Ronzoni',
        role: 'Backend Designer',

        picture: {
          src: 'https://images.reactbricks.com/original/a439e3bd-066d-4a04-84cf-3be233814f56.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/a439e3bd-066d-4a04-84cf-3be233814f56.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/a439e3bd-066d-4a04-84cf-3be233814f56-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/a439e3bd-066d-4a04-84cf-3be233814f56-200.jpg 200w',
        },
      },
      {
        memberName: 'Cecilia Panicali',
        role: 'Frontend Designer',

        picture: {
          src: 'https://images.reactbricks.com/original/36a83dc9-58bd-419a-8c51-c78feeda3d6e.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/36a83dc9-58bd-419a-8c51-c78feeda3d6e.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/36a83dc9-58bd-419a-8c51-c78feeda3d6e-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/36a83dc9-58bd-419a-8c51-c78feeda3d6e-200.jpg 200w',
        },
      },
      {
        memberName: 'Roberta',
        role: 'Marketing',

        picture: {
          src: 'https://images.reactbricks.com/original/83791a26-9465-49da-b4ef-61b0425fbba0.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/83791a26-9465-49da-b4ef-61b0425fbba0.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/83791a26-9465-49da-b4ef-61b0425fbba0-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/83791a26-9465-49da-b4ef-61b0425fbba0-200.jpg 200w',
        },
      },
      {
        memberName: 'Matteo Frana',
        role: 'Frontend Designer',

        picture: {
          src: 'https://images.reactbricks.com/original/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-200.jpg 200w',
        },
      },
      {
        memberName: 'Dario Ronzoni',
        role: 'Backend Designer',

        picture: {
          src: 'https://images.reactbricks.com/original/a439e3bd-066d-4a04-84cf-3be233814f56.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/a439e3bd-066d-4a04-84cf-3be233814f56.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/a439e3bd-066d-4a04-84cf-3be233814f56-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/a439e3bd-066d-4a04-84cf-3be233814f56-200.jpg 200w',
        },
      },
      {
        memberName: 'Cecilia Panicali',
        role: 'Frontend Designer',

        picture: {
          src: 'https://images.reactbricks.com/original/36a83dc9-58bd-419a-8c51-c78feeda3d6e.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/36a83dc9-58bd-419a-8c51-c78feeda3d6e.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/36a83dc9-58bd-419a-8c51-c78feeda3d6e-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/36a83dc9-58bd-419a-8c51-c78feeda3d6e-200.jpg 200w',
        },
      },
      {
        memberName: 'Roberta Ferrari',
        role: 'Marketing',

        picture: {
          src: 'https://images.reactbricks.com/original/83791a26-9465-49da-b4ef-61b0425fbba0.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/83791a26-9465-49da-b4ef-61b0425fbba0.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/83791a26-9465-49da-b4ef-61b0425fbba0-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/83791a26-9465-49da-b4ef-61b0425fbba0-200.jpg 200w',
        },
      },
      {
        memberName: 'Matteo Frana',
        role: 'Frontend Designer',

        picture: {
          src: 'https://images.reactbricks.com/original/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-200.jpg 200w',
        },
      },
      {
        memberName: 'Dario Ronzoni',
        role: 'Backend Designer',

        picture: {
          src: 'https://images.reactbricks.com/original/a439e3bd-066d-4a04-84cf-3be233814f56.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/a439e3bd-066d-4a04-84cf-3be233814f56.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/a439e3bd-066d-4a04-84cf-3be233814f56-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/a439e3bd-066d-4a04-84cf-3be233814f56-200.jpg 200w',
        },
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'teamListItem',
      itemType: 'teamListItem',
      itemLabel: 'Member',
      min: 0,
      max: 30,
    },
  ],
  sideEditProps: [
    backgroundSideGroup,
    paddingBordersSideGroup,
    containerSizeEditProps,
  ],
}

export default TeamList

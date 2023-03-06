import * as React from 'react'
import { Image, types, Text } from 'react-bricks/frontend'
import { FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi'

export interface TeamListItemProps {
  twitter?: string
  github?: string
  linkedin?: string
}

const TeamListItem: types.Brick<TeamListItemProps> = ({
  twitter,
  github,
  linkedin,
}) => {
  return (
    <div className="mr-[5%] mb-[20px]">
      <Image
        propName="picture"
        alt="team-item"
        imageClassName="w-20 h-20 rounded-full"
        renderWrapper={({ children }) => (
          <div className="block mb-1">{children}</div>
        )}
      />

      <Text
        renderBlock={(props) => (
          <div className="text-sm font-bold mb-1">{props.children}</div>
        )}
        placeholder="Member name..."
        propName="memberName"
      />
      <Text
        renderBlock={(props) => <div className="text-xs">{props.children}</div>}
        placeholder="Role"
        propName="role"
      />
    </div>
  )
}

TeamListItem.schema = {
  name: 'TeamListItem',
  label: 'Team list Item',
  category: 'rb-ui website',
  hideFromAddMenu: false,

  getDefaultProps: () => ({
    memberName: 'Matteo Frana',
    role: 'Frontend Designer',

    picture: {
      src: 'https://images.reactbricks.com/original/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/7e7dcf49-04c8-4494-ab4a-bab1f88056aa.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/7e7dcf49-04c8-4494-ab4a-bab1f88056aa-200.jpg 200w',
    },
  }),
  sideEditProps: [
    {
      groupName: 'Social Media',
      defaultOpen: true,
      props: [],
    },
  ],
}

export default TeamListItem

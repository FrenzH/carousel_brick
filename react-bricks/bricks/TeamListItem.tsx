import React from 'react'
import { Image, types, Text } from 'react-bricks/frontend'
import classNames from 'classnames'

export interface TeamListItemProps {}

const TeamListItem: types.Brick<TeamListItemProps> = ({}) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        propName="picture"
        alt="team-item"
        aspectRatio={1}
        imageClassName={classNames(
          'block w-[72px] h-[72px] object-contain rounded-full shadow-lg mb-1'
        )}
      />

      <Text
        renderBlock={(props) => (
          <div
            className="mb-1 text-sm font-bold text-center text-gray-800
            dark:text-white/90 min-w-[70px]"
          >
            {props.children}
          </div>
        )}
        placeholder="name..."
        propName="memberName"
      />
      <Text
        renderBlock={(props) => (
          <div className="text-xs font-semibold text-center text-gray-600 dark:text-white/70 min-w-[70px]">
            {props.children}
          </div>
        )}
        placeholder="role..."
        propName="role"
      />
      <div>3 icons social</div>
      {/* transition-all ease-out duration-150 hover:-translate-y-[2px] */}
    </div>
  )
}

TeamListItem.schema = {
  name: 'teamListItem',
  label: 'Team list Item',
  category: 'rb-ui website',
  hideFromAddMenu: false,

  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default TeamListItem

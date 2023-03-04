import React, { useState, useEffect } from 'react'
import { types } from 'react-bricks/frontend'
import { RichText, Text, Link, Repeater } from 'react-bricks/frontend'
import blockNames from '../shared/blockNames'

import { getClassName } from './Fn'
import classNames from 'classnames'
import { highlightTextColors } from '../shared/colors'
import { bgColors } from './layout/color'

interface PricingPlanProps {
  withPopularTag: boolean
  buttonLinkPath: string
  withSecondButton: boolean
  seconButtonLinkPath: string

  textColor: { color: string; className: string }
  borderColor: { color: string; className: string }
  tagColor: { color: string; className: string }

  buttonColor: { color: string; className: string }
}

const PricingPlan: types.Brick<PricingPlanProps> = ({
  withPopularTag,
  buttonLinkPath,
  withSecondButton,
  seconButtonLinkPath,
  textColor,
  borderColor,
  tagColor,
  buttonColor,
}) => {
  if (textColor === undefined) {
    textColor = {
      color: '#6b7280',
      className: 'text-gray-500 dark:text-white',
    }
  }
  if (borderColor === undefined) {
    borderColor = {
      color: '#f97316',
      className: 'border-t-orange-500',
    }
  }

  if (tagColor === undefined) {
    tagColor = {
      color: '#f97316',
      className: 'border-orange-500 hover:bg-orange-500',
    }
  }

  if (buttonColor === undefined) {
    buttonColor = {
      color: '#f97316',
      className: 'border-orange-500 hover:bg-orange',
    }
  }
  //console.log(getClassName(bgHover, 'hover'))
  return (
    <div>
      <div
        className={classNames(
          `${getClassName(borderColor, 'border')}`,
          'm-4 p-5 border border-t-4  rounded flex-1 min-w-[250px] max-w-[350px] text-center flex flex-col sm:w-[250px] md:w-[270px] lg:w-[300px]'
        )}
      >
        <div className="h-6 self-center">
          {withPopularTag ? (
            <Text
              renderBlock={(props) => (
                <div
                  className={`px-2 pt-px pb-1 rounded-b text-xs font-bold uppercase text-white ${getClassName(
                    tagColor,
                    'tag'
                  )} -mt-5`}
                >
                  {props.children}
                </div>
              )}
              placeholder="Tag"
              propName="popularTagText"
            />
          ) : null}
        </div>
        <div>
          <Text
            renderBlock={(props) => (
              <h2
                className={`${getClassName(
                  textColor,
                  'textColor'
                )} text-2xl font-bold mb-4`}
              >
                {props.children}
              </h2>
            )}
            placeholder="Plan name..."
            propName="planName"
          />

          <RichText
            renderBlock={(props) => (
              <p className={`text-lg ${getClassName(textColor, 'textColor')}`}>
                {props.children}
              </p>
            )}
            placeholder="Description..."
            propName="planDescription"
          />
        </div>
        <div className="text-center mb-4">
          <Text
            renderBlock={(props) => (
              <strong className="block text-3xl font-bold pt-4 text-black-500 dark:text-white-500">
                {props.children}
              </strong>
            )}
            placeholder="Price"
            propName="planPrice"
          />

          <Text
            renderBlock={(props) => (
              <p className={`${getClassName(textColor, 'textColor')} mb-2`}>
                {props.children}
              </p>
            )}
            placeholder="per user / per month..."
            propName="planConditions"
          />
        </div>
        <Link
          href={buttonLinkPath}
          className={`cursor-pointer block ${
            withSecondButton ? `mb-4` : `mb-8`
          } text-center text-lg py-2 px-3 sm:px-5 rounded ${getClassName(
            textColor,
            'textColor'
          )} hover:text-white font-medium border-2  bg-white-500 ${getClassName(
            buttonColor,
            'button'
          )}  hover:shadow-lg transition duration-200`}
        >
          <Text
            renderBlock={(props) => <div>{props.children}</div>}
            placeholder="Action"
            propName="buttonText"
          />
        </Link>
        {withSecondButton ? (
          <Link
            href={seconButtonLinkPath}
            className="cursor-pointer block mb-8 text-center text-sm py-1 px-3 sm:px-5 rounded text-white bg-purple-500 hover:bg-indigo-500 font-medium hover:shadow-lg transition duration-200"
          >
            <Text
              renderBlock={(props) => <div>{props.children}</div>}
              placeholder="Second action"
              propName="secondButtonText"
            />
          </Link>
        ) : null}
        <div className="flex-1 flex flex-col ">
          <Text
            renderBlock={(props) => (
              <p className="text-sm text-gray-500 text-left mb-4">
                {props.children}
              </p>
            )}
            placeholder="type a text"
            propName="featuresTitle"
          />

          <ul className="text-lg text-gray-700 text-left">
            <Repeater
              propName="features"
              renderItemWrapper={(items) => (
                <li className="flex items-center space-x-2 mb-2">{items}</li>
              )}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

PricingPlan.schema = {
  name: blockNames.PricingPlan,
  label: 'Plan',
  category: 'pricing',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    popularTagText: 'Most popular',
    withPopularTag: false,
    planName: 'custom',
    planDescription: 'For startups and teams starting using React Bricks.',
    planPrice: '$ 99',
    planConditions: 'per app / month',
    buttonTextText: 'get started',
    buttonLinkPath: '',
    withSecondButton: false,
    featuresTitle: 'Everything in Community, plus:',
    highlightTextColor: {
      color: '#6b7280',
      className: 'text-gray-500 dark_text.white',
    },
  }),
  repeaterItems: [
    {
      name: 'features',
      itemType: blockNames.PlanFeature,
      itemLabel: 'feature',
      min: 0,
      max: 15,
    },
  ],
  sideEditProps: [
    {
      groupName: 'plan',
      props: [
        {
          name: 'withPopularTag',
          label: 'Popular tag',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'buttonLinkPath',
          label: 'Button link',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'withSecondButton',
          label: 'Second button?',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'seconButtonLinkPath',
          label: 'Second button link',
          type: types.SideEditPropType.Text,
          show: (props) => !!props.withSecondButton,
        },
        {
          name: 'textColor',
          label: 'text color',
          type: types.SideEditPropType.Select,
          shouldRefreshText: true,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              highlightTextColors.GRAY,
              highlightTextColors.RED,
              highlightTextColors.ORANGE,
              highlightTextColors.AMBER,
              highlightTextColors.YELLOW,
              highlightTextColors.LIME,
              highlightTextColors.GREEN,
              highlightTextColors.EMERALD,
              highlightTextColors.TEAL,
              highlightTextColors.CYAN,
              highlightTextColors.SKY,
              highlightTextColors.BLUE,
              highlightTextColors.INDIGO,
              highlightTextColors.VIOLET,
              highlightTextColors.PURPLE,
              highlightTextColors.FUCHSIA,
              highlightTextColors.PINK,
              highlightTextColors.ROSE,
              highlightTextColors.BLACK,
            ],
          },
        },
        {
          name: 'borderColor',
          label: 'border color',
          type: types.SideEditPropType.Select,
          shouldRefreshText: true,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              highlightTextColors.GRAY,
              highlightTextColors.RED,
              highlightTextColors.ORANGE,
              highlightTextColors.AMBER,
              highlightTextColors.YELLOW,
              highlightTextColors.LIME,
              highlightTextColors.GREEN,
              highlightTextColors.EMERALD,
              highlightTextColors.TEAL,
              highlightTextColors.CYAN,
              highlightTextColors.SKY,
              highlightTextColors.BLUE,
              highlightTextColors.INDIGO,
              highlightTextColors.VIOLET,
              highlightTextColors.PURPLE,
              highlightTextColors.FUCHSIA,
              highlightTextColors.PINK,
              highlightTextColors.ROSE,
            ],
          },
        },
        {
          name: 'tagColor',
          label: 'tag color',
          type: types.SideEditPropType.Select,
          shouldRefreshText: true,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              highlightTextColors.GRAY,
              highlightTextColors.RED,
              highlightTextColors.ORANGE,
              highlightTextColors.AMBER,
              highlightTextColors.YELLOW,
              highlightTextColors.LIME,
              highlightTextColors.GREEN,
              highlightTextColors.EMERALD,
              highlightTextColors.TEAL,
              highlightTextColors.CYAN,
              highlightTextColors.SKY,
              highlightTextColors.BLUE,
              highlightTextColors.INDIGO,
              highlightTextColors.VIOLET,
              highlightTextColors.PURPLE,
              highlightTextColors.FUCHSIA,
              highlightTextColors.PINK,
              highlightTextColors.ROSE,
            ],
          },
        },
        {
          name: 'buttonColor',
          label: 'button color',
          type: types.SideEditPropType.Select,
          shouldRefreshText: true,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [
              highlightTextColors.GRAY,
              highlightTextColors.RED,
              highlightTextColors.ORANGE,
              highlightTextColors.AMBER,
              highlightTextColors.YELLOW,
              highlightTextColors.LIME,
              highlightTextColors.GREEN,
              highlightTextColors.EMERALD,
              highlightTextColors.TEAL,
              highlightTextColors.CYAN,
              highlightTextColors.SKY,
              highlightTextColors.BLUE,
              highlightTextColors.INDIGO,
              highlightTextColors.VIOLET,
              highlightTextColors.PURPLE,
              highlightTextColors.FUCHSIA,
              highlightTextColors.PINK,
              highlightTextColors.ROSE,
            ],
          },
        },
      ],
    },
  ],
}

export default PricingPlan

import useState from 'react'
import React from 'react'
import classNames from 'classnames'
import { Plain, types } from 'react-bricks/frontend'
import { RichText, Text, Image, Link } from 'react-bricks/frontend'
import blockNames from './layout/blockNames'

interface XlsxBrickProps {}
const [files, useFiles] = useState<any>(['ciao'])
console.log(files)
const XlsxBrick: types.Brick<XlsxBrickProps> = ({}) => {
  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          useFiles([e.target.files[0]])
        }}
      />
      <table className=" w-full text-sm border-collapse border-spacing-0.5 sm:overflow-x-auto">
        <thead
          className={classNames(
            'align-middle',
            true ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white'
          )}
        >
          <tr className={`align-middle`}>
            <th
              className={classNames(
                'px-4 py-3 border-gray-300',
                `text-left`,
                false ? '' : 'border'
              )}
            ></th>
          </tr>
        </thead>

        <tbody className="align-middle">
          <tr className={`align-middle bg-gray-100  `}>
            {' '}
            <td
              className={classNames(
                'text-slate-700 border-gray-300 px-4 py-3',
                `text-left`,
                false ? '' : 'border'
              )}
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

XlsxBrick.schema = {
  name: 'xlsx',
  label: 'xlsx',
  category: 'rb-ui website',

  getDefaultProps: () => ({}),
  sideEditProps: [],
}

export default XlsxBrick

/*
{items.map((d) => (
  <tr key={d.InputA}>
    <th>{d.InputA}</th>
    <td>{d.InputB}</td>
  </tr>
))}*/

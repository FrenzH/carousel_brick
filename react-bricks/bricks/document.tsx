import classNames from 'classnames'
import React from 'react'
import { File, types, Image, Text, RichText, Link } from 'react-bricks/frontend'
import { FiFilePlus } from 'react-icons/fi'
//import blockNames from '../blockNames'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { FcDownload } from 'react-icons/fc'
import { FcDocument } from 'react-icons/fc'
export interface DocumentProps {
  color?: { color: string; className: string }
  withSize?: boolean
}

const Document: types.Brick<DocumentProps> = ({ withSize }) => {
  function formatBytes(file) {
    if (!file) return '0 Bytes'
    const k = 1000
    const dm = 1
    const sizes = ['KB', 'MB']
    const i = Math.floor(Math.log(file) / Math.log(k))
    return `${parseFloat((file / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
  }

  return (
    <div className="p-7 flex border border-black/10 dark:border-white/10 bg-white dark:bg-white/10 rounded">
      <File
        propName="file"
        allowedExtensions={['.pdf']}
        renderBlock={(file) => {
          {
            console.log(file)
          }
          return file ? (
            <div className="flex">
              <div className="text-center text-xs text-gray-600 font-semibold mr-4 pt-1 dark:text-white/60">
                <FcDocument size={'40px'} />
                {withSize ? formatBytes(file.size) : null}
              </div>

              <div className="w-full">
                <Text
                  propName="fileName"
                  placeholder="file name..."
                  renderBlock={(props) => (
                    <div
                      className="font-bold mb-1 text-gray-800 dark:text-white"
                      {...props.attributes}
                    >
                      {props.children}
                    </div>
                  )}
                />
                <RichText
                  renderBlock={(props) => (
                    <div
                      className="text-base text-gray-600 font-normal dark:text-white/60"
                      {...props.attributes}
                    >
                      {props.children}
                    </div>
                  )}
                  placeholder="File description..."
                  propName="fileDescription"
                />

                <a
                  target="_blank"
                  href={file.url}
                  className={
                    'w-full mt-2 flex items-center text-sky-500 hover:text-sky-600 text-sky-500 dark:hover:text-sky-400 hover:-translate-y-px transition-all ease-out duration-150'
                  }
                >
                  <Text
                    renderBlock={(props) => (
                      <span className="align-middle" {...props.attributes}>
                        {props.children}
                      </span>
                    )}
                    placeholder=""
                    propName="linkText"
                  />
                  <span className="inline-block align-middle ml-2 ">
                    <FcDownload />
                  </span>
                </a>
              </div>
            </div>
          ) : (
            <div className="flex font-semibold h-full items-center dark:text-white">
              <AiOutlineFileAdd
                className="mr-2 text-sky-500 dark:text-sky-400"
                size={'40px'}
              />
              Add document
            </div>
          )
        }}
      />
    </div>
  )
}

Document.schema = {
  name: 'Document',
  label: 'Document',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Documents/Document.tsx',
  getDefaultProps: () => ({
    fileName: 'fileName.pdf',
    fileDescription: 'file description',
    linkText: 'Download now',
  }),
  sideEditProps: [
    {
      name: 'fileDescription',
      label: 'file description',
      type: types.SideEditPropType.Textarea,
    },
    { name: 'fileName', label: 'file name', type: types.SideEditPropType.Text },
    {
      name: 'withSize',
      label: 'document size',
      type: types.SideEditPropType.Boolean,
    },
    { name: 'linkText', label: 'link text', type: types.SideEditPropType.Text },
  ],
}
export default Document

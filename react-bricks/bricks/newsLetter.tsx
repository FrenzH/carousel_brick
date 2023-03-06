import jsonp from 'jsonp'
import { validate } from 'email-validator'
import React from 'react'
import { types } from 'react-bricks/frontend'
import { RichText, Text, Link, Repeater } from 'react-bricks/frontend'
import blockNames from '../shared/blockNames'
import Container, { Size } from '../shared/components/Container'
import Section from '../shared/components/Section'
import { FaThumbsUp } from 'react-icons/fa'
import {
  containerSizeEditProps,
  neutralBackgroundColorsEditProps,
} from '../shared/LayoutSideProps'
enum NewsletterProvider {
  MailChimp = 'MAILCHIMP',
  ConvertKit = 'CONVERTKIT',
}

export interface NewsletterProps {
  backgroundColor?: { color: string; className: string }
  width?: Size
  provider: NewsletterProvider
  mailchimpUrl: string
  buttonText: string
  resultOkText: string
}

interface IStatus {
  status: string
  message: string
}

const NewsLetter: types.Brick<NewsletterProps> = ({
  backgroundColor,
  width = 'small',
  provider,
  mailchimpUrl,
  buttonText,
  resultOkText = `Thanks,you're all signed up!`,
}) => {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<IStatus>({
    status: 'IDLE',
    message: '',
  })
  const sendData = (url: string) => {
    setStatus({ status: 'SENDING', message: '' })
    jsonp(url, { param: 'c', timeout: 3500 }, (err: any, data: any) => {
      if (err) {
        setStatus({
          status: 'ERROR',
          message: 'An error occurred. Please, try again.',
        })
      } else if (data.msg.includes('already subscribed')) {
        setStatus({ status: 'ERROR', message: 'You were already subscribed' })
      } else if (data.result !== 'success') {
        setStatus({
          status: 'ERROR',
          message: 'An error occurred. Please, try again.',
        })
      } else {
        setStatus({ status: 'SUCCESS', message: '' })
      }
    })
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    /*
    if (provider !== NewsletterProvider.MailChimp) {
      setStatus({
        status: 'ERROR',
        message: 'Provider not implemented',
      })
      return
    }
    */
    const isEmailValid = validate(email)

    if (!isEmailValid) {
      setStatus({
        status: 'ERROR',
        message: 'Please, enter a valid email address',
      })
      return
    }

    if (
      !mailchimpUrl ||
      mailchimpUrl.length < 10 ||
      mailchimpUrl.indexOf('post') === -1
    ) {
      setStatus({
        status: 'ERROR',
        message: 'Invalid Mailchimp URL',
      })
      return
    }

    const emailEncoded = encodeURIComponent(email)
    const endpoint = mailchimpUrl.replace(/\/post/g, '/post-json')
    const url = `${endpoint}?EMAIL=${emailEncoded}`
    sendData(url)
  }

  return (
    <Section backgroundColor={backgroundColor}>
      <Container size={width}>
        <div className="shadow-newsLetter p-[30px] rounded-[5px] dark:shadow dark:shadow-gray-500">
          <div>
            <Text
              renderBlock={(props) => (
                <h3
                  className="mb-1 font-semibold leading-5 dark:text-gray-500"
                  {...props.attributes}
                >
                  {props.children}
                </h3>
              )}
              placeholder="type a title..."
              propName="title"
            />
            <RichText
              propName="text"
              placeholder="Type a text..."
              renderBlock={(props) => (
                <span
                  className="text-sm leading-6 dark:text-white"
                  {...props.attributes}
                >
                  {props.children}
                </span>
              )}
            />
          </div>
          <div className="flex flex-1 items-center mt-3">
            {(status.status === 'IDLE' || status.status == 'ERROR') && (
              <form className="mr-5  flex" onSubmit={handleSubmit}>
                <div className="flex">
                  <div className="relative">
                    <svg
                      viewBox="0 0 14 14"
                      width="14px"
                      height="14px"
                      className="absolute left-4 top-1/2 -mt-[7px] z-10"
                    >
                      <path
                        fill="#9ca3af"
                        d="M0 2.5c0-.27.22-.5.5-.5h13c.28 0 .5.23.5.5v9a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-9Zm1 1.02V11h12V3.52L7.31 7.89a.5.5 0 0 1-.52.07.5.5 0 0 1-.1-.07L1 3.52ZM12.03 3H1.97L7 6.87 12.03 3Z"
                      ></path>
                    </svg>
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="border dark:bg-gray-500 dark:border-gray-500 focus:outline-none rounded-l-[5px] py-2.5 px-[15px] pl-10 text-sm focus:border-sky-500 dark:focus:border-sky-700 "
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="rounded-r-[5px] min-w-[80px] dark:bg-sky-700 text-white align-top bg-sky-500 py-[9px] px-[20px] text-center relative cursor-pointer transition-all ease-out hover:-translate-y-[2px] hover:shadow-lg duration-150"
                >
                  <Text
                    propName="buttonText"
                    placeholder="Action..."
                    renderBlock={(props) => (
                      <span
                        className="text-center dark:text-white"
                        {...props.attributes}
                      >
                        {props.children}
                      </span>
                    )}
                  />
                </button>
              </form>
            )}

            {status.status === 'SUCCESS' && (
              <div className="p-2.5 text-sm font-bold bg-green-200 mr-5 rounded-[5px] min-w-[270px] text-center">
                👍
                {resultOkText}
              </div>
            )}

            <div>
              <RichText
                propName="text2"
                placeholder="Type a text..."
                renderBlock={({ children }) => (
                  <p className="text-gray-500 min-w-[100px] text-sm leading-[18px]">
                    {children}
                  </p>
                )}
              />
            </div>
          </div>
          {status.status === 'ERROR' && (
            <div className="mt-4" style={{ color: '#c00' }}>
              {status.message}
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

NewsLetter.schema = {
  name: 'newsLetter',
  label: 'newsletter',
  category: '',
  hideFromAddMenu: false,
  getDefaultProps: () => ({
    title: 'Join the newsletter',
    text: 'Get free UI development guides and tutorials like this emailed to you.',
    text2: '4,484 developers and counting',
    buttonText: 'Join',
  }),
  sideEditProps: [
    {
      groupName: 'Newsletter',
      defaultOpen: true,
      props: [
        neutralBackgroundColorsEditProps,
        containerSizeEditProps,

        {
          name: 'mailchimpUrl',
          label: 'Mailchimp Form URL',
          type: types.SideEditPropType.Text,
          validate: (value) =>
            value && value.length > 10 && value.indexOf('https://') !== -1,
          //&& value.indexOf('list-manage.com/subscribe/post?') !== -1,
        },
      ],
    },
  ],
}

export default NewsLetter

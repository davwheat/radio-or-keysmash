import { useEffect } from 'react'

import ChooseAnswer from '../components/ChooseAnswer'
import facepaint from 'facepaint'

import { HeadFC, Link, navigate, PageProps } from 'gatsby'

import AnswerInfo from '../components/AnswerInfo'

const breakpoints = [600, 900, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export default function Error404Page(props: PageProps) {
  return (
    <div
      css={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <main css={{ padding: 16, marginTop: 'auto', marginBottom: 'auto' }}>
        <h1
          css={mq({
            fontSize: ['1.5rem', '2rem', '3rem', '3.5rem'],
            margin: '0 1rem',
          })}
        >
          Radio or Keysmash?
        </h1>

        <p css={mq({ fontSize: ['1.5rem', '2rem', '2.5rem'], textTransform: 'lowercase', marginTop: '2em' })}>Error 404</p>

        <p css={mq({ fontSize: ['1.5rem', '2rem', '2.5rem'], textTransform: 'lowercase', marginTop: '2em' })}>
          <Link to="/">Return to game</Link>
        </p>
      </main>

      <footer css={{ padding: 16 }}>
        &copy; {new Date().getFullYear()} David Wheatley &mdash; <a href="https://github.com/davwheat/radio-or-keysmash">open source</a>
      </footer>
    </div>
  )
}

export const Head: HeadFC = () => <title>Error 404 - Radio or keysmash?</title>

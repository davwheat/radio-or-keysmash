import facepaint from 'facepaint'

import type { HeadFC } from 'gatsby'
import type { RadioSelection } from '../functions/chooseRandomRadio'

const breakpoints = [600, 900, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export interface ChooseAnswerProps {
  radioSelection: RadioSelection | null
  onChooseAnswer: (answer: 'radio' | 'keysmash') => void
}

export default function ChooseAnswer({ radioSelection, onChooseAnswer }: ChooseAnswerProps) {
  return (
    <>
      <h1
        css={mq({
          fontSize: ['1.5rem', '2rem', '3rem', '3.5rem'],
          margin: '0 1rem',
        })}
      >
        Radio or Keysmash?
      </h1>

      <p css={{ fontSize: '4.5rem', textTransform: 'lowercase', marginTop: '2em' }}>{radioSelection?.model ?? <>&nbsp;</>}</p>

      <div
        css={mq({
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr'],
          gap: 16,
          maxWidth: 800,
          margin: 'auto',
          width: '100%',
        })}
      >
        <button
          aria-label="radio"
          onClick={() => {
            onChooseAnswer('radio')
          }}
        >
          radio
        </button>
        <button
          aria-label="keysmash"
          onClick={() => {
            onChooseAnswer('keysmash')
          }}
        >
          keysmash
        </button>
      </div>
    </>
  )
}

import { useState } from 'react'

import { getRadioSelection } from '../functions/getRadioSelection'
import facepaint from 'facepaint'

import type { HeadFC, PageProps } from 'gatsby'
import type { RadioSelection } from '../functions/chooseRandomRadio'
import { useCallback } from 'react'

const breakpoints = [600, 900, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export interface ChooseAnswerProps {
  radioSelection: RadioSelection
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

      <p css={{ fontSize: '4.5rem', textTransform: 'lowercase', marginTop: '2em' }}>{radioSelection.model}</p>

      <div css={mq({ display: 'grid', gridTemplateColumns: ['1fr', '1fr 1fr'], gap: 16 })}>
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

export const Head: HeadFC = () => <title>Radio or keysmash?</title>

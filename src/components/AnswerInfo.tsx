import { useState } from 'react'

import { getRadioSelection } from '../functions/getRadioSelection'
import facepaint from 'facepaint'

import type { HeadFC, PageProps } from 'gatsby'
import type { RadioSelection } from '../functions/chooseRandomRadio'
import { useCallback } from 'react'

const breakpoints = [600, 900, 1200]

const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export interface AnswerInfoProps {
  radioSelection: RadioSelection
  onContinue: () => void
  wasCorrectAnswer: boolean
}

export default function AnswerInfo({ radioSelection, onContinue, wasCorrectAnswer }: AnswerInfoProps) {
  return (
    <>
      <h1
        css={mq({
          fontSize: ['1.5rem', '2rem', '3rem', '3.5rem'],
          margin: 0,
        })}
      >
        Radio or Keysmash?
      </h1>

      <p
        aria-live="polite"
        css={mq({ fontSize: ['2rem', '2.5rem', '3rem', '4rem'], fontWeight: 'bold', textTransform: 'lowercase', marginTop: '2em' })}
      >
        {radioSelection.model} is a {radioSelection.isFake ? 'keysmask' : 'radio'}
      </p>

      {!radioSelection.isFake && (
        <p css={mq({ fontSize: ['1.5rem', '2rem', '2.5rem'], textTransform: 'lowercase', marginTop: '2em' })}>{radioSelection.name}</p>
      )}

      <div css={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
        <button aria-label="continue" onClick={() => onContinue()}>
          continue
        </button>
      </div>
    </>
  )
}

export const Head: HeadFC = () => <title>Radio or keysmash?</title>

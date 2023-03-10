import { useEffect, useState } from 'react'

import { getRadioSelection } from '../functions/getRadioSelection'
import ChooseAnswer from '../components/ChooseAnswer'
// import facepaint from 'facepaint'

import type { HeadFC, PageProps } from 'gatsby'
import type { RadioSelection } from '../functions/chooseRandomRadio'
import AnswerInfo from '../components/AnswerInfo'
import { SEO } from '../components/SEO'

// const breakpoints = [600, 900, 1200]

// const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export default function IndexPage(props: PageProps) {
  const [radio, setRadio] = useState<RadioSelection | null>(null)
  const [gameState, setGameState] = useState<'correct' | 'incorrect' | 'guessing'>('guessing')

  function chooseNewRadio() {
    setRadio(getRadioSelection())
  }

  useEffect(() => {
    if (radio === null) chooseNewRadio()
  }, [radio])

  return (
    <div
      css={{
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background 0.5s ease-out',
        background: gameState === 'correct' ? '#2a4d20' : gameState === 'incorrect' ? '#592020' : 'transparent',
      }}
    >
      <main css={{ padding: 16, marginTop: 'auto', marginBottom: 'auto' }}>
        {(gameState === 'guessing' || radio === null) && (
          <ChooseAnswer
            radioSelection={radio}
            onChooseAnswer={answer => {
              if (radio === null) return

              if ((answer === 'radio' && !radio.isFake) || (answer === 'keysmash' && radio.isFake)) {
                setGameState('correct')
              } else {
                setGameState('incorrect')
              }
            }}
          />
        )}
        {gameState !== 'guessing' && radio !== null && (
          <AnswerInfo
            radioSelection={radio}
            onContinue={() => {
              chooseNewRadio()
              setGameState('guessing')
            }}
            wasCorrectAnswer={gameState === 'correct'}
          />
        )}
      </main>

      <footer css={{ padding: 16 }}>
        &copy; {new Date().getFullYear()} David Wheatley &mdash; <a href="https://github.com/davwheat/radio-or-keysmash">open source</a>
      </footer>
    </div>
  )
}

export const Head: HeadFC = () => <SEO />

import React, { Component } from 'react'
import { Spectacle, Deck, Slide, Heading, Image, Appear, CodePane } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import { css } from 'aphrodite'
import { styles } from 'styles'

const theme = createTheme({ primary: '#37474f' })

const a = <CodePane
  margin={ 0 }
  lang="typescript"
  source={ require('raw!../assets/code/hello.ts') } />

export const Presentation = () => (
  <div className={ css(styles.app) }>
    <Spectacle theme={ theme }>
      <Deck transition={[ 'slide' ]} transitionDuration={ 500 }>
        <Slide>
          <Appear>
            <div>
              <h1 className={ css(styles.header) }>
                Carlos Paelinck
              </h1>
              <h2 className={ css(styles.subHeader) }>
                @carlos_paelinck
              </h2>
            </div>
          </Appear>
          <Appear>
            <Image
              src={ require('../assets/d3-logo.png') }
              width={ 128 } />
          </Appear>
        </Slide>
        <Slide>


        </Slide>
      </Deck>
    </Spectacle>
  </div>
)

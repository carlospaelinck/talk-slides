import React, { Component } from 'react'
import { Spectacle, Deck, Slide, Heading, Image } from 'spectacle'
import createTheme from 'spectacle/lib/themes/default'
import { css } from 'aphrodite'
import { styles } from 'styles'

const theme = createTheme({ primary: '#37474f' })

export const Presentation = () => (
  <div className={ css(styles.app) }>
    <Spectacle theme={ theme }>
      <Deck transition={[ 'slide' ]} transitionDuration={ 500 }>
        <Slide></Slide>
        <Slide>
          <h1 className={ css(styles.header) }>
            Carlos Paelinck
          </h1>
          <h2 className={ css(styles.subHeader) }>
            @carlos_paelinck
          </h2>
          <Image src={ require('../assets/d3-logo.png') } width={ 128 } />
        </Slide>
        <Slide>

        </Slide>
      </Deck>
    </Spectacle>
  </div>
)

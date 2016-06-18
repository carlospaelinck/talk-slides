import React, { Component } from 'react'
import { Spectacle, Deck, Slide, Heading, Image, Appear, CodePane } from 'spectacle'
import CodeSlide from '../assets/vendor/spectacle-code-slide'
import createTheme from 'spectacle/lib/themes/default'
import { css } from 'aphrodite'
import { styles } from 'styles'

const theme = createTheme({ primary: '#37474f' })

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
              src={ require('../assets/images/d3-logo.png') }
              width={ 128 } />
          </Appear>
        </Slide>
        <Slide>
          <Image
            src={ require('../assets/images/angular.svg') }
            width={ 500 } />
        </Slide>
        <Slide>
          <h1 className={ css(styles.header) }>
            Components
          </h1>
        </Slide>
        <CodeSlide
          transition={[ 'slide' ]}
          margin={ 0 }
          lang="typescript"
          code={ require('raw!../assets/code/component.ts') }
          ranges={[
            { loc: [0, 1], title: 'The component decorator indicates the class is a component.' },
            { loc: [1, 2], title: 'The selector is how you reference the component in a template.' },
            { loc: [2, 3], title: 'Any component specific styles can be required and scoped.' },
            { loc: [3, 4], title: 'The component template can be required or an inline template string.' },
            { loc: [4, 5], title: 'Any sub-components or directives are injected in the directives array.' }
          ]} />
        <Slide>
          <h1 className={ css(styles.header) }>
            Templates
          </h1>
        </Slide>
        <Slide>
          <h1 className={ css(styles.header) }>
            Observables & Subscribers
          </h1>
        </Slide>
        <Slide>
          <h1 className={ css(styles.header) }>
            State Management
          </h1>
        </Slide>
        <Slide>
          <h1 className={ css(styles.header) }>
            Routing
          </h1>
        </Slide>
        <Slide>
          <h1 className={ css(styles.header) }>
            Guards
          </h1>
        </Slide>
      </Deck>
    </Spectacle>
  </div>
)

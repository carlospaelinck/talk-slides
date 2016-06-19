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
      <Deck
        transition={[ 'slide' ]}
        transitionDuration={ 500 }
        progress="none"
        controls={ false }>
        <Slide>
          <Appear>
            <div>
              <div className={ css(styles.header) }>
                Carlos Paelinck
              </div>
              <div className={ css(styles.subHeader) }>
                @carlos_paelinck • github.com/carlospaelinck
              </div>
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
          <div className={ css(styles.header) }>
            Components
          </div>
        </Slide>
        <CodeSlide
          transition={[ 'slide' ]}
          margin={ 0 }
          lang="typescript"
          code={ require('raw!../assets/code/component.ts') }
          ranges={[
            { loc: [0, 0] },
            { loc: [0, 1], title: 'The component decorator indicates the class is a component.' },
            { loc: [1, 2], title: 'The selector is how you reference the component in a template.' },
            { loc: [2, 3], title: 'Any component specific styles can be required and scoped.' },
            { loc: [3, 4], title: 'The component template can be required or an inline template string.' },
            { loc: [4, 5], title: 'Any sub-components or directives are injected in the directives array.' },
            { loc: [5, 6], title: 'Any services or providers the component uses are injected in the providers array.' },
            { loc: [8, 11], title: 'In TypeScript a class can have properties. All objects accessed from the class must be declared.' },
            { loc: [12, 20], title: 'All injected providers must be constructor params. With access modifiers they are automatically assigned to this.' }
          ]} />
        <Slide>
          <div className={ css(styles.header) }>
            Templates
          </div>
        </Slide>
        <CodeSlide
          transition={[ 'slide' ]}
          margin={ 0 }
          lang="handlebars"
          code={ require('raw!../assets/code/template.html') }
          ranges={[
            { loc: [0, 0] },
            { loc: [0, 1], title: 'A one-way data bind for strings or objects that can be coerced to strings assigned to the controller.' },
            { loc: [2, 5], title: 'A class function can be bound to an action with parentheses.' },
            { loc: [6, 11], title: 'Use *ngFor to enumerate items of a collection.' },
            { loc: [12, 13], title: 'Use *ngIf to include an element on the DOM based on a boolean condition.' },
            { loc: [14, 15], title: 'Objects can be one-way bound to components using brackets.' },
            { loc: [16, 17], title: 'Use brackets and parentheses for two-way data binding.' }
          ]} />
        <Slide>
          <div className={ css(styles.header) }>
            Observables & Subscribers
          </div>
        </Slide>
        <Slide>
          <div className={ css(styles.content) }>
            Observables are asynchronous data streams that an object can subscribe to for updates.
          </div>
        </Slide>
        <Slide>
          <div className={ css(styles.content) }>
            A stream is a sequence of data that can change over time. The data can be a string, object, number, boolean or array.
          </div>
        </Slide>
        <CodeSlide
          transition={[ 'slide' ]}
          margin={ 0 }
          lang="typescript"
          code={ require('raw!../assets/code/observable.ts') }
          ranges={[
            { loc: [0, 0] },
            { loc: [0, 1], title: 'An observable can be created with the ‘of’ function.' },
            { loc: [0, 1], title: 'At this point the observable is cold since nothing has subscribed to it.' },
            { loc: [2, 6], title: 'A subscriber listens to changes on an observable and emits the new value in a callback.' },
            { loc: [2, 6], title: 'The observable now has a subscriber and is considered hot.' },
            { loc: [4, 5], title: 'When a subscriber is created it will emit the last value. The response object is ‘dog’.' },
            { loc: [7, 8], title: 'The next function can provide a new value to the observable. All subscribers will be notified.' },
            { loc: [4, 5], title: 'The subscriber callback is fired and the response object is cat.' },
            { loc: [9, 10], title: 'A subscriber can be decommissioned with the ‘unsubscribe’ function.' }
          ]} />
        <Slide>
          <div className={ css(styles.content) }>
            Services, Http Requests and Observables
          </div>
        </Slide>
        <CodeSlide
          transition={[ 'slide' ]}
          margin={ 0 }
          lang="typescript"
          code={ require('raw!../assets/code/service.ts') }
          ranges={[
            { loc: [0, 0] },
            { loc: [0, 1], title: 'A class with the ‘Injectable’ decorator becomes a service that can be provided or injected.' },
            { loc: [0, 1], title: 'A service can be run when the app is bootstrapped or injected into a component.' },
            { loc: [1, 7], title: 'A service is just a class that can have properties and functions.' },
            { loc: [5, 6], title: 'A service can have other services injected using the ‘@Inject()’ parameter decorator.' },
            { loc: [8, 9], title: 'A typical service function returns data downloaded from a service.' },
            { loc: [8, 9], title: 'Since a request can have many outcomes, the function returns ‘Observable<any>‘.' },
            { loc: [9, 11], title: 'A request function, like ‘.get()’, returns ‘Observable<Request>’ which is cold.' },
            { loc: [11, 12], title: 'The catch block is executed if the request failed. Return ‘Observable<Error>’.' },
            { loc: [12, 19], title: 'The map function handles the server response and returns ‘Observable<any>’.' },
            { loc: [12, 19], title: 'Assumptions are not made about your server or status codes.' },
            { loc: [12, 19], title: 'The ‘map’ function wraps the return value in a cold observable.' },
            { loc: [8, 9], title: 'This function doesn’t perform the server request until a subscriber is created.' }
          ]} />
        <Slide>
          <div className={ css(styles.content) }>
            Consuming a Service in a Component
          </div>
        </Slide>
        <CodeSlide
          transition={[ 'slide' ]}
          margin={ 0 }
          lang="typescript"
          code={ require('raw!../assets/code/component-service.ts') }
          ranges={[
            { loc: [0, 0] },
            { loc: [10, 12], title: 'Observables of data streamed from a service are class properties for the component.' },
            { loc: [14, 19], title: 'The observable is assigned to the service request function.' },
            { loc: [3, 8], title: 'The data streamed from the service can be used on the template.' },
            { loc: [5, 6], title: 'The ‘async’ pipe lets Angular know to subscribe to the observable.' },
            { loc: [5, 6], title: 'The elvis operator ‘?.’ allows for safe traversal of objects.' },
            { loc: [5, 6], title: 'Subscriptions created on templates are unsubscribed when the component is decomissioned.' },
            { loc: [20, 26], title: 'Subscribers can also be created to perform custom logic.' },
            { loc: [27, 30], title: 'To get the latest data from the server, assign the observable to the service request function again.' },
            { loc: [27, 30], title: 'Every subscription—including custom and template—are automatically updated when the new stream is emitted.' },
            { loc: [31, 34], title: 'Subscriptions must be unsubscribed when the component is decomissioned.' }
          ]} />
        <Slide>
          <div className={ css(styles.header) }>
            Routing
          </div>
        </Slide>
        <CodeSlide
          transition={[ 'slide' ]}
          margin={ 0 }
          lang="typescript"
          code={ require('raw!../assets/code/routes.ts') }
          ranges={[
            { loc: [0, 0] },
            { loc: [0, 1], title: 'Routes are a typed array that contains maps imported components to paths.' },
            { loc: [1, 5], title: 'Route configurations consist of a path and component.' },
            { loc: [5, 9], title: 'Routes can be protected with guards.' },
            { loc: [7, 8], title: 'A guard is a hook that determines if the router can transition to the route.' },
            { loc: [9, 15], title: 'A route can have child routes.' },
            { loc: [11, 12], title: 'Route parms are part of the path string and identified with a colon.' },
            { loc: [16, 20], title: 'Routes can be redirected to other path strings.' },
            { loc: [20, 24], title: 'Wildcard paths can be redirected to other paths.' },
            { loc: [24, 28], title: 'Wildcard paths can also be redirected to components.' }
          ]} />
        <CodeSlide
          transition={[ 'slide' ]}
          margin={ 0 }
          lang="typescript"
          code={ require('raw!../assets/code/route-params.ts') }
          ranges={[
            { loc: [0, 3], title: 'Accessing a route parameter.' },
            { loc: [4, 6], title: 'Route parameters are typed observables.' },
            { loc: [10, 11], title: '‘RouteParams’ are injected into the class constructor.' },
            { loc: [13, 15], title: 'The parameter is plucked from the `routeParams` object and must be coerced to the destination type.' },
            { loc: [13, 15], title: 'Since route paramters are observables, the component is not rerendered when the paramter changes.' },
            { loc: [19, 25], title: 'The component is expected to be reactive to the new parameter stream emitted by the observable.' }
          ]} />
        <CodeSlide
          transition={[ 'slide' ]}
          margin={ 0 }
          lang="typescript"
          code={ require('raw!../assets/code/guard.ts') }
          ranges={[
            { loc: [0, 2], title: 'A guard is a hook that evaluates if the router should traverse to a route candidate.' },
            { loc: [2, 7], title: 'Services can be injected into a guard, in addition to the router.' },
            { loc: [8, 11], title: 'The ‘protectRoute’ function is called by the router to determine if it should traverse to the route candidate.' },
            { loc: [10, 11], title: 'The ‘protectRoute’ function must return ‘Observable<Boolean>’.' },
            { loc: [12, 13], title: 'Route params can be destructured from the traversal candidate object.' },
            { loc: [14, 25], title: 'Using a series of observable operators, the function returns an observable of a boolean value.' },
            { loc: [21, 22], title: 'The guard can redirect the router to a different route if the traversal candidate should be rejected.' }
          ]} />
        <CodeSlide
          transition={[ 'slide' ]}
          margin={ 0 }
          lang="typescript"
          code={ require('raw!../assets/code/traversal.ts') }
          ranges={[
            { loc: [0, 0], title: 'A route can be traversed with links or a router function.' },
            { loc: [3, 6], title: 'A simple route uses a one-time bound ‘linkTo’ attribute with the path.' },
            { loc: [7, 10], title: 'A route using a class property uses a one-way bound ‘linkTo’ attribute with the path.' },
            { loc: [19, 22], title: 'The router has a ‘go’ function that takes the full route path of the traversal candidate.' },
            { loc: [23, 26], title: 'The router has a ‘replace’ function that traverses to the path and replaces the top item on the history stack.' },
            { loc: [27, 30], title: 'The router has a ‘back’ function that navigates back the history.' }
          ]} />
        <Slide>
          <div className={ css(styles.header) }>
            Demo
          </div>
        </Slide>
      </Deck>
    </Spectacle>
  </div>
)

import React from 'react'
import { render } from 'react-dom'
import { Presentation } from './presentation'

render(<Presentation />, document.getElementById('app'))

console.debug(`Starting Publications with React ${React.version}.`)

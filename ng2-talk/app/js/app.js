import React from 'react'
import { render } from 'react-dom'
import { Presentation } from './presentation'

import 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-handlebars'
import 'prismjs/themes/prism-tomorrow.css'
import 'normalize.css'
import 'spectacle/lib/themes/default/index.css'
import '../assets/styles/code.less'

render(<Presentation />, document.getElementById('app'))

console.debug(`Starting Publications with React ${React.version}.`)

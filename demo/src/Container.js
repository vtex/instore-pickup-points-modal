import React, { Component } from 'react'
import IntlContainer from './IntlContainer'

import App from './App'

const locale = 'pt'

class Container extends Component {
  render() {
    return (
      <IntlContainer locale={locale}>
        <App />
      </IntlContainer>
    )
  }
}

export default Container

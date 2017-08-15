import React, { PureComponent } from 'react'

export default class FreezeBody extends PureComponent {

  componentDidMount () {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount () {
    document.body.style.overflow = 'auto';
  }

  render () {
    return null
  }
}

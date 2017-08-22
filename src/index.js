import React, { PureComponent } from 'react'

export default class FreezeBody extends PureComponent {

  componentDidMount () {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.documentElement.style.overflow = 'hidden';
    document.documentElement.style.height = '100%';
  }

  componentWillUnmount () {
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
    document.documentElement.style.overflow = 'auto';
    document.documentElement.style.height = 'auto';
  }

  render () {
    return null
  }
}

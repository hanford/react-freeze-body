import React, { PureComponent } from 'react'

export default function FreezeBody (Component) {
  return class FreezeBody extends PureComponent {

    componentDidMount () {
      document.body.style.overflow = 'hidden'

      if (this.props.html) {
        document.body.style.height = '100%'
        document.documentElement.style.overflow = 'hidden'
        document.documentElement.style.height = '100%'
      }
    }

    componentWillUnmount () {
      document.body.style.overflow = 'auto'

      if (this.props.html) {
        document.body.style.height = 'auto'
        document.documentElement.style.overflow = 'auto'
        document.documentElement.style.height = 'auto'
      }
    }

    render () {
      return <Component {...this.props} />
    }
  }
}

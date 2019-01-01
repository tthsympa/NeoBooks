// @flow

import React from 'react'
import type { Node } from 'react'
import LoginNavigator from 'containers/navigators/Login'
import rootLayout from 'containers/navigators/createLayoutNavigator'

const InitialScreen = (): Node => {
  const user = true
  const Layout = rootLayout()
  if (user) {
    return <Layout />
  }
  return <LoginNavigator />
}

export default InitialScreen

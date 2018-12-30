// @flow

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from 'containers/views/Root'
import rootReducer from './src/redux/reducers'

const store = createStore(rootReducer)

export default () => (
  <Provider store={store}>
    <Root />
  </Provider>
)

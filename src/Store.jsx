import React from 'react'
import { combineReducers } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducers/Reducer.jsx'
export default configureStore({
    reducer
})
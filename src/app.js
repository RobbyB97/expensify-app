// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
import {Provider} from 'react-redux'

// Assets
import './sass/main.scss'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import getVisibleExpenses from './selectors/expenses'
import {addExpense, removeExpense, editExpense} from './actions/expenses'
import {setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from './actions/filters'

// Variables
const $appRoot = document.getElementById('app')

// Set up redux store
const store = configureStore()

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, $appRoot)

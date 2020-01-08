import React from 'react'
import {connect} from 'react-redux'

import expensesTotal from '../selectors/expensesTotal'


export const ExpensesSummary = (props) => (
    <div>
        
    </div>
)


const mapStateToProps = (state) => {
    return {
        expensesTotal: expensesTotal(state.expenses)
    }
}


export default connect(mapStateToProps)(ExpensesSummary)
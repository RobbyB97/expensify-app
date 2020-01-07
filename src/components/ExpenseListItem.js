import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({id, description, amount, createdAt}) => (
  <div>
    <h6>{description}</h6>
    <p>
        {amount} 
        | 
        {moment(createdAt).format('MMM DD YYYY')}
    </p>
    
    <Link to={`/edit/${id}`}>
        Edit Expense
    </Link>

  </div>
)

export default ExpenseListItem

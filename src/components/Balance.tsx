import React from 'react'
import { Trans } from '../types/types'
import './Balance.css'

interface Props {
    transactions: Trans[]
}

const Balance: React.FC<Props> = ({ transactions }) => {

    let getBalance = () => {
        return getIncome() + getExpense() >= 0 ? "green-font" : "red-font"
    }

    let getIncome = () => {
        let income = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0) {
                income += +transactions[i].amount
            }
        }
        return income
    }

    let getExpense = () => {
        let expense = 0;
        for (let i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0) {
                expense += +transactions[i].amount
            }
        }
        return expense
    }

    return (
        <>
            <h3>Your Balance: </h3>
            <h2 className={getBalance()}>${getIncome() + getExpense()}</h2>
            <div className="expense-container">
                <h3>INCOME <br /> <span className="green-font">${getIncome()}</span></h3>
                <h3>EXPENSE <br /> <span className="red-font">${getExpense()}</span></h3>
            </div>
        </>
    )
}

export default Balance

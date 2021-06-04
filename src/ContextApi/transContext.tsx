import React, { createContext, ReactNode, useReducer } from "react";
import TransactionReducer, { TransactionTypes } from "./transReducer";
import { Trans, Red } from '../types/types'

const initialTransaction = {
    transactions: [
        { amount: 500, desc: "Cash", id: 1 },
        { amount: -40, desc: "Book", id: 2 },
        { amount: -200, desc: "Camera", id: 3 }
    ],
    deleteTransaction: (transObj: Trans) => {},
    addTransaction: (transObj: Trans) => {},
    updateTransaction: (transObj: Trans) => {},
}

export const TransactionContext = createContext(initialTransaction);

export const TransactionProvider: React.FC<React.ReactNode> = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransaction);

    let addTransaction = (transObj: Trans) => {
        dispatch({
            type: TransactionTypes.ADD_TRANSACTION,
            payload: {
                amount: transObj.amount,
                desc: transObj.desc,
                id: transObj.id
            },
        });
    }

    let deleteTransaction = (transObj: Trans) => {
        dispatch({
            type: TransactionTypes.DELETE_TRANSACTION,
            id: transObj.id,
        })
    }

    let updateTransaction = (transObj: Trans) => {
        dispatch({
            type: TransactionTypes.UPDATE_TRANSACTION,
            payload: {
                amount: transObj.amount,
                desc: transObj.desc,
                id: transObj.id,
            },
        })
    }

    return (
        <TransactionContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            deleteTransaction,
            updateTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}
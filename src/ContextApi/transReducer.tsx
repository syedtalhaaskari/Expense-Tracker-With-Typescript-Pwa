import { Red, Trans } from "../types/types";

export enum TransactionTypes {
    ADD_TRANSACTION = 'ADD_TRANSACTION',
    DELETE_TRANSACTION = 'DELETE_TRANSACTION',
    UPDATE_TRANSACTION = 'UPDATE_TRANSACTION',
}

type PayloadAddAction = {
    type: TransactionTypes.ADD_TRANSACTION,
    payload: Trans,
}

type PayloadUpdateAction = {
    type: TransactionTypes.UPDATE_TRANSACTION, 
    payload: Trans,
}

type IdAction = {
    type: TransactionTypes.DELETE_TRANSACTION, 
    id: number,
}

type Action = PayloadAddAction | IdAction | PayloadUpdateAction

const TransactionReducer = (state: {transactions: Trans[]}, action: Action) => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                transactions: [...state.transactions, action.payload],
            }

        case "DELETE_TRANSACTION": {
            let remain = state.transactions.filter((value) => {
                return value.id != action.id
            })
            return {
                transactions: remain,
            }
        }

        case "UPDATE_TRANSACTION": {
            let remain = state.transactions.filter((value) => {
                if (value.id === action.payload.id) {
                    value.amount = action.payload.amount
                    return value
                }
                else {
                    return value
                }
            })

            return {
                transactions: remain
            }
        }

        default:
            return state;
    }
}

export default TransactionReducer;
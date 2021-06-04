import React from "react"
import { Trans } from "../types/types"

interface Props {
    transactions: Trans[],
    deleteTransaction: (transObj: Trans) => void,
    updateTransaction: (transObj: Trans) => void,
}

const History: React.FC<Props> = ({ transactions, deleteTransaction, updateTransaction }) => {

    let handleDeletion = (transObj: Trans) => {
        deleteTransaction(transObj)
    }

    let handleUpdate = (transObj: Trans) => {
        let updatedValue = prompt("Enter " + transactions[transObj.id - 1].desc + "'s updated value:", transactions[transObj.id - 1].amount + "")

        if (updatedValue === null) {
            return;
        }
        else if (+updatedValue !== +transactions[transObj.id - 1].amount) {
            updateTransaction({
                amount: +updatedValue,
                desc: transactions[transObj.id - 1].desc,
                id: transObj.id,
            })
        }
    }

    let checkType = (amount: number) => {
        return amount >= 0 ? "green" : "red"
    }

    return (
        <>
            <h3>History</h3>
            <hr />
            <ul className="transaction-list">
                {
                    transactions.map((transObj, ind) => {
                        return (
                            <li key={ind} className={checkType(transObj.amount)}>
                                <span>
                                    {transObj.desc}
                                </span>
                                <span>
                                    ${transObj.amount}
                                    &nbsp;
                                    <button onClick={(e) => {
                                        handleUpdate(transObj)
                                    }}>
                                        Update
                                    </button>
                                    &nbsp;
                                    <button onClick={() => handleDeletion(transObj)}>
                                        Delete
                                    </button>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default History
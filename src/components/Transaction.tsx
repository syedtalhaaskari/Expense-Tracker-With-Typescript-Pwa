import { Dispatch, SetStateAction } from "react";
import { Trans } from "../types/types";

type Props = {
    amount: [string, Dispatch<SetStateAction<string>>],
    desc: [string, Dispatch<SetStateAction<string>>],
    transactions: Trans[],
    addTransaction: (transObj: Trans) => void,
}

const Transaction: React.FC<Props> = ({ amount, desc, transactions, addTransaction }) => {
    let [newDesc, setDesc] = desc;
    let [newAmount, setAmount] = amount

    let handleAddition: React.FormEventHandler = (event) => {
        event.preventDefault()
        addTransaction({
            amount: +amount[0],
            desc: "" + desc[0],
            id: transactions.length === 0 ? 1 : +transactions[transactions.length - 1].id + 1
        })
        desc[1]("")
        amount[1]("")
    }

    return (
        <>
            <h3>Add new Transaction</h3>
            <hr />
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br />
                    <input type="text" placeholder="Enter Description" required onChange={(ev) => desc[1](ev.target.value)} value={desc[0]} />
                </label>
                <br />
                <label>
                    Enter Amount <br />
                    <input type="number" placeholder="Enter Amount" required onChange={(ev) => amount[1](ev.target.value)} value={amount[0]} />
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </>
    )
}

export default Transaction

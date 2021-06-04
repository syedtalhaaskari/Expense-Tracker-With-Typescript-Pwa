export interface Trans {
    amount: number,
    desc: string,
    id: number,
}

export interface Red {
    transactions: Trans[],
    deleteTransaction: (transObj: Trans) => void,
    addTransaction: (transObj: Trans) => void,
    updateTransaction: (transObj: Trans) => void,
}
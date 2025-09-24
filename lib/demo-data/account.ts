export type TransactionHistoryType = {
    transaction: string;
    amount: number;
    type: "Credit" | "Debit",
    status: "Processed" | "Failed" | "Reviewing"
}

export const accountStats = [
    {
        amount: "220, 342",
        category: "My Balance",
        icon: "heroicons:chart-bar-square-16-solid",
        iconBg: "#FA5A7D",
        duration: "",
    },
    {
        amount: "0",
        category: "Pending Withdrawal",
        icon: "streamline:tag-solid",
        iconBg: "#3CD856",
        duration: "",
    },
    {
        amount: "₦220,342",
        category: "Total Sold",
        duration: "Amount after commissions",
        icon: "teenyicons:bag-solid",
        iconBg: "#83A0FF",
    },
];

export const transactionHistoryHead = [
    "Transaction",
    "Amount",
    "Type",
    "Status",
];

export const transactionHistory: TransactionHistoryType[] = [
    {
        transaction: "Balance Top Up",
        amount: 8000,
        type: "Credit",
        status: "Processed",
    },
    {
        transaction: "Withdrawal Request",
        amount: 2000,
        type: "Debit",
        status: "Reviewing",
    },
    {
        transaction: "Interest Accured",
        amount: 8000,
        type: "Credit",
        status: "Failed",
    },
];
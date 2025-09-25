export type OrderHistoryType = {
    orderId: string;
    image: string;
    name: string;
    plan: string;
    quantity: number;
    coupon: string;
    status: "New" | "Redeemed";
    price: string;
}

export const order_history: OrderHistoryType[] = [
    {
        orderId: "00234",
        image: "/images/placeholder-image.svg",
        name: "FarmCloud App",
        plan: "Basic Plan",
        quantity: 1,
        coupon: "YOURAPP32",
        status: "New",
        price: "17,000.99",
    },
    {
        orderId: "00235",
        image: "/images/placeholder-image.svg",
        name: "FarmCloud App",
        plan: "Basic Plan",
        quantity: 1,
        coupon: "YOURAPP32",
        status: "Redeemed",
        price: "17,000.99",
    },
];
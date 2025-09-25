// import { usePathname } from "next/navigation";

// const pathname = usePathname();
// const productId = pathname.split("/").pop();
//   const selectedProduct = products.find((product) => product.id === productId);

export const breadcrumbs = [
    {
        href: "/dashboard",
        header: "Dashboard",
    },
    {
        href: "/vendor/products",
        header: "Products",
    },
    {
        href: "/vendor/products/listing",
        header: "List a Product",
    },
    {
        href: `/vendor/product/id}`,
        header: "Product Overview",
    },
    {
        href: "/vendor/sales",
        header: "Sales Report",
    },
    {
        href: "/vendor/notifications",
        header: "Notifications",
    },
    {
        href: "/vendor/account",
        header: "Account Management",
    },
];
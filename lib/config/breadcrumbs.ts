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
        href: "/products",
        header: "Products",
    },
    {
        href: "/products/listing",
        header: "List a Product",
    },
    {
        href: `/product/id}`,
        header: "Product Overview",
    },
    {
        href: "/sales",
        header: "Sales Report",
    },
    {
        href: "/notifications",
        header: "Notifications",
    },
    {
        href: "/account",
        header: "Account Management",
    },
];
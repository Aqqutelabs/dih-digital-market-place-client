"use client";

import { products } from "@/lib/demo-data/products";
import CategoryWrapper from "@/ui/category-wrapper";
import ProductCard from "@/ui/market-place-product-card";

export default function SoftwareProducts() {
  const categories = [
    "Ai Tools",
    "Monitoring Apps",
    "Book Keeping",
    "Farm Operations",
    "Finance",
  ];
  return (
    <CategoryWrapper
      title="Browse Software"
      product_count="400"
      categories={categories}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={"/images/placeholder-image.svg"}
            name={product["product-name"]}
            description={"Lorem ipsum simet dolor amet"}
            price={product["base-price"]}
            lifetime_price={product["listing-price"]}
          />
        ))}
      </div>
    </CategoryWrapper>
  );
}

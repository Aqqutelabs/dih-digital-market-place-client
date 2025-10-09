"use client";

import { products } from "@/lib/demo-data/products";
import CategoryWrapper from "@/ui/category-wrapper";
import ProductCard from "@/ui/market-place-product-card";

export default function DigitalProducts() {
  const categories = [
      "Ai Tools",
      "Monitoring Apps",
      "Book Keeping",
      "Farm Operations",
      "Finance",
    ];
  return (
    <CategoryWrapper title="Browse Digital Products" product_count="45" categories={categories}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={"/images/product-placeholder.svg"}
            name={product["product-name"]}
            description={"Lorem ipsum dolor simet alord"}
            price={product["base-price"]}
            lifetime_price={product["listing-price"]}
          />
        ))}
      </div>
    </CategoryWrapper>
  );
}

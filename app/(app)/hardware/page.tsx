"use client";

import { products } from "@/lib/demo-data/products";
import CategoryWrapper from "@/ui/category-wrapper";
import ProductCard from "@/ui/market-place-product-card";

export default function HardwareProducts() {
  const categories = [
      "Ai Tools",
      "Monitoring Apps",
      "Book Keeping",
      "Farm Operations",
      "Finance",
    ];
  return (
    <CategoryWrapper title="Browse Hardware" product_count="500" categories={categories}>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={"/images/product-placeholder.svg"}
            name={product["product-name"]}
            description={"Lorem ipsum dolor simet alor."}
            price={product["base-price"]}
            lifetime_price={product["listing-price"]}
          />
        ))}
      </div>
    </CategoryWrapper>
  );
}

"use client";

import { products } from "@/lib/demo-data/products";
import CategoryWrapper from "@/ui/category-wrapper";
import ProductCard from "@/ui/market-place-product-card";

export default function SoftwareProducts() {
  return (
    <CategoryWrapper title="Browse Software" product_count="400">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={"/images/placeholder-image.svg"}
            name={product["product-name"]}
            description={product.description["variation-1"]}
            price={product["base-price"]}
            lifetime_price={product["listing-price"]}
          />
        ))}
      </div>
    </CategoryWrapper>
  );
}

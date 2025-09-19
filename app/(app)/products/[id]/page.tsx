"use client";

import { products } from "@/lib/demo-data/products";
import Button from "@/ui/button";
import CardComponent from "@/ui/card-wrapper";
import Heading from "@/ui/heading";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Types for better type safety
interface ProductVariation {
  title: string;
  basePrice: string;
  discount: string;
  listingPrice: string;
  description: string;
}

interface Product {
  id: string;
  "product-name": string;
  "base-price": string;
  discount: string;
  "selling-price": string;
  "total-sold": string;
  revenue: string;
  reviews: string;
  "product-category": string;
  "product-type": string;
  "product-sub-category": string;
  "variation-1": string;
  "variation-2": string;
  "listing-price": string;
  description: {
    "variation-1": string;
    "variation-2": string;
  };
  "product-photos": string[];
}

// Configuration for product details fields
const PRODUCT_DETAIL_FIELDS = [
  { key: "product-name", label: "Product Name" },
  { key: "product-category", label: "Product Category" },
  { key: "product-sub-category", label: "Product Sub Category" },
  { key: "product-type", label: "Product Type" },
] as const;

// Utility functions
const formatCurrency = (amount: string) => `NGN${amount}`;

const getVariations = (product: Product): ProductVariation[] => {
  const variationKeys = ["variation-1", "variation-2"] as const;
  
  return variationKeys
    .map((key) => ({
      title: product[key],
      basePrice: product["base-price"],
      discount: product.discount,
      listingPrice: product["listing-price"],
      description: product.description[key],
    }))
    .filter((variation) => variation.title); // Filter out empty variations
};

// Sub-components for better organization
const BackButton = ({ onClick }: { onClick: () => void }) => (
  <Icon
    onClick={onClick}
    icon="formkit:left"
    height={25}
    width={25}
    color="black"
    className="cursor-pointer"
  />
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex items-center justify-between border-b border-[#3C3C434A] py-1 text-[#222B45] text-sm md:text-base">
    <p>{label}</p>
    <p className="font-semibold">{value}</p>
  </div>
);

const ProductImage = ({ 
  src, 
  alt, 
  className = "",
  containerClassName = "" 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  containerClassName?: string;
}) => (
  <div className={`border border-[#233E9733] p-2 ${containerClassName}`}>
    <div className={`relative h-full w-full ${className}`}>
      <Image
        alt={alt}
        src={src}
        fill
        className={`object-cover ${className}`}
      />
    </div>
  </div>
);

const ProductDetails = ({ product }: { product: Product }) => {
  const variations = getVariations(product);

  return (
    <div className="w-full">
      <Heading heading="Product Details" />
      
      <div className="space-y-4.5 my-10">
        {/* Basic product information */}
        {PRODUCT_DETAIL_FIELDS.map(({ key, label }) => (
          <DetailRow 
            key={key}
            label={label} 
            value={product[key as keyof Product] as string} 
          />
        ))}

        {/* Dynamic variations */}
        {variations.map((variation, index) => (
          <div key={`variation-${index}`} className="space-y-4.5">
            <DetailRow 
              label={`Variation ${index + 1}`} 
              value={variation.title} 
            />
            <DetailRow 
              label="Base Price" 
              value={formatCurrency(variation.basePrice)} 
            />
            <DetailRow 
              label="Discount (%)" 
              value={`${variation.discount}%`} 
            />
            <DetailRow 
              label="Listing Price" 
              value={formatCurrency(variation.listingPrice)} 
            />
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Button content="List Product" />
        <Button content="Edit Information" isSecondary />
      </div>
    </div>
  );
};

const ProductPhotos = ({ product }: { product: Product }) => {
  const variations = getVariations(product);
  const photos = product["product-photos"] || [];

  return (
    <div className="w-full">
      <Heading heading="Product photos" />
      
      <div className="space-y-8">
        {/* Images */}
        <div className="space-y-3">
          {/* Main image */}
          {photos[0] && (
            <ProductImage
              src={photos[0]}
              alt="Main product image"
              className="rounded-2xl"
              containerClassName="h-[210px] w-full rounded-2xl"
            />
          )}

          {/* Smaller images */}
          {photos.length > 1 && (
            <div className="flex items-center gap-3">
              {photos.slice(1, 3).map((photo, index) => (
                <ProductImage
                  key={index}
                  src={photo}
                  alt={`Product image ${index + 2}`}
                  className="rounded-md"
                  containerClassName="h-[120px] w-[100px] rounded-md"
                />
              ))}
            </div>
          )}
        </div>

        {/* Product descriptions */}
        <div className="space-y-5">
          {variations.map((variation, index) => (
            <div key={`description-${index}`} className="space-y-3 text-sm md:text-base">
              <p className="font-semibold">
                Product Description (Variant {index + 1})
              </p>
              <p>{variation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ProductOverview() {
  const pathname = usePathname();
  const productId = pathname.split("/").pop();
  const selectedProduct = products.find((product) => product.id === productId);

  if (!selectedProduct) {
    return (
      <CardComponent>
        <div className="p-5 text-center">
          <p>Product not found.</p>
        </div>
      </CardComponent>
    );
  }

  return (
    <CardComponent>
      <section className="p-5">
        {/* Header with back button */}
        <div className="flex gap-4 items-start">
          <BackButton onClick={() => window.history.back()} />
          <Heading heading="Product Overview" />
        </div>

        {/* Product details container */}
        <div className="border border-[#7B91B0] rounded-xl p-5 space-y-5 mt-10 flex flex-col md:flex-row items-start gap-20">
          <ProductDetails product={selectedProduct} />
          <ProductPhotos product={selectedProduct} />
        </div>
      </section>
    </CardComponent>
  );
}
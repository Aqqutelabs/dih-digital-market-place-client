"use client";

import { products } from "@/lib/demo-data/products";
import Button from "@/ui/button";
import CardComponent from "@/ui/card-wrapper";
import Heading from "@/ui/heading";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Types
interface ProductDescription {
  description: string;
  name: string;
  images: string[];
}

interface ProductVariation {
  title: string;
  basePrice: string;
  discount: string;
  listingPrice: string;
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
  description: ProductDescription[];
  "product-photos": string[];
}

// Config
const PRODUCT_DETAIL_FIELDS = [
  { key: "product-name", label: "Product Name" },
  { key: "product-category", label: "Product Category" },
  { key: "product-sub-category", label: "Product Sub Category" },
  { key: "product-type", label: "Product Type" },
] as const;

// Utils
const formatCurrency = (amount: string) => `NGN${amount}`;

const getVariations = (product: Product): ProductVariation[] => {
  const variationKeys = ["variation-1", "variation-2"] as const;

  return variationKeys
    .map((key) => ({
      title: product[key],
      basePrice: product["base-price"],
      discount: product.discount,
      listingPrice: product["listing-price"],
    }))
    .filter((variation) => variation.title);
};

// Sub-components
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
  <div className="flex items-center justify-between border-b border-[#3C3C434A] py-1 text-[#222B45] text-xs md:text-base">
    <p>{label}:</p>
    <p className="font-semibold">{value}</p>
  </div>
);

const ProductImage = ({
  src,
  alt,
  className = "",
  containerClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}) => (
  <div className={`border border-[#233E9733] p-2 rounded-md ${containerClassName}`}>
    <div className={`relative h-[120px] md:w-[95px] w-[160px] ${className}`}>
      <Image alt={alt} src={src} fill className="object-cover rounded-md" />
    </div>
  </div>
);

const ProductDetails = ({ product }: { product: Product }) => {
  const variations = getVariations(product);

  return (
    <div className="w-full">
      <Heading heading="Product Details" />

      <div className="space-y-4.5 my-10">
        {/* Basic info */}
        {PRODUCT_DETAIL_FIELDS.map(({ key, label }) => (
          <DetailRow
            key={key}
            label={label}
            value={product[key as keyof Product] as string}
          />
        ))}

        {/* Variations */}
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
    </div>
  );
};

const ProductPhotos = ({ product }: { product: Product }) => {
  return (
    <div className="w-full">
      <Heading
        heading={product["product-name"]}
        subtitle={`Units Sold: ${product["total-sold"]}`}
      />

      <div className="space-y-8 mt-6">
        {product.description.map((desc, i) => (
          <div key={i} className="space-y-2">
            <p className="font-semibold text-[#222B45] text-sm md:text-lg">{desc.name}</p>
            <p className="text-xs md:text-base text-[#444A6D]">{desc.description}</p>

            {/* Images for this description */}
            <div className="flex gap-1 flex-wrap">
              {desc.images.map((img, idx) => (
                <ProductImage
                  key={idx}
                  src={img}
                  alt={`${desc.name} image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mt-10 w-full md:w-[225px]">
        <Button content="Update Product" />
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
        {/* Header */}
        <div className="flex gap-4 items-start">
          <BackButton onClick={() => window.history.back()} />
          <Heading heading="Product Information" />
        </div>

        {/* Content */}
        <div className="border border-[#7B91B0] rounded-xl p-5 space-y-5 mt-10 flex flex-col md:flex-row-reverse items-start gap-0 md:gap-20">
          <ProductDetails product={selectedProduct} />
          <ProductPhotos product={selectedProduct} />
        </div>
      </section>
    </CardComponent>
  );
}

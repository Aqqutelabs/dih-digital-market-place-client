"use client";

import Button from "@/ui/button";
import CardComponent from "@/ui/card-wrapper";
import ImageUpload from "@/ui/forms/image-uploader";
import DropDown from "@/ui/forms/select-dropdown";
import TextInput from "@/ui/forms/text-input";
import TextareaInput from "@/ui/forms/textarea";
import Heading from "@/ui/heading";
import { Icon } from "@iconify/react";

export default function ProductLsiting() {
  return (
    <CardComponent>
      <section className="p-5">
        {/* heading and back button */}
        <div className="flex gap-4 items-start">
          <Icon
            onClick={() => window.history.back()}
            icon={"formkit:left"}
            height={25}
            width={25}
            color="black"
            className="cursor-pointer"
          />
          <Heading
            heading="List a Product"
            subtitle="Fill in the information correctly"
          />
        </div>

        {/* product details */}
        <div className="border border-[#7B91B0] rounded-xl p-5 space-y-5 mt-10">
          <Heading heading="Product Details" />
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              label="Product Name"
              value=""
              onChange={() => {}}
              name="productName"
              placeholder="Enter Name"
            />
            <TextInput
              label="Product Link (Optional)"
              value=""
              onChange={() => {}}
              name="productLink"
              placeholder="Enter Product Link"
            />
            <div className="col-span-2">
              <TextareaInput
                label="Product Description"
                name="productDescription"
                placeholder="Enter Description"
                value=""
                onChange={() => {}}
              />
            </div>
          </div>
          <Heading heading="Category" />
          <div className="grid grid-cols-2 gap-4">
            <DropDown
              label="Product Category"
              value=""
              onChange={() => {}}
              name="productCategory"
              placeholder="Select Type"
              options={[]}
            />
            <DropDown
              label="Product Sub Category"
              value=""
              onChange={() => {}}
              name="productSubCategory"
              placeholder="Enter category"
              options={[]}
            />
            <DropDown
              label="Product Type"
              name="productType"
              placeholder="Select Type"
              value=""
              onChange={() => {}}
              options={[]}
            />
          </div>
          <Heading heading="Pricing & Variants" />
          {/* variant 1 */}
          <div className="space-y-4">
            <h4 className="block text-lg font-bold text-[#122231] mb-2">
              Variant 1
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <TextInput
                label="Variant Name"
                value=""
                onChange={() => {}}
                name="variantName"
                placeholder="Enter the name of the first plan"
              />
              <TextInput
                label="Base Price"
                name="basePrice"
                placeholder="Enter price"
                value=""
                onChange={() => {}}
              />
              <TextInput
                label="Discount (min. 5%)"
                name="discount"
                placeholder="Enter discount e.g 5%"
                value=""
                onChange={() => {}}
              />
              <TextInput
                label="Payment Duration"
                value=""
                onChange={() => {}}
                name="paymentDuration"
                placeholder="Lifetime"
              />
            </div>
            <TextareaInput
              label="Product Description"
              name="pricingProductDescription"
              placeholder="Enter Description"
              value=""
              onChange={() => {}}
            />
            <ImageUpload label="Variant 1 Photos (Min. 1)" />
          </div>

          {/* variant 2 */}
          <div className="space-y-4">
            <h4 className="block text-lg font-bold text-[#122231] mb-2">
              Variant 2
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <TextInput
                label="Variant Name"
                value=""
                onChange={() => {}}
                name="variantName"
                placeholder="Enter the name of the first plan"
              />
              <TextInput
                label="Base Price"
                name="basePrice"
                placeholder="Enter price"
                value=""
                onChange={() => {}}
              />
              <TextInput
                label="Discount (min. 5%)"
                name="discount"
                placeholder="Enter discount e.g 5%"
                value=""
                onChange={() => {}}
              />
              <TextInput
                label="Payment Duration"
                value=""
                onChange={() => {}}
                name="paymentDuration"
                placeholder="Lifetime"
              />
            </div>
            <TextareaInput
              label="Product Description"
              name="pricingProductDescription"
              placeholder="Enter Description"
              value=""
              onChange={() => {}}
            />
            <ImageUpload label="Variant 2 Photos (Min. 1)" />
          </div>

          {/* add a variant */}
          <div className="flex items-center gap-1 cursor-pointer">
            <Icon
              icon={"uil:plus"}
              color="#16A249"
              height={20}
              width={20}
            />
            <p className="text-[#16A249] font-bold text-lg">Add a Variant</p>
          </div>
          <div className="w-[225px]">
            <Button content="Submit Listing" />
          </div>
        </div>
      </section>
    </CardComponent>
  );
}

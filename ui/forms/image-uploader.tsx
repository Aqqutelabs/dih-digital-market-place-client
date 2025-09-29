"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

type Preview = {
  id: string;
  url: string;
  file?: File;
  isRemote?: boolean;
};

type ImageUploaderProps = {
  label: string;
  maxSize?: number;
  acceptedTypes?: string[];
  initialImages?: string[];
  onChange?: (files: File[], previews: Preview[]) => void;
  multiple?: boolean;
};

export default function ImageUploader({
  label,
  maxSize = 10 * 1024 * 1024,
  acceptedTypes = ["image/png", "image/jpeg", "image/jpg"],
  initialImages = [],
  onChange,
  multiple = true,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previews, setPreviews] = useState<Preview[]>(
    initialImages.map((url, i) => ({
      id: `remote-${i}-${Date.now()}`,
      url,
      isRemote: true,
    }))
  );
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    return () => {
      previews.forEach((p) => {
        if (p.file && p.url.startsWith("blob:")) {
          URL.revokeObjectURL(p.url);
        }
      });
    };
  });

  useEffect(() => {
    if (onChange) {
      const files = previews.filter((p) => p.file).map((p) => p.file!) as File[];
      onChange(files, previews);
    }
  }, [previews, onChange]);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const arr = Array.from(files);
    const accepted: Preview[] = [];

    arr.forEach((file) => {
      if (!acceptedTypes.includes(file.type)) return;
      if (file.size > maxSize) return;
      const url = URL.createObjectURL(file);
      accepted.push({
        id: `${file.name}-${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 9)}`,
        url,
        file,
      });
    });

    setPreviews((prev) => (multiple ? [...prev, ...accepted] : [...accepted]));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleRemove = (id: string) => {
    setPreviews((prev) => {
      const found = prev.find((p) => p.id === id);
      if (found && found.file && found.url.startsWith("blob:")) {
        URL.revokeObjectURL(found.url);
      }
      return prev.filter((p) => p.id !== id);
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="w-full">
      <label className="block text-lg font-bold text-[#122231] mb-2">
        {label}
      </label>

      <div className="flex flex-col md:flex-row md:items-end gap-5">
        {/* Upload area */}
        <div
          onDragOver={handleDragOver}
          onDragEnter={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex flex-1 items-center justify-center rounded-2xl border transition-shadow duration-150
            ${dragActive ? "border-green-300 shadow-md" : "border-[#233E9733]"}
            bg-white min-h-[130px] px-4 py-6`}
        >
          <label
            htmlFor="image-upload-input"
            className="w-full cursor-pointer"
            aria-hidden
          >
            <div className="flex flex-col items-center gap-3">
              <Icon icon="heroicons-outline:upload" width={24} height={24} />
              <div className="text-sm text-[#1F2937] text-center">
                <span className="font-medium">Click to upload</span>{" "}
                <span className="text-[#6B7280]">or drag and drop</span>
              </div>
              <div className="text-xs text-[#9CA3AF]">
                Max 10mb. Only png and jpeg files
              </div>
              <input
                id="image-upload-input"
                ref={inputRef}
                type="file"
                className="hidden"
                multiple={multiple}
                accept={acceptedTypes.join(",")}
                onChange={handleInputChange}
              />
            </div>
          </label>
        </div>

        {/* Previews */}
        <div className="flex flex-wrap md:flex-nowrap gap-3 w-full">
          {previews.map((p) => (
            <div
              key={p.id}
              className="relative w-20 h-20 rounded-md overflow-hidden border border-[#E6EDF3] bg-white"
            >
              <Image
                src={p.url}
                alt="preview"
                className="w-full h-full object-cover"
                draggable={false}
                height={80}
                width={80}
              />

              <button
                type="button"
                aria-label="Remove image"
                onClick={() => handleRemove(p.id)}
                className="absolute -top-2 -right-2 z-10 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white shadow"
              >
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#EF4444]">
                  <Icon icon="mdi:close" width={12} height={12} color="white" />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

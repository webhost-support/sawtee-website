import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function DropZone({
  htmlFor,
  accept = "image/.png,.jpg,.jpeg,.webp",
  placeholder = "Drag and drop image here, or click to select an image",
  defaultValue = null,
  onValueChange,
  ...props
}) {
  const handleDragOver = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    onValueChange(Array.from(event.dataTransfer.files)[0]);
  };
  const handleFileSelect = (event) => {
    event.stopPropagation();
    onValueChange(Array.from(event.target.files)[0]);
  };
  const handleRemoveFile = () => {
    onValueChange(null);
  };

  return (
    <div className={cn("h-48", props.className)}>
      {!defaultValue && (
        <Label
          htmlFor={htmlFor}
          className=" rounded-xl border-2 border-slate-700 border-dashed dark:border-gray-600 dark:hover:border-gray-500 h-full relative flex flex-col items-center justify-center w-full overflow-hidden cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-200"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{accept}</p>
          </div>
          <Input
            id={htmlFor}
            name={htmlFor}
            type="file"
            placeholder={placeholder}
            accept={accept}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className="opacity-0 cursor-pointer absolute inset-0 h-full w-full z-30"
            onChange={handleFileSelect}
          />
        </Label>
      )}
      {defaultValue && (
        <div className="relative  flex flex-col items-center justify-center w-full h-full rounded-xl overflow-hidden cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-200 p-4 border-2 border-slate-700 border-dashed dark:border-gray-600 dark:hover:border-gray-500 ">
          <AspectRatio ratio={16 / 9}>
            <img
              src={defaultValue}
              alt="section hero"
              className="rounded-md object-cover w-full h-full "
            />
          </AspectRatio>
          <Button
            className="absolute top-2 right-2 rounded-lg"
            onClick={handleRemoveFile}
          >
            <XIcon className=" w-6 h-6 " />
          </Button>
        </div>
      )}
    </div>
  );
}

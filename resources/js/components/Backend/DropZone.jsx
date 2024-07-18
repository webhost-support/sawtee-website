import { AspectRatio } from '@chakra-ui/react';
import { XIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function DropZone({
  image,
  setImage,
  htmlFor,
  placeholder = 'Drag and drop an image here, or click to select an image',
  filename = null,
  ...props
}) {
  const [file, setFile] = React.useState(null);

  const handleDragOver = event => {
    event.preventDefault();
  };
  const handleDrop = event => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
    setImage(URL.createObjectURL(event.dataTransfer.files[0]));
  };
  const handleFileSelect = event => {
    setFile(event.target.files[0]);
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const handleRemoveFile = () => {
    setFile(null);
    setImage(null);
  };

  return (
    <div
      className="rounded-xl p-4 border-2 border-slate-700 border-dashed dark:border-gray-600 dark:hover:border-gray-500  "
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <Label
        htmlFor={htmlFor}
        className="relative flex flex-col items-center justify-center w-full h-72 rounded-xl overflow-hidden cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-200 "
      >
        <div>
          {!image && (
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
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG or webp (MAX. 800x400px)
              </p>
            </div>
          )}
          {image && (
            <div className="w-full h-full absolute inset-0">
              <AspectRatio ratio={5 / 3}>
                <img
                  src={image}
                  alt="section hero"
                  className="rounded-md object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          )}
        </div>
        <Input
          id={htmlFor}
          name={htmlFor}
          type="file"
          placeholder={placeholder}
          accept="image/.png,.jpg,.jpeg,.webp"
          className="opacity-0 cursor-pointer absolute inset-0 h-full w-full z-30"
          onChange={handleFileSelect}
        />
      </Label>
      {image && filename && (
        <div className="mt-4 space-y-2">
          <div
            key={file ? file.name : filename}
            className="flex items-center justify-between bg-muted rounded-md p-2"
          >
            <div className="flex items-center px-4 gap-2">
              <div>
                <p className="font-medium">{file ? file.name : filename}</p>
                {file && (
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                )}
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={handleRemoveFile}>
              <XIcon className="w-4 h-4 text-muted-foreground" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

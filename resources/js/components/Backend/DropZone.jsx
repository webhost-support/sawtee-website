import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { XIcon } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

export default function DropZone({
  htmlFor,
  accept = 'image/.png,.jpg,.jpeg,.webp',
  placeholder = 'Drag and drop an image here, or click to select an image',
  files = [],
  setFiles,
  multiple = false,
  onValueChange,
  ...props
}) {
  const [image, setImage] = React.useState(null);

  const handleDragOver = event => {
    event.stopPropagation();
    event.preventDefault();
  };
  const handleDrop = event => {
    event.stopPropagation();
    event.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles([...files, ...droppedFiles]);
    !multiple &&
      droppedFiles.length > 0 &&
      setImage(URL.createObjectURL(Array.from(e.dataTransfer.files[0])));
    onValueChange(droppedFiles);
  };
  const handleFileSelect = event => {
    event.stopPropagation();
    const newfiles = Array.from(event.target.files);
    if (multiple) {
      setFiles([...files, ...newfiles]);
    } else {
      const reader = new FileReader();
      reader.onload = e => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(newfiles[0]);
    }
    setFiles(newfiles);
    onValueChange(newfiles);
  };
  const handleRemoveFile = file => {
    if (multiple) {
      const index = files.indexOf(file);
      const updatedFiles = [...files];
      updatedFiles.splice(index, 1);
      setFiles(updatedFiles);
      onValueChange(updatedFiles);
    }
    setFiles([]);
    onValueChange([]);
    setImage(null);
  };

  return (
    <div
      className={cn(
        'rounded-xl p-4 border-2 border-slate-700 border-dashed dark:border-gray-600 dark:hover:border-gray-500  ',
        props.className
      )}
    >
      <Label
        htmlFor={htmlFor}
        className={cn(
          'relative flex flex-col items-center justify-center w-full h-72 rounded-xl overflow-hidden cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-200 '
        )}
      >
        <div>
          {!image && files.length === 0 && (
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
                {accept}
              </p>
            </div>
          )}
          {!multiple && image && (
            <div className="w-full h-full absolute inset-0">
              <AspectRatio ratio={5 / 3}>
                <img
                  src={files[0].preview_url ? files[0].preview_url : image}
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
          multiple={multiple}
          placeholder={placeholder}
          accept={accept}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className="opacity-0 cursor-pointer absolute inset-0 h-full w-full z-30"
          onChange={handleFileSelect}
        />
      </Label>
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files?.map((file, index) => (
            <div
              key={file.name + Math.random().toString(16).slice(2)}
              className="flex items-center justify-between bg-muted rounded-md p-2"
            >
              <div className="flex items-center px-4 gap-2">
                <div>
                  <p className="font-medium">{file.name}</p>
                  {file && (
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  )}
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleRemoveFile(file)}
              >
                <XIcon className="w-4 h-4 text-muted-foreground" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

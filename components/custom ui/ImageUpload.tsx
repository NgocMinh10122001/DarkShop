import React from "react";
import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus, Trash } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (results: any) => {
    onChange(results.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4">
        {value.map((url: string, index) => {
          return (
            <div key={index} className="relative w-[200px] h-[200px]">
              <div className="absolute top-0 right-0 z-10">
                <Button
                  onClick={() => onRemove(url)}
                  size="sm"
                  className="bg-red-1 text-white"
                >
                  <Trash className="h-4 w-4"></Trash>
                </Button>
              </div>
              <Image
                src={url}
                alt="collection"
                className="object-cover rounded-lg"
                fill
              />
            </div>
          );
        })}
      </div>
      <CldUploadWidget
        uploadPreset="darkshop"
        onSuccess={(result, { widget }) => {
          onUpload(result?.info); // { public_id, secure_url, etc }
        }}
      >
        {({ open }) => {
          return (
            <Button
              onClick={() => open()}
              className={"bg-grey-1 text-white rounded-lg"}
            >
              <Plus className="h-4 w-4 mr-2" />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;

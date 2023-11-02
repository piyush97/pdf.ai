"use client";
import { PDF_DROP_HELPER } from "@/lib/constants";
import { Inbox } from "lucide-react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
  });

  return (
    <div className="p-2 bg-white rounded-xl ">
      <div
        {...getRootProps({
          className:
            "py-8 border-2 border-dashed cursor-pointer rounded-xl bg-gray-50 flex justify-center items-center flex-col",
        })}
      >
        <input {...getInputProps()} />
        <>
          <Inbox className="w-10 h-10 text-blue-500" />
          <p className="mt-2 text-sm text-slate-400">{PDF_DROP_HELPER}</p>
        </>
      </div>
    </div>
  );
};

export default FileUpload;

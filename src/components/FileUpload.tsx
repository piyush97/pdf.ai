"use client";
import { PDF_DROP_HELPER } from "@/lib/constants";
import { uploadToS3 } from "@/lib/s3";
import { Inbox } from "lucide-react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      console.log(acceptedFiles);
      const file = acceptedFiles[0];
      if (file.size > 10 * 1024 * 1024) {
        alert("File should be lesser than 10Mb!");
        return;
      }
      try {
        const data = await uploadToS3(file);
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
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

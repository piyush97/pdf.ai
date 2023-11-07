"use client";
import { PDF_DROP_HELPER } from "@/lib/constants";
import { uploadToS3 } from "@/lib/s3";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Inbox } from "lucide-react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";

const FileUpload = () => {
  const { mutate } = useMutation({
    mutationFn: async ({
      file_key,
      file_name,
    }: {
      file_key: string;
      file_name: string;
    }) => {
      const response = await axios.post("/api/create-chat", {
        file_key,
        file_name,
      });
      return response.data;
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      console.log(acceptedFiles);
      const file = acceptedFiles[0];
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File should be lesser than 10Mb!");
        return;
      }
      try {
        const data = await uploadToS3(file);
        if (!data?.file_key || !data?.file_name) {
          toast.error("Something went wrong!");
          return;
        }
        mutate(data, {
          onSuccess: (data) => {
            console.log(data);
          },
          onError: (error) => {
            console.error(error);
          },
        });
        console.log("data", data);
      } catch (error) {
        toast.error("Error creating chat!");
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

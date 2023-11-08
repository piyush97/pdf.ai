import { Pinecone } from "@pinecone-database/pinecone";
import { downloadFromS3 } from "./s3-server";

export const pinecone = new Pinecone({
  environment: process.env.PINECONE_ENVIRONMENT!,
  apiKey: process.env.PINECONE_API_KEY!,
});

export const loadS3IntoPinecone = async (fileKey: string) => {
  console.log("downloading s3 into file system");
  const file_name = await downloadFromS3(fileKey);
};

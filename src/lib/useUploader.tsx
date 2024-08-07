import { ID } from "appwrite";
import { FileWithPath } from "react-dropzone";
import { storage, appWriteConfig } from "./appwriteConfig";
import { useState } from "react";

const useUploader = () => {
  const [loading, setLoading] = useState(false);
  const uploadFiles = async (files: FileWithPath[]) => {
    try {
      setLoading(true);
      const createdFilesPromises = files.map(async (file) => {
        const createdFile = await storage.createFile(
          appWriteConfig.storageId,
          ID.unique(),
          file
        );
        return createdFile;
      });
      const createdFiles = await Promise.all(createdFilesPromises);
      if (createdFiles) {
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return {
    loading,
    uploadFiles,
  };
};
export default useUploader;

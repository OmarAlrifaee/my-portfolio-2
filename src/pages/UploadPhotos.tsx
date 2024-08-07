import useUploader from "@/lib/useUploader";
import { useCallback, useEffect } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { useNavigate, useParams } from "react-router-dom";
const FileUploader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id != import.meta.env.VITE_ADMIN) {
      navigate("/", { replace: true });
    }
  }, [id, navigate]);
  const { loading, uploadFiles } = useUploader();
  const onDrop = useCallback(
    async (acceptedFiles: FileWithPath[]) => {
      await uploadFiles(acceptedFiles);
    },
    [uploadFiles]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".svg", ".webp"],
    },
  });
  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col
     bg-dark-3 rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} className="cursor-pointer" />
      {loading ? <p className="text-black font-bold">Loading....</p> : ""}
      <div className="file_uploader-box">
        <img
          src="/assets/icons/file-upload.svg"
          alt="file uploader"
          width={96}
          height={77}
        />
      </div>
    </div>
  );
};

export default FileUploader;

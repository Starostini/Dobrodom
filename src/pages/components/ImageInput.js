import React from "react";

const ImageInput = ({ id, name, onFilesChange }) => {
  return (
    <input
      name={name}
      id={id}
      type="file"
      accept="image/*"
      multiple
      onChange={(e) => {
        const fileList = e.target.files;
        if (fileList) {
          const files = [...fileList];
          onFilesChange(files);
        }
      }}
    />
  );
};

export default ImageInput;

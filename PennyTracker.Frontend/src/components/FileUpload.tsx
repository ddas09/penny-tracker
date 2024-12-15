import React from 'react';

interface FileUploadProps {
  onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h2>Upload Bank Statement</h2>
      </div>
      <div className="card-body">
        <input type="file" accept=".csv" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default FileUpload;

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
        <div className="mb-4">
            <h2>Upload Bank Statement</h2>
            <input type="file" accept=".csv" onChange={handleFileChange} />
        </div>
    );
};

export default FileUpload;

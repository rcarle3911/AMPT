import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Upload() {
    // State to manage uploaded files and their progress
    const [fileUploads, setFileUploads] = useState({
        ato: [],
        spins: [],
        tca: [],
        roe: []
    });

    // Handle file selection and simulate upload progress
    const handleFileChange = (event, type) => {
        const files = Array.from(event.target.files); // Convert file list to an array
        if (files.length > 0) {
            // Create file objects with initial state
            const newFiles = files.map(file => ({ file, uploading: true, progress: 0 }));
            setFileUploads(prevState => ({
                ...prevState,
                [type]: [...prevState[type], ...newFiles]
            }));

            // Simulate file upload progress for each file
            newFiles.forEach((newFile, index) => {
                let progress = 0;
                const interval = setInterval(() => {
                    if (progress >= 100) {
                        clearInterval(interval); // Stop the interval when progress reaches 100%
                        setFileUploads(prevState => {
                            const updatedFiles = [...prevState[type]];
                            updatedFiles[prevState[type].length + index - files.length] = { ...newFile, uploading: false, progress: 100 };
                            return {
                                ...prevState,
                                [type]: updatedFiles
                            };
                        });
                    } else {
                        progress += 10; // Increment progress
                        setFileUploads(prevState => {
                            const updatedFiles = [...prevState[type]];
                            updatedFiles[prevState[type].length + index - files.length] = { ...newFile, progress };
                            return {
                                ...prevState,
                                [type]: updatedFiles
                            };
                        });
                    }
                }, 200); // Update progress every 200ms
            });
        }
    };

    // Handle file deletion
    const handleDeleteFile = (type, index) => {
        setFileUploads(prevState => {
            const updatedFiles = [...prevState[type]];
            updatedFiles.splice(index, 1); // Remove file at the specified index
            return {
                ...prevState,
                [type]: updatedFiles
            };
        });
    };

    // Render the upload section with buttons and file list
    const renderUploadSection = (label, type) => (
        <div className="mb-3" style={{ width: '100%' }}>
            <input
                type="file"
                id={`${type}-file`}
                style={{ display: 'none' }}
                onChange={(e) => handleFileChange(e, type)}
                multiple // Allow multiple file selection
            />
            <label htmlFor={`${type}-file`} className="btn btn-primary d-block w-100 mb-2">
                {label}
            </label>
            <div>
                {fileUploads[type].map((fileObj, index) => (
                    <div key={index} className="d-flex align-items-center mb-2">
                        {fileObj.uploading ? (
                            <div className="progress w-75 mr-2">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${fileObj.progress}%` }}
                                    aria-valuenow={fileObj.progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    {fileObj.progress}%
                                </div>
                            </div>
                        ) : (
                            <div className="w-75 mr-2">{fileObj.file.name}</div>
                        )}
                        <button className="btn btn-danger btn-sm" onClick={() => handleDeleteFile(type, index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div>
            <h1>Upload your documents here.</h1>
            <div id="fileUploadContainer" className="d-flex flex-column align-items-center justify-content-center">
                {renderUploadSection('Upload ATO file', 'ato')}
                {renderUploadSection('Upload SPINS file', 'spins')}
                {renderUploadSection("Upload TCA's file", 'tca')}
                {renderUploadSection("Upload ROE for AOR's", 'roe')}
            </div>
        </div>
    );
}

export default Upload;

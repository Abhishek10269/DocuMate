"use client";

import { CircleArrowDown, RocketIcon } from 'lucide-react';
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function FileUploader() {
  const {progres,status,fileId,handleUpload} = useUpload();

  const onDrop = useCallback( async (acceptedFiles: File[]) => {
    // Do something with file

    const file = acceptedFiles[0];
if(file)
{
  await handleUpload(file);
}
else{
  //do nothing
  //toast....
}

  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isFocused } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "application/pdf":[".pdf"],
    },
  });

  return (
    <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>
      <div
        {...getRootProps({
          onDragOver: (e) => e.preventDefault()  // Prevent default drag behavior
        })}
        className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center ${
          isFocused || isDragAccept ? 'bg-indigo-300' : 'bg-indigo-100'
        }`}
      >
        <input {...getInputProps()} />
        <div className='flex flex-col items-center justify-center'>
          {isDragActive ? (
            <>
              <RocketIcon className='h-20 w-20 animate-ping'/>
              <p>Drop the files here ...</p>
            </>
          ) : (
            <>
              <CircleArrowDown className='h-20 w-20 animate-bounce'/>
              <p>Drag 'n' drop some files here, or click to select files</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;

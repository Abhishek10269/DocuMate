"use client";
import { CircleArrowDown, RocketIcon } from 'lucide-react';
import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import useUpload from '@/hooks/useUpload';
import { useRouter } from 'next/navigation';

function FileUploader() {
  const { progress, fileId, handleUpload } = useUpload();
  const router = useRouter();

  useEffect(() => {
    if (fileId) {
      router.push(`/dashboard/files/${fileId}`);
    }
  }, [fileId, router]);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        await handleUpload(file);
      }
    },
    [handleUpload]
  );

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isFocused } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  const uploadInProgress = progress != null && progress >= 0 && progress <= 100;

  return (
    <div className='flex flex-col gap-4 items-center max-w-7xl mx-auto'>
      <div
        {...getRootProps({
          onDragOver: (e) => e.preventDefault()
        })}
        className={`p-10 border-2 border-dashed mt-10 w-[90%] border-indigo-600 text-indigo-600 rounded-lg h-96 flex items-center justify-center ${
          isFocused || isDragAccept ? 'bg-indigo-300' : 'bg-indigo-100'
        } ${uploadInProgress ? 'opacity-50' : ''}`}
      >
        <input {...getInputProps()} />
        
        {uploadInProgress ? (
          <div className='flex flex-col items-center justify-center'>
            <div className='relative w-48 h-48'>
              {/* Background Circle */}
              <svg className='absolute top-0 left-0 w-full h-full' viewBox='0 0 100 100'>
                <circle 
                  cx='50' 
                  cy='50' 
                  r='45' 
                  fill='none' 
                  stroke='#E0E7FF' 
                  strokeWidth='10'
                />
              </svg>

              {/* Progress Circle */}
              <svg className='absolute top-0 left-0 w-full h-full rotate-[-90deg]' viewBox='0 0 100 100'>
                <circle 
                  cx='50' 
                  cy='50' 
                  r='45' 
                  fill='none' 
                  stroke='#6366F1' 
                  strokeWidth='10'
                  strokeDasharray='283'
                  strokeDashoffset={283 - (283 * progress) / 100}
                  className='transition-all duration-300 ease-out'
                />
              </svg>

              {/* Central Content */}
              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className='text-center'>
                  <RocketIcon className='mx-auto h-12 w-12 text-indigo-600 animate-pulse'/>
                  <span className='text-2xl font-bold text-indigo-800'>
                    {progress.toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
            <p className='mt-4 text-indigo-700 font-medium'>Uploading File...</p>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default FileUploader;
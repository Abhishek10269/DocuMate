"use client";

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { v4 as uuidv4} from "uuid";

export enum StatusText {
    UPLOADING = "Uploading file...",
    UPLOADED = "File Uploaded Succefully",
    SAVING = "Saving File to database",
    GENERATING = "Generating AI Embeddings, This will take a few seconds...",
}

export type Status = StatusText[keyof StatusText];

function useUpload() {

    const [status,setstatus]= useState<Status | null>(null);
    const [progress,setProgress]= useState<number | null>(null);
    const [fileId,setFiledId]= useState<string | null>(null);

    const {user} = useUser();
    const router = useRouter();

    const handleUpload = async (file: File) =>{
        if(!file || !user) return;
    
        // TODO : FREE/PRO limitation
    
        const fileIdToUploadTo = uuidv4();
    
        const storageRef = ref(
            storage,
            `users/${user.id}/files/${fileIdToUploadTo}`
        );
    }

}

export default useUpload
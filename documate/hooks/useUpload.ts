import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const handleUpload = async (file: File) =>{
    if(!file || !user) return;

    // TODO : FREE/PRO limitation

    const fileIdToUploadTo = uuidv4();

    const storageRef = ref(storage,
        `users/${user.id}/files/${fileIdToUploadTo}`
    );
}

function useUpload() {

    const [status,setstatus]= useState<Status | null>(null);
    const [progress,setProgress]= useState<number | null>(null);
    const [fileId,setFiledId]= useState<string | null>(null);

    const {user} = useUser();
    const router = useRouter();

}

export default useUpload
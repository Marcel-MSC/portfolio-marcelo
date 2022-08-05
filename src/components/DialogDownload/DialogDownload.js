import React from 'react';
import { Close32 } from '@carbon/icons-react'
import { DivDownloadLanguage, DownloadLanguage } from './styles';

const DialogDownload = ({ setShowDialog }) => {
    function closeDialog() {
        setShowDialog(false)
    }
    return (
        <DivDownloadLanguage>
            <Close32 onClick={closeDialog}></Close32>
            <DownloadLanguage target="_blank" href='https://drive.google.com/file/d/1g5CFs2rGxcaxHNI010APYBVBXnZlrCnJ/view?usp=sharing'>Portuguese</DownloadLanguage>
            <DownloadLanguage target="_blank" href='https://drive.google.com/file/d/1HHMSmQ7xkmYOm63b0t9OPqCT4CYdcZrC/view?usp=sharing'>English</DownloadLanguage>
        </DivDownloadLanguage>
    )
}

export default DialogDownload;
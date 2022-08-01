import React from 'react';
import { InlineNotification } from 'carbon-components-react';
import { DivDownloadLanguage, DownloadLanguage } from './styles';

const DialogDownload = ({ setShowDialog }) => {

    function downloadPortuguese () {

    }

    function DownloadEnglish () {
        
    }

    function closeDialog() {
        setShowDialog(false)
    }
    return (
        <DivDownloadLanguage>
            <InlineNotification
                title="Chose curriculum language: "
                subtitle="I currently have 2 languages available"
                lowContrast={true}
                statusIconDescription="notification"
                kind='info-square'
                onClose={closeDialog}
            />
            <DownloadLanguage onClick={downloadPortuguese}>Portuguese</DownloadLanguage>
            <DownloadLanguage onClick={DownloadEnglish}>English</DownloadLanguage>
        </DivDownloadLanguage>
    )
}

export default DialogDownload;
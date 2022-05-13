import * as React from 'react';
import DocumentTitle from 'react-document-title';
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useLocation } from 'react-router-dom';

interface TrackingDocumentTitleProps {
    title: string,
    track_as?: string
}

function TrackingDocumentTitle( {title, track_as} : TrackingDocumentTitleProps ) {
    let location = track_as || useLocation().pathname;
    const { trackPageView } = useMatomo();
    React.useEffect(() => trackPageView({}), [location]);
    return <DocumentTitle title={title} />
}

export default TrackingDocumentTitle;

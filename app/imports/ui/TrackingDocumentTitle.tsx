import * as React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useLocation } from 'react-router-dom';
import {useEffect} from "react";

interface TrackingDocumentTitleProps {
    title: string,
    track_as?: string
}

function TrackingDocumentTitle( {title, track_as} : TrackingDocumentTitleProps ) {
    let location = track_as || useLocation().pathname;
    const { trackPageView } = useMatomo();

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(() => trackPageView({}), [location]);
    return null;
}

export default TrackingDocumentTitle;

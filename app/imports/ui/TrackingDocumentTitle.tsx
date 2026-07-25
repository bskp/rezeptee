import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useLocation } from 'react-router-dom';
import {useEffect} from "react";

interface TrackingDocumentTitleProps {
    title: string,
    track_as?: string
}

function TrackingDocumentTitle( {title, track_as} : TrackingDocumentTitleProps ) {
    // useLocation() muss unbedingt vor der Auswertung von track_as laufen —
    // sonst hinge die Hook-Reihenfolge am Prop.
    const {pathname} = useLocation();
    const trackedPath = track_as || pathname;
    const { trackPageView } = useMatomo();

    useEffect(() => {
        document.title = title;
    }, [title]);

    // trackPageView ist bewusst keine Dependency: useMatomo() liefert bei jedem
    // Render eine neue Funktion, wir würden also jeden Render als View zählen.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { trackPageView({}); }, [trackedPath]);
    return null;
}

export default TrackingDocumentTitle;

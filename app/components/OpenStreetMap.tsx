import { useEffect, useRef } from 'react';

interface Coordinates {
    lat: number;
    lng: number;
}

const LOCATION: Coordinates = {
    lat: -7.316280921819541,
    lng: 112.72537815940875
};

export default function OpenStreetMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);
    const isInitializedRef = useRef(false);

    useEffect(() => {
        if (!mapRef.current || isInitializedRef.current) return;

        let map: any = null;
        let script: HTMLScriptElement | null = null;
        let link: HTMLLinkElement | null = null;

        const initializeMap = () => {
            if (!mapRef.current || isInitializedRef.current) return;

            // @ts-ignore - L comes from leaflet script
            map = L.map(mapRef.current, {
                center: [LOCATION.lat, LOCATION.lng],
                zoom: 17,
                scrollWheelZoom: true,
                dragging: true,
                zoomControl: false,
            });

            mapInstanceRef.current = map;
            isInitializedRef.current = true;

            // @ts-ignore
            L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.png', {
                attribution: '©OpenStreetMap, ©Stadia Maps',
                maxZoom: 19
            }).addTo(map);

            // @ts-ignore
            const customIcon = L.divIcon({
                className: 'custom-marker',
                html: `
                    <div class="marker-pin">
                        <div class="pin-content"></div>
                        <div class="pin-shadow"></div>
                    </div>
                `,
                iconSize: [30, 30],
                iconAnchor: [15, 15],
                popupAnchor: [0, -20],
            });

            // @ts-ignore
            const marker = L.marker([LOCATION.lat, LOCATION.lng], { icon: customIcon }).addTo(map);

            const popupContent = `
                <div class="custom-popup">
                    <h3>Software Engineering Lab</h3>
                    <p>A10 Building, 3rd Floor</p>
                    <p>Universitas Negeri Surabaya</p>
                </div>
            `;

            marker.bindPopup(popupContent, {
                closeButton: false,
                maxWidth: 300,
                className: 'custom-popup-wrapper'
            });

            marker.on('add', function () {
                marker.getElement().classList.add('marker-pulse');
            });

            const customControls = document.createElement('div');
            customControls.className = 'custom-map-controls';
            customControls.innerHTML = `
                <button class="control-button zoom-in" title="Zoom in">+</button>
                <button class="control-button zoom-out" title="Zoom out">−</button>
                <button class="control-button recenter" title="Recenter map">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="12" y1="8" x2="12" y2="16"/>
                        <line x1="8" y1="12" x2="16" y2="12"/>
                    </svg>
                </button>
            `;

            mapRef.current.appendChild(customControls);

            customControls.querySelector('.zoom-in')?.addEventListener('click', () => map.zoomIn());
            customControls.querySelector('.zoom-out')?.addEventListener('click', () => map.zoomOut());
            customControls.querySelector('.recenter')?.addEventListener('click', () => {
                map.setView([LOCATION.lat, LOCATION.lng], 17, {
                    animate: true,
                    duration: 1
                });
            });
        };

        // Create and load script
        script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';
        script.async = true;
        script.onload = initializeMap;

        // Create and load stylesheet
        link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';

        document.head.appendChild(link);
        document.head.appendChild(script);

        // Cleanup
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }

            if (script && document.head.contains(script)) {
                document.head.removeChild(script);
            }

            if (link && document.head.contains(link)) {
                document.head.removeChild(link);
            }

            isInitializedRef.current = false;
        };
    }, []);

    return (
        <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-gray-200/50 dark:border-gray-700/30">
            <div
                ref={mapRef}
                className="w-full h-full [&_.leaflet-tile-pane]:dark:brightness-[0.8] [&_.leaflet-tile-pane]:dark:contrast-[0.85] [&_.leaflet-tile-pane]:saturate-[0.2] [&_.leaflet-tile-pane]:dark:hue-rotate-[200deg] [&_.leaflet-tile-pane]:dark:sepia-[0.1] [&_.leaflet-tile]:!border-0 [&_.leaflet-tile-container]:!filter-none"
            />
            <div className="absolute inset-0 pointer-events-none dark:bg-gray-900/10" />
        </div>
    );
}
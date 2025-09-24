import { memo, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, DirectionsRenderer } from '@react-google-maps/api';
import styles from './Map.module.scss';

const containerStyle = {
    width: '100%',
    height: '100%'
};

const center = {
    lat: 40.4093,
    lng: 49.8671
};

const Map = ({ showMap, destination, data, selected, setSelected }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });

    const [directions, setDirections] = useState(null);

    useEffect(() => {
        if (destination) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const origin = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        const directionsService = new window.google.maps.DirectionsService();
                        directionsService.route(
                            {
                                origin,
                                destination,
                                travelMode: window.google.maps.TravelMode.DRIVING
                            },
                            (result, status) => {
                                if (status === window.google.maps.DirectionsStatus.OK) {
                                    setDirections(result);
                                } else {
                                    console.error('Directions request failed due to ' + status);
                                }
                            }
                        );
                    },
                    (error) => {
                        console.error("Geolocation error:", error);
                        alert("Lokasiyanı əldə etmək mümkün olmadı.");
                    }
                );
            } else {
                alert("Brauzer lokasiyanı dəstəkləmir.");
            }
        }
    }, [destination]);

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className={`${styles.map} ${showMap ? styles.show : ''}`}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={11}
            >
                {data?.map(location => (
                    <Marker
                        key={location.id}
                        position={{ lat: parseFloat(location.northern_latitude), lng: parseFloat(location.eastern_longitude) }}
                        onClick={() => setSelected(location)}
                        icon={{
                            url: '/icons/location-pin.svg',
                            scaledSize: new window.google.maps.Size(24, 30)
                        }}
                    />
                ))}
                {directions && (
                    <DirectionsRenderer directions={directions} />
                )}
            </GoogleMap>
        </div>
    );
};

export default memo(Map);